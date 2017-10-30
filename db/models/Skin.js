module.exports = class SkinModel {
	constructor({mongoose}){
		this.mongoose = mongoose
		this.skinSchema = new this.mongoose.Schema({
			description: {type: String}
		})
	}

	declare () {
		try {
			return this.mongoose.model('Skin', this.skinSchema)
		} catch (e) {
			return this.mongoose.model('Skin')
		}
	}
}