import { combineReducers } from "redux";
import { Action } from "./actions";

export type Counter = { numCounter: number }

export type All = {
    counter: Counter
};

const counterState: Counter = { numCounter: 0 }; // initial state

// define what to do on action dispatch
function counter(state: Counter = counterState, action: Action): Counter {
    let { numCounter } = state;
	switch (action.type) {
        case 'INCREMENT_COUNTER':
            const { incCounter } = action;
            numCounter += incCounter;
            return { numCounter };
        case 'DECREMENT_COUNTER':
            const { decCounter } = action;
            numCounter -= decCounter;
            return { numCounter };
        case 'RESET_COUNTER':
			return counterState;
		default:
			return state;
	}
}

// combine reducers (only necessary if more than one reducer is used)
export const reducers = combineReducers<All>({
	counter
});