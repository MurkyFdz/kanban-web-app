import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


import * as actions from '../actions';

const SignUp = () => {

	const dispatch = useDispatch();
	const history = useHistory();
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const [backendErrors, setBackendErrors] = useState(null);
	const [passwordsDoNotMatch, setPasswordsDoNotMatch] = useState(false);
	let form;
	let confirmPasswordInput;

	const handleSubmit = event => {

		event.preventDefault();

		if (form.checkValidity() && checkConfirmPassword()) {

			dispatch(actions.signUp(
				{
					userName: userName.trim(),
					password: password,
					firstName: firstName.trim(),
					lastName: lastName.trim(),
					email: email.trim(),
					city: city.trim(),
					country: country.trim(),
				},
				() => {history.push('/dashboard')},
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

	const checkConfirmPassword = () => {

		if (password !== confirmPassword) {

			confirmPasswordInput.setCustomValidity('error');
			setPasswordsDoNotMatch(true);

			return false;

		} else {
			return true;
		}

	}

	const handleConfirmPasswordChange = value => {

		confirmPasswordInput.setCustomValidity('');
		setConfirmPassword(value);
		setPasswordsDoNotMatch(false);

	}

	return (
		<div>
			<div className="card bg-light border-dark text-center col-md-6 offset-md-3">
				<h5 className="card-header text-center">
					<p>Registrarse</p>
				</h5>
				<div className="card-body justify-content-center">
					<form ref={node => form = node}
						className="needs-validation" noValidate
						onSubmit={e => handleSubmit(e)}>
						<div className="form-group row justify-content-center">
							<label htmlFor="userName" className="col-md-3 col-form-label text-start">
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
							<label htmlFor="password" className="col-md-3 col-form-label text-start">
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
							<label htmlFor="confirmPassword" className="col-md-3 col-form-label text-start">
								<p>Confirmar contraseña</p>
							</label>
							<div className="col-md-3">
								<input data-testid="confirmPasswordInput" ref={node => confirmPasswordInput = node}
									type="password" id="confirmPassword" className="form-control"
									value={confirmPassword}
									onChange={e => handleConfirmPasswordChange(e.target.value)}
									required />
								<div className="invalid-feedback">
									{passwordsDoNotMatch ?
										<p>Las contraseñas no coinciden</p> :
										<p>Campo obligatorio</p>}
								</div>
							</div>
						</div>
						<div className="form-group row justify-content-center">
							<label htmlFor="firstName" className="col-md-3 col-form-label text-start">
								<p>Nombre</p>
							</label>
							<div className="col-md-3">
								<input data-testid="firstNameInput" type="text" id="firstName" className="form-control"
									value={firstName}
									onChange={e => setFirstName(e.target.value)}
									required />
								<div className="invalid-feedback">
									<p>Campo obligatorio</p>
								</div>
							</div>
						</div>
						<div className="form-group row justify-content-center">
							<label htmlFor="lastName" className="col-md-3 col-form-label text-start">
								<p>Apellidos</p>
							</label>
							<div className="col-md-3">
								<input data-testid="lastNameInput" type="text" id="lastName" className="form-control"
									value={lastName}
									onChange={e => setLastName(e.target.value)}
									required />
								<div className="invalid-feedback">
									<p>Campo obligatorio</p>
								</div>
							</div>
						</div>
						<div className="form-group row justify-content-center">
							<label htmlFor="email" className="col-md-3 col-form-label text-start">
								<p>Correo electrónico</p>
							</label>
							<div className="col-md-3">
								<input data-testid="emailInput" type="email" id="email" className="form-control"
									value={email}
									onChange={e => setEmail(e.target.value)}
									required />
								<div className="invalid-feedback">
									<p>Introduzca una dirección de correo electrónico correcta</p>
								</div>
							</div>
						</div>
						<div className="form-group row justify-content-center">
							<label htmlFor="country" className="col-md-3 col-form-label text-start">
								<p>País</p>
							</label>
							<div className="col-md-3">
								<input data-testid="countryInput" type="text" id="country" className="form-control"
									value={country}
									onChange={e => setCountry(e.target.value)}
									required />
								<div className="invalid-feedback">
									<p>Campo obligatorio</p>
								</div>
							</div>
						</div>
						<div className="form-group row justify-content-center">
							<label htmlFor="city" className="col-md-3 col-form-label text-start">
								<p>Ciudad</p>
							</label>
							<div className="col-md-3">
								<input data-testid="cityInput" type="text" id="city" className="form-control"
									value={city}
									onChange={e => setCity(e.target.value)}
									required />
								<div className="invalid-feedback">
									<p>Campo obligatorio</p>
								</div>
							</div>
						</div>
						<div className="form-group row justify-content-center">
							<div className="offset-md-1 col-md-1">

							</div>
						</div>
						<button type="submit" className="btn btn-primary">Registrarse</button>
						<p><Link to="/users/login">Autenticarse</Link></p>
					</form>
				</div>
			</div>
		</div>

	);

}

export default SignUp;
