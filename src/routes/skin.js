module.exports = (router, {SkinServices: skinService}) => {
	router.get('/skins', (req, res, next) => {
		skinService.getSkins(req.query)
		.then(result => res.status(200).json({data: result}))
		.catch(next)
	})

	router.post('/skins', (req, res, next) => {
		skinService.insertSkin(req.body)
		.then(result => res.status(200).json({data: result}))
		.catch(next)
	})
}