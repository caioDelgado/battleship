module.exports = (router, {ShipServices: shipService}) => {
	router.get('/ships', (req, res, next) => {
		shipService.getShips(req.query)
		.then(result => res.status(200).json({data: result}))
		.catch(next)
	})

	router.post('/ships', (req, res, next) => {
		shipService.insertShip(req.body)
		.then(result => res.status(200).json({data: result}))
		.catch(next)
	})

	router.put('/ships', (req, res, next) => {
		shipService.updateShip(req.body)
		.then(result => res.status(200).json({data: result}))
		.catch(next)
	})
}