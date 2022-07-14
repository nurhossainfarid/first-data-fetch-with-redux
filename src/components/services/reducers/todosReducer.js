import { TODOS_FAILED, TODOS_REQUEST, TODOS_SUCCESS } from "../constants/todosConstants"

const initialState = {
    isLoading: false,
    todos: [],
    error: null,
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODOS_REQUEST: 
            return {
                isLoading: true
            }
        case TODOS_SUCCESS: 
            return {
                isLoading: false,
                todos: action.payload,
            }
        case TODOS_FAILED: 
            return {
                isLoading: false,
                todos: [],
                error: action.payload,
            }
        default:
            return state;
        
    }
}