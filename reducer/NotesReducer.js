import {createReducer} from '@reduxjs/toolkit';
import {DELETE_NOTES_DATA_UPDATE, UPDATE_NOTES_DATA} from '../constants/utils';

const initialState = {
  notes: [],
};

function updateNote(state, action) {
  return {
    ...state,
    notes: [...state.notes, {...action.payload}],
  };
}

function deleteNote(state, action) {
  let id = action.payload;
  let existingArr = state.notes;
  let newArr = [];

  existingArr.forEach(element => {
    if (element.id !== id) {
      newArr.push({
        ...element,
      });
    }
  });

  return {
    ...state,
    notes: newArr,
  };
}

function myReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NOTES_DATA:
      return updateNote(state, action);
    case DELETE_NOTES_DATA_UPDATE:
      return deleteNote(state, action);
    default:
      return {...state};
  }
}
export default myReducer;
