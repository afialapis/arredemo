import React from 'react'
import ReactDOM from 'react-dom'

import {App} from 'app/App.jsx'

import 'app/assets/scss/index.scss'

const pkgPath = '/home/lapis/repos/gh/arredemo/demo'

const pkgJson = JSON.parse(`
  {
  "name": "intre",
  "version": "1.0.7",
  "type": "module",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/afialapis/arredemo.git"
  },
  "author": "donato@afialapis.com",
  "license": "MIT",
  "homepage": "https://github.com/afialapis/arredemo#readme",
  "scripts": {
    "reset": "rm -fr arredemo",
    "build": "node ../bin/arre.mjs build"
  }
}
`)

const arreConfig = JSON.parse(`
{
  "config": {
    "theme": "default",
    "favicon": "logo/favicon/arredemo.ico",
    "logo": "logo/arredemo.png",
    "company": "Arre Demo!",
    "url": "arredemo.afialapis.com",
    "doc_versions": [
      "1.0.7"
    ],
    "demo_entry": "demo/index.js",
    "demo_styles": "demo/index.scss"
  },
  "pkgPath": "/home/lapis/repos/gh/arredemo/demo"
}
`)

const v_1_0_7 = `<section>
# intre

Working with dates in a simple way: using Unix Epoch times.


### \`epoch_now()\`

### \`epoch_noon(e)\`



### \`epoch_from_date(d)\`

### \`epoch_from_str(e, fmt = 'DD/MM/YYYY')\`

### \`epoch_from_parts(y, m, d)\`


### \`epoch_to_str(e, fmt = 'DD/MM/YYYY')\`

### \`epoch_pretty_from_now(e)\`

### \`epoch_pretty_short(e)\`

Format: _\"D MMM\"_

### \`epoch_pretty_medium(e)\`

Format: _\"DD MMM 'YY\"_

### \`epoch_pretty_long(e)\`
  
Format: _\"DD MMMM YYYY\"_

### \`epoch_pretty_short_with_time(e)\`
  
Format: _\"D MMM a las HH:MM\"

### \`epoch_pretty_short_with_from_now(e)\`
  
Format: _\"D MMM (<from Now>)\"_

### \`epoch_pretty_burocratic(e)\`
  
Format: _\"D de MMMM de YYYY\"_





### \`epoch_get_seconds(e)\`

### \`epoch_get_minutes(e)\`

### \`epoch_get_hour(e)\`

### \`epoch_get_day(e)\`

### \`epoch_get_week_day(e)\`

### \`epoch_get_month(e)\`

### \`epoch_get_year(e)\`

### \`epoch_get_month_name(month, long=false)\`


### \`epoch_are_same_day(e1, e2)\`

### \`epoch_diff(e1, e2, w= 'seconds')\`


### \`epoch_add_days(e, n)\`

### \`epoch_add_business_days(e, n, includeSaturdays= false)\`

### \`epoch_add_months(e, n)\`

### \`epoch_add_years(e, n)\`

### \`epoch_sub_months(e, n)\`


### \`epoch_first_of_month(e)\`

### \`epoch_last_of_month(e)\`

### \`epoch_first_of_week(e)\`

### \`epoch_last_of_week(e)\`


### \`epoch_range(efrom, eto, includeTo= true)\`




`;


const readmes = {
"1.0.7": v_1_0_7,
}



ReactDOM.render(
  <App 
    pkgPath = {pkgPath}
    pkgJson = {pkgJson}
    arreConfig = {arreConfig}
    readmes = {readmes}
  />, 
  document.getElementById('arredemo-app'))