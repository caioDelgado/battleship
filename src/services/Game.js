module.exports = class GameService {
  constructor ({GameModel}) {
    this.gameModel = GameModel
  }

  getGames (params) {
    return this.gameModel.find(params)
  }
}