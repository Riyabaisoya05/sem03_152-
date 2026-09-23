const EventEmitter = require("events");

const eventEmitter = new EventEmitter();
eventEmitter.on("login", () => {
    console.log("Student logged successfully");
});

eventEmitter.on("assignment", () => {
    console.log("Assignment Submitted");
});

eventEmitter.on("logout", () => {
    console.log("Student logged Out");
});

eventEmitter.on("exit", () => {
    console.log("Exiting application");
});

console.log("Student Activity Monitoring System\n");

eventEmitter.emit("login");
eventEmitter.emit("assignment");
eventEmitter.emit("logout");
eventEmitter.emit("exit");