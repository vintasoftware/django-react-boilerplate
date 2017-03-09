# Vinta Boilerplate

## About this boilerplate

A Django 1.10 project boilerplate/template with lots of state of the art libraries and tools like:
- React, for interactive UI development
- django.js, for generating URLs on JS
- Bootstrap 4, for responsive styling
- Webpack, for bundling static assets
- Celery, for background worker tasks
- WhiteNoise with brotlipy, for efficient static files serving

For continuous integration, a [CircleCI](https://circleci.com/) configuration `circle.yml` is included.

Also, includes a Heroku `app.json` and a working Django `production.py` settings, enabling easy deployments with ['Deploy to Heroku' button](https://devcenter.heroku.com/articles/heroku-button). Those Heroku plugins are included in `app.json`:
- PostgreSQL, for DB
- Redis, for Celery
- Sendgrid, for e-mail sending
- Papertrail, for logs
- Opbeat, for performance monitoring

This should be enough as a starting point for any modern web project.

## Project bootstrap

- [ ] Start your project using: 
```
django-admin startproject theprojectname --extension py,yml,json --name Procfile --template=https://github.com/vintasoftware/boilerplate/archive/master.zip
```
- [ ] Above: don't forget the `--extension` and `--name` params!
- [ ] `pip install -r requirements-to-freeze.txt`
- [ ] `pip freeze > requirements.txt`
- [ ] `npm update --save`
- [ ] Remove the `^` from `"bootstrap": "^4.0.0-alpha.4"` in the package.json file. While bootstrap is in alpha we have decided to lock the version to alpha4 to avoid breakage
- [ ] Check for outdated npm dependencies with `npm outdated` and update them
- [ ] Change the first line of README to the name of the project
- [ ] Create a Google Group to receive 500 errors and forward to your email. It should be a private group, but remember to change settings to allow posting from any email
- [ ] Add the Google Group email address to the `ADMINS` settings variable

After completing ALL of the above, remove this `Project bootstrap` section from the project README.

### How to test `django-admin startproject`

If you made changes to this boilerplate and want to test them, commit your changes and use `git archive -o boilerplate.zip HEAD` to create the template zip.

### How to test Heroku deployment

Push your changes to a branch and visit `https://dashboard.heroku.com/new?template=https://github.com/fill-org-or-user/fill-project-repo-name/tree/fill-branch` (replace all `fill`).

### How to add a 'Deploy to Heroku' button

Read [this](https://devcenter.heroku.com/articles/heroku-button#adding-the-heroku-button).

## Developing

### Quickstart

- Create a copy of ``{{project_name}}/settings/local.py.example`` in ``{{project_name}}/settings/local.py``
- Create a ``.env`` file in the root of the project and add ``DJANGO_SETTINGS_MODULE="{{project_name}}.settings.local"`` to it
- Create the migrations for `users` app: `python manage.py makemigrations`
- Run the migrations: `python manage.py migrate`

### Tools

- Setup [editorconfig](http://editorconfig.org/), [flake8](http://flake8.pycqa.org/en/latest/) and [ESLint](http://eslint.org/) in the text editor you will use to develop.

### Running the project

- `pip install -r requirements.txt`
- `npm install`
- `make bundle`
- `python manage.py runserver`

### Testing

`make test`

Will run django tests using `--keepdb` and `--parallel`. You may pass a path to the desired test module in the make command. E.g.:

`make test someapp.tests.test_views`

### Adding new pypi libs

Add high level dependecies to `requirements-to-freeze.txt` and `pip freeze > requirements.txt`. This is [A Better Pip Workflow](http://www.kennethreitz.org/essays/a-better-pip-workflow).

## Checking lint

- Manually with `flake8` and `npm run lint` on project root.
- During development with an editor compatible with flake8 and ESLint.

## Pre-commit hooks

- Run `pre-commit install` to enable the hook into your git repo. The hook will run automatically for each commit.
- Run `git commit -m "Your message" -n` to skip the hook if you need.

## Commercial Support
This project, as other Vinta open-source projects, is used in products of Vinta clients. We are always looking for exciting work, so if you need any commercial support, feel free to get in touch: contact@vinta.com.br
