# Django and React Boilerplate

## Project bootsrap

- [ ] Start your project using: 
```
django-admin startproject theprojectname --template=https://github.com/vintasoftware/boilerplate/archive/master.zip
```
- [ ] `pip install -r requirements-to-freeze.txt`
- [ ] `pip freeze > requirements.txt`
- [ ] `npm update --save`
- [ ] Check for outdated npm dependencies with `npm outdated` and update them
- [ ] Create the migrations for `users` app: `./manage.py makemigrations`
- [ ] Change the first line of README to the name of the project
- [ ] Create a Google Group to receive 500 errors and forward to your email. It should be a private group, but remember to change settings to allow posting from any email
- [ ] Add the Google Group email address to the `ADMINS` settings variable
- [ ] Create a [Sendgrid](https://sendgrid.com/) account and remember to configure your production environment so you can receive the error emails

After completing ALL of the above, remove this `Project bootstrap` section from the project README.

## Developing

### Quickstart

- Create a copy of ``{{project_name}}/settings/local.py.example`` in ``{{project_name}}/settings/local.py``
- Create a ``.env`` file in the root of the project and add ``DJANGO_SETTINGS_MODULE="{{project_name}}.settings.local"`` to it

### Tools

- Setup [editorconfig](http://editorconfig.org/), [flake8](http://flake8.pycqa.org/en/latest/) and [ESLint](http://eslint.org/) in the text editor you will use to develop.

### Running the project:

- `pip install -r requirements.txt`
- `npm install`
- `npm start`
- `python manage.py runserver`

### Adding new pypi libs:

Add high level dependecies to `requirements-to-freeze.txt` and `pip freeze > requirements.txt`. [A Better Pip Workflow](http://www.kennethreitz.org/essays/a-better-pip-workflow)

## Checking lint

- Manually with `flake8` and `npm run lint` on project root.
- During development with an editor compatible with flake8 and ESLint.
