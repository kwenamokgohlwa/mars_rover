# Mars Rover

This is my tested solution to the Mars Rover problem. 

I built it using Test Driven Development with modern day JavaScript Development

I first structured the project for TDD using Jasmine and then planned out the main class (Rover) in pseudo code.

The class has a constructor that is flexible enough to take in variables but at the same time has default values that are realistic. 

It is accompanied by two helper functions that support the main generator function that not only determines the rovers final position but does so for every step the rover takes.

It decided to test using the given case. To accommodate the generator I tested every single step/result the generator yielded.

The code accommodates for the cases where there is wrong input as well as when the rover is out of bounds.

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

View results of generator function - Rover path, step by step until solution

- Comment out the tests (rover_spec)
- Uncomment logs to view results in console (rover_spec)

## License
[MIT](https://choosealicense.com/licenses/mit/)

