
// Action.js

import { addTodo } from "./TodoSlice";
import { db } from "../Firebase";
import { serverTimestamp, collection, addDoc, getDocs } from 'firebase/firestore';
  

export const addActionTodo = (todos) => async (dispatch) => {
  if (todos.trim() !== '') {
    // if (!todos.some(todo => todo.todos === newTodo.trim())) {
    try {
      await addDoc(collection(db, "item"), {
        todos: todos.trim(),
        timestamp: serverTimestamp(),
        time: new Date().toLocaleTimeString(),
      });

      dispatch(addTodo(todos.trim()));

      return data; 
    } catch (error) {
      console.error("Error adding item: ", error);
    // }
  }}
};
export const editActionHandler = (id, newItem) => async (dispatch) => {
    try {
      await updateDoc(doc(db, "item", id), {
        todos: newItem,
      });
      dispatch(editTodo({ id, newItem }));
    } catch (error) {
      console.error("Error updating item: ", error);
    }
  }
  
  export const removeActionTodo = (id) => async (dispatch) => {
    try {
      await deleteDoc(doc(db, "item", id));
      dispatch(removeHandler(id));
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  }

