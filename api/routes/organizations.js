const express = require('express');
const router = express.Router();
const data = require('../data');
const organizationData = data.organizations;
const conventionData = data.conventions;

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
		res.json(organization);
	} catch (e) {
		res.status(404).json({ message: 'Organization not found' });
	}
});

// router.get('/:id/conventions', async (req, res) => {
// 	try {
// 		res.render('index', { title: 'Express' });
// 	} catch (e) {
// 		res.status(404).json({ message: 'Organization not found' });
// 	}
// });

module.exports = router;
