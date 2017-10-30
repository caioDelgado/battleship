module.exports = class GameModel {
  constructor({mongoose, ShipModels, UserModels, SkinModels}){
    this.mongoose = mongoose
    UserModels.declare()
    ShipModels.declare()
    SkinModels.declare()
    this.gameSchema = new this.mongoose.Schema({
      status: {type: String, required: [true, 'A status is required']},
      skin: {type: this.mongoose.Schema.Types.ObjectId, ref: 'Skin'},
      users: [{
        _id: false,
        id: {type: this.mongoose.Schema.Types.ObjectId, ref: 'User'},
        name: {type: String},
        life: {type: Number},
        ships: [{
          _id: false,
          id: {type: this.mongoose.Schema.Types.ObjectId, ref: 'Ship'},
          life: {type: Number},
          coordinates: [{
            x: {type: Number},
            y: {type: Number}
          }]
        }]
      }]    
    })
  }

  declare () {
    try {
      return this.mongoose.model('Game', this.gameSchema)
    } catch (e) {
      return this.mongoose.model('Game')
    }
  }
}
