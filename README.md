# Django and React Boilerplate

## Project bootsrap

- [ ] Start your project using: 
```
django-admin startproject theprojectname --template=https://github.com/vintasoftware/boilerplate/archive/master.zip
```
- [ ] `pip install -r requirements-to-freeze.txt`
- [ ] `pip freeze > requirements.txt`
- [ ] `npm update --save`
- [ ] Check for outdated npm dependecies with `npm outdated` and update them.
- [ ] Create migrations for the `users` app: `./manage.py makemigrations`
- [ ] Change the first line of README to the name of the project
- [ ] Create a google groups to receive 500 errors and forward to your email. It should be a private group, but remember to change settings so it allows posting from any email
- [ ] Add the google group to the `AMINDS` settings variable
- [ ] Create a [Sendgrid](https://sendgrid.com/) account and remember to configure your production environment so you can receive the error emails

After completing ALL of the above, remove `Project bootstrap` section from the project README.

## Developing

### Quickstart

- Create a copy of ``{{project_name}}/settings/local.py.example`` in ``{{project_name}}/settings/local.py``.
- Create a ``.env`` file in the root of the project and add ``DJANGO_SETTINGS_MODULE="{{project_name}}.settings.local"`` to it.

### Tools

- Setup [editorconfig](http://editorconfig.org/) in the text editor you will use to develop.
- Setup [ESLint](http://eslint.org/) in the text editor you will use to develop.

### Running the project:

- `pip install -r requirements.txt`
- `npm install`
- `npm start`
- `python manage.py runserver`

### Adding new pypi libs:

Add high level dependecies to `requirements-to-freeze.txt` and `pip freeze > requirements.txt`. [A Better Pip Workflow](http://www.kennethreitz.org/essays/a-better-pip-workflow)

## Checking lint

- Manually: `npm run lint`
- You should also configure your editor to use eslint.
