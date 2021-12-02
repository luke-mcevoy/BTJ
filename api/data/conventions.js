const mongoCollections = require('../config/mongoCollections');
const conventions = mongoCollections.conventions;
const uuid = require('uuid');

let exportedMethods = {
	async getAllConventions() {
		const conventionCollection = await conventions();
		return await conventionCollection.find({}).toArray();
	},
	// async getAllConventionsForOrganization(organization_id) {
	// },
	async getConventionByID(id) {
		const conventionCollection = await conventions();
		const convention = await conventionCollection.findOne({ _id: id });
		if (!convention) throw 'Convention not found';
		return convention;
	},
	async addConvention(
		name,
		start,
		end,
		location,
		description,
		groupUUIDs,
		members,
	) {
		/*
		String uuid
		String name
        Date start
        Date end
        String Location
        String Description
        List<String> Group uuids
        List<People> members
		*/
		const conventionCollection = await conventions();

		let newConvention = {
			_id: uuid.v4(),
			name: name,
			start: start,
			end: end,
			location: location,
			description: description,
			groupUUIDs: groupUUIDs,
			members: members,
		};
		const newInsertInformation = await conventionCollection.insertOne(
			newConvention,
		);
		if (newInsertInformation.insertedCount === 0) throw 'Insert failed!';

		return newConvention;
	},
};

module.exports = exportedMethods;
