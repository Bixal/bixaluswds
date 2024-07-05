# Bixal USWDS Drupal base theme

@TODO document the process to create a new child theme from the starter_theme.

## Install base theme by modifying composer.json file
Add bixal/bixaluswds to `repositories` object.
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
Then run
```
lando composer require "bixal/bixaluswds"
```

## Initialize child theme using drupal theme generate function
Determine what theme name you want to use in this example we are using `my_new_theme`.
First create a `custom` directory in `themes` directory if there isn't one `mkdir web/themes/custom`.
```
lando php web/core/scripts/drupal generate-theme --starterkit starter_theme my_new_theme --path themes/custom
lando drush cr
```

## Install the theme dependencies and set your custom theme as the default
