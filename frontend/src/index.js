import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import configureStore from './Store';
import backend from './Backend';
import {NetworkError} from './Backend';
import app from './Modules/App';
import { App } from "./Modules/App";



/* Configurar Store de Redux */
const store = configureStore();

/* Configurar proxy con el backend */
backend.init(
	(error) => store.dispatch(app.actions.error(new NetworkError()))
);


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
registerServiceWorker();