class Rover { 

    //- Constructor -//

    constructor(
        grid = [5, 5], 
        position = { grid: [3, 3], direction: "N"},
        commands = ["M", "R", "M", "L", "M"]) {
            this.grid = grid;
            this.position = position;
            this.commands = commands;
    }

    //- Helper Methods -//

    // Determine and Action a move
    _moveRover(command) {
        if(command == "M") {
            switch(this.position.direction) {
                case "N":
                    this.position.grid[1] = this.position.grid[1] + 1;
                    break;
                case "E":
                    this.position.grid[0] = this.position.grid[0] + 1;
                    break;
                case "S":
                    this.position.grid[1] = this.position.grid[1] - 1;
                    break;
                case "W":
                    this.position.grid[0] = this.position.grid[0] - 1;
                    break;
            }
        } else {
            console.error("Incorrect Command!");
        }

        return this.position;
    }

    // Determine and Action a change in direction
    _changeDirection(command) {
        switch(command) {
            case "R":
                switch(this.position.direction) {
                    case "N":
                        this.position.direction = "E"
                        break;
                    case "E":
                        this.position.direction = "S"
                        break;
                    case "S":
                        this.position.direction = "W"
                        break;
                    case "W":
                        this.position.direction = "N"
                        break;
                }
                break;
            case "L":
                switch(this.position.direction) {
                    case "N":
                        this.position.direction = "W"
                        break;
                    case "E":
                        this.position.direction = "N"
                        break;
                    case "S":
                        this.position.direction = "E"
                        break;
                    case "W":
                        this.position.direction = "S"
                        break;
                }
                break;
            default:
                console.error("Incorrect Command!");    
                break;
        }
        
        return this.position;
    }

    //- Methods -//    

    // Plot out detailed path using generator function
    *actionCommands() {
        for(const command of this.commands) {
            switch(command) {
                case "M":
                    if ((this.position.direction == "N" || this.position.direction == "E") && (this.position.grid[0] >= this.grid[0] || this.position.grid[1] >= this.grid[1])) {
                        return "Out of Bounds";
                    } else if ((this.position.direction == "S" || this.position.direction == "W") && (this.position.grid[0] <= 1 || this.position.grid[1] <= 1)) {
                        return "Out of Bounds";
                    } else {
                        this._moveRover(command);
                    }
                    break;
                case "R":
                    this._changeDirection(command);
                    break;
                case "L":
                    this._changeDirection(command);
                    break;
                default:
                    console.error("Incorrect Command!");
            }   

            yield this.position;
        }
    }

}

module.exports.Rover = Rover;