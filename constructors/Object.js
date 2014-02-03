function Car(model, year, miles) {
    this.model = model;
    this.year = year; this.miles = miles;
    this.toString = function () {
        return this.model + " has done " + this.miles + " miles"; };
}
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());




function CarA(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}
// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object

 CarA.prototype.toString = function () {
     return this.model + " has done " + this.miles + " miles";
 };

var civicA = new CarA("Honda Civic", 2009, 20000);
var mondeoA = new CarA("Ford Mondeo", 2010, 5000);

console.log(civicA.toString());