ARG := $(word 2, $(MAKECMDGOALS) )
FRONTEND_EXAMPLE_APP_PATH:="./frontend/js/app/exampleapp"

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

cleanexamples:
	# remove backend example app
	@rm -rf ./backend/exampleapp
	# remove frontend example app and its usage
	@rm -rf FRONTEND_EXAMPLE_APP_PATH
	# Remove example app components usage
	@grep -vwE "ColorChanger" $(FRONTEND_EXAMPLE_APP_PATH)/Home.js > Home_Clean.js; mv Home_Clean.js ./frontend/js/pages/Home.js
