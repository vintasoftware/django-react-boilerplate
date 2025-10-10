#!/usr/bin/env bash
set -Eeuo pipefail

echo "-----> Build hook"

echo "-----> Build frontend"
corepack enable || true
corepack prepare pnpm@10 --activate || true
pnpm install
pnpm run build
echo "-----> Build frontend done"

echo "-----> Poetry install"
poetry install --without dev --no-root --no-interaction
echo "-----> Poetry done"

echo "-----> Running manage.py check --deploy --fail-level WARNING"
poetry run backend/manage.py check --deploy --fail-level WARNING

if [[ "${ENABLE_DJANGO_COLLECTSTATIC:-}" == "1" ]]; then
  echo "-----> Running collectstatic"
  poetry run backend/manage.py collectstatic --noinput 2>&1 | sed '/^Copying/d;/^$/d;/^ /d'
  echo
fi

if [[ "${AUTO_MIGRATE:-}" == "1" ]]; then
  echo "-----> Running manage.py migrate"
  poetry run backend/manage.py migrate --noinput
fi

echo "-----> Pushing source maps to Sentry"
if [[ -n "${SENTRY_API_KEY:-}" && -n "${SENTRY_ORG:-}" && -n "${SENTRY_PROJECT_NAME:-}" && -n "${RENDER_GIT_COMMIT:-}" ]]; then
  pnpm dlx @sentry/cli --auth-token="${SENTRY_API_KEY}" releases --org="${SENTRY_ORG}" --project="${SENTRY_PROJECT_NAME}" files "${RENDER_GIT_COMMIT}" upload-sourcemaps "./frontend/webpack_bundles/" --url-prefix "~/static/webpack_bundles/" --rewrite
  rm -f ./frontend/webpack_bundles/*.js.map
fi

echo "-----> Post-compile done"
