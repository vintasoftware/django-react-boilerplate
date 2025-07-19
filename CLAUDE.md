# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Repository Guidelines

**This is a fork of the django-react-boilerplate project. DO NOT create pull requests against the upstream repository (https://github.com/vintasoftware/django-react-boilerplate). All changes should remain in this fork only.**

## Project Overview

Django-React boilerplate - A full-stack application template using Django backend with Django REST Framework and React TypeScript frontend. The project uses Docker for development and includes Celery for background tasks.

## Completed Migrations

This project has successfully completed all 4 technology migrations:
1. **Webpack → Vite** ✅ - Now using Vite 6+ for faster builds and HMR
2. **Poetry → UV** ✅ - Using UV for faster Python dependency management  
3. **ESLint → Biome** ✅ - Using Biome for faster linting and formatting
4. **npm → pnpm** ✅ - Using pnpm for efficient package management

## Essential Commands

### Initial Setup

**Docker Setup (Recommended):**
```bash
make docker_setup
```

**Non-Docker Setup:**
```bash
# Backend
uv sync
uv run python backend/manage.py migrate
uv run python backend/manage.py createsuperuser

# Frontend
pnpm install
ppnpm run dev
```

### Development Commands

**Docker Commands:**
```bash
make docker_up              # Start all services
make docker_down            # Stop all services
make docker_test            # Run all tests
make docker_logs            # View logs
make docker_makemigrations  # Create migrations
make docker_migrate         # Apply migrations
make docker_fresh_db        # Reset database
```

**Backend Commands:**
```bash
cd backend
uv run python manage.py runserver           # Run Django server
uv run python manage.py test                # Run tests
uv run python manage.py makemigrations      # Create migrations
uv run python manage.py migrate             # Apply migrations
uv run python manage.py generate_swagger    # Generate API schema
```

**Frontend Commands:**
```bash
pnpm run dev          # Start webpack dev server
pnpm run build        # Production build
pnpm test             # Run Jest tests
pnpm run lint         # Run Biome
pnpm run schema       # Generate TypeScript client from OpenAPI
```

### Testing

**Run all tests:**
```bash
make test           # Non-Docker
make docker_test    # Docker
```

**Run specific tests:**
```bash
# Backend
uv run python backend/manage.py test users.tests.test_views.UserViewSetTest

# Frontend
pnpm test -- --testNamePattern="should render"
```

### Linting

**Python (Ruff):**
```bash
uv run ruff check backend/
uv run ruff format backend/
```

**JavaScript/TypeScript (Biome):**
```bash
pnpm run lint
```

## Architecture

### Backend Structure
- `backend/project_name/` - Main Django project settings
- `backend/common/` - Shared utilities, permissions, serializers
- `backend/users/` - User authentication and management
- `backend/templates/` - Django templates (base.html for React mount)

### Frontend Structure
- `frontend/js/` - React components and TypeScript code
- `frontend/js/api/` - Generated API client from OpenAPI schema
- `frontend/sass/` - SCSS stylesheets
- `frontend/assets/` - Static images and files

### Key Configurations
- **Database**: PostgreSQL (default) or SQLite for development
- **Background Tasks**: Celery with Redis/RabbitMQ broker
- **API Documentation**: Automatically generated at `/api/docs/swagger/`
- **Static Files**: Served by WhiteNoise with Brotli compression
- **Development Proxy**: Webpack dev server proxies `/api/*` to Django

## Common Development Workflows

### Adding a New Django App
```bash
cd backend
uv run python manage.py startapp app_name
# Add 'app_name' to INSTALLED_APPS in settings/base.py
```

### Creating a Superuser
```bash
make docker_createsuperuser  # Docker
# OR
cd backend && uv run python manage.py createsuperuser  # Non-Docker
```

### Updating Dependencies
```bash
# Backend
uv add package_name

# Frontend  
pnpm add package_name
```

### Regenerating TypeScript API Client
```bash
make docker_generate_client  # Docker
# OR
make generate_client  # Non-Docker
```

## Environment Variables

Key environment variables (see `.env.example`):
- `DATABASE_URL` - PostgreSQL connection string
- `SECRET_KEY` - Django secret key (auto-generated if not set)
- `DEBUG` - Debug mode (default: True in development)
- `BROKER_URL` - Celery broker URL
- `SENTRY_DSN` - Sentry error tracking (optional)

## Service Ports

- Django: http://localhost:8000
- React Dev Server: http://localhost:3000  
- PostgreSQL: localhost:5432
- Redis: localhost:6379
- RabbitMQ: localhost:5672
- Mailhog: http://localhost:8025

## Notes for Future Migrations

### Migration Details

All migrations have been completed:

**Webpack → Vite** ✅
- Replaced webpack.config.js with vite.config.ts
- Added proxy configuration for `/api/*` routes
- Django integration via custom manifest plugin

**Poetry → UV** ✅
- Dependencies now in pyproject.toml with UV format
- All Docker and CI/CD scripts updated
- Lock file: uv.lock

**ESLint → Biome** ✅
- Configuration in biome.json
- Supports TypeScript, React, and JSX
- Pre-commit hooks updated

**npm → pnpm** ✅
- All scripts and Dockerfiles updated
- Lock file: pnpm-lock.yaml
- Uses pnpm workspaces for efficiency