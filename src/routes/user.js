module.exports = (router, {UserServices: userService}) => {
	router.get('/users', (req, res, next) => {
		userService.getUsers(req.query)
		.then(result => res.status(200).json({data: result}))
		.catch(next)
	})

	router.post('/users', (req, res, next) => {
		userService.insertUser(req.body)
		.then(result => res.status(201).json({data: result}))
		.catch(next)
	})

	router.get('/user/:id', (req, res, next) => {
		userService.getUserById(req.params.id)
		.then(result => res.status(200).json({data: result || {}}))
		.catch(next)
	})

	router.get('/login', (req, res, next) => {
		userService.verify(req.query)
		.then(result => {
			if (result) res.status(200).json({user: result.user})
			else res.status(401).json({message: 'Usuário ou senha inválidos'})
		})
	})
}