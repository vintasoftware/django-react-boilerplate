ARG := $(word 2, $(MAKECMDGOALS) )
FRONTEND_PAGES_PATH := "./frontend/js/pages"

clean:
	@find . -name "*.pyc" -exec rm -rf {} \;
	@find . -name "__pycache__" -delete

test:
	python backend/manage.py test $(ARG) --parallel --keepdb

dockertest:
	docker-compose run backend python backend/manage.py test $(ARG) --parallel --keepdb

testreset:
	python backend/manage.py test $(ARG) --parallel

dockertestreset:
	docker-compose run backend python backend/manage.py test $(ARG) --parallel

upgrade: ## update the *requirements.txt files with the latest packages satisfying *requirements.in
	pip install -U -q pip-tools
	pip-compile --upgrade -o dev-requirements.txt dev-requirements.in
	pip-compile --upgrade -o requirements.txt requirements.in
	# Make everything =>, not ==
	sed 's/==/>=/g' requirements.txt > requirements.tmp
	mv requirements.tmp requirements.txt

clean_examples:
	# Removing backend example app fles
	rm -rf ./backend/exampleapp
	# Removing frontend example app files
	rm -rf ./frontend/js/app/example-app
	# Removing frontend example app components usage
	grep -vwE "ColorChanger" $(FRONTEND_PAGES_PATH)/Home.js > Home_Clean.js; mv Home_Clean.js $(FRONTEND_PAGES_PATH)/Home.js
