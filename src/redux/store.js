//***** redux core*/ 

// import { createStore } from 'redux';
// import rootReducer from './Reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;




//***** reduxjs toolkit*/ 

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todoSlice from "../components/TodoList/todoSlice";

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoSlice.reducer,
    }
})

export default store;