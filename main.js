'use strict'

var cool = require('cool-ascii-faces')

exports.handler = function(event, context, callback) {
  var response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    },
    body: `
      <body style="background: papayawhip; margin: 0">
        <div style="display: flex; align-items: center; justify-content: center; height: 100vh">
          <p style="text-align: center; font-size: 72px;">${cool()}</p>
        </div>
      </body>
    `
  }
  callback(null, response)
}
