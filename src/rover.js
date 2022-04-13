const Mars = require("./mars").Mars;

class Rover { 
    //- Constructor -//

    constructor(
        mars = new Mars(5, 5), 
        position = { coordinate: [3, 3], direction: "N"},
        commands = ["M", "R", "M", "L", "M"]) {
            this.mars = mars.getGrid;
            this.position = position;
            this.commands = commands;
    }

    //- Helper Methods -//

    // Determine and Action a move
    _move(command) {
        let move = {
            "N": () => this.position.coordinate[1] = this.position.coordinate[1] + 1,
            "E": () => this.position.coordinate[0] = this.position.coordinate[0] + 1,
            "S": () => this.position.coordinate[1] = this.position.coordinate[1] - 1,
            "W": () => this.position.coordinate[0] = this.position.coordinate[0] - 1
        }

        if(command == "M") {
            move[this.position.direction]();
        }

        return this.position;
    }

    // Determine and Action a change in direction
    _turn(command) {
        let positionRight = {
            "N": () => this.position.direction = "E",
            "E": () => this.position.direction = "S",
            "S": () => this.position.direction = "W",
            "W": () => this.position.direction = "N"
        }

        let positionLeft = {
            "N": () => this.position.direction = "W",
            "E": () => this.position.direction = "N",
            "S": () => this.position.direction = "E",
            "W": () => this.position.direction = "S"
        }

        if(command === "R") {
            positionRight[this.position.direction]();
        }else if(command === "L") {
            positionLeft[this.position.direction]();
        }
        
        return this.position;
    }

    //- Methods -//    

    // Plot out detailed path using generator function
    *actionCommands() {
        let command = this.commands[0];

        let action = {
            "M": () => this._move(command),
            "R": () => this._turn(command),
            "L": () => this._turn(command)
        };

        for(command of this.commands) {
            action[command]();

            yield this.position;
        }
    }

}

module.exports.Rover = Rover;