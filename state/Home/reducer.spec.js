import reducer from './reducer';
import * as actionTypes from "./actionTypes";
import initialState from "./initial.state";

describe('home reducer', () => {

	let state;

	beforeEach(() => {
		state = reducer(undefined, { type: "" });
	});

	test("initial state", () => {
		expect(state).toEqual(initialState);
	});

	test(actionTypes.SET_VALUE, () => {
		const expected = expect(
			reducer(state, {
				type: actionTypes.SET_VALUE,
				payload: { value:6 }
			})
		);
		expected.toHaveProperty("value", 6);
	});

});
	