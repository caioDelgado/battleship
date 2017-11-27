const awilix = require('awilix')
const container = awilix.createContainer()
const externalDependencies = require('./dependencies/external')
const internalDependencies = require('./dependencies/internal')

container.loadModules([
	`${__dirname}/src/services/*.js`,
	`${__dirname}/db/models/*.js`
], {
	formatName: (name, descriptor) => {
		const splat = descriptor.path.split('\\')
		const namespace = splat[splat.length - 2]
		const upperNamespace = namespace.charAt(0).toUpperCase() + namespace.substring(1)
		return name + upperNamespace
	},
	registrationOptions: {
		lifetime: awilix.Lifetime.SINGLETON
	}
})

externalDependencies.configure(container)
internalDependencies.configure(container)

module.exports = container