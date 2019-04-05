


export function reducer(state = [], action) {
	switch(action.type){
		case "ADD_TODO":
			return [...state, {id: action.id, name: action.name, isDone: action.isDone}]
		case "TOGGLE_TODO":
			return state.map(todo => 
				todo.id == action.id ? {...todo, isDone: !todo.isDone} : todo)
		case "DELETE_TODO":
			return state.filter(todo => todo.id !== action.id)
		default:
		  return [...state]
	}
}