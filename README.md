<h1 align="center">
  <a href="https://wayahngopi.rf.gd/">
  </a>
</h1>

<p align="center">
  <a href="https://github.com/facebook/react-native/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="React Native is released under the MIT license." />
  </a>
  <a href="https://circleci.com/gh/facebook/react-native">
    <img src="https://circleci.com/gh/facebook/react-native.svg?style=shield" alt="Current CircleCI build status." />
  </a>
  <a href="https://www.npmjs.org/package/react-native">
    <img src="https://badge.fury.io/js/react-native.svg" alt="Current npm package version." />
  </a>
  <a href="https://reactnative.dev/docs/contributing">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
</p>

## SCREENSHOOT DEMO
- <b>LOGIN </b>
![Login](Images/78211824-4655af80-74d8-11ea-837b-595ea448ffc1.jpg)

- <b> HOME </b>
![Home](Images/78211864-608f8d80-74d8-11ea-9336-0a2519708ca8.jpg)

- <b> PRODUCT </b>
![Product](Images/78211903-7e5cf280-74d8-11ea-9444-c799604adece.jpg)

- <b> Cart </b>
![Cart](Images/78211928-903e9580-74d8-11ea-8023-84147c5a502f.jpg)

- <b> Cart </b>
![Print](Images/78211928-903e9580-74d8-11ea-8023-84147c5a502f.jpg)

- <b> ACCOUNT </b>
![Account](Images/78211946-a0567500-74d8-11ea-8cc7-d9a6ef1a10e9.jpg)

- <b> HISTORY </b>
![History](Images/78211961-ab110a00-74d8-11ea-810e-2588002c531d.jpg)

## DEMO
- <b> HISTORY </b>
 <a href="https://wayahngopi.rf.gd/">

## Table Of Contents

*  [Intro](#Intro)
*  [Requirments](#Requirments)
*  [Related Projects](#Related-Projects)
*  [Dependencies](#Dependencies)
    *  [Clone Repo](#Clone-Repo)
    *  [Install Depedencies](#Install-Depedencies)
    *  [Update Depedencies](#Update-Depedencies)
    *  [Setup Environment](#Setup-Environment)
    *  [Run server development](#Run-server-development)
    *  [Build For Production](#Build-For-Production)
* [Dependencies](#Dependencies)
* [License](#License)
___
### Intro

This is a simple point of sales web application made with React.

___
### Features
- [x] Manage Product (CRUD)
- [x] Manage Product (CRUD)
- [x] Chart statistics of Revenue
- [x] Fancy UI Design
- [x] Simple Add to cart and manipulate quantity in checout
- [x] Order product
- [x] Print checkout --coming soon
- [x] History of order, weekly, and detail history
- [x] Authentication with JWT in backend
- [x] Save Auth session with redux persist --coming soon
___
### Requirments

* [Nodejs](https://nodejs.org/en/) v10 LTS version
* [Npm](https://www.npmjs.com/get-npm) package / [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) package
___

### Related Projects
This project is related to several platforms

* Backend [https://github.com/rifkiandriyanto/point-of-sale-backend](https://github.com/rifkiandriyanto/point-of-sale-backend)
* Web App [https://github.com/rifkiandriyanto/point-of-sale-frontend](https://github.com/rifkiandriyanto/point-of-sale-frontend)
___

### Installation

##### 1. Clone Repo
clone the repository

```sh
$ git clone https://github.com/rifkiandriyanto/point-of-sale-frontend
$ cd point-of-sale-frontend
```

##### Install Depedencies
Install requirement depedencies

```sh
$ npm install
```

##### Update Depedencies
Update depedencies

```sh
$ npm update
```

##### Setup Environment
Before project development or build for production, you should create new .env file, edit BASE_URL_API variable to backend server. you can found the backend server here.. [https://github.com/rifkiandriyanto/point-of-sale-backend](https://github.com/rifkiandriyanto/point-of-sale-backend)

```sh
BASE_URL_API=<Backend-api-url>
```

##### npm development
if you want start on development mode.

```sh
$ npm start
```


##### Build For Hosting in Server
build for production ready, and host ready

```sh
$ npm run build
```
___

### Dependencies

List of depedencies using in this project

| Plugin | Description |
| ------ | ------ |
| [React](https://facebook.github.io/react-native/) | Web Framework |
| [Axios](https://github.com/axios/axios) | HTTP client for request API |
| [Chartjs](https://www.npmjs.com/package/react-native-chart-kit) | Chart Statistic |
| [Redux](https://redux.js.org) | Global State Management |
| [Redux Promise Middleware](https://www.npmjs.com/package/redux-promise-middleware) | Promise handler for react redux 
| [Redux Promise Persist](https://www.npmjs.com/package/redux-promise-middleware) | Redux Persist
| [Dot Env](https://www.npmjs.com/package/redux-promise-middleware) | Dot Env

License
----

MIT


@2020 - Rifki Andriyanto
