function createComparisonFunction(propertyName) {
     function f1 (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];

        if(value1 < value2) {
            return -1;
        }else if (value1 > value2) {
            return 1;
        }else {
            return 0;
        }
    }
    return f1;

}

 compare = createComparisonFunction("name");
 result = compare({name:1}, {name:10});
 alert(result);

 result1 = compare({name:11}, {name:10});
 alert(result1);