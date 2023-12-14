import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    editTodo: (state, action) => {
      const { id, newItem } = action.payload;
      const todoToEdit = state.find(todos => todos.id === id);
      if (todoToEdit) {
        todoToEdit.todos = newItem;
      }
    },
    // removeHandler: (state, action) => {
    //   const {id,todos} = action.payload;
    //   return state.filter(todos => todos.id !== id);
    // },
    
  }
});

export const { editTodo, addTodo, removeHandler } = TodoSlice.actions;

export default TodoSlice.reducer;



// // TodoSlice.js


// import {createSlice} from '@reduxjs/toolkit';


// const TodoSlice = createSlice({
//     name:"todos",
//     initialState: [],
//     reducer: {

//         addTodo: (state,action) => {
//             state.todos.push(action.payload)
//         },
//         // addTodo: (state, action) => {
//         //     const newTodo = {
//         //         id: Date.now(),
//         //         title: action.payload.title,
//         //         completed:false,
//         //     };
//         //     state.push(newTodo);
//         // },
//         editTodo: (state,action) => {
//             state.todos.id(action.payload)
//         },
//         removeHandler: (state,action) => {
//             state.todos.id(action,payload)
//         }
//     }
   
// });

// export const {editTodo,addTodo,removeHandler} = TodoSlice.actions;

// export default TodoSlice.reducers;
