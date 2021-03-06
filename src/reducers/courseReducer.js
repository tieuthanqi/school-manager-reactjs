import { findIndex } from "../utils/utils";

import {
  FETCH_ALL_COURSE,
  FETCH_ALL_COURSE_FAIL,
  GET_COURSE_BY_ID,
  GET_COURSE_BY_ID_FAIL,
  RESET_COURSE,
  RESET_COURSE_FAIL,
  ADD_COURSE,
  ADD_COURSE_FAIL,
  UPDATE_COURSE,
  UPDATE_COURSE_FAIL,
  DELETE_COURSE,
  DELETE_COURSE_FAIL,
} from "../action-types/course-action-types";
const initialState = {
  listCourse: [],
  course: {},
  error: "",
};
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_COURSE: {
      console.log(state);
      console.log(action.payload);
      return { ...state, listCourse: action.payload, error: "" };
    }
    case FETCH_ALL_COURSE_FAIL: {
      console.log(state);
      console.log(action.payload);
      return { ...state, listCourse: [], error: action.payload };
    }
    case ADD_COURSE: {
      const newList = [...state.listSubject];
      newList.push(action.payload);
      return { ...state, listSubject: newList };
    }
    case ADD_COURSE_FAIL: {
      return { ...state, error: action.payload };
    }
    case UPDATE_COURSE: {
      const index = findIndex(state.listCourse, action.payload.id);
      const newList = [...state.listSubject];
      newList[index] = action.payload;
      console.log(newList);

      return { ...state, listSubject: newList, error: "" };
    }
    case UPDATE_COURSE_FAIL: {
      return { ...state, error: action.payload };
    }
    case DELETE_COURSE: {
      const index = findIndex(state.listCourse, action.payload);
      const newList = [...state.listCourse];
      newList.splice(index, 1);
      console.log(newList);
      return { ...state, listCourse: newList };
    }
    case DELETE_COURSE_FAIL: {
      return { ...state, error: action.payload };
    }
    case GET_COURSE_BY_ID: {
      console.log(state);
      return { ...state, course: action.payload, error: "" };
    }
    case GET_COURSE_BY_ID_FAIL: {
      return { ...state, error: action.payload };
    }
    case RESET_COURSE: {
      return { ...state, course: null };
    }
    case RESET_COURSE_FAIL: {
      return { ...state, error: action.payload };
    }

    default:
      return state;
  }
};

export default courseReducer;
