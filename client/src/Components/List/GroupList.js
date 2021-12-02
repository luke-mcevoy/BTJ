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

const GroupList = (props) => {
	const [groupListState, setGroupListState] = useState({
		groupList: undefined,
		loading: true,
	});

	const classes = useStyles();
	let card = null;

	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await axios.get(
					'http://localhost:9000/organization/' +
						props.match.params.id +
						'/conventions',
				);

				setGroupListState({ groupList: data, loading: false });
			} catch (e) {
				console.log(e);
			}
		}
		fetchData();
	}, []);

	const buildCard = (group) => {
		return (
			<Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={group._id}>
				<Card className={classes.card}>
					<Link to={`${window.location.pathname}groups/`}>
						<CardActionArea>
							<CardContent>
								<Typography
									className={classes.titleHead}
									variant="h6"
									component="h1"
								>
									{group.name}
								</Typography>
								<Typography variant="h6" component="h1">
									ID: {group._id}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Link>
				</Card>
			</Grid>
		);
	};

	card =
		groupListState.groupList &&
		groupListState.groupList.map((group) => {
			return buildCard(group);
		});

	if (groupListState.loading) {
		return (
			<div>
				<h1>Loading....</h1>
			</div>
		);
	} else {
		return (
			<div>
				<h1>Group List</h1>
				<Grid container className={classes.grid} spacing={5}>
					{card}
				</Grid>
			</div>
		);
	}
};

export default GroupList;
