module.exports = class UserService {
	constructor({UserModels}){
		this.userModel = UserModels.declare()
	}

	getUsers (params) {
		return this.userModel
		.find(params)
	}

	insertUser (params) {
		return this.userModel
		.create(params)
	}
}