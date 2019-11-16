import { put, takeLatest, all,call,takeEvery } from 'redux-saga/effects';
import { allNotes } from '../services/services'

function* actionWatcher (){
    yield takeEvery ('GET_NOTES',allNotesTrigger)
}

function* allNotesTrigger() {
    const json = yield call(allNotes())
        .then(response => response.json());
    console.log("\n\n\tResponse in saga ---> ",json)
    yield put({ type: "NOTES_RECEIVED", json: json.data.data, });
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}