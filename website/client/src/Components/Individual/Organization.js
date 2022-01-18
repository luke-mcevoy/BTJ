import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	makeStyles,
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardHeader,
} from '@material-ui/core';
import '../../App.css';
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

const Organization = (props) => {
	const [organizationState, setOrganizationState] = useState({
		organization: undefined,
		loading: true,
	});
	const classes = useStyles();

	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await axios.get(
					'http://localhost:9000/organization/' + props.match.params.id,
				);
				setOrganizationState({ organization: data, loading: false });
			} catch (e) {
				console.log(e);
			}
		}
		fetchData();
	}, []);

	if (organizationState.loading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	} else {
		return (
			<Card className={classes.card}>
				<CardHeader
					className={classes.titleHead}
					title={organizationState.organization.name}
				/>
				<CardContent>
					<Typography variant="h6" component="h1">
						Phone #: {organizationState.organization.phone}
					</Typography>
					<Typography variant="h6" component="h1">
						Email: {organizationState.organization.email}
					</Typography>
					<Typography variant="h6" component="h1">
						Organization Owner: {organizationState.organization.owner.name}
					</Typography>
				</CardContent>
			</Card>
		);
	}
};

export default Organization;
