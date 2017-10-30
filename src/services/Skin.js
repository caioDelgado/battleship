module.exports = class SkinService {
	constructor({SkinModels}){
		this.skinModel = SkinModels.declare()
	}

	getSkins (params) {
		return this.skinModel
		.find(params)
	}

	insertSkin (params) {
		return this.skinModel
		.create(params)
	}
}