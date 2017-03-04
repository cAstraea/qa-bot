'use strict'

const apiAi = require('./helpers/api-ai')
const indicoAnalysis = require('indico.io')

function chatFlow(request, originalApiRequest) {
  console.log(JSON.stringify(request))
}

module.exports = chatFlow
