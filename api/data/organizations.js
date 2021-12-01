const mongoCollections = require('../config/mongoCollections');
const organizations = mongoCollections.organizations;
const uuid = require('uuid');

let exportedMethods = {
	async getAllOrganizations() {
		const organizationCollection = await organizations();
		return await organizationCollection.find({}).toArray();
	},
	async getOrganizationByID(id) {
		const organizationCollection = await organizations();
		const organization = await organizationCollection.findOne({ _id: id });
		if (!organization) throw 'Organization not found';
		return organization;
	},
	async addOrganization(name, phone, email, owner, conventions) {
		/*
		String uuid
		String name
		String phone
		String email
		List<String> owner uuid
		List<String> Conventions uuid
		X List<People> Members
		*/
		const organizationCollection = await organizations();

		let newOrganization = {
			_id: uuid.v4(),
			name: name,
			phone: phone,
			email: email,
			owner: owner,
			conventions: conventions,
		};
		const newInsertInformation = await organizationCollection.insertOne(
			newOrganization,
		);
		if (newInsertInformation.insertedCount === 0) throw 'Insert failed!';

		return newOrganization;
	},
};

module.exports = exportedMethods;
