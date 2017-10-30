module.exports = (router, {GameServices: gameService}) => {
  router.get('/games', (req, res, next) => {
    gameService.getGames(req.query)
      .then(result => res.status(200).json({data: result}))
      .catch(next)
  })

  router.post('/games', (req, res, next) => {
  	gameService.startGame(req.body)
  	.then(result => res.status(200).json({data: result}))
  	.catch(next)
  })

  router.put('/initializeShips', (req, res, next) => {
  	gameService.initializeShips(req.body)
  	.then(result => res.status(200).json({data: result}))
  	.catch(next)
  })
}