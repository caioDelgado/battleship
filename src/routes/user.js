module.exports = (router, {UserServices: userService}) => {
	router.get('/users', (req, res, next) => {
		userService.getUsers(req.query)
		.then(result => res.status(200).json({data: result}))
		.catch(next)
	})

	router.post('/users', (req, res, next) => {
		userService.insertUser(req.body)
		.then(result => res.status(200).json({data: result}))
		.catch(next)
	})
}