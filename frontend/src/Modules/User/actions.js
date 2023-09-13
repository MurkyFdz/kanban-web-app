import * as actionTypes from './actionTypes';
import backend from '../../Backend';

export const signUpCompleted = authenticatedUser => ({
    type: actionTypes.SIGN_UP_COMPLETED,
    authenticatedUser
});

export const signUp = (user, onSuccess, onErrors, reauthenticationCallback) => dispatch =>
    backend.userService.signUp(user,
        authenticatedUser => {
            dispatch(signUpCompleted(authenticatedUser));
            onSuccess();
        },
        onErrors,
        reauthenticationCallback);

export const loginCompleted = authenticatedUser => ({
    type: actionTypes.LOGIN_COMPLETED,
    authenticatedUser
});

export const login = (userName, password, onSuccess, onErrors, reauthenticationCallback) => dispatch => {
	let onSuccessCallback = (authenticatedUser) => {
		dispatch(loginCompleted(authenticatedUser));
        onSuccess();
	};

    backend.userService.login(userName, password,
        onSuccessCallback,
        onErrors,
        reauthenticationCallback
    );
}

export const tryLoginFromServiceToken = reauthenticationCallback => dispatch =>
    backend.userService.tryLoginFromServiceToken(
        authenticatedUser => {
            if (authenticatedUser) {
                dispatch(loginCompleted(authenticatedUser));
            }
        },
        reauthenticationCallback
    );
    
export const logout = () => {

    backend.userService.logout();

    return {type: actionTypes.LOGOUT};

};

export const changePassword = (id, oldPassword, newPassword, onSuccess, onErrors) => dispatch =>
    backend.userService.changePassword(id, oldPassword, newPassword, onSuccess, onErrors);















