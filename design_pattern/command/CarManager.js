(function () {

    var CarManager = {

        // 请求信息
        requestInfo: function (model, id) {
            return 'The information for ' + model +
                ' with ID ' + id + ' is foobar';
        },

        // 购买汽车
        buyVehicle: function (model, id) {
            return 'You have successfully purchased Item '
                + id + ', a ' + model;
        },

        // 组织view
        arrangeViewing: function (model, id) {
            return 'You have successfully booked a viewing of '
                + model + ' ( ' + id + ' ) ';
        }
    };

})();

