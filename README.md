# Hangar Ionic 2 Store Application

This is base setup of Ionic v2.0 and is still in development.

## Table of Contents
 - [Getting Started](#getting-started)
 - [File Structure of App](#file-structure-of-app)

## Getting Started

* Install nodeJS 5.6 (Avoid use version 6, It could cause an unexpected behavior)
* Run `npm install` from the project root.
* Install Cordova (`npm install -g cordova`)
* Install the ionic CLI (`npm install -g ionic@beta`)
* Install TypeScript definition manager (`npm install typings -g`)
* Run `typings install`
* Create resources `ionic resources`
* Add Android platform `ionic platform add android`
* Add iOS platform after `ionic platform add ios`
* Run `ionic serve` in a terminal from the project root.
* Run `ionic plugin add [plugin-name] --save` to add new plugins

Before running on android devices
* Install [Android Studio](http://developer.android.com/intl/es/sdk/index.html)
* Open Android SDK Manager and install:
  * Android SDK Tools
  * Android SDK Platform-tools
  * Android SDK Build-tools
  * System images (in case you need to use Android Emulator)
  * Android Support Repository
  * Android Support Library
  * Google Play services
  * Google Repository
  * Intel x86 Emulator Accelerator (in case you need to use Android Emulator)

## Gulp tasks

* To include SVGs in the HTML run: `gulp svg`

If your are developing just use all gulp tasks as usual.
* For qa use: `gulp build --env=qa`
* For production use: `gulp build --env=prod`

## NPM commands
* `npm run iose` = `ionic run ios --emulator`
* `npm run iosd` = `ionic run ios --device`
* `npm run andd` = `ionic run android --device`
* `npm run ande` = `ionic run android --emulator`    
* `builddev: ionic build --env=dev`
* `buildqa: ionic build --env=qa`

## Environments

Theres a gulp task to change endpoints and keys by environment. In the appconfig file add your `dev.ts`, `qa.ts` and `prod.ts` with the data you need. For example:

```
let Config = {
  baseOauthUrl: 'http://xxxxxxxx-xxxx/xxx',
  baseApiUrl: 'http://xxxxxxxx-xxxx/xxx',
  keys: {
    oneSignal: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    projectNumber: 'xxxxxxxxxxxx'
  }
};

export default Config;
```

## File Structure of App

```
base-ionic-ts/
├── app/                               * Working directory
│   ├── data/
│   │   ├── feed.ts                    * Contains homepage json feed
│   │   │
│   ├── global/                        * Contains global code (components, services, etc)
│   │   ├── components                 * Contains global components
│   │   │   ├── loading                * Loading component
│   │   │   │   └── loading.ts         * LoadingComponent code
│   │   │   │   └── loading.scss       * LoadingComponent stylesheet
│   │   │   │
│   │   │   ├── network                * Network component
│   │   │   │   └── network.ts         * NetworkComponent code
│   │   │   │
│   │   │   └── spinner                * Spinner component
│   │   │       └── spinner.ts         * SpinnerComponent code
│   │   │       └── spinner.scss       * SpinnerComponent stylesheet
│   │   │
│   │   ├── services                   * Contains global services
│   │   │   └── feed.ts                * Contains feed service
│   │   │
│   ├── pages/                         * Contains all of our pages
│   │   ├── home/                      * Home tab page
│   │   │    ├── home.html             * HomePage template
│   │   │    └── home.js               * HomePage code
│   │   │    └── home.scss             * HomePage stylesheet
│   │   │
│   │   │── upload/                    * Upload page
│   │   │    ├── upload.html           * UploadPage template
│   │   │    └── upload.js             * UploadPage code
│   │   │    └── upload.scss           * UploadPage stylesheet
│   │   │
│   │   │── etc/                       * More Pages
│   │
│   │
│   ├── theme/                         * App theme files
│   │   ├── app.core.scss              * App Shared Sass Imports
│   │   ├── app.ios.scss               * iOS Sass Imports & iOS Variables
│   │   ├── app.md.scss                * MD Sass Imports & MD Variables
│   │   └── app.variables.scss         * App Shared Sass Variables
│   │
│   ├── app.html                       * Application template
│   └── app.js                         * Main Application configuration
│
|
├── node_modules/                      * Node dependencies
|
├── platforms/                         * Cordova generated native platform code
|
├── plugins/                           * Cordova native plugins go
|
├── resources/                         * Images for splash screens and icons
|
├── www/                               * Folder that is copied over to platforms www directory
│   │
│   ├── build/                         * Contains auto-generated compiled content
│   │     ├── css/                     * Compiled CSS
│   │     ├── fonts/                   * Copied Fonts
│   │     ├── js/                      * ES5 compiled JavaScript
│   │     ├── pages/                   * Copied html pages
│   │     └── app.html                 * Copied app entry point
│   │
│   ├── data/                          * Contains data used for the app
│   │     └── data.json                * App data
│   │
│   ├── img/                           * App images
│   │
│   └── index.html                     * Main entry point
|
├── .editorconfig                      * Defines coding styles between editors
├── .gitignore                         * Example git ignore file
├── config.xml                         * Cordova configuration file
├── ionic.config.js                    * Ionic configuration file
├── LICENSE                            * Apache License
├── package.json                       * Our javascript dependencies
└── README.md                          * This file
```

## Best practice links
- [Angular 2 style guide](https://angular.io/styleguide)
- [Ionic FAQ](http://ionicframework.com/docs/v2/faq/)
- [Ionic utilities](http://ionicframework.com/docs/v2/theming/css-utilities/)
