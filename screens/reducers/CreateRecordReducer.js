import { RECORD_UPDATE, RECORD_CREATE, RECORD_SAVE_SUCCESS, RECORD_DELETE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    ibdHeadingOne: '', 
    ibdHeadingTwo: '', 
    ibdSubHeading: '', 
    ibdStatement: '', 
    ibdSupportingText: '', 
    ibdPopulation: '', 
    ibdIntervention: '', 
    ibdComparator: '', 
    ibdOutcome: '', 
    ibdOtherResources: '', 
    ibdPracticalTips: ''
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