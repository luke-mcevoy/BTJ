const dbConnection = require('../config/mongoConnection');
const data = require('../data');
const organizations = data.organizations;
const groups = data.groups;
const conventions = data.conventions;
const people = data.people;
const uuid = require('uuid');

const main = async () => {
	const db = await dbConnection();
	await db.dropDatabase();

	/*
		UUID.v4 uuid
        String name
	*/
	const owner = await people.addPerson('Luke');

	const members = [];
	for (peer of [
		'Dom',
		'Sean',
		'Bhagy',
		'Glen',
		'Chris',
		'Kishan',
		owner.name,
	]) {
		let tmp = await people.addPerson(peer);
		members.push(peer);
	}
	const groupUUIDs = [];
	for (letter of ['a', 'b', 'c', 'd', 'e']) {
		let tmp = await groups.addGroup(letter);
		groupUUIDs.push(tmp._id);
	}

	/*
		UUID.v4 uuid
        Date start
        Date end
        String Location
        String Description
        List<String> Group uuids
        List<People> members
		*/
	const convs = await conventions.addConvention(
		new Date(2021, 1, 1),
		new Date(2021, 1, 2),
		'NYC',
		'Fun',
		groupUUIDs,
		members,
	);

	/*
		UUID.v4 uuid
		String name
		String phone
		String email
		List<String> owner uuid
		List<String> Conventions uuid
		X List<People> Members
	*/
	const stevens = await organizations.addOrganization(
		'Stevens',
		Math.floor(100000000 + Math.random() * 900000000),
		'email@gmail.com',
		owner,
		[convs],
	);

	const purdue = await organizations.addOrganization(
		'Purdue',
		Math.floor(100000000 + Math.random() * 900000000),
		'email@gmail.com',
		owner,
		[convs],
	);

	const nyu = await organizations.addOrganization(
		'NYU',
		Math.floor(100000000 + Math.random() * 900000000),
		'email@gmail.com',
		owner,
		convs,
	);

	const columbia = await organizations.addOrganization(
		'Columbia',
		Math.floor(100000000 + Math.random() * 900000000),
		'email@gmail.com',
		owner,
		convs,
	);

	const yale = await organizations.addOrganization(
		'Yale',
		Math.floor(100000000 + Math.random() * 900000000),
		'email@gmail.com',
		owner,
		convs,
	);

	const Harvard = await organizations.addOrganization(
		'Harvard',
		Math.floor(100000000 + Math.random() * 900000000),
		'email@gmail.com',
		owner,
		convs,
	);

	const IBM = await organizations.addOrganization(
		'IBM',
		Math.floor(100000000 + Math.random() * 900000000),
		'email@gmail.com',
		owner,
		convs,
	);

	const Apple = await organizations.addOrganization(
		'Apple',
		Math.floor(100000000 + Math.random() * 900000000),
		'email@gmail.com',
		owner,
		convs,
	);

	const Microsoft = await organizations.addOrganization(
		'Microsoft',
		Math.floor(100000000 + Math.random() * 900000000),
		'email@gmail.com',
		owner,
		convs,
	);

	console.log('Done seeding database');
	await db.serverConfig.close();
};

main().catch(console.log);
