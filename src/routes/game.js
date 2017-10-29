module.exports = (router, {GameService: gameService}) => {

  router.get('/games', (req, res, next) => {
    gameService.getGames(req.query)
      .then(result => {
        return res.status(200).json({data: result})
      })
      .catch(next)
  })

}