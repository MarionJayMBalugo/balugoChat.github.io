var onOff = document.getElementById('onOff');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var subs = document.getElementById('subs');
var topicR = 'balugo/fan/status'
    //for connect
onOff.addEventListener('click', function(e) {
    e.preventDefault();

    if (onOff.innerHTML == "On") {
        onOff.innerHTML = "Off"
        client.end();
        console.log('disconnected')
    } else if (onOff.innerHTML == "Off") {
        onOff.innerHTML = "On"


        client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')
        client.on("connect", function() {
            console.log("Successfully connected");

        })
        client.on("message", function(topic, payload) {
            console.log('shit')

            console.log(timestamp = moment().format('MMMM D YYYY , h:mm:ss a'))
            console.log([topic, payload + " " + timestamp].join(": "));


        })
    }

    one.addEventListener('click', function(e) {
        e.preventDefault();

        console.log("publish")
        client.publish(topicR, 'turned on at 1 ')
        console.log()
    })
    two.addEventListener('click', function(e) {
        e.preventDefault();

        console.log("publish")
        client.publish(topicR, 'turned on at 2 ')
        console.log()
    })
    three.addEventListener('click', function(e) {
        e.preventDefault();

        console.log("publish")
        client.publish(topicR, 'turned on at 3 ')
        console.log()
    })
    subs.addEventListener('click', function(e) {
        e.preventDefault();
        client.subscribe(topicR)
    });

});