import { put, all,call,takeEvery } from 'redux-saga/effects';
import { allNotes } from '../services/services'
import { yieldExpression } from '@babel/types';

function* actionWatcher (){
    yield takeEvery ('GET_NOTES',allNotesTrigger)
}

function* allNotesTrigger() {
    const json = yield call(loginNew=>allNotes())
        // .then(response => response.json()).catch((error)=>{console.log("Error in saga -->",error)})
    console.log("\n\n\tResponse in saga ---> ",json.data.data)
  
    yield put({ type: "NOTES_RECEIVED", json: json.data.data, });
    
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}