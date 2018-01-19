import { combineReducers } from "redux";

import home from './Home/reducer';

const appReducer = combineReducers({
	home
});

const RootReducer = (state, action) => {
	return appReducer( action.type === "LOGOUT" ? undefined : state, action);
};

export default RootReducer;