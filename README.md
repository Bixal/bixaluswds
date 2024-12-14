# Bixal USWDS Drupal base theme

## Introduction
Bixal's USWDS Drupal base theme is expected to be installed and not modified in a project. It includes a baseline of functions, configuration and templates for new projects. The base theme also includes a starterkit for generating a custom theme per project.

**\*\*WARNING!\*\*: DO NOT clone** this theme into your project codebase! If you plan to contribute follow the instructions instead written in [CONTRIBUTING.md](CONTRIBUTING.md).

## 1. Install base theme by modifying composer.json file.
To configure the installation of the base theme in the contrib themes directory add bixal/bixaluswds to `repositories` object in `composer.json`.
```
{
    "type": "package",
    "package": {
        "name": "bixal/bixaluswds",
        "version": "1.0",
        "type":"drupal-theme",
        "source": {
            "url": "https://github.com/Bixal/bixaluswds.git",
            "type": "git",
            "reference": "v0.0.2"
        }
    }
}
```
Then run this to install.
```
lando composer require "bixal/bixaluswds"
```

## 2. Initialize child theme using drupal theme generate function.
Determine what theme name you want to use. In this example we are using `my_new_theme`.
```
# First create a `custom` directory in `themes` directory.
mkdir -p web/themes/custom

# Generate the theme using Drupal's built in theme generation and starterkit from Bixal USWDS theme.
lando php web/core/scripts/drupal generate-theme --starterkit source_theme_name my_new_theme --path themes/custom
lando drush cr
```

## 3. Install the theme dependencies and set your custom theme as the default.
Follow instructions found in your new theme's README file to install dependencies and set your theme as the default.
