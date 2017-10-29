module.exports = class Database {
  constructor ({mongoose, fs, path}) {
    this.mongoose = mongoose
    this.fs = fs
    this.path = path
  }

  async init () {
    this.dbUri = process.env.MONGO_URI || 'mongodb://localhost:27017/battleship'
    this.mongoose.Promise = global.Promise
    this.mongoose.connect(this.dbUri, {
      useMongoClient: true
    })
    this.mongoose.connection.on('connected', () =>
      console.log('Mongoose default connection open to ', this.dbUri)
    )
    this.mongoose.connection.on('error', err =>
      console.log('Mongoose default connection error: ', this.err)
    )
    this.mongoose.connection.on('disconnected', () =>
      console.log('Mongoose default connection disconnected')
    )
    this.mongoose.connection.on('open', () =>
      console.log('Mongoose default connection is open')
    )

    process.on('SIGINT', () =>
      this.mongoose.connection.close(() => {
          console.log('Mongoose default connection disconnected through app termination')
          process.exit(0)
        }
      ))
  }
}