const getInput = require('wait-for-user-input')
const readline = require('readline')
const chalk = require('chalk')

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

module.exports = async () => {
  print(`${chalk.bold('P2PSC')} :: Point to Point Secure Chat`)
  const thisHost = await askForInput(`${chalk.grey('>')} Please enter your hostname:`)
  const thisPort = Math.floor(Math.random() * 25566)

  client(askForInput, print, thisHost, thisPort)
  server(print, client.peer, thisHost, thisPort)
}