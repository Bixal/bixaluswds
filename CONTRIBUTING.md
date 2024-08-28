# Contribution Guide for Bixal USWDS Drupal Theme

## 1. Set up your local development environment
1. Create a forked repository from the bixaluswds repo. See https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo for instructions on how to fork the repository.
2. Complete the Drupal standard installation following the instructions outlined here: https://github.com/rayestrada/drupalstandard.

## 2. Generate child theme, install and set as default

### Initialize child theme using drupal theme generate function
Determine what theme machine name you want to use in this example we are using `my_new_theme`.
First create a `custom` directory in `themes` directory if there isn't one: `mkdir web/themes/custom`.
```
lando php web/core/scripts/drupal generate-theme --starterkit starter_theme my_new_theme --path themes/custom
lando drush cr
```

### Remove these lines from your custom theme .info.yml file
```
hidden: true
starterkit: true
```

### Install and set your custom theme as the default
In this example the theme machine name is `my_new_theme`.
The theme dependencies are already met in the Drupal standard installation.
```
lando drush theme:install my_new_theme
```


## 3. Work on an issue
### Create a feature branch off `dev` for development
Navigate into the base theme directory
```
cd web/themes/custom/bixaluswds`
```
Checkout the `dev` branch and pull changes
```
git checkout dev
git pull origin
```
Create a new feature branch
```
git checkout -b issue/#-short-descriptive-label
```

### Create a pull request
Commit your file modifications and push into your fork
```
git push fork branch-name
```
Visit https://github.com/Bixal/bixaluswds/compare and create a pull request from your fork branch (source) to `Bixal:dev` (target).
Follow the PR template instructions to complete the PR. Then update the GitHub issue with a note that you have a PR ready for review.
