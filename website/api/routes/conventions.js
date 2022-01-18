// const express = require('express');
// const router = express.Router();
// const data = require('../data');
// const conventionsData = data.conventions;

// router.get('/', async (req, res) => {
// 	try {
// 		const organizations = await organizationData.getAllOrganizations();
// 		res.json(organizations);
// 	} catch (e) {
// 		res.status(404).json({ message: 'broke' });
// 	}
// });

// router.get('/conventions', async (req, res) => {
// 	try {
// 		res.json({ hey: 'you' });
// 	} catch (e) {
// 		res.status(404).json({ message: 'Organization not found' });
// 	}
// });

// router.get('/:id', async (req, res) => {
// 	try {
// 		console.log(req.params.id);
// 		const organization = await organizationData.getOrganizationByID(
// 			req.params.id,
// 		);
// 		res.json(organization.conventions);
// 	} catch (e) {
// 		res.status(404).json({ message: 'Organization not found' });
// 	}
// });

// module.exports = router;
