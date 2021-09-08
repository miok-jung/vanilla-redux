import { createStore } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// SECTION No ReactToolkit
// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case DELETE:
//       return state.filter((toDo) => toDo.id !== action.id);
//     default:
//       return state;
//   }
// };
// SECTION USE React Tool kit
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };
// createReducer : switch와 case를 생략할 수 있게 도와준다. redux Toolkit은 위에 코드같은것을, 아래처럼 간단하게 작성할 수 있도록 도와주는 것.
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // state를 mutate를 할 수 있다.
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    // 새로운 new state 만들 수 있다.?
    state.filter((toDo) => toDo.id !== action.payload);
  },
});

// const store = createStore(reducer);
const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
