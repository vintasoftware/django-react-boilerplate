SHELL := /bin/bash # Use bash syntax
ARG := $(word 2, $(MAKECMDGOALS) )

clean:
	@find . -name "*.pyc" -exec rm -rf {} \;
	@find . -name "__pycache__" -delete

test:
	python backend/manage.py test backend/ $(ARG) --parallel --keepdb

test_reset:
	python backend/manage.py test backend/ $(ARG) --parallel

backend_format:
	black backend

upgrade: ## update the *requirements.txt files with the latest packages satisfying *requirements.in
	pip install -U -q pip-tools
	pip-compile --upgrade -o dev-requirements.txt dev-requirements.in
	pip-compile --upgrade -o requirements.txt requirements.in
	# Make everything =>, not ==
	sed 's/==/>=/g' requirements.txt > requirements.tmp
	mv requirements.tmp requirements.txt

clean_examples:
	# Remove the tables specific for the example app
	python backend/manage.py migrate exampleapp zero
	# Removing backend example app files
	rm -rf ./backend/exampleapp
	# Removing frontend example app files
	rm -rf ./frontend/js/app/example-app
	# Removing example templates files
	rm -rf ./backend/templates/exampleapp
	# Remove exampleapp from settings
	sed -i '/exampleapp/d' ./backend/{{project_name}}/settings/base.py
	# Remove exampleapp from urls
	sed -i '/exampleapp/d' ./backend/{{project_name}}/urls.py

compile_install_requirements:
	@echo 'Installing pip-tools...'
	export PIP_REQUIRE_VIRTUALENV=true; \
	pip install pip-tools
	@echo 'Compiling requirements...'
	pip-compile requirements.in > requirements.txt
	pip-compile dev-requirements.in > dev-requirements.txt
	@echo 'Installing requirements...'
	pip install -r requirements.txt && pip install -r dev-requirements.txt

# Commands for Docker version
docker_test:
	docker-compose run backend python manage.py test $(ARG) --parallel --keepdb

docker_test_reset:
	docker-compose run backend python manage.py test $(ARG) --parallel

docker_up:
	docker-compose up -d

docker_down:
	docker-compose down

docker_logs:
	docker-compose logs -f $(ARG)

docker_makemigrations:
	docker-compose run --rm backend python manage.py makemigrations

docker_migrate:
	docker-compose run --rm backend python manage.py migrate

docker_npm_install:
	@if [[ "$$(docker-compose ps | grep frontend | grep -v frontend_run | grep -cim1 Up)" -eq "0" ]]; then \
		docker-compose run --rm frontend npm install $(ARG) --save; \
	else \
		docker-compose exec frontend npm install $(ARG) --save; \
	fi;

docker_update_backend_deps:
	docker-compose build backend

docker_update_frontend_deps:
	@if [[ "$$(docker-compose ps | grep frontend | grep -v frontend_run | grep -cim1 Up)" -eq "0" ]]; then \
		docker-compose run --rm frontend npm install; \
	else \
		docker-compose exec frontend npm install; \
	fi;
