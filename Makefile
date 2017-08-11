ARG := $(word 2, $(MAKECMDGOALS) )


clean:
	@find . -name "*.pyc" -exec rm -rf {} \;
	@find . -name "__pycache__" -delete

test:
	python manage.py test $(ARG) --parallel --keepdb

testreset:
	python manage.py test $(ARG) --parallel
