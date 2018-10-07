# Neighborhood Map (React)

## Table of Content
* [About](#about)
* [What I Learned?](#what-i-learned)
* [Prerequisites](#prerequisites)
* [How to run locally?](#how-to-run-locally)
* [Other Resources](#other-resources)

## About 
This is last project of Udacity front end nanodegree. In this project, there is a map and some nearby locations are shown on map using marker. User can also search or filter the location using the sidebar.
This project is made using react , google Apis and some third party apis like foursquare.

## What I learned?
This project contains a lot of work. I have learned react in depth and how its component and state management works under the hood. I get to know about google apis and how to fetch data from third party api using `fetch` api of browser.
The main concepts are given below:-  
 * React 
 * State Management
 * Google apis
 * Foursquare api for place details

## Prerequisites
* `npm` installed version 6.2.0 or higher  
              or        
* `yarn` installed version 1.10.1 or higher

## How to run locally?

* Clone the repository:-  
  * Using SSH:-
  ```bash
  $ git clone git@github.com:aditya81070/neighborhood-map-react.git
  ```
  * Using Https:-
  ```bash
  $ git clone https://github.com/aditya81070/neighborhood-map-react.git
  ```
  * get into project directory:-
  ```bash
  $ cd neighborhood-map-react
  ```
* Install dependencies:-
  * Using `npm`:-
  ```bash
  $ npm install
  ```
  * Using `yarn`:-
  ```bash
  $ yarn install
    ```
* Run development server:-
  * If you used `npm` in previous step:-
  ```bash
  $ npm start
  ```
  * If you used `yarn` in previous step:-
  ```bash
  $ yarn start
  ```
* If browser not opened automatically go to [http://localhost:3000](http://localhost:3000)
* Now to see the functionality of service worker , build the production code:-
  * Stop the development server using `ctrl+c`
  * Build the production code:- 
    * Using `npm`:-
    ```bash
    $ npm run build
    ```
    * Using `yarn`:-
    ```bash
    yarn build
    ```
  * Install `serve` package to serve production code:-
    * Using `npm`: -
    ```bash
    $ npm i -g serve
    ```
    * Using `yarn`:-
    ```bash
    $ yarn global add serve
    ```
  * Start the production server:-
    ```bash
    $ serve -s build
    ```
  * Go to the [http://localhost:5000](http://localhost:5000)


## Other resources
* [Foursquare Place API](https://developer.foursquare.com/places-api)
* [Google Developer Documentation](https://developers.google.com/maps/documentation/javascript/tutorial)

