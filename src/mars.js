class Mars { 

    //- Constructor -//

    constructor(x = 5, y = 5) {
            this.x = x;
            this.y = y;
            this.mars = this._generateGrid();
    }

    //- Helper Methods -//
    _generateGrid() {
        let grid = [];

        for(let i = 0; i < this.x; i++) {
            grid[i] = [];
            for(let j = 0; j < this.y; j++){
                grid[i][j] = "x"
            }
        }

        return grid;
    }

    //- Methods -//    
    getGrid() {
        return [this.x, this.y];
    }

    plotRover(rover, name = '1') {

        let move;
        
        do {
            move = rover.next();

            if(move.value) {
                let coordinates = move.value.coordinate;
                let x = coordinates[0];
                let y = coordinates[1]
                this.mars[y][x] = name;
            }
        } while (!move.done);
    }

    toString() {
        let output = "";
        this.mars.reverse();

        for(let i = 0; i < this.x; i++) {
            output += JSON.stringify(this.mars[i]) + "\n";
        }

        return output;
    }

}

module.exports.Mars = Mars;