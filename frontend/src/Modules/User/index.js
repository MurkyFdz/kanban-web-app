import * as actions from './actions';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
import * as selectors from './selector';

export {default as Login} from './Components/logIn';
export {default as SignUp} from './Components/signUp';
export {default as Logout} from './Components/logOut';

export default {actions, actionTypes, reducer, selectors};
