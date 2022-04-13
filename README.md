# Mars Rover v2

This is my tested solution to the Mars Rover problem. 

I first structured the project for TDD using Jasmine and then planned out the main class (Rover) in pseudo code in the first version of the solution.

I the second version of the solution I built a mars class to accomodate multiple rovers.

The classes are dependant of each other for a reason and I avoided creating dependancies.

I removed switched statements in this version and opted for object literals for a better solution.

I added methods in the new mars class to generate, plot and display rover activity on the console.

To run the tests run;

npm test

To see usage of the solution with the given test case on Google run;

node src/main

## Installation

Use git to clone

```bash
git clone https://github.com/kwenamokgohlwa/mars_rover.git
cd mars_rover
```

Use npm to install

```bash
npm install
```

Run Tests - NPM

```bash
npm test
```

Run App - Node

```bash
node src/main
```

View results of generator function - Rover path, step by step until solution

- Comment out the tests (rover_spec)
- Uncomment logs to view results in console (rover_spec)

## License
[MIT](https://choosealicense.com/licenses/mit/)

