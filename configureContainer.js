const awilix = require('awilix')
const container = awilix.createContainer()
const externalDependencies = require('./dependencies/external')
const internalDependencies = require('./dependencies/internal')
const serviceDependencies = require('./dependencies/services')
const modelDependencies = require('./dependencies/models')

externalDependencies.configure(container)
serviceDependencies.configure(container)
internalDependencies.configure(container)
modelDependencies.configure(container)

module.exports = container