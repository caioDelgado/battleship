const GameService = require('../src/services/Game')

module.exports.configure = container => {
  container.registerClass({
    GameService
  })
  return container
}