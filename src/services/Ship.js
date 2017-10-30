module.exports = class ShipService {
	constructor ({ShipModels}) {
		this.shipModel = ShipModels.declare()
	}

	getShips (params) {
		return this.shipModel
		.find(params)
	}

	insertShip (params) {
		return this.shipModel
		.create(params)
	}

	updateShip (params) {

		this.shipModel.findById(params._id, (err, ship) => {
			if (err) return err
			else {
				ship.description = params.description || ship.description
				ship.length = params.length || ship.length
				
				return ship.save()	
			}
		})

		const id = params._id
		delete params._id

		return this.shipModel
		.findByIdAndUpdate(id, {$set: {params}})
	}
}