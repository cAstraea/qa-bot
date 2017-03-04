'use strict'

const botBuilder = require('claudia-bot-builder')
const chatFlow = require('./lib/chat-flow')

module.exports = botBuilder((request) => `Hello from Guidable Co Bot! Your request was: ${request.text}`)
