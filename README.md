# js-app 

A pure javascript design pattern ( modular ) for writing web app.

## Dev Setup

```

$ git clone https://github.com/maninder-singh/js-app.git 
$ cd js-app
$ npm install
$ npm run build
$ npm run dev

```

## Setup Nightwatch ( e2e testing )

* Create new directory drivers.  
```
$ cd js-app
$ mkdir drivers

``` 

* Download latest [Selenium](http://selenium-release.storage.googleapis.com/index.html) Server jar and copy inside `js-app/drivers`.
* Download latest [Chrome](http://chromedriver.storage.googleapis.com/index.html) drivers and extact and copy inside `js-app/drivers` .
* Update selenium server jar version in `js-app/nightwatch.json`.
* Run Test `npm run nightwatch`