module.exports = class Router {
  constructor (cradle) {
    this.cradle = cradle
    this.express = cradle.express
    this.fs = cradle.fs
    this.path = cradle.path
  }

  async route () {
    const router = this.express.Router()
    const files = this.fs.readdirSync(this.path.join(__dirname, 'routes'))
    const routes = files.map(fileName => require(this.path.join(__dirname, 'routes', fileName)))
    routes.forEach(route => route(router, this.cradle))
    return router
  }
}