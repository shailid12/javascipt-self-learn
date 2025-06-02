class Car{
    constructor (name,price,model,colour){ //initialization with one-one mapping with object that was created
        this.name = name;
        this.model = model;
        this.price = price;
        this.colour = colour;
    }

    refuel(){ //Inside a JavaScript class, the function keyword is not required when defining methods. 
    // Methods are defined using a shorthand syntax consisting of the method name followed by parentheses for parameters and curly braces for the function body.
        console.log(`car ${this.name} is wroom wroom`);
    }
}

// object creation of Car class with details and it is refered by object reference variable called c1.
const c1 = new Car("Honda",50000,"CRV","White"); 
console.log(c1.name, c1.colour, c1.model, c1.price);
c1.refuel();

// object creation of Car class with details and it is refered by object reference variable called c2.
const c2 = new Car("Toyota",40000,"rav4","Black");
console.log(c2.name, c2.colour, c2.model, c2.price);
c2.refuel();

//overloading of constructor is not allowed as class can only have one constructor. if tried it gives runtime exception.

// object creation of Car class with details and it is refered by object reference variable called c3.We have freedome of passing less number of parameters. it will just make othher parameters as undefined.
const c3 = new Car("Mazda");
console.log(c3.name, c3.colour, c3.model, c3.price); // undefined printed for other properties.
c3.refuel();