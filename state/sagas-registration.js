import { all, fork } from "redux-saga/effects";

import {
	watchSetValueAsync
} from "./Home/sagas";

export default function* root() {
	yield all([
		fork(watchSetValueAsync)
	]);
}
