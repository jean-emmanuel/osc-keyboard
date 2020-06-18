// osc udp input port
module.exports.port = 5555

// osc to keystrokes routing function
module.exports.route = function(key, address, args) {

    if (address === '/keys') {

        key.sendCombination(args)

    }

}
