const mongoose = require('mongoose')

const Schema = mongoose.Schema

const gameSchema = new Schema({
  codeSigma: {type: Number, required: [true, 'A SIGMA code is required!']},
  codeSoc: {type: String},
  cid: {type: String},
  codeTableSigma: {type: Number},
  description: {type: String},
  valueCh: {type: Number},
  codeAmb: {type: Number},
  enable: {type: Boolean}
})

try {
  module.exports = mongoose.model('Game', gameSchema)
} catch (e) {
  module.exports = mongoose.model('Game')
}