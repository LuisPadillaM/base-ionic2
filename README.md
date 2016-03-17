# Hangar Ionic 2 Store Application

This is base setup of Ionic v2.0 and is still in development.

## Table of Contents
 - [Getting Started](#getting-started)
 - [File Structure of App](#file-structure-of-app)

## Getting Started

* Clone this repository.
* Run `npm install` from the project root.
* Install the ionic CLI (`npm install -g ionic@beta`)
* Install cordova camera plugin (`ionic plugin add cordova-plugin-camera`)
* Install cordova network plugin (`cordova-plugin-network-information`)
* Run `ionic serve` in a terminal from the project root.
* Run in device `ionic run android --device` in a terminal from the project root.
* Enjoy

## Use Cases

<!-- * Menu - [ [template](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/app.html#L3-L21) |
[code](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/app.js#L27-L32) ]
* Tabs - [ [template](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/tabs/tabs.html) | [code](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/tabs/tabs.js) ]
* Segments - [ [template](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/schedule/schedule.html#L6-L13) | [code](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/schedule/schedule.js#L24) ]
* Search bar - [ [template](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/schedule/schedule.html#L24-L29) | [code](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/schedule/schedule.js#L36-L41) ]
* Modals - [ [template](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/schedule-filter/schedule-filter.html) | [code](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/schedule/schedule.js#L43-L52) ]
* Action Sheet - [ [template](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/speaker-list/speaker-list.html#L32) | [code](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/speaker-list/speaker-list.js#L34-L55) ]
* Toggle / switches - [ [template](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/schedule-filter/schedule-filter.html#L22-L25) ]
* Slides - [ [template](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/tutorial/tutorial.html#L2-L14) |
[code](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/tutorial/tutorial.js#L14-L39) ]
* Cards - [ [template](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/speaker-list/speaker-list.html#L9-L42) ]
* Sticky headers - [ [template](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/schedule/schedule.html#L34-L36) ]
* Grid - [ [template](https://github.com/hangarlab/base-ionic2-ts/blob/master/app/pages/login/login.html#L26-L33) ]
 -->
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
│   │   ├── services                   * Will contains global services
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
├── README.md                          * This file
└── webpack.config.js                  * Webpack configuration file
```
