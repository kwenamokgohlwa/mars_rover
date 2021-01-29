describe("Rover", function() {
    const Rover = require("../../src/rover").Rover;
  
    beforeEach(function() {
        rover = new Rover();
    });
  
    it("should be able to navigate within grid - Given test case", function() {
        rover.grid = [8, 8];
        rover.position = {grid: [1, 2], direction: "E"};
        rover.commands = ["M", "M", "L", "M", "R", "M", "M", "R", "R", "M", "M", "L"];
    
        let path = rover.actionCommands(rover.commands);

        // Comment out the tests and uncomment the logs to view results

        expect(path.next().value).toEqual({ grid: [ 2, 2 ], direction: 'E' });
        expect(path.next().value).toEqual({ grid: [ 3, 2 ], direction: 'E' });
        expect(path.next().value).toEqual({ grid: [ 3, 2 ], direction: 'N' });
        expect(path.next().value).toEqual({ grid: [ 3, 3 ], direction: 'N' });
        expect(path.next().value).toEqual({ grid: [ 3, 3 ], direction: 'E' });
        expect(path.next().value).toEqual({ grid: [ 4, 3 ], direction: 'E' });
        expect(path.next().value).toEqual({ grid: [ 5, 3 ], direction: 'E' });
        expect(path.next().value).toEqual({ grid: [ 5, 3 ], direction: 'S' });
        expect(path.next().value).toEqual({ grid: [ 5, 3 ], direction: 'W' });
        expect(path.next().value).toEqual({ grid: [ 4, 3 ], direction: 'W' });
        expect(path.next().value).toEqual({ grid: [ 3, 3 ], direction: 'W' });
        expect(path.next().value).toEqual({ grid: [ 3, 3 ], direction: 'S' });

        // Uncomment logs to view results in console

        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
    });

    it("should return \"Out of Bounds\" when outside of the grid - Given test case", function() {
        rover.grid = [8, 8];
        rover.position = {grid: [1, 2], direction: "E"};
        rover.commands = ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M"];
    
        let path = rover.actionCommands(rover.commands);

        // Comment out the tests and uncomment the logs to view results

        expect(path.next().value).toEqual({ grid: [ 2, 2 ], direction: 'E' });
        expect(path.next().value).toEqual({ grid: [ 3, 2 ], direction: 'E' });
        expect(path.next().value).toEqual({ grid: [ 4, 2 ], direction: 'E' });
        expect(path.next().value).toEqual({ grid: [ 5, 2 ], direction: 'E' });
        expect(path.next().value).toEqual({ grid: [ 6, 2 ], direction: 'E' });
        expect(path.next().value).toEqual({ grid: [ 7, 2 ], direction: 'E' });
        expect(path.next().value).toEqual({ grid: [ 8, 2 ], direction: 'E' });
        expect(path.next().value).toEqual('Out of Bounds');

        // Uncomment logs to view results in console

        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);
        // console.log(path.next().value);

    });
  });
  
