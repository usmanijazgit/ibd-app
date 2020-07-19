import {combineReducers} from 'redux';
import CreateRecordReducer from './CreateRecordReducer';

export default combineReducers({
    recordForm: CreateRecordReducer
});