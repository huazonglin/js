//In JavaScript, the three common ways to create new objects are as follows:

var newObject = {}; // or

var newObject = Object.create(null); // or

var newObject = new Object();


// 1. Dot syntax
newObject.someKey = 'Hello World'; // Write properties var key = newObject.someKey; // Access properties

document.write(newObject.someKey);

// 2. Square bracket syntax
newObject['someKey'] = 'Hello World'; // Write properties var key = newObject['someKey']; // Access properties

document.write(' newObject[\'someKey\'] =' + newObject.someKey);