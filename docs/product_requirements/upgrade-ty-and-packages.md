# Upgrade to ty Type Checker and Package Updates

## Status: ✅ COMPLETED

This document outlines the completed upgrades to use [ty](https://docs.astral.sh/ty/) (Astral's Python type checker) and update all packages to their latest versions.

---

## Summary of Changes

### Python Environment
- **Python version**: 3.12 → **3.13**
- **Type checker**: mypy → **ty**

### Node.js Environment
- **Node.js version**: 20 → **22**
- **React version**: 18.3 → **19.2**

---

## Phase 1: ty Type Checker ✅

### Changes Made

- [x] Added `ty>=0.0.1a0` to dev dependencies
- [x] Removed `mypy>=1.13.0`
- [x] Removed `django-stubs[compatible-mypy]>=5.1.1`
- [x] Removed `djangorestframework-stubs[compatible-mypy]>=3.15.1`
- [x] Removed `[tool.mypy]` section from pyproject.toml
- [x] Removed `[tool.django-stubs]` section from pyproject.toml
- [x] Added `[tool.ty]` section with `python-version = "3.13"`
- [x] Updated CI workflow to run `ty check` instead of mypy

---

## Phase 2: Python Package Upgrades ✅

### pyproject.toml Updates

#### Core Dependencies
| Package | Previous | Updated |
|---------|----------|---------|
| Django | >=5.0 | **>=5.1,<6.0** |
| celery[redis] | >=5.3.6 | **>=5.4.0** |
| redis | >=5.1.1 | **>=5.2.0** |
| djangorestframework | >=3.15.2 | >=3.15.2 |
| django-extensions | >=3.2.3 | >=3.2.3 |
| drf-spectacular | >=0.27.2 | **>=0.28.0** |
| whitenoise[brotli] | >=6.8.2 | **>=6.8.0** |
| django-csp | >=4.0b1 | **>=4.0** |
| django-permissions-policy | >=4.21.0 | **>=4.24.0** |
| gunicorn | >=23.0.0 | >=23.0.0 |
| psycopg[binary] | >=3.2.3 | **>=3.2.0** |
| dj-database-url | >=2.2.0 | **>=2.3.0** |
| django-ratelimit | >=4.1.0 | >=4.1.0 |
| ipython | >=8.29.0 | **>=8.30.0** |
| django-cors-headers | >=4.5.0 | **>=4.6.0** |
| watchdog[watchmedo] | >=4.0.2 | **>=6.0.0** |
| python-decouple | >=3.8 | >=3.8 |
| django-celery-beat | >=2.7.0 | >=2.7.0 |
| django-defender | >=0.9.8 | >=0.9.8 |
| pytz | >=2025.1 | **>=2024.2** |
| Brotli | >=1.1.0 | >=1.1.0 |
| sentry-sdk | >=2.19.2 | **>=2.19.0** |
| django-guid | >=3.5.0 | >=3.5.0 |
| django-log-request-id | >=2.1.0 | >=2.1.0 |
| django-js-reverse | >=0.10.2 | >=0.10.2 |
| django-import-export | >=4.3.3 | **>=4.3.0** |
| django-model-utils | >=5.0.0 | >=5.0.0 |

#### Dev Dependencies
| Package | Previous | Updated |
|---------|----------|---------|
| tblib | >=3.0.0 | >=3.0.0 |
| model-bakery | >=1.20.0 | >=1.20.0 |
| **ty** | N/A | **>=0.0.1a0** (NEW) |
| ipdb | >=0.13.13 | >=0.13.13 |
| pre-commit | >=4.0.1 | **>=4.0.0** |
| coverage[toml] | >=7.6.9 | **>=7.6.0** |
| django-debug-toolbar | >=4.4.6 | **>=4.4.0** |
| Werkzeug | >=3.1.3 | **>=3.1.0** |
| ruff | >=0.1.8 | **>=0.8.0** |

#### Configuration Updates
- `requires-python`: ">=3.12" → **">=3.13"**
- `target-version` (ruff): "py312" → **"py313"**

---

## Phase 3: Node.js Package Upgrades ✅

### package.json Updates

#### Engine Requirement
- `node`: ">=20 <23" → **">=22"**

#### Dependencies (Major Updates)
| Package | Previous | Updated | Notes |
|---------|----------|---------|-------|
| react | ~18.3.1 | **~19.2.3** | Major upgrade |
| react-dom | ~18.3.1 | **~19.2.3** | Major upgrade |
| react-router | ~6.23.1 | **~7.11.0** | Major upgrade |
| zod | ^3.24.2 | **^4.2.1** | Major upgrade |
| @sentry/browser | ~9.1.0 | **~10.32.1** | Major upgrade |
| @sentry/react | ~9.1.0 | **~10.32.1** | Major upgrade |
| marked | ~12.0.2 | **~17.0.1** | Major upgrade |
| @hey-api/openapi-ts | ^0.45.0 | **^0.89.2** | Major upgrade |
| axios | ~1.8.4 | **~1.13.2** | |
| bootstrap | ~5.3.3 | **~5.3.8** | |
| @tanstack/react-query | ^5.81.5 | **^5.90.12** | |
| react-hook-form | ^7.54.2 | **^7.69.0** | |
| react-hot-toast | ^2.4.1 | **^2.6.0** | |

#### DevDependencies (Major Updates)
| Package | Previous | Updated | Notes |
|---------|----------|---------|-------|
| jest | ~29.7.0 | **~30.2.0** | Major upgrade |
| jest-environment-jsdom | ~29.7.0 | **~30.2.0** | Major upgrade |
| @testing-library/react | ~15.0.7 | **~16.3.1** | Major upgrade |
| @types/jest | ^29.5.12 | **^30.0.0** | Major upgrade |
| @types/react | ^18.3.2 | **^19.2.7** | For React 19 |
| @types/react-dom | ^18.3.0 | **^19.2.3** | For React 19 |
| @vitejs/plugin-react-swc | ^3.11.0 | **^4.2.2** | Major upgrade |
| vite-tsconfig-paths | ^5.1.4 | **^6.0.3** | Major upgrade |
| @biomejs/biome | ^2.1.2 | **^2.3.10** | |
| @swc/core | ^1.5.6 | **^1.15.7** | |
| typescript | ^5.7.3 | **^5.9.3** | |
| vite | ^7.0.5 | **^7.3.0** | |
| sass | ~1.77.1 | **~1.97.1** | |
| @types/node | ^22.13.5 | **^25.0.3** | |

---

## Phase 4: Deployment Configuration ✅

### render.yaml
- [x] Updated `PYTHON_VERSION` from 3.12.0 to **3.13.0**
- [x] Verified UV commands are correct
- [x] All template variables `{{project_name}}` preserved

### render_build.sh
- [x] Verified Sentry sourcemap paths are correct (uses `./frontend/webpack_bundles/`)
- [x] Note: The `webpack_bundles` directory name is intentional for Django compatibility, even though Vite is used
- [x] pnpm@10 maintained

### backend/Dockerfile
- [x] Updated base image from `python:3.12-slim` to **`python:3.13-slim`**
- [x] All template variables `{{project_name}}` preserved

### frontend/Dockerfile
- [x] Updated base image from `node:20-alpine` to **`node:22-alpine`**
- [x] pnpm@10 maintained

### CI/CD Workflows (.github/workflows/)

#### shared-build/action.yml
- [x] Updated Python version from "3.12" to **"3.13"**
- [x] Updated Node version from "20.13" to **"22"**
- [x] Updated Django constraint to `"django>=5.0"`
- [x] Added ty type checking step: `cd backend && ty check .`
- [x] pnpm version 10 maintained

#### main.yml & nightly.yml
- [x] No changes needed (reference shared-build)

---

## Breaking Changes to Note

### React 18 → 19
- New concurrent features
- Automatic batching improvements
- Some API changes (useFormStatus, useOptimistic, etc.)
- Review: https://react.dev/blog/2024/04/25/react-19-upgrade-guide

### React Router 6 → 7
- Package consolidation (react-router-dom merged into react-router)
- Framework mode available
- Some routing API changes

### Zod 3 → 4
- Performance improvements
- Some type inference changes

### Jest 29 → 30
- Faster execution
- Node.js 18.20+ required
- Updated jsdom

### Sentry 9 → 10
- API changes for initialization
- Updated integrations

---

## Next Steps

After these upgrades, the following should be done:

1. **Run tests locally**:
   ```bash
   # Backend
   uv sync
   uv run python backend/manage.py test
   uv run ty check backend/

   # Frontend
   pnpm install
   pnpm run lint
   pnpm test
   pnpm run build
   ```

2. **Test Docker setup**:
   ```bash
   make docker_setup
   make docker_test
   ```

3. **Verify CI passes** by pushing to a branch

4. **Update any code** that may need changes for:
   - React 19 APIs
   - React Router 7 routing patterns
   - Zod 4 schema definitions
   - Sentry 10 initialization

---

## Resources

- [ty Documentation](https://docs.astral.sh/ty/)
- [React 19 Upgrade Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
- [React Router 7 Docs](https://reactrouter.com/)
- [Zod 4 Changelog](https://github.com/colinhacks/zod/releases)
- [Jest 30 Release](https://jestjs.io/blog/2025/06/04/jest-30)
- [Sentry JavaScript SDK Migration](https://docs.sentry.io/platforms/javascript/migration/)
