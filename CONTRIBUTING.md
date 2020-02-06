# Contributing

## Pull requests

Read [this checklist](http://pullrequests.devchecklists.com) for a more detailed guide on best practices for opening pull requests.

## Testing your changes

### Testing `django-admin startproject`

If you made changes to this boilerplate and want to test them, do as following:

- [Make sure you have pre-commit installed](https://github.com/vintasoftware/django-react-boilerplate#pre-commit-hooks)
- Commit your changes
- Run `git archive -o boilerplate.zip HEAD` to create the template zip file
- Run the following:
  ```bash
  cd .. && django-admin startproject theprojectname --extension py,yml,json --name Procfile,README.md,.env.example,Dockerfile --template=django-react-boilerplate/boilerplate.zip
  ```
- A new folder called `theprojectname` will be created and now you can test your changes

### Testing Heroku deployment

Push your changes to a branch and visit the link below

https://dashboard.heroku.com/new?template=https://github.com/fill-org-or-user/fill-project-repo-name/tree/fill-branch

> Make sure to replace all `fill-*`

## How to add a "Deploy to Heroku" button

Read [this](https://devcenter.heroku.com/articles/heroku-button#adding-the-heroku-button).

P.S. if you want to deploy in a different way, please check the `app.json` file for what needs to be configured.

