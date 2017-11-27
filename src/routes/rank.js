module.exports = (router, {RankServices: rankService}) => {
	router.get('/rank', (req, res, next) => {
		rankService.getRank(req.query)
		.then(result => res.status(200).json({data: result}))
		.catch(next)
	})

	router.post('/rank', (req, res, next) => {
		rankService.insertRank(req.body)
		.then(result => res.status(201).json({data: result}))
		.catch(next)
	})
}