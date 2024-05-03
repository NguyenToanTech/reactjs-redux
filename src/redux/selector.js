import { createSelector } from "@reduxjs/toolkit";


export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const priorirySelector = (state) => state.filters.prioriry;

// reselect
export const todoRemainningSelector = createSelector(todoListSelector, searchTextSelector, statusSelector, priorirySelector, (todoList, searchText, status, prioriry) => {
    return todoList.filter((res) => {
        if (status === 'All') {
            return prioriry && prioriry.length ? (res.name.includes(searchText) && prioriry.includes(res.prioriry)) : res.name.includes(searchText);
        }

        return (res.name.includes(searchText) &&
            (status === 'Completed' ? res.completed : !res.completed) &&
            (prioriry.length ? prioriry.includes(res.prioriry) : true)
        );
    });
})