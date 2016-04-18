# AngularJS App
Project was generated with Yeoman generator
[generator-angular-app](https://www.npmjs.com/package/generator-angular-app)

# Requirements
- NodeJS v4.0 or newer
- npm v3.3 or newer

# Install all npm dependencies for development
- Skip this step if you have generated the project with Yeoman. Yeoman install all dependencies for you.
- To install all development dependencies of existing project run `npm install` inside the root
  directory of the project.

# Root folders
```
.
├─── src   : source code
├─── test  : unit and e2e test scripts
└─── tools : build scripts
```

# 'src' folder
```
.
├─── app                     : angular app
├─── assets                  : assets
│   ├─── fonts                 : fonts
│   ├─── images                : images
│   └─── scss-sprite           : scss that contains images encoded in base64, loaded with PreloadJS
│       └─── images              : images for scss-sprite
├─── copy                    : app copy
└─── entry                   : app entry point (starts loader and run angular app)
 ├─── data                     : loader configuration
 ├─── style                    : global scss
 │   ├─── global                 : global styles shared across the whole app
 │   └─── shared                 : scss for defining shared scss variables and mixins
 ├─── utilities                : app utilities
 └─── views                    : app entry views (loader, incompatible browser ...)
```

# NPM tasks
```
npm start          : start dev server and rebuild on file change
npm test           : run unit tests
npm run lint       : run JavaScript linter
npm run bump major : bump major version
npm run bump minor : bump minor version
npm run bump patch : bump patch version
npm run build      : build for production
npm run server     : run server to test production build
npm run e2e        : run e2e tests
```

# Webpack
## Installing JavaScript libraries
- Install libraries with npm.

## Installing JavaScript libraries with broken module style
- If new installed library doesn't work properly with webpack read more about shimming modules
  [here](http://webpack.github.io/docs/shimming-modules.html).

## Installing JavaScript libraries not published in npm
- If you want to install library not published in npm but with `package.json` inside git repository
  you can install package from git repository. Read [here](https://docs.npmjs.com/cli/install) how to
  install it.
- If you want to install library not published in npm and without `package.json` you can install it
  from git repository with [`napa`](https://github.com/shama/napa).
    - To install new library add it to `package.json` file to `napa` variable and run `npm install`.
      More details how to use `napa` can be found [here](https://github.com/shama/napa).
    - Probably you will need to set `resolve.alias` and `loaders` inside `webpack.config.js` for
      libraries not published in npm.

# CSS Modules
- This project uses CSS Modules
- Read more about CSS Modules [here](https://github.com/css-modules/css-modules)
    - "A CSS Module is a CSS file in which all class names and animation names are scoped locally by default."

# SCSS Source maps
- Source maps are disabled for SCSS files because of an issue with style-loader
  ([read more here](https://github.com/webpack/style-loader/issues/93)). As a workaround add to each
  SCSS file a comment containing its path.
- In case SCSS source map are necessary for debugging
    - set `publicPath` inside `webpack.config.js` file to `http://localhost:3000/`
    - enable source maps inside `webpack.config.js` as described
      [here](https://github.com/jtangelder/sass-loader#source-maps)
    - important: before committing revert these changes, do not push enabled source maps to the repo

# Modernizr configuration
- To configure modernizr change its settings inside `.modernizrrc`.
- List of all available settings:
  [show](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json)

# CSS compatibility configuration
- To set autoprefixer for CSS set `autoprefixer` variable inside `config.json`.
- Default value: `['last 2 versions']`.
- List of available values: [show](https://github.com/ai/browserslist#queries)

# Config file 'config.json'
```  
buildDir     : Directory where built page will be placed (default 'dist')
autoprefixer : Configuration of autoprefixer
root         : List of files to copy to website root folder
```

# Build version
To hide build version info set `renderVersionInfo` to `false` inside `src/entry/utilities/appSettings.js` file.
To bump version use npm task `npm run bump [ major | minor | patch ]`

# Test
Run unit tests with `npm test` or e2e tests with `npm run e2e`
- Before running e2e test install `mocha` globally by running `npm install -g mocha`
- Karma homepage: [show](https://karma-runner.github.io/0.13/index.html)
- Protractor homepage: [show](https://angular.github.io/protractor/#/)

# Linting
Use linter in your text editor for JavaScript, SCSS and HTML.

## JavaScript
- For JavaScript use [ESLint](http://eslint.org/). The project contains ESLint configuration
  file `.eslintrc`
- Use ESLint version 2.x.x
- ESLint for Atom - [show](https://github.com/AtomLinter/linter-eslint)
- ESLint for Sublime Text - [show](https://github.com/roadhump/SublimeLinter-eslint)

## SCSS
- For SCSS use [SCSS-Lint](https://github.com/brigade/scss-lint). The project contains SCSS-Lint
  configuration file `.scss-lint.yml`
- SCSS-Lint for Atom - [show](https://github.com/AtomLinter/linter-scss-lint)
- SCSS-Lint for Sublime Text - [show](https://github.com/attenzione/SublimeLinter-scss-lint)

## HTML
- For HTML use [HTMLHint](https://github.com/yaniswang/HTMLHint). The project contains HTMLHint
  configuration file `.htmlhintrc`
- HTMLHint for Atom - [show](https://github.com/AtomLinter/linter-htmlhint)
- HTMLHint for Sublime Text - [show](https://github.com/mmaday/SublimeLinter-contrib-htmlhint)

# Bourbon
Mixin library for Sass. Check Bourbon [homepage](http://bourbon.io/) for more details and documentation.
**Do not use Bourbon mixins for Vendor Prefixes!** SCSS build uses `autoprefixer` for them.

Examples:
```
HiDPI Media Query:

    @include hidpi(1.5) {
        width: 20em;
    }

Font Face:

    @include font-face('generica', '../assets/fonts/generica', $file-formats: eot woff ttf svg);

Retina Image:

    @retina-image($filename, $background-size, $extension*, $retina-filename*, $retina-suffix*, $asset-pipeline*)

    Argument Defaults:
        $extension: png
        $retina-filename: null
        $retina-suffix: _2x
        $asset-pipeline: false
```
