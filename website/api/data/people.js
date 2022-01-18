const mongoCollections = require('../config/mongoCollections');
const people = mongoCollections.people;
const uuid = require('uuid');

let exportedMethods = {
	async getAllPeople() {
		const peopleCollection = await people();
		return await peopleCollection.find({}).toArray();
	},
	async getGroupByID(id) {
		const peopleCollection = await people();
		const people = await peopleCollection.findOne({ _id: id });
		if (!people) throw 'People not found';
		return people;
	},
	async addPerson(name) {
		/*
		UUID.v4 uuid
        String name
		*/
		const peopleCollection = await people();

		let newPeople = {
			_id: uuid.v4(),
			name: name,
		};

		const newInsertInformation = await peopleCollection.insertOne(newPeople);
		if (newInsertInformation.insertedCount === 0) throw 'Insert failed!';

		return newPeople;
	},
};

module.exports = exportedMethods;
