module.exports = class App {
  constructor ({express, bodyParser, cors, router}) {
    this.express = express
    this.bodyParser = bodyParser
    this.cors = cors
    this.router = router
  }

  async start () {
    const app = this.express()

    app.use(this.cors())
    app.use(this.bodyParser.json({extended: true, limit: '50mb'}))
    app.use('/api', await this.router.route())

    const PORT = process.env.PORT || 3001

    app.listen(PORT)

    return PORT
  }
}