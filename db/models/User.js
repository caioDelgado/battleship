module.exports = class UserModel {
	constructor({mongoose}){
		this.mongoose = mongoose
		this.userSchema = new this.mongoose.Schema({
			user: {type: String, required: [true, 'A userName is required']},
			password: {type: String, required: [true, 'A password is required']}
		})
	}

	declare () {
		try {
			return this.mongoose.model('User', this.userSchema)
		} catch (e) {
			return this.mongoose.model('User')
		}
	}
}