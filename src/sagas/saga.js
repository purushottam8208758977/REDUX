import { put, all,call,takeEvery } from 'redux-saga/effects';
import { allNotes,allArchives } from '../services/services'

function* actionWatcher (){
    yield takeEvery ('GET_NOTES',allNotesTrigger)
}

function* allNotesTrigger() {
    const json = yield call(loginNew=>allNotes())
    console.log("\n\n\tResponse in saga ---> ",json.data.data)
    yield put({ type: "NOTES_RECEIVED", json: json.data.data.reverse() });
    
    // const json = yield call(loginNew=>allNotes())
    // console.log("\n\n\tResponse in saga ---> ",json.data.data)
    // yield put({ type: "ARCHIVE_NOTES_RECEIVED", json: json.data.data.reverse() });

}

export default function* rootSaga() {
   yield all([
   actionWatcher(), // runs all the time 
   ]);
}