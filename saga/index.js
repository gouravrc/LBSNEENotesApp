import {takeLatest, all, take} from 'redux-saga/effects';
import {setNotesSaga, deleteNotesSaga} from './NotesSaga';
import {DELETE_NOTES_DATA, SET_NOTES_DATA} from '../constants/utils';

export default function* root() {
  yield all([
    takeLatest(SET_NOTES_DATA, setNotesSaga),
    takeLatest(DELETE_NOTES_DATA, deleteNotesSaga),
  ]);
}
