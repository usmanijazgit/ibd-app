import {combineReducers} from 'redux';
import CreateRecordReducer from './CreateRecordReducer';
import RecordReducer from './RecordReducer';

export default combineReducers({
    recordForm: CreateRecordReducer,
    records: RecordReducer
});