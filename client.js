const io = require('socket.io-client')
const chalk = require('chalk')

const sockets = []

function peer(host, port, thisHost, thisPort, peerBack) {
  return new Promise((resolve) => {
    const socket = io(`http://${host}:${port}`) 
    socket.on('connect', () => {
      socket.emit('peer', {
        host: thisHost,
        port: thisPort,
        peerBack: !!peerBack
      })
      sockets.push(socket)
      resolve()
    })
  })
}

module.exports = async (askForInput, print, thisHost, thisPort) => {
  while(true) {
    const message = await askForInput(chalk.grey('>>'))
    const peerRegex = /^\/peer (.+):(.+)$/
    const matches = message.trim().toLowerCase().match(peerRegex)
    if (matches) {
      const host = matches[1]
      const port = parseInt(matches[2])
      await peer(host, port, thisHost, thisPort)
      print(`${chalk.grey('>')} You just peered with ${host}:${port}`)
    } else {
      for (let socket of sockets) {
        socket.emit('message', {
          host: thisHost,
          port: thisPort,
          content: message.trim()
        })
      }
    }
  }
}
module.exports.peer = peer