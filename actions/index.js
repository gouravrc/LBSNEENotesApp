import {
  DELETE_NOTES_DATA,
  DELETE_NOTES_DATA_UPDATE,
  SET_NOTES_DATA,
  UPDATE_NOTES_DATA,
} from '../constants/utils';

export const setNotes = payload => ({
  type: SET_NOTES_DATA,
  payload,
});

export const updateNotes = payload => ({
  type: UPDATE_NOTES_DATA,
  payload,
});

export const deleteNotes = payload => ({
  type: DELETE_NOTES_DATA,
  payload,
});

export const deleteNotesUpdate = payload => ({
  type: DELETE_NOTES_DATA_UPDATE,
  payload,
});
