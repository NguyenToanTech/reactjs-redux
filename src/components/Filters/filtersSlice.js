//***** redux core*/ 
// const initState = {
//     search: '',
//     status: 'All',
//     prioriry: []

// }

// const filterReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload,
//             }
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload,
//             }
//         case 'filters/priorityFilterChange':
//             return {
//                 ...state,
//                 prioriry: action.payload,
//             }
//         default:
//             return state;
//     }
// }

// export default filterReducer;

//***** reduxjs toolkit*/ 
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload;
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        priorityFilterChange: (state, action) => {
            state.priority = action.payload;
        }
    }
});