# Ometria Star War Characters
Display a list of Star War characters from public API with the ability to search

## Notes

* The characters API has CORS origin issue and so I switched to using planets instead (I hope this is not a problem)
* I spent nearly an hour looking into trying to find a solution and a few different NPM modules but all had CORS problems
* Excluding that time I spent a little over two hours coding
* Trying out Vue so not as structured as I would like
* I'm also not used to ES6, so there are probably a some basic syntax improvements that could be make
* Should use a Mixin (a Service / Model layer in Vue) for the API calls and have the main component do that but as I am not familiar with Vue I didn't spend too much time trying to do that
* No CSS as I was focusing on functionality and did not want to go too far over the time stated
* The table is very basic and therefore column widths etc change
* I have spent some time cleaning up the UX of the pagination but the rest of the pages UX and styling is minimal
* I originally listed a story below to add a search component but again would require more time
* I would also add a pagination component


## Installation

cd into root folder:

```
$ cd om-star-war-characters
```

Install npm modules:


```
$ npm install
```

## Run Server

To run the server:

```
$ npm run serve
```
It will probably be running on http://localhost:8080/

## Stories

> OM-001 create new Vue app

> OM-002 setup vue to clean setup

> OM-003 service to return list of characters

> OM-004 service to search for character

> OM-005 component to display table of characters

> OM-006 component for character search
