import React from "react";
import { v4 as uuidv4 } from "uuid";

// action items
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

/**
 * 메서드 개요 : todo 객체를 입력받아, 기존 todolist에 더함
 * 2022.12.16 : 최초작성
 *
 * @param {todo 객체} payload
 * @returns
 */
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

/**
 * 메서드 개요 : todo의 id를 입력받아, 일치하는 todolist를 삭제
 * 2022.12.16 : 최초작성
 *
 * @param {todo의 id} payload
 * @returns
 */
export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

/**
 * 메서드 개요 : todo의 id를 입력받아, 일치하는 todo 아이템의 isDone을 반대로 변경
 * 2022.12.16 : 최초작성
 *
 * @param {*} payload
 * @returns
 */
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// initial states
const initialState = [
  {
    id: uuidv4(),
    title: "리액트 공부하기",
    contents: "빨리빨리 암기하기",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "스프링 공부하기",
    contents: "인강 열심히 들어보기!!",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "데이트",
    contents: "홍대입구역에서 3시까지",
    isDone: false,
  },
];

// reducers
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: // 기존의 배열에 입력받은 객체를 더함
      return [...state, action.payload];
    case REMOVE_TODO: // 기존의 배열에서 입력받은 id의 객체를 제거(filter)
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO: // 기존의 배열에서 입력받은 id에 해당하는 것만 isDone을 반대로 변경(아니면 그대로 반환)
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

// export
export default todos;
