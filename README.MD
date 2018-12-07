
# This installs our application dependencies.
$ npm install --save vue vue-router
# This installs webpack to allow us to begin building our application bundle.
$ npm install --save-dev webpack webpack-cli

# structure
app.js : The application entrypoint.
App.vue: The root component
pages: A folder containing all top-level components, each of these will have a route entry associated with it.
components: A folder containing our building block components. Components will be organised into sub-folders based on feature.
router: A folder for all our vue-router configuration.
store: for vuex, contain all our actions/mutations etc.

# vue dependencies
npm install --save-dev vue-loader vue-template-compiler vue-style-loader css-loader

# Let’s start by getting webpack-dev-server setup,
# by doing this we won’t need to keep running our build script to see the changes in the browser.
npm install --save-dev webpack-dev-server

# browser does not update.
npm install --save-dev html-webpack-plugin
run webpack.config.dev.autoreload.js

# css
npm install --save-dev css-loader vue-style-loader
# stylus for CSS pre-processing so I’ve installed the loader
npm install --save-dev stylus stylus-loader
#  install Babel to transpile our code to ES5
$ npm install --save-dev @babel/core babel-loader @babel/preset-env

ref: [ https://itnext.io/vue-js-and-webpack-4-from-scratch-part-2-5038cc9deffb ]