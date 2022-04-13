
const Rover = require("./rover").Rover;
const Mars = require("./mars").Mars;

let mars = new Mars(5, 5);
let rover1 = new Rover(mars, { coordinate: [1, 2], direction: "N"}, ["L","M","L","M","L","M","L","M","M"]);
let rover2 = new Rover(mars, { coordinate: [3, 3], direction: "E"}, ["M","M","R","M","M","R","M","R","R","M"]);

let path1 = rover1.actionCommands();
let path2 = rover2.actionCommands();

mars.plotRover(path1,"1");
mars.plotRover(path2,"2");

console.log(mars.toString());

