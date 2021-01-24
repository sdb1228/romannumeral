https://en.wikipedia.org/wiki/Roman_numerals#Vinculum
is what I used to base my Roman numeral conversion from.

# Installation
I am using node version 14.15.4. If you use nvm there is an .nvmrc file to help you get to that version.
First you will need the dependencies.
`npm install`
after installing, to start the server run
`npm start`

From there you should be able to access the server at localhost:8080

`npm test` to run the tests and `npm run coverage` to get the code coverage.

# Engineering Methodolgy
I viewed the problem in 2 parts
1. the input coming into the server
2. the converting of a number to a Roman numeral

I believed for part 1 it would make most sense to take whatever input comes in from the api endpoint and ensure
it is a number.  From there in part 2, the utility function, soul focus will be to take a number and convert it to a
Roman numeral.  I could then make clearer error messages in the controller of why their input was not correct
rather than trying to infer that from the utility

## The Utility
The way I approached the converter was by taking the Roman numerals presented in the wiki article above
 and applying them as multiples towards the input number.  Starting with the most significant Roman Numeral
 I was able to use a combination of the moduler functionality and math division to construct the Roman numeral.

# Testing Methodology
I felt the edge cases were most important (negatives, highest number, 0, NaN), from there I constructed a list
of cases to test the breadth of the function.  Anything from the transition of 4 to 5 (IV vs V) and 9 to 10 (IX vs X).
I wanted to make the testing input was pivotable and flexible to change in the future.  If, for example, a letter changes
value I would want the flexibility to add another test case or modify a specific one.  I also wanted it to be clear on the
full api of the function through the tests.

# Package layout
I packaged each logic above in its own folder (app in the app directory paired with its tests, utils in the util
directory paired with its tests)  This allows for easy migration later on (copying or duplicating folder to another
project if needed)

# Dependency attribution
3 total dependencies (2 dev 1 regular) I decided to pull in express rather than using the built in http package
given that to add endpoints in the future is easier with express (If I were adding a POST or PUT express would
allow that pivot easier than HTTP).

