var pubsub = {};
(function (q) {
    var topics = {}, subUid = -1;
// Publish or broadcast events of interest
// with a specific topic name and arguments
// such as the data to pass along
    q.publish = function (topic, args) {
        if (!topics[topic]) {
            return false;
        }
        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;
        while (len--) {
            subscribers[len].func(topic, args);
        }
        return this;
    };
// Subscribe to events of interest
// with a specific topic name and a
// callback function, to be executed
// when the topic/event is observed

    q.subscribe = function (topic, func) {
        if (!topics[topic]) {
            topics[topic] = [];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func });
        return token;
    };

// Unsubscribe from a specific
// topic, based on a tokenized reference // to the subscription
    q.unsubscribe = function (token) {
        for (var m in topics) {
            if (topics[m]) {
                for (var i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return this;
    };
}(pubsub));


var testHandler = function (topics, data) {
    console.log(topics + ": " + data);
};

// Subscribers basically "subscribe" (or listen)
// And once they've been "notified" their callback functions are invoked

var testSubscription = pubsub.subscribe('example1', testHandler);

// Publishers are in charge of "publishing" notifications about events

pubsub.publish('example1', 'hello world!');
pubsub.publish('example1', ['test', 'a', 'b', 'c']);
pubsub.publish('example1', [
    {
        'color': 'blue' },
    {
        'text': 'hello' }
]);

// Unsubscribe if you no longer wish to be notified

pubsub.unsubscribe(testSubscription); // This will fail
pubsub.publish('example1', 'hello again! (this will fail)');


console.log("------------------------------------------------------------------------");
console.log("------------------UI notifications using pub/sub ");
console.log("------------------------------------------------------------------------");


var grid = {
    refreshData: function () {
        console.log('retrieved latest data from data cache');
        console.log('updated grid component');
    },
    updateCounter: function () {
        console.log('data last updated at: ' + getCurrentTime());
    }
};
// a very basic mediator
var gridUpdate = function (topics, data) {
    grid.refreshData();
    grid.updateCounter();
}

var dataSubscription = pubsub.subscribe('dataUpdated', gridUpdate);
pubsub.publish('dataUpdated', 'new stock data available!');
pubsub.publish('dataUpdated', 'new stock data available!');

function getCurrentTime() {
    var date = new Date(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        y = date.getFullYear(),
        t = date.toLocaleTimeString().toLowerCase()
    return (m + '/' + d + '/' + y + ' ' + t);
}

console.log("------------------------------------------------------------------------");
console.log("------------------ Taking notifications further ");
console.log("------------------------------------------------------------------------");


var grid_1 = {
    addEntry: function (data) {
        if (data !== 'undefined') {
            console.log('Entry:'
                + data.title
                + ' Changenet / %'
                + data.changenet
                + '/' + data.percentage + ' % added');
        }
    },
    updateCounter: function (timestamp) {
        console.log('grid last updated at: ' + timestamp);
    }
};
var gridUpdate_1 = function (topics, data) {
    grid_1.addEntry(data);
    grid_1.updateCounter(data.timestamp);
}
var gridSubscription = pubsub.subscribe('dataUpdated', gridUpdate_1);
pubsub.publish('dataUpdated', { title: "Microsoft shares", changenet: 4,
    percentage: 33,
    timestamp: '17:34:12' });
pubsub.publish('dataUpdated', { title: "Dell shares", changenet: 10,
    percentage: 20,
    timestamp: '17:35:16' });