const mongoCollections = require('../config/mongoCollections');
const groups = mongoCollections.groups;
const uuid = require('uuid');

let exportedMethods = {
	async getAllGroups() {
		const groupCollection = await groups();
		return await groupCollection.find({}).toArray();
	},
	async getGroupByID(ID) {
		const groupCollection = await groups();
		const group = await groupCollection.findOne({ _id: id });
		if (!group) throw 'Organization not found';
		return group;
	},
	async addGroup(name) {
		/*
		UUID.v4 uuid
        String name
		*/
		const groupCollection = await groups();

		let newGroup = {
			_id: uuid.v4(),
			name: name,
		};

		const newInsertInformation = await groupCollection.insertOne(newGroup);
		if (newInsertInformation.insertedCount === 0) throw 'Insert failed!';

		return newGroup;
	},
};

module.exports = exportedMethods;
