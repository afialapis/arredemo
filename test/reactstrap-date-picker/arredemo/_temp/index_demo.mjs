import React from 'react'
import ReactDOM from 'react-dom'
import AppDemo from 'app/AppDemo.jsx'

import 'app/assets/scss/index.scss'

const pkgPath = '/home/lapis/repos/gh/arredemo/test/reactstrap-date-picker'

const pkgJson = JSON.parse(`
  {
  "name": "reactstrap-date-picker",
  "version": "1.0.6",
  "description": "Reactstrap based, zero dependencies, date picker",
  "author": "Donato Lorenzo <donato@afialapis.com>",
  "contributors": [
    "Donato Lorenzo <donato@afialapis.com>"
  ],
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/afialapis/reactstrap-date-picker.git"
  },
  "bugs": {
    "url": "https://github.com/afialapis/reactstrap-date-picker/issues"
  },
  "homepage": "https://reactstrap-date-picker.afialapis.com/",
  "files": [
    "lib",
    "dist"
  ],
  "main": "lib/index.js",
  "cjs": "dist/reactstrap-date-picker.cjs.js",
  "browser": "dist/reactstrap-date-picker.umd.js",
  "module": "dist/reactstrap-date-picker.es.js",
  "scripts": {
    "reset": "npm cache clean --force && rm -fr node_modules && npm run arredemo-clean && npm i",
    "arredemo-clean": "rm -fr arredemo",
    "arredemo-build": "npm run arredemo-clean && npx arredemo build",
    "clean-demo": "rm -rf demo/dist && mkdir demo/dist",
    "demo": "npm run clean-demo && rollup -c rollup.demo.js -w"
  },
  "keywords": [
    "js",
    "react",
    "reactstrap",
    "date",
    "picker"
  ],
  "devDependencies": {
    "@babel/cli": "^7.17.10",
    "@babel/core": "^7.18.2",
    "@babel/eslint-parser": "^7.18.2",
    "@babel/preset-env": "^7.18.2",
    "@babel/preset-react": "^7.17.12",
    "@babel/register": "^7.17.7",
    "@rollup/plugin-babel": "^5.3.1",
    "@rollup/plugin-commonjs": "^22.0.0",
    "@rollup/plugin-node-resolve": "^13.3.0",
    "@rollup/plugin-replace": "^4.0.0",
    "arredemo": "file:../../",
    "bootstrap": "^4.5.2",
    "chai": "^4.3.6",
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.6",
    "eslint": "^8.17.0",
    "eslint-plugin-react": "^7.30.0",
    "eslint-plugin-react-hooks": "^4.5.0",
    "ignore-styles": "^5.0.1",
    "jsdom": "^19.0.0",
    "mocha": "^10.0.0",
    "node-sass": "^7.0.1",
    "node-uuid": "^1.4.8",
    "postcss": "^8.4.14",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "reactstrap": "8.5.1",
    "rollup": "^2.75.6",
    "rollup-plugin-livereload": "^2.0.5",
    "rollup-plugin-postcss": "^4.0.2",
    "rollup-plugin-serve": "^1.1.0",
    "rollup-plugin-terser": "^7.0.2"
  },
  "peerDependencies": {
    "react": ">=16.13.1",
    "react-dom": ">=16.13.1",
    "reactstrap": ">=8.5.1"
  },
  "overrides": {
    "enzyme": {
      "cheerio": "1.0.0-rc.3"
    },
    "css-select": {
      "nth-check": "2.0.1"
    }
  }
}
`)

const arreConfig = JSON.parse(`
{
  "theme": "default",
  "favicon": "logo/favicon/reactstrap-date-picker.ico",
  "logo": "logo/reactstrap-date-picker.png",
  "company": "Afialapis",
  "url": "reactstrap-date-picker.afialapis.com",
  "doc_versions": [
    "1.0.6"
  ],
  "md": {
    "keep_summary_content": false
  },
  "demo_entry": "demo/demo.js",
  "demo_styles": null
}
`)


/*
ReactDOM.render(
  <App 
    pkgPath = {pkgPath}
    pkgJson = {pkgJson}
    arreConfig = {arreConfig}
    readmes = {readmes}
  />, 
  document.getElementById('arredemo-app'))
*/

ReactDOM.createRoot(document.getElementById("arredemo-app")).render(
  <React.StrictMode>
    <AppDemo 
      pkgPath = {pkgPath}
      pkgJson = {pkgJson}
      arreConfig = {arreConfig}
      
    />
  </React.StrictMode>
);
