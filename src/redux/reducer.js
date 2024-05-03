import { combineReducers } from "redux";

import filterReducer from "../components/Filters/filtersSlice";
import TodoReducer from "../components/TodoList/todoSlice";


// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filterReducer(state.filters, action),
//         todoList: TodoReducer(state.todoList, action),
//     }
// }

const rootReducer = combineReducers({
    filters: filterReducer,
    todoList: TodoReducer,
})

export default rootReducer;