FROM python:3.12-slim

ENV PYTHONFAULTHANDLER=1 \
  PYTHONUNBUFFERED=1 \
  PYTHONHASHSEED=random \
  PIP_NO_CACHE_DIR=off \
  PIP_DISABLE_PIP_VERSION_CHECK=on \
  PIP_DEFAULT_TIMEOUT=100 \
  POETRY_VERSION=2.0.1

# Install system dependencies
RUN apt-get update && apt-get install python3-dev gcc build-essential libpq-dev -y

# install python dependencies
RUN pip install "poetry==$POETRY_VERSION"
COPY pyproject.toml /home/user/app/
COPY *poetry.lock /home/user/app/

WORKDIR /home/user/app/

RUN poetry config virtualenvs.create false
RUN poetry install --with dev --no-root --no-interaction --no-ansi

WORKDIR /home/user/app/backend
COPY backend/ /home/user/app/backend

ARG USER_UID=1000
ARG USER_GID=1000

# Match the checkout owner when using bind mounts during development.
RUN groupadd --non-unique --gid "$USER_GID" user \
    && useradd --non-unique --uid "$USER_UID" --create-home --home-dir /home/user -g user user \
    && chown user:user /home/user

USER user
CMD gunicorn {{project_name}}.wsgi --log-file - -b 0.0.0.0:8000 --reload
