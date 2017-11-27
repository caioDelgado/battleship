module.exports = class RankService {
	constructor({RankModels}) {
		this.rankModel = RankModels.declare()
	}

	getRank(params) {
		return this.rankModel
		.find(params)
		.sort([['ranking', -1]])
	}

	insertRank (params) {
		return this.rankModel
		.create(params)
	}

}