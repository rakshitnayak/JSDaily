// JavaScript provides the call(), apply(), and bind() methods for setting the this context within a function. 
// These methods are especially useful when working with object-oriented code or handling different function contexts. 


// example:

const person={
    name:"Rakshit",
    age:24,
}

function introduce(intrest, lieterature){
 console.log(`Hi this is ${this.name} & my age is ${this.age}. I like ${intrest} & ${lieterature}`)
}

// Call : Immediately invoked function with specified THIS
introduce.call(person, "cricket", "english");

// Apply : Same as call, but takes arguments as an array
introduce.apply(person, ["cricket", "english"])

//Bind : Returns a new function which has its THIS value set to be provided value
const boundIntroduce = introduce.bind(person, "cricket");
boundIntroduce("literature")