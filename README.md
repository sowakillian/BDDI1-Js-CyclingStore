# Cycling-Project-Js

This project is a front-end project developed in Javascript during my webfront course in my school **Les Gobelins**.

## Table of contents
* [Documentation](#documentation)
* [Installation](#installation)
* [Launch the app](#applaunch)
* [Build prod version](#buildprodversion)

### Documentation
#### Style
Style is organized with components, there are 4 folders
* **abstracts** : withs animations, mixins and variables
* **base** : all basics things but important for the project
* **components** : all components separated by pages and by pages parts
* **layouts** : for global layouts (header, footer etc..)

Finally, all is imported into **index.scss**

#### Scripts
Scripts are organized with components, model, const and utils, there are 4 folders
* **components** : all components separated by pages and by pages parts
* **const** : bridge between model and components
* **model** : to manage the components
* **utils** : functions which could be useful in all the project

Finally, all is imported into **index.js**

#### Datas
Datas are stocked in JSON in the folder datas.
The util Loader.js is used to load datas into the components

Finally, all is imported into **index.js**

### Installation

```
npm install
```

### Launch the app

```
npm start
```

### Build Prod Version

```
npm run build
```


