[![License: MIT](https://img.shields.io/github/license/vintasoftware/django-react-boilerplate.svg)](LICENSE.txt)

# Django React Boilerplate

## About

A [Django 1.11](https://www.djangoproject.com/) project boilerplate/template with lots of state of the art libraries and tools like:
- [React](https://facebook.github.io/react/), for interactive UI development
- [django-js-reverse](https://github.com/ierror/django-js-reverse), for generating URLs on JS
- [Bootstrap 4](https://v4-alpha.getbootstrap.com/), for responsive styling
- [Webpack](https://webpack.js.org/), for bundling static assets
- [Celery](http://www.celeryproject.org/), for background worker tasks
- [WhiteNoise](http://whitenoise.evans.io/en/stable/) with [brotlipy](https://github.com/python-hyper/brotlipy), for efficient static files serving
- [prospector](http://whitenoise.evans.io/en/stable/) and [ESLint](https://eslint.org/) with [pre-commit](http://pre-commit.com/) for automated quality assurance (does not replace proper testing!)

For continuous integration, a [CircleCI](https://circleci.com/) configuration `circle.yml` is included.

Also, includes a Heroku `app.json` and a working Django `production.py` settings, enabling easy deployments with ['Deploy to Heroku' button](https://devcenter.heroku.com/articles/heroku-button). Those Heroku plugins are included in `app.json`:
- PostgreSQL, for DB
- Redis, for Celery
- Sendgrid, for e-mail sending
- Papertrail, for logs and platform errors alerts (must set them manually)
- Opbeat, for performance monitoring

This should be enough as a starting point for any modern web project.

## Project bootstrap [![CircleCI](https://circleci.com/gh/vintasoftware/django-react-boilerplate.svg?style=svg)](https://circleci.com/gh/vintasoftware/django-react-boilerplate)
- [ ] Start your project using:
```
django-admin startproject theprojectname --extension py,yml,json --name Procfile,README.md,.env.example --template=https://github.com/vintasoftware/django-react-boilerplate/archive/boilerplate-release.zip
```
- [ ] Above: don't forget the `--extension` and `--name` params!
- [ ] `pip install -r requirements-to-freeze.txt`
- [ ] `pip freeze > requirements.txt`
- [ ] `npm update --save`
- [ ] `npm update --save-dev`
- [ ] Remove the `^` from `"bootstrap-loader": "^2.1.0"` in the package.json file. bootstrap-loader 2.2 breaks semver by breaking support for 4.0.0-alpha.6. This step will be removed when we update to bootstrap beta version.
- [ ] Check for outdated npm dependencies with `npm outdated` and update them
- [ ] Change the first line of README to the name of the project
- [ ] Add an email address to the `ADMINS` settings variable
- [ ] Change the `SERVER_EMAIL` to the email address used to send e-mails.

After completing ALL of the above, remove this `Project bootstrap` section from the project README. Then follow `Quickstart` below.

## Running

### Setup

- On project root, do the following:
- Create a copy of ``{{project_name}}/settings/local.py.example``:
  `cp {{project_name}}/settings/local.py.example {{project_name}}/settings/local.py`
- Create a copy ``.env.example``:
  `cp .env.example .env`
- Create the migrations for `users` app: `python manage.py makemigrations`
- Run the migrations: `python manage.py migrate`

### Tools

- Setup [editorconfig](http://editorconfig.org/), [prospector](https://prospector.landscape.io/en/master/) and [ESLint](http://eslint.org/) in the text editor you will use to develop.

### Running the project

- `pip install -r requirements.txt`
- `npm install`
- `npm run start`
- `python manage.py runserver`

### Testing

`make test`

Will run django tests using `--keepdb` and `--parallel`. You may pass a path to the desired test module in the make command. E.g.:

`make test someapp.tests.test_views`

### Adding new pypi libs

Add high level dependecies to `requirements-to-freeze.txt` and `pip freeze > requirements.txt`. This is [A Better Pip Workflow](http://www.kennethreitz.org/essays/a-better-pip-workflow).

## Checking lint

- Manually with `prospector` and `npm run lint` on project root.
- During development with an editor compatible with prospector and ESLint.

## Pre-commit hooks

- Run `pre-commit install` to enable the hook into your git repo. The hook will run automatically for each commit.
- Run `git commit -m "Your message" -n` to skip the hook if you need.

## Contributing

### How to test `django-admin startproject`

If you made changes to this boilerplate and want to test them, commit your changes and use `git archive -o boilerplate.zip HEAD` to create the template zip. Then, do a `cd ..` and a `django-admin startproject theprojectname --extension py,yml,json --name Procfile,README.md,.env.example --template=django-react-boilerplate/boilerplate.zip` to test the project bootstrap.

### How to test Heroku deployment

Push your changes to a branch and visit `https://dashboard.heroku.com/new?template=https://github.com/fill-org-or-user/fill-project-repo-name/tree/fill-branch` (replace all `fill-*`).

### How to add a 'Deploy to Heroku' button

Read [this](https://devcenter.heroku.com/articles/heroku-button#adding-the-heroku-button).

P.S. if you want to deploy in a different way please check the `app.json` file for what needs to be configured.

## Commercial Support
This project, as other Vinta open-source projects, is used in products of Vinta clients. We are always looking for exciting work, so if you need any commercial support, feel free to get in touch: contact@vinta.com.br

Copyright (c) 2017 Vinta Serviços e Soluções Tecnológicas Ltda.
[MIT License](LICENSE.txt)
