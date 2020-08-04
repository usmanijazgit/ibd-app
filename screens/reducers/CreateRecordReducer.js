import { RECORD_UPDATE, RECORD_CREATE, RECORD_SAVE_SUCCESS, RECORD_DELETE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    headingone: '', 
    headingtwo: '', 
    subheading: '', 
    statement: '',
    supportingtext: '', 
    population: '',
    intervention: '', 
    comparator: '',
    outcome: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RECORD_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value }
        case RECORD_CREATE:
            return INITIAL_STATE;
        case RECORD_SAVE_SUCCESS:
            return INITIAL_STATE;
        case RECORD_DELETE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}