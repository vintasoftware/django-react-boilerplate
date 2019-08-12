ARG := $(word 2, $(MAKECMDGOALS) )


clean:
	@find . -name "*.pyc" -exec rm -rf {} \;
	@find . -name "__pycache__" -delete

test:
	pipenv run python backend/manage.py test $(ARG) --parallel --keepdb

testreset:
	pipenv run python backend/manage.py test $(ARG) --parallel
