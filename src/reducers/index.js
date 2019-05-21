import { combineReducers } from 'redux';
import { reducer as formReducers } from 'redux-form';
import authReducers from "./auth"

export default combineReducers({
    form:formReducers,
    auth: authReducers
})