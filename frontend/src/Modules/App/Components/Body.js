import React from "react";
import {useSelector} from 'react-redux';
import { Route, Switch} from "react-router-dom";

import Home from "./Home";

import users, {Login, SignUp, ChangePassword, Logout} from '../../User';



const Body = () => {
	const loggedIn = useSelector(users.selectors.isLoggedIn);
	

	return (
		<div className="mx-5 my-5">
			<Switch>
				<Route exact path="/"> <Home />  </Route>
				
				{loggedIn && <Route exact path="/users/logout"><Logout /></Route>}
				{!loggedIn && <Route exact path="/users/login"><Login /></Route>}
				{!loggedIn && <Route exact path="/users/signup"><SignUp /></Route>}
				
				/* Si no coincide con ninguna ruta anterior, se va a Home por defecto */
				<Route> <Home /></Route>
			</Switch>
		</div>
	);

};

export default Body;