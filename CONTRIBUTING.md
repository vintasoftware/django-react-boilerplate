# Contributing

## Pull requests

Read [this checklist](http://pullrequests.devchecklists.com) for a more detailed guide on best practices for opening pull requests.

## Testing your changes

### Testing `django-admin startproject`

If you made changes to this boilerplate and want to test them, do as follows:

- [Make sure you have pre-commit installed](https://github.com/vintasoftware/django-react-boilerplate#pre-commit-hooks)
- Commit your changes
- Run `git archive -o boilerplate.zip HEAD` to create the template zip file
- Run the following:
  ```bash
  cd .. && django-admin startproject theprojectname --extension py,yml,json --name Procfile,README.md,.env.example,Dockerfile,docker-compose.yml,Makefile,pyproject.toml,render.yaml --template=django-react-boilerplate/boilerplate.zip
  ```
- A new folder called `theprojectname` will be created and now you can test your changes
- Make sure that the project is still running fine with and without docker

### Testing Render.com deployment

Push your changes to a branch and visit the link below

https://render.com/deploy?repo=https://github.com/fill-org-or-user/fill-project-repo-name/tree/fill-branch

> Make sure to replace all `fill-*`

## How to add a "Deploy to Render.com" button

Read [this](https://render.com/docs/deploy-to-render).

P.S. if you want to deploy in a different way, please check the `render.yaml` file for what needs to be configured.
