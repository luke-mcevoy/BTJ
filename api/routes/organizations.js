const express = require('express');
const { groups } = require('../data');
const router = express.Router();
const data = require('../data');
const organizationData = data.organizations;
const conventionData = data.conventions;
const groupData = data.groups;

router.get('/', async (req, res) => {
	try {
		const organizations = await organizationData.getAllOrganizations();
		res.json(organizations);
	} catch (e) {
		res.status(404).json({ message: 'broke' });
	}
});

router.get('/:id', async (req, res) => {
	try {
		console.log(req.params.id);
		const organization = await organizationData.getOrganizationByID(
			req.params.id,
		);
		res.json(organization.conventions);
	} catch (e) {
		res.status(404).json({ message: 'Organization not found' });
	}
});

router.get('/:id/conventions/', async (req, res) => {
	try {
		const organization = await organizationData.getOrganizationByID(
			req.params.id,
		);

		const groups = [];
		for (convention of organization.conventions) {
			for (group of convention.groupUUIDs) {
				// TODO: fix this
				tmp = await groupData.getGroupByID(group);
				if (!groups.includes(tmp)) {
					groups.push(await groupData.getGroupByID(group));
				}
			}
		}
		res.json(groups);
	} catch (e) {
		res.status(404).json({ message: 'asdasdasd not found' });
	}
});

module.exports = router;
