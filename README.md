# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
--------------------
## I completed  the project by following steps to complete the game.
+ after I went through the instructions , I got a git hub link `http://github.com/udacity/fend-project-memory-game` and got the project file  in rubric structure which was provided by Udacity .
+ By seeing it get to know about
  1. `css/app.css`
  2. `img`
  3. `js/app.js`
  4. `index.html`(root file)
  5. `README.md`
### code changes an implementation

+ And i came to know that most of the modifications are from `ap.js`.
+ observed `shuffle` function which was provided by stackflow in `app.js`,and created a array for listing all the cards named it as `childList`.
+ then i used the spread operator to convert the HTMLCollection into an array.
+ implemented code for refreshing game by `document.location.reload` for refreshing the page, then i initialized function for all cards.  
+ Added a `click` EventListener to each card with a function `showCard`.  
+ then i went to the timer function and initialized timer when the first card was clicked.
+  then i kept a class  to disable card as if two cards matches and are disabled by the class `disable`.
+ And then i given a method to close the cards if they doesn't matches.
+ then i  started working on star counter, and  then initially the star count will be 3
   if the moves count is more than 15 then you lost one star and if moves count is more than 17 then you will lose another star
+ then i given a timer which shows the time taken to complete game
+ after completing game the timer should stop by using `clearInterval`.
+ And i given reload function for reloading game to start from starting.
+ then i wrote a alert to give a note of completion of game by showing the time taken and stars count using `sweetalert`.
