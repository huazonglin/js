(function() {
    function_a( {
         name : '1.0',

        initialize1: function () {
            alert( "initialize from Function2");
        },

        initialize2: function() {
            alert( " initialize2 from Function2");
        }
    })
}).call(this);