const app = require('../src/app')
const database = require('../db')
const router = require('../src/router')

module.exports.configure = container => {
  container.registerClass({
    app,
    router,
    database
  })
  return container
}