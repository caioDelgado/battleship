module.exports = class ShipModel {
	constructor({mongoose}) {
		this.mongoose = mongoose
		this.shipSchema = new this.mongoose.Schema({
			description: {type: String},
			length: {type: Number}
		})
	}

	declare () {
		try {
			return this.mongoose.model('Ship', this.shipSchema)
		} catch (e) {
			return this.mongoose.model('Ship')
		}
	}
}
