FROM python:3.12-slim

ENV PYTHONFAULTHANDLER=1 \
  PYTHONUNBUFFERED=1 \
  PYTHONHASHSEED=random \
  PIP_NO_CACHE_DIR=off \
  PIP_DISABLE_PIP_VERSION_CHECK=on \
  PIP_DEFAULT_TIMEOUT=100 \
  UV_SYSTEM_PYTHON=1

RUN groupadd user && useradd --create-home --home-dir /home/user -g user user

# Install system dependencies
RUN apt-get update && apt-get install python3-dev gcc build-essential libpq-dev -y

# Install UV
RUN pip install uv

# Copy dependency files
COPY pyproject.toml /home/user/app/
COPY uv.lock /home/user/app/

WORKDIR /home/user/app/

# Install dependencies
RUN uv pip install -r pyproject.toml --extra dev

WORKDIR /home/user/app/backend
COPY backend/ /home/user/app/backend

USER user
CMD gunicorn {{project_name}}.wsgi --log-file - -b 0.0.0.0:8000 --reload
