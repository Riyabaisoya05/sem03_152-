// node js
const EventEmitter = require('events');// eventEmitter->class
const myEmitter = new EventEmitter();//myEmitter->object
myEmitter.on('greet', (name) => {//on->listener
    console.log(`Hello, ${name}! Welcome to ABES Engineering College`);
});
myEmitter.on('exit',()=>{
    console.log("Application Closed.");
});
myEmitter.emit('greet','2nd Year');//emit->trigger
myEmitter.emit('exit');

//half
class DOMElement extends EventEmitter{
    constructor(name){
        super();
        this.name= name;
    }
}