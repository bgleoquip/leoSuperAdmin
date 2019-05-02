import { combineReducers } from 'redux';
import { reducer as formReducers } from 'redux-form';
export default combineReducers({
    form:formReducers
})