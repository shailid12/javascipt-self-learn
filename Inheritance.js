//grandparent class
class Automobile{
    constructor(vinNumber){
        this.vinNumber=vinNumber;
    }
    userVin(){
        console.log("user requires Vin " + this.vinNumber)
    }
}

//parent (Super Class)

class Vehicle extends Automobile{
    constructor(make,model,year){
        super("VIN324fhtkslg");//calling constructor of parent class - Automobile Class
        this.make=make;
        this.model=model;
        this.year=year;
    }

    getInfo(){
        return `${this.make},${this.model},${this.year}`;
    }
    startEngine(){
        console.log("Engine started...");
    }
    stopEngine(){
        console.log("Engine stopped...");
    }
}


//Child class

class Car extends Vehicle{
    constructor(make,model,year,fuelType){
       super(make,model,year); //calling constructor of parent class by super keyword - Vehical class
        this.fuelType =fuelType;
    }

    driverCar(){
        console.log("driving the car... "+ this.model + "using " +this.fuelType);
    }
}

//Child class

class Truck extends Vehicle{
    constructor(make,model,year,loadCapacity){
       super(make,model,year); //calling constructor of parent class by super keyword - Vehical
        this.loadCapacity =loadCapacity;
    }

    driverTruck(){
        console.log("driving the truck... "+ this.model+ " Capacity "+ this.loadCapacity);
    }
}


//creating objects with new word
const c1 = new Car("toyota","Rav4",1990,"petrol","VIN1234556");
c1.startEngine();
c1.driverCar();
c1.stopEngine();
console.log(c1.getInfo()); //here need to use consol.log as it is returning and we want to print returned value. Since patrol is  not returned it will not print that.
c1.userVin(); //accessing grandparents property

const t1 = new Truck("Tata","Sumo",2020,5,"VIN12345");
t1.startEngine();
t1.driverTruck();
t1.stopEngine();
console.log(t1.getInfo());//here need to use consol.log as it is returning and we want to print returned value. Since loadcapacity is  not returned it will not print that.
t1.userVin();


//one child class cannot have more than one parent classes  - meaning multiple inheritance is not allowed in JS
//However to overcome there is an option to use Mixin class
/*Multiple-inheritance is not supported by Javascript by default. 
But sometimes we need to mix multiple object properties into a single object. 
Object property sharing can be done using mixins. 
The definition of mixins can be stated as mixins is a class that contains methods that can be used by other classes without inheriting from that class.
 The methods in mixin provide certain behavior which is not used alone but can be used to add these behaviors to other classes.
*/