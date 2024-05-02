import {call, put} from 'redux-saga/effects';
import {updateNotes, deleteNotesUpdate} from '../actions/index';

export function* setNotesSaga(action) {
  yield put(updateNotes(action.payload));
}

export function* deleteNotesSaga(action) {
  yield put(deleteNotesUpdate(action.payload));
}
