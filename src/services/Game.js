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
            user.ships = params.ships
            user.life = params.life
          }
          return user
        })
        game.save()
  		}
  	})
  }

  async makeAMove (params) {
    const game = await this.gameModel.findById(params._id)
    let hit = 0
    const users = game.users.map(user => {
      if (user.id != params.user)
        user.ships.map(ship => {
          ship.coordinates.map(position => {
            if (position.x == params.move.x && position.y == params.move.y) {
              if (!position.hasHitten){
                position.hasHitten = true
                hit = 1
              } else hit = 2
            }
            return position
          })
          if(hit === 1) ship.life--
          return ship
        })
      if(hit === 1) user.life--
      return user
    })
    await this.gameModel.findByIdAndUpdate(params._id, {$set: {users: users}})
    return hit
  }
}