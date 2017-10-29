const GameModel = require('../db/models/Game')

module.exports.configure = container => {
  container.registerValue({
    GameModel
  })
  return container
}