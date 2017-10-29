const container = require('./configureContainer')

const app = container.resolve('app')
const database = container.resolve('database')

app.start()
  .then(port => {
    console.log(`Listening on port ${port}`)
  })
  .then(database.init())
  .catch(console.error)