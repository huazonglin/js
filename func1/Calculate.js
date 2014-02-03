var Calculate = FunctionH.overload1({
    'number,number': function () {
        return arguments[0] + arguments[1];
    },
    'number,number,number': function () {
        return arguments[0] * arguments[1] * arguments[2];
    }
});

alert(Calculate(1,2));