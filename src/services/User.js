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

	getUserById (id) {
		return this.userModel
		.findById(id)
	}

	verify (params) {
		return this.userModel
		.findOne({user: params.user, password: params.password})
	}
}