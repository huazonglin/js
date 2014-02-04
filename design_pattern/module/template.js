var someModule = (function () {
// private attributes
    var privateVar = 5;
// private methods
    var privateMethod =
        function () {
            return 'Private Test';
        };

    return {
// public attributes
        publicVar: 10,
// public methods
        publicMethod: function () {
            return ' Followed By Public Test ';

        },

// let's access the private members
        getData: function () {
            return privateMethod() + this.publicMethod() + privateVar;

        }
    }
})(); // the parens here cause the anonymous function to execute and return

console.log(someModule.getData());



