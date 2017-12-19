ARG := $(word 2, $(MAKECMDGOALS) )


clean:
	@find . -name "*.pyc" -exec rm -rf {} \;
	@find . -name "__pycache__" -delete

test:
	pipenv run py.test $(ARG) -n auto --reuse-db

testreset:
	pipenv run py.test $(ARG) -n auto
