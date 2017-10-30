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
			const users = [
	  			{
	  				id: params.userId1,
		  			life: params.life1,
		  			ships: params.ships1
		  		},
		  		{
		  			id: params.userId2,
		  			life: params.life2,
		  			ships: params.ships2
		  		}
	  		]
			game.users = users
			return game.save()	
		}
	})
  }
}
