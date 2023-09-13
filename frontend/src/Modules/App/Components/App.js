import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import { HashRouter as Router } from "react-router-dom";

import users from '../../User';


import Body from "./Body";


const App = () => {
	const dispatch = useDispatch();
	
	useEffect( () => {
		dispatch(users.actions.tryLoginFromServiceToken(
			() => dispatch(users.actions.logout())
		));
	})
	
	
 	return (
		<Router>
	        <div>
				<div>
					
					<Body/>
				</div>
		        
	        </div>
		</Router>
  );
};

export default App;