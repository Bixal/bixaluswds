# Bixal USWDS Drupal theme

## Requirements

Node: https://nodejs.org/en/
NVM: https://github.com/nvm-sh/nvm

## Getting started

### Was this theme just generated? set as the default theme, otherwise continue to next step.
In this example the theme machine name is `my_new_theme`.
The theme dependencies are already met in the Drupal standard installation.
```
lando drush theme:install my_new_theme
lando drush config-set system.theme default my_new_theme
```

### Installing the node package dependencies and running a build.
```
nvm use
npm install
```

## npm commands

### Starting a watch for tracking changes and updating compiled files.

```
npm run dev
```

### Building the assets for deployment.
```
npm run build
```

## Resources

- [USWDS](https://designsystem.digital.gov/)
- [Components overview](https://designsystem.digital.gov/components/overview/)
- [Design Tokens](https://designsystem.digital.gov/design-tokens/)
- [Utilities](https://designsystem.digital.gov/utilities/)
- [Settings](https://designsystem.digital.gov/documentation/settings/)
