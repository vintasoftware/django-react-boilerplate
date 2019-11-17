# Contributing

## How to test `django-admin startproject`

If you made changes to this boilerplate and want to test them, do as following:

- Commit your changes
- Run `git archive -o boilerplate.zip HEAD` to create the template zip file
- Run the following:
  ```bash
  cd .. && django-admin startproject theprojectname --extension py,yml,json --name Procfile,README.md,.env.example --template=django-react-boilerplate/boilerplate.zip
  ```
- A new folder called `theprojectname` will be created and now you can test your changes

## How to test Heroku deployment

Push your changes to a branch and visit `https://dashboard.heroku.com/new?template=https://github.com/fill-org-or-user/fill-project-repo-name/tree/fill-branch` (replace all `fill-*`).

## How to add a 'Deploy to Heroku' button

Read [this](https://devcenter.heroku.com/articles/heroku-button#adding-the-heroku-button).

P.S. if you want to deploy in a different way please check the `app.json` file for what needs to be configured.

## PR Checklist

Read [this](http://pullrequests.devchecklists.com) for a more detailed guide on best practices for opening PRs.
