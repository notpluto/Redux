// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import App from './components/App'
// import { counter, INCREMENT, DECREMENT } from './components/redux'

// // const store = createStore(counter)
// // // store.subscribe()
// // store.dispatch({ type: INCREMENT })

// ReactDOM.render(
//   <App count={store.getState()} dispatch={store.dispatch} />,
//   document.getElementById('root')
// )

import { createStore, combineReducers, applyMiddleware } from 'redux';

const mathReducer = (state = {
	result: 1,
	lastValues: [],
	username: "Max",
}, action) => {
	switch (action.type) {
		case "ADD":
			state = {
				...state,
				result: state.result + action.payload,
				// this is how to handle objects in immutable way so that the state remains predictable
				lastValues: [...state.lastValues, action.payload]
			}
		case "SUB":
			state = {
				...state,
				result: state.result - action.payload,
				lastValues: [...state.lastValues, action.payload],
			}
	}
	return state;
};

const userReducer = (state = {
	name: "Max",
	age: 27
}, action) => {
	switch (action.type) {
		case "SET_NAME":
			state = {
				...state,
				name: action.payload
			}
		case "SET_AGE":
			state = {
				...state,
				age: action.payload
			}
	}
	return state;
};

const myLogger = (store) => (next) => (action) => {
	console.log("Logged action", action);
	next(action);
};

const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(myLogger));

store.subscribe(() => {
	console.log("New State", store.getState());
});

store.dispatch({
	type: "ADD",
	payload: 10
})

store.dispatch({
	type: "ADD",
	payload: 2
})

store.dispatch({
	type: "ADD",
	payload: 31
})

store.dispatch({
	type: "SUB",
	payload: 10
})

store.dispatch({
	type: "SET_AGE",
	payload: 10
})



