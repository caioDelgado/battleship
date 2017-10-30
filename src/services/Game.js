module.exports = class GameService {
  constructor ({GameModels}) {
    this.gameModel = GameModels.declare()
  }

  getGames (params) {
    return this.gameModel
    .find(params)
    .populate('users.ships.id')
    .populate('users.id')
  }

  startGame (params) {
  	const args = {
  		status: 'starting',
  		users: [{id: params.user1}, {id: params.user2}]
  	}

  	return this.gameModel
  	.create(args)
  }
}