// dependencies

const osc = require('osc')
    , key = require('node-key-sender')
    , config = require('./config')

// osc setup

var udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: config.port,
    metadata: false // https://github.com/colinbdclark/osc.js#messages
});


udpPort.on("message", function (oscMsg, timeTag, info) {

    var {address, args} = oscMsg

    config.route(key, address, args)

})

udpPort.open()

console.log(`Listening on port ${config.port}... (ctrl+c to exit) `)
