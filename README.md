[![License: MIT](https://img.shields.io/github/license/vintasoftware/django-react-boilerplate.svg)](LICENSE.txt)

# Django React Boilerplate

## About
A [Django](https://www.djangoproject.com/) project boilerplate/template with lots of state of the art libraries and tools like:
- [React](https://facebook.github.io/react/), for building interactive UIs
- [django-js-reverse](https://github.com/ierror/django-js-reverse), for generating URLs on JS
- [React Bootstrap](https://https://react-bootstrap.github.io/), for responsive styling
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
- [ ] Make sure you have Python 3.8 installed
- [ ] Install Django with `pip install django`, to have the `django-admin` command available.
- [ ] Open the command line and go to the directory you want to start your project in.
- [ ] Start your project using:
    ```
    django-admin startproject theprojectname --extension py,yml,json --name Procfile,Dockerfile,README.md,.env.example,.gitignore,Makefile --template=https://github.com/vintasoftware/django-react-boilerplate/archive/boilerplate-release.zip
    ```
    Alternatively, you may start the project in the current directory by placing a `.` right after the project name, using the following command:
    ```
    django-admin startproject theprojectname . --extension py,yml,json --name Procfile,Dockerfile,README.md,.env.example,.gitignore,Makefile --template=https://github.com/vintasoftware/django-react-boilerplate/archive/boilerplate-release.zip
    ```
In the next steps, always remember to replace theprojectname with your project's name
- [ ] Above: don't forget the `--extension` and `--name` params!
- [ ] Change the first line of README to the name of the project
- [ ] Add an email address to the `ADMINS` settings variable in `{{project_name}}/backend/{{project_name}}/settings/base.py`
- [ ] Change the `SERVER_EMAIL` to the email address used to send e-mails in `{{project_name}}/backend/{{project_name}}/settings/production.py`
- [ ] Rename the folder `circleci` to `.circleci` with the command `mv circleci .circleci`

After completing ALL of the above, remove this `Project bootstrap` section from the project README. Then follow `Running` below.

## Running
### Tools
- Setup [editorconfig](http://editorconfig.org/), [prospector](https://prospector.landscape.io/en/master/) and [ESLint](http://eslint.org/) in the text editor you will use to develop.

### Setup
- Inside the `backend` folder, do the following:
  - Create a copy of `{{project_name}}/settings/local.py.example`:  
  `cp {{project_name}}/settings/local.py.example {{project_name}}/settings/local.py`
  - Create a copy of `.env.example`:
  `cp .env.example .env`

### If you are using Docker:
- Open a new command line window and go to the project's directory.
- Create the migrations for `users` app:  
  `make docker_makemigrations`
- Run the migrations:
  `make docker_migrate`
- Run the project:
  `make docker_up`
- Access `http://localhost:8000` on your browser and the project should be running there
  - When you run `make docker_up`, some containers are spinned up (frontend, backend, database, etc) and each one will be running on a different port
  - The container with the React app uses port 3000. However, if you try accessing it on your browser, the app won't appear there and you'll probably see a blank page with the "Cannot GET /" error
  - This happens because the container responsible for displaying the whole application is the Django app one (running on port 8000). The frontend container is responsible for providing a bundle with its assets for [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader) to consume and render them on a Django template
- To access the logs for each service, run:
  `make docker_logs <service name>` (either `backend`, `frontend`, etc)
- To stop the project, run:
  `make docker_down`

#### Adding new dependencies
- Open a new command line window and go to the project's directory.
- Update the dependencies management files by performing any number of the following steps:
  - To add a new **frontend** dependency, run `npm install <package name> --save`
    > The above command will update your `package.json`, but won't make the change effective inside the container yet
  - To add a new **backend** dependency, update `requirements.in` or `dev-requirements.in` with the newest requirements
- After updating the desired file(s), run `make docker_update_dependencies` to update the containers with the new dependencies
  > The above command will stop and re-build the containers in order to make the new dependencies effective

### If you are not using Docker:
#### Setup and run the frontend app
- Open a new command line window and go to the project's directory.
- `npm install`
- `npm run start`
  - This is used to serve the frontend assets to be consumed by [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader) and not to run the React application as usual, so don't worry if you try to check what's running on port 3000 and see an error on your browser

#### Setup the backend app
- Open a new command line window and go to the project's directory.
- Create a new virtualenv with either [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/) or only virtualenv: `mkvirtualenv {{project_name}}` or `python -m venv {{project_name}}-venv`
  > If you're using Python's virtualenv (the latter option), make sure to create the environment with the suggested name, otherwise it will be added to version control.
- Make sure the virtualenv is activated `workon {{project_name}}` or `source {{project_name}}-venv/bin/activate`
- Run `make compile_install_requirements` to install the requirements
  > Please make sure you have already setup PostgreSQL on your environment before installing the requirements

  > In case you wish to use a Conda virtual environment, please remove the line `export PIP_REQUIRE_VIRTUALENV=true; \` from `Makefile`

#### Run the backend app
- With the virtualenv enabled, go to the `backend` directory.
- Create the migrations for `users` app: 
  `python manage.py makemigrations`
- Run the migrations:
  `python manage.py migrate`
- Run the project:
  `python manage.py runserver`
- Open a browser and go to `http://localhost:8000` to see the project running

#### Setup Celery
- Open a command line window and go to the project's directory
- `workon {{project_name}}` or `source {{project_name}}-venv/bin/activate` depending on if you are using virtualenvwrapper or just virtualenv.
- `python manage.py celery`

#### Mailhog
- For development, we use Mailhog to test our e-mail workflows, since it allows us to inspect the messages to validate they're correctly built
  - Docker users already have it setup and running once they start the project
  - For non-Docker users, please have a look [here](https://github.com/mailhog/MailHog#installation) for instructions on how to setup Mailhog on specific environments
> The project expects Mailhog SMTP server to be running on port 1025, you may alter that by changing `EMAIL_PORT` on settings


### Testing
`make test`

Will run django tests using `--keepdb` and `--parallel`. You may pass a path to the desired test module in the make command. E.g.:

`make test someapp.tests.test_views`

### Adding new pypi libs
Add the libname to either `requirements.in` or `dev-requirements.in`, then either upgrade the libs with `make upgrade` or manually compile it and then,  install.
`pip-compile requirements.in > requirements.txt` or `make upgrade`
`pip install -r requirements.txt`

## Deployment 
### Setup
This project comes with an `app.json` file, which can be used to create an app on Heroku from a GitHub repository.

Before deploying, please make sure you've generated an up-to-date `requirements.txt` file containing the Python dependencies. This is necessary even if you've used Docker for local runs. Do so by following [these instructions](#setup-the-backend-app).

After setting up the project, you can init a repository and push it on GitHub. If your repository is public, you can use the following button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy) 

If you are in a private repository, access the following link replacing `$YOUR_REPOSITORY_LINK$` with your repository link.

- `https://heroku.com/deploy?template=$YOUR_REPOSITORY_LINK$`

Remember to fill the `ALLOWED_HOSTS` with the URL of your app, the default on heroku is `appname.herokuapp.com`. Replace `appname` with your heroku app name.

### Sentry

[Sentry](https://sentry.io) is already set up on the project. For production, add `SENTRY_DSN` environment variable on Heroku, with your Sentry DSN as the value.

You can test your Sentry configuration by deploying the boilerplate with the sample page and clicking on the corresponding button.

### Sentry source maps for JS files

The `bin/post_compile` script has a step to push Javascript source maps to Sentry, however some environment variables need to be set on Heroku.

You need to enable Heroku dyno metadata on your Heroku App. Use the following command on Heroku CLI:

- `heroku labs:enable runtime-dyno-metadata -a <app name>`

The environment variables that need to be set are:

- `SENTRY_ORG` - Name of the Sentry Organization that owns your Sentry Project.
- `SENTRY_PROJECT_NAME` - Name of the Sentry Project.
- `SENTRY_API_KEY` - Sentry API key that needs to be generated on Sentry. [You can find or create authentication tokens within Sentry](https://sentry.io/api/).

After enabling dyno metadata and setting the environment variables, your next Heroku Deploys will create a release on Sentry where the release name is the commit SHA, and it will push the source maps to it.

## Linting
- Manually with `prospector` and `npm run lint` on project root.
- During development with an editor compatible with prospector and ESLint.

## Pre-commit hooks
- Run `pre-commit install` to enable the hook into your git repo. The hook will run automatically for each commit.
- Run `git commit -m "Your message" -n` to skip the hook if you need.

## Opinionated Settings
Some settings defaults were decided based on Vinta's experiences. Here's the rationale behind them:

### `CELERY_ACKS_LATE = True`
We believe Celery tasks should be idempotent. So for us it's safe to set `CELERY_ACKS_LATE = True` to ensure tasks will be re-queued after a worker failure. Check Celery docs on ["Should I use retry or acks_late?"](https://docs.celeryproject.org/en/latest/faq.html#should-i-use-retry-or-acks-late) for more info.

## Features Catalogue

### Frontend
- `react` for building interactive UIs
- `react-dom` for rendering the UI
- `react-router` for page navigation
- `webpack` for bundling static assets
- `webpack-bundle-tracker` for providing the bundled assets to Django
- Styling
  - `bootstrap` for providing responsive stylesheets
  - `react-bootstrap` for providing components built on top of Bootstrap CSS without using plugins
  - `node-sass` for providing compatibility with SCSS files
- State management and backend integration
  - `axios` for performing asynchronous calls
  - `cookie` for easy integration with Django using the `csrftoken` cookie
  - `redux` for easy state management across the application
  - `connected-react-router` for integrating Redux with React Router
  - `history` for providing browser history to Connected React Router
  - `react-redux` for integrating React with Redux
  - `redux-devtools-extension` for inspecting and debugging Redux via browser
  - `redux-thunk` for interacting with the Redux store through asynchronous logic
- Utilities
  - `lodash` for general utility functions
  - `classnames` for easy working with complex CSS class names on components
  - `prop-types` for improving QoL while developing providing basic type-checking for React props
  - `react-hot-loader` for improving QoL while developing through automatic browser refreshing

### Backend
- `django` for building backend logic using Python
- `djangorestframework` for building a REST API on top of Django
- `django-webpack-loader` for rendering the bundled frontend assets
- `django-js-reverse` for easy handling of Django URLs on JS
- `psycopg2` for using PostgreSQL database
- `sentry-sdk` for error monitoring
- `python-decouple` for reading environment variables on settings files
- `celery` for background worker tasks
- `django-debreach` for additional protection against BREACH attack
- `whitenoise` and `brotlipy` for serving static assets

## Contributing

If you wish to contribute to this project, please first discuss the change you wish to make via an [issue](https://github.com/vintasoftware/django-react-boilerplate/issues).

Check our [contributing guide](https://github.com/vintasoftware/django-react-boilerplate/blob/master/CONTRIBUTING.md) to learn more about our development process and how you can test your changes to the boilerplate.

## Commercial Support
This project, as other Vinta open-source projects, is used in products of Vinta clients. We are always looking for exciting work, so if you need any commercial support, feel free to get in touch: contact@vinta.com.br

Copyright (c) 2021 Vinta Serviços e Soluções Tecnológicas Ltda.

[MIT License](LICENSE.txt)
