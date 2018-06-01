## Contributing
### How to test `django-admin startproject`
If you made changes to this boilerplate and want to test them, commit your changes and use `git archive -o boilerplate.zip HEAD` to create the template zip. Then, do a `cd ..` and a `django-admin startproject theprojectname --extension py,yml,json --name Procfile,README.md,.env.example --template=django-react-boilerplate/boilerplate.zip` to test the project bootstrap.

### How to test Heroku deployment
Push your changes to a branch and visit `https://dashboard.heroku.com/new?template=https://github.com/fill-org-or-user/fill-project-repo-name/tree/fill-branch` (replace all `fill-*`).

### How to add a 'Deploy to Heroku' button
Read [this](https://devcenter.heroku.com/articles/heroku-button#adding-the-heroku-button).

P.S. if you want to deploy in a different way please check the `app.json` file for what needs to be configured.