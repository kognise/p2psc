const io = require('socket.io')()
const chalk = require('chalk')

module.exports = (print, peer, thisHost, thisPort) => {
  io.on('connection', (socket) => {
    socket.on('peer', ({ host, port, peerBack }) => {
      if (!peerBack) {
        peer(host, port, thisHost, thisPort, true)
        print(`${chalk.grey('>')} You just peered with ${host}:${port}`)
      }
    })

    socket.on('message', ({ host, port, content }) => {
      print(`${chalk.bold(`${host}:${port}`)} ${content}`)
    })
  })

  io.listen(thisPort)
  print(`${chalk.grey('>')} Server is ready!`)
  print(`${chalk.grey('>')} Tell your friends to run ${chalk.cyan(`/peer ${thisHost}:${thisPort}`)} to chat with you`)
}