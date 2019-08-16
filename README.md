[![License: MIT](https://img.shields.io/github/license/vintasoftware/django-react-boilerplate.svg)](LICENSE.txt)

# Django React Boilerplate

## About
A [Django](https://www.djangoproject.com/) project boilerplate/template with lots of state of the art libraries and tools like:
- [React](https://facebook.github.io/react/), for building interactive UIs
- [django-js-reverse](https://github.com/ierror/django-js-reverse), for generating URLs on JS
- [Bootstrap 4](https://v4-alpha.getbootstrap.com/), for responsive styling
- [Webpack](https://webpack.js.org/), for bundling static assets
- [Celery](http://www.celeryproject.org/), for background worker tasks
- [WhiteNoise](http://whitenoise.evans.io/en/stable/) with [brotlipy](https://github.com/python-hyper/brotlipy), for efficient static files serving
- [prospector](https://prospector.landscape.io/en/master/) and [ESLint](https://eslint.org/) with [pre-commit](http://pre-commit.com/) for automated quality assurance (does not replace proper testing!)

For continuous integration, a [CircleCI](https://circleci.com/) configuration `.circleci/config.yml` is included.

Also, includes a Heroku `app.json` and a working Django `production.py` settings, enabling easy deployments with ['Deploy to Heroku' button](https://devcenter.heroku.com/articles/heroku-button). Those Heroku plugins are included in `app.json`:
- PostgreSQL, for DB
- Redis, for Celery
- Sendgrid, for e-mail sending
- Papertrail, for logs and platform errors alerts (must set them manually)

This is a good starting point for modern Python/JavaScript web projects.

## Project bootstrap [![CircleCI](https://circleci.com/gh/vintasoftware/django-react-boilerplate.svg?style=svg)](https://circleci.com/gh/vintasoftware/django-react-boilerplate) [![Greenkeeper badge](https://badges.greenkeeper.io/vintasoftware/django-react-boilerplate.svg)](https://greenkeeper.io/)
- [ ] Install Django with `pip install django`, to have the `django-admin` command available.
- [ ] Open the command line and go to the directory you want to start your project in.
- [ ] Start your project using:
```
django-admin startproject theprojectname --extension py,yml,json --name Procfile,README.md,.env.example --template=https://github.com/vintasoftware/django-react-boilerplate/archive/boilerplate-release.zip
```
- [ ] Above: don't forget the `--extension` and `--name` params! (also don't forget to change `theprojectname` to your project's name).
- [ ] Navigate to the project's directory through your command line.
- [ ] Install pipenv if not installed yet: `pip install pipenv` (maybe you'll have to run this command as an OS superuser).
- [ ] Make sure you have Python 3.6 installed.
- [ ] `pipenv install --dev`
- [ ] Activate the newly created virtualenv with `pipenv shell`
- [ ] Change the first line of README to the name of the project.
- [ ] Add an email address to the `ADMINS` settings variable in `{{project_name}}/{{project_name}}/settings/base.py`
- [ ] Change the `SERVER_EMAIL` to the email address used to send e-mails in `{{project_name}}/{{project_name}}/settings/production.py`
- [ ] Rename the folder `circleci` to `.circleci` with the command `mv circleci .circleci`

After completing ALL of the above, remove this `Project bootstrap` section from the project README. Then follow `Running` below.

## Running
### Setup
- Inside the `backend` folder, do the following:
- Create a copy of ``{{project_name}}/settings/local.py.example``:  
  `cp {{project_name}}/settings/local.py.example {{project_name}}/settings/local.py` (remembering you should replace `{{project_name}}` with your project's name!).
- Create a copy of ``.env.example``:  
  `cp .env.example .env`
- Create the migrations for `users` app (do this, then remove this line from the README):  
  `python manage.py makemigrations`
- Run the migrations:  
  `python manage.py migrate`

### Tools
- Setup [editorconfig](http://editorconfig.org/), [prospector](https://prospector.landscape.io/en/master/) and [ESLint](http://eslint.org/) in the text editor you will use to develop.

### Running the project
- Open a command line window and go to the project's directory.
- `pipenv install --dev`
- `npm install`
- `npm run start`
- Open another command line window and go to the `backend` directory.
- `pipenv shell`
- `python manage.py runserver`

#### Celery
- Open a command line window and go to the project's directory
- `pipenv shell`
- `python manage.py celery`

### Testing
`make test`

Will run django tests using `--keepdb` and `--parallel`. You may pass a path to the desired test module in the make command. E.g.:

`make test someapp.tests.test_views`

### Adding new pypi libs
Just run `pipenv install LIB_NAME_ON_PYPI` and then `pipenv lock` to lock the version in Pipfile.lock file

## Linting
- Manually with `prospector` and `npm run lint` on project root.
- During development with an editor compatible with prospector and ESLint.

## Pre-commit hooks
- Run `pre-commit install` to enable the hook into your git repo. The hook will run automatically for each commit.
- Run `git commit -m "Your message" -n` to skip the hook if you need.

## Commercial Support
This project, as other Vinta open-source projects, is used in products of Vinta clients. We are always looking for exciting work, so if you need any commercial support, feel free to get in touch: contact@vinta.com.br

Copyright (c) 2018 Vinta Serviços e Soluções Tecnológicas Ltda.
[MIT License](LICENSE.txt)
