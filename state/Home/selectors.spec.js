import * as selectors from "./selectors";
import initialState from "./initial.state";

describe("selectors Home", () => {

	const state = {
		root: {
			home: {
				value: 5
			}
		}
	};

	test("value", () => {
		expect(selectors.getValue(state)).toEqual(
			state.root.home.value
		);
	});

});
