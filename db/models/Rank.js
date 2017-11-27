module.exports = class RankModel {
	constructor ({mongoose, UserModels}) {
		this.mongoose = mongoose
		UserModels.declare()
		this.rankModel = new this.mongoose.Schema({
			user: {type: String},
			ranking: {type: Number}
		})
	}

	declare () {
		try {
			return this.mongoose.model('Rank', this.rankModel)
		} catch (e) {
			return this.mongoose.model('Rank')
		}
	}
}