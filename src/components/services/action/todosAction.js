import axios from "axios"
import { TODOS_FAILED, TODOS_REQUEST, TODOS_SUCCESS } from "../constants/todosConstants"

export const getAllTodos = () => async (dispatch) => {
    dispatch(
        {
            type: TODOS_REQUEST
        }
    )
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch({
            type: TODOS_SUCCESS,
            payload: res.data,
        })
    } catch (error) {
        dispatch({
            type: TODOS_FAILED,
            payload: error.message
        })
    }
}