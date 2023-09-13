import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';

import * as actions from '../actions';

const Login = () => {

	const dispatch = useDispatch();
	const history = useHistory();
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [backendErrors, setBackendErrors] = useState(null);
	let form;

	const handleSubmit = event => {
		event.preventDefault();

		if (form.checkValidity()) {

			dispatch(actions.login(
				userName.trim(),
				password,
				() => history.push('/dashboard'),
				errors => setBackendErrors(errors),
				() => {
					history.push('/users/login');
					dispatch(actions.logout());
				}
			));
			

		} else {
			setBackendErrors(null);
			form.classList.add('was-validated');
		}

	}

	return (
		<div>
			<div className="card bg-light border-dark text-center col-md-6 offset-md-3">
				<h5 className="card-header">
					<p>Autenticarse</p>
				</h5>
				<div className="card-body">
					<form ref={node => form = node}
						className="needs-validation"
						onSubmit={e => handleSubmit(e)}>
						<div className="form-group row justify-content-center">
							<label htmlFor="userName" className="col-md-2 col-form-label text-start">
								<p>Usuario</p>
							</label>
							<div className="col-md-3">
								<input data-testid="userNameInput" type="text" id="userName" className="form-control"
									value={userName}
									onChange={e => setUserName(e.target.value)}
									autoFocus
									required />
								<div className="invalid-feedback">
									<p>Campo obligatorio</p>
								</div>
							</div>
						</div>
						<div className="form-group row justify-content-center">
							<label htmlFor="password" className="col-md-2 col-form-label text-start">
								<p>Contraseña</p>
							</label>
							<div className="col-md-3">
								<input data-testid="passwordInput" type="password" id="password" className="form-control"
									value={password}
									onChange={e => setPassword(e.target.value)}
									required />
								<div className="invalid-feedback">
									<p>Campo obligatorio</p>
								</div>
							</div>
						</div>
						<div className="form-group row justify-content-center">
							<div>
								<button type="submit" className="btn btn-primary">
									Autenticarse
								</button>
								<p><Link to="/users/signup">Registrarse</Link></p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div >
	);

}

export default Login;
