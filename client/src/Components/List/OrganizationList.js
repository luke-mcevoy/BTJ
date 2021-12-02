import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
	Card,
	CardActionArea,
	CardContent,
	// CardMedia,
	Grid,
	Typography,
	makeStyles,
	// Button,
} from '@material-ui/core';
const useStyles = makeStyles({
	card: {
		maxWidth: 550,
		height: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: 5,
		border: '1px solid #1e8678',
		boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);',
	},
	titleHead: {
		borderBottom: '1px solid #1e8678',
		fontWeight: 'bold',
	},
	grid: {
		flexGrow: 1,
		flexDirection: 'row',
	},
	media: {
		height: '100%',
		width: '100%',
	},
	button: {
		color: '#1e8678',
		fontWeight: 'bold',
		fontSize: 12,
	},
});

const OrganizationList = (props) => {
	const [organizationListState, setOrganizationListState] = useState({
		organizationList: undefined,
		loading: true,
	});

	const classes = useStyles();
	let card = null;

	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await axios.get('http://localhost:9000/organization');
				setOrganizationListState({ organizationList: data, loading: false });
			} catch (e) {
				console.log(e);
			}
		}
		fetchData();
	}, []);

	const buildCard = (organization) => {
		return (
			<Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={organization._id}>
				<Card className={classes.card}>
					<Link to={`/organization/${organization._id}`}>
						<CardActionArea>
							<CardContent>
								<Typography
									className={classes.titleHead}
									variant="h6"
									component="h1"
								>
									{organization.name}
								</Typography>
								<Typography variant="h6" component="h1">
									Phone #: {organization.phone}
								</Typography>
								<Typography variant="h6" component="h1">
									Email: {organization.email}
								</Typography>
								<Typography variant="h6" component="h1">
									Organization Owner: {organization.owner.name}
								</Typography>
								<Typography variant="h6" component="h1">
									ID: {organization._id}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Link>
				</Card>
			</Grid>
		);
	};

	card =
		organizationListState.organizationList &&
		organizationListState.organizationList.map((organization) => {
			return buildCard(organization);
		});

	if (organizationListState.loading) {
		return (
			<div>
				<h1>Loading....</h1>
			</div>
		);
	} else {
		return (
			<div>
				<h1>Organization List</h1>
				<Grid container className={classes.grid} spacing={5}>
					{card}
				</Grid>
			</div>
		);
	}
};

export default OrganizationList;
