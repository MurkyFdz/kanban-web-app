import {combineReducers} from 'redux';

import app from '../Modules/App';
import users from "../Modules/User";


const rootReducer = combineReducers({
	app: app.reducer,
    users: users.reducer,
});

export default rootReducer;