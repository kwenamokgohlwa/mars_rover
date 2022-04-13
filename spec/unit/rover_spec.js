describe("Rover", function() {
    const Rover = require("../../src/rover").Rover;
    const Mars = require("../../src/mars").Mars;
  
    beforeEach(function() {
        mars = new Mars(5, 5);
        rover1 = new Rover(mars, { coordinate: [1, 2], direction: "N"}, ["L","M","L","M","L","M","L","M","M"]);
        rover2 = new Rover(mars, { coordinate: [3, 3], direction: "E"}, ["M","M","R","M","M","R","M","R","R","M"]);
    });
  
    it("rover 1 should be able to navigate within grid", function() {
        let path = rover1.actionCommands();

        // Comment out the tests and uncomment the logs to view results

        expect(path.next().value).toEqual({ coordinate: [ 1, 2 ], direction: 'W' });
        expect(path.next().value).toEqual({ coordinate: [ 0, 2 ], direction: 'W' });
        expect(path.next().value).toEqual({ coordinate: [ 0, 2 ], direction: 'S' });
        expect(path.next().value).toEqual({ coordinate: [ 0, 1 ], direction: 'S' });
        expect(path.next().value).toEqual({ coordinate: [ 0, 1 ], direction: 'E' });
        expect(path.next().value).toEqual({ coordinate: [ 1, 1 ], direction: 'E' });
        expect(path.next().value).toEqual({ coordinate: [ 1, 1 ], direction: 'N' });
        expect(path.next().value).toEqual({ coordinate: [ 1, 2 ], direction: 'N' });
        expect(path.next().value).toEqual({ coordinate: [ 1, 3 ], direction: 'N' });

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
    });

    it("rover 2 should be able to navigate within grid", function() {
        let path = rover2.actionCommands();

        // Comment out the tests and uncomment the logs to view results

        expect(path.next().value).toEqual({ coordinate: [ 4, 3 ], direction: 'E' });
        expect(path.next().value).toEqual({ coordinate: [ 5, 3 ], direction: 'E' });
        expect(path.next().value).toEqual({ coordinate: [ 5, 3 ], direction: 'S' });
        expect(path.next().value).toEqual({ coordinate: [ 5, 2 ], direction: 'S' });
        expect(path.next().value).toEqual({ coordinate: [ 5, 1 ], direction: 'S' });
        expect(path.next().value).toEqual({ coordinate: [ 5, 1 ], direction: 'W' });
        expect(path.next().value).toEqual({ coordinate: [ 4, 1 ], direction: 'W' });
        expect(path.next().value).toEqual({ coordinate: [ 4, 1 ], direction: 'N' });
        expect(path.next().value).toEqual({ coordinate: [ 4, 1 ], direction: 'E' });
        expect(path.next().value).toEqual({ coordinate: [ 5, 1 ], direction: 'E' });

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
    });


  });
  
