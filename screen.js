const getInput = require('wait-for-user-input')
const readline = require('readline')
const chalk = require('chalk')
const portFinder = require('portfinder')

const client = require('./client')
const server = require('./server')

let currentPrompt

async function askForInput(prompt) {
  currentPrompt = prompt
  const input = await getInput(prompt + ' ')
  currentPrompt = undefined
  return input
}

function print(message) {
  if (currentPrompt) {
    readline.clearLine(process.stdout, 0)
    readline.cursorTo(process.stdout, 0)
    console.log(message)
    process.stdout.write(currentPrompt + ' ')
  } else {
    console.log(message)
  }
}

module.exports = async (args) => {
  print(`${chalk.bold('P2PSC')} :: Point to point secure chat`)

  let thisPort
  let displayPort
  if (args[0] === 'ngrok' && args[1]) {
    thisPort = parseInt(args[1])
    displayPort = 80
    print(`${chalk.grey('>')} Ngrok mode: run ${chalk.cyan(`ngrok http ${thisPort}`)} before proceeding`)
  } else if (args[0]) {
    thisPort = parseInt(args[0])
    displayPort = thisPort
  } else {
    thisPort = await portFinder.getPortPromise()
    displayPort = thisPort
  }

  const thisHost = await askForInput(`${chalk.grey('>')} Please enter your hostname:`)

  client(askForInput, print, thisHost, displayPort)
  server(print, client.peer, thisHost, thisPort, displayPort)
}