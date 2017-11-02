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

  initializeShips (params) {
  	return this.gameModel.findById(params._id, (err, game) => {
  		if (err) return err
  		else {
        game.users = game.users.map(user => {
          if (user.id == params.user) {
            user.ships = params.ship
            user.life = params.life
          }
          return user
        })
        game.save()
  		}
  	})
  }
}
