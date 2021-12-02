import { NavLink } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
	return (
		<nav className="navigation">
			<NavLink exact to="/" activeClassName="active">
				Organizations
			</NavLink>
		</nav>
	);
};

export default Navigation;
