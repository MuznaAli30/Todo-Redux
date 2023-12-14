
// // App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import Box from './Components/Box';
import Header from './Components/Header';
import Store from './redux/Store';
import TodoSlice from './redux/TodoSlice';
import { db } from "./Firebase";
import { serverTimestamp, collection, addDoc, doc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';
import { Provider, useDispatch } from 'react-redux';
import { addTodo } from './redux/TodoSlice';
import {addActionTodo, editActionHandler, removeActionTodo,removeDuplicateTodos} from './redux/Action';

function App() {


  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "item"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    const entries = data.filter(
      (item,id,self) =>
      id === 
      self.findIndex((t) => t.todos.toLowerCase() === item.todos.toLowerCase())
    )
    setTodos(entries);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const addToDoHandler = async (newTodo) => {
   dispatch(addActionTodo(newTodo));
   const data = await fetchData();
   };


  //  dispatch(removeDuplicateTodos(newTodo));
    // if (newTodo.trim() !== "") {
      // if (!todos.some(todo => todo.todos === newTodo.trim())) {
    //     try {
    //       await addDoc(collection(db, "item"), {
    //         todos: newTodo.trim(),
    //         timestamp: serverTimestamp(),
    //         time: new Date().toLocaleTimeString(),
    //         // const dispatch = useDispatch();
    //       });
    //       fetchData();
    //       const dispatch = useDispatch();
    //     } catch (error) {
    //       console.error("Error adding item: ", error);
    //     }
    //   }

  


  const editHandler = async (id, newItem) => {
    dispatch(editActionHandler(newItem));
    fetchData();
    // try {
    //   await updateDoc(doc(db, "item", id), {
    //     todos: newItem,
        
    //   }
    //   );
    //   // fetchData();
    
    // } catch (error) {
    //   console.error("Error updating item: ", error);
    // }
  };

  const removeToDo = async (id) => {
    dispatch(removeActionTodo(id));
    fetchData();
    // try {
    //   await deleteDoc(doc(db, "item", id));
    //   fetchData();
    // } catch (error) {
    //   console.error("Error deleting item: ", error);
    // }
  };

  const sortedTodos = [...todos].sort((a, b) => a.todos.localeCompare(b.todos));

  useEffect(() => {
    if (JSON.stringify(sortedTodos) !== JSON.stringify(todos)) {
      setTodos(sortedTodos);
    }
  });


  return (
    // <Provider store={Store}>
    <div className="bg-blue-800 h-screen p-3">
      <div className="mx-auto max-w-[80%] min-h-[90vh] shadow-2xl bg-white rounded-3xl shaddow-2xl">
        <div className='text-blue-700 text-center font-bold font-mono sm:text-sm text-xs xl:text-2xl 2xl:text-6xl p-5'>
          <Header/>
        </div>
        <InputField handler={addToDoHandler}/>
        <Box data={todos} removeHandler={removeToDo} editHandler={editHandler} fetchData={fetchData}/>
      </div>
    </div>
  //  </Provider>
  );

}

export default App;
