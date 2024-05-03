//***** redux core*/ 
// const initState = [
//     { id: 1, name: 'aaa', completed: false, priority: 'Medium' },
//     { id: 2, name: 'bbb', completed: true, priority: 'High' },
//     { id: 3, name: 'ccc', completed: false, priority: 'Low' }
// ]


// const TodoReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [...state, action.payload]

//         case 'todoList/toggleTodoStatus':
//             return state.map((item) => item.id === action.payload ? { ...item, completed: !item.completed } : item)

//         default:
//             return state;
//     }
// }

// export default TodoReducer;

//***** reduxjs toolkit*/ 
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'aaa', completed: false, priority: 'Medium' },
        { id: 2, name: 'bbb', completed: true, priority: 'High' },
        { id: 3, name: 'ccc', completed: false, priority: 'Low' }

    ],
    reducers: {
        addTodo: (state, action) => {
            // mutatuion  || IMMER
            state.push(action.payload);
        },// => {type : 'todoList/addTodo'}

        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(item => item.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        },
    }
});



export default todoSlice;