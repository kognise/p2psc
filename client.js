const io = require('socket.io-client')
const chalk = require('chalk')

const sockets = []

function peer(host, port, thisHost, displayPort, peerBack) {
  return new Promise((resolve) => {
    const socket = io(`http://${host}:${port}`) 
    socket.on('connect', () => {
      socket.emit('peer', {
        host: thisHost,
        port: displayPort,
        peerBack: !!peerBack
      })
      sockets.push(socket)
      resolve()
    })
  })
}

module.exports = async (askForInput, print, thisHost, displayPort) => {
  while(true) {
    const message = await askForInput(chalk.grey('>>'))
    const peerRegex = /^\/peer (.+):(.+)$/
    const matches = message.trim().toLowerCase().match(peerRegex)
    if (matches) {
      const host = matches[1]
      const port = parseInt(matches[2])
      await peer(host, port, thisHost, displayPort)
      print(`${chalk.grey('>')} You just peered with ${host}:${port}`)
    } else {
      for (let socket of sockets) {
        socket.emit('message', {
          host: thisHost,
          port: displayPort,
          content: message.trim()
        })
      }
    }
  }
}
module.exports.peer = peer