import { handleActions } from "redux-actions";
import initialState from "./initial.state";
import * as actions from "./actionCreators";

export default handleActions(
	{
		[actions.setValue]: (state, { payload: { value } }) => {
			return { ...state, value: value };
		}
	},
	initialState
);
