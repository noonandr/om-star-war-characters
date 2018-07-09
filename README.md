# Ometria Star War Characters
Display a list of Star War characters from public API with the ability to search

## Notes

* The characters API has CORS origin issue and so I switched to using planets instead as for some strange reason there were no CORS restrictions on the planet calls (I hope this is not a problem)
* I spent nearly an hour looking into trying to find a solution to the CORS issues and a few different NPM modules but all had similar CORS issues
* Everything is on the master branch, normally I would branch from master and merge back in but that seems unnecessary in this case
* Excluding that time I spent a little over two hours actually coding
* I have only recently started to trying out Vue and so the project is not as neat and structured as I would like
* I'm also not used to ES6, so I have probably made some basic syntax error and improvements that could be made
* I should use a Mixin (Service / Model layer in Vue) for the API calls rather than have them in the main component, then have the main component do make calls to that Mixin but as I am not familiar with Vue I didn't spend too much time trying set up a Mixin
* There is no CSS as I was focusing on functionality and did not want to go too far over the time stated
* The table is very basic and therefore column widths etc change
* I have spent some time cleaning up the code for the UX of the pagination but the rest of the pages UX and styling is very minimal
* I have listed a story below to add a search component but again would require more time
* I would most likely also add a pagination component with more time
* I am happy to spend some time working on the styling and CSS if you would like


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
