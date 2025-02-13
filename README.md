# arredemo

[![NPM Version](https://badge.fury.io/js/arredemo.svg)](https://www.npmjs.com/package/arredemo)
[![NPM Downloads](https://img.shields.io/npm/dm/arredemo.svg?style=flat)](https://www.npmjs.com/package/arredemo)
![arredemo logo](https://www.afialapis.com/os/arredemo/favicon.png)


---

> **arre demo!**


> Véxase **[arre](https://academia.gal/dicionario/-/termo/arre)**. Interxección:

> **1** Voz para facer andar as cabalarías.

> _Arre, faco!_


> Véxase **[demo](https://academia.gal/dicionario/-/termo/demo)**. Substantivo masculino:

> **1** Ser imaxinario que representa o mal na tradición popular. 

> _O demo anda sempre tentando a xente._

---



# Intro

`arredemo` will instantly build a static site for your package, containing:

- *Docs* page, made from your repo's `README.md`
- *Demo* page, made from your demo component (who hasn't a `/demo` folder, huh?)

For example, [`arredemo` site](https://www.afialapis.com/os/arredemo/) itself has been built with `arredemo`.

# Install

```
  npm i [-D] arredemo
```

Optionally, you can install `arredemo` globally. It works too!


```
  npm i -g arredemo
```


# Build your site

This single command will do the magic:

```
  npx arredemo build
```

The first time you launch it, the `arredemo.json` file will be created. You can then tweak it manually for further builds.

An `arredemo` folder will be made, containing the static site. You may want your web server to point to `arredemo/index.html`!


# Site content

## Docs

The docs page will be made from your repo's `README.md` file.

Notice you can include several versions of your package to be documented, not just the current one. 

## Demo

### ES Modules

They are the future, so just ESM are allowed.


# Configuration options

The `arredemo.json` file will contain `arredemo`'s configuration. It is created he first time you run the build.

## UI options

### `theme`

Right now, just `default` theme is available. Other themes will be (hopefully) added in the future!

### `favicon`

Path to your [FavIcon](https://www.w3schools.com/html/html_favicon.asp) file.

### `logo`

Path to your logo file. It'll be shown in the site's header.

### `url`, `company` and `company_url`

Shown in the site's Footer.

## Docs

### `doc_versions`

Optional array of values of the versions of your package you want to show Docs for.

Current version (repo time, not necessarily published yet) will be taken by default.

### `md.strip_details_tag` and `md.keep_summary_content`

Sometimes, for the shake of a better visualization in your repo's GitHub page, you will make use of this HTML tags:

```py
  <details>
  <summary>
    Some title for a toggler
  </summary>

  A lot of lines
  Which are toggled off
  So my GitHub's page is not giant
  But at the same time my sensible content remains there

  </details>
```

If `md.strip_details_tag` is `true` (the default), `arredemo` will strip out this HTML tags, leaving the inner text. 

But, depending on how your use it, you may want to keep the content inside ```\<summary\>\<\/summary\>``` or not. Use 
`md.keep_summary_content: true` in order to do it (it defaults to `false`).

## Demo

### `demo_entry`

Path to your demo index file.

This file will make a `export default` of your React component.

Yes: in the future this will be done better and non-React stuff will be compatible too.

If `demo_entry: null`, no Demo page will be built.

## Changelog

### 1.0.2

Removed Dart Sass `legacy-js-api` warnings.

Upgraded all other dependencies.

### 1.0.0

Upgraded all dependencies.

Mainly: now React version is _18.3.1_.

### 0.0.18

React version is _16.13.1_