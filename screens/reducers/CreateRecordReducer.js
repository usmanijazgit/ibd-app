import { RECORD_UPDATE } from '../actions/types';

const INITIAL_STATE = {
    newIBDHeadingOne: '',
    newIBDHeadingTwo: '',
    newIBDSubHeading: '',
    newIBDStatement: '',
    newIBDSupportingText: '',
    newIBDPopulation: '',
    newIBDIntervention: '',
    newIBDComparator: '',
    newIBDOutcome: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RECORD_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value }
        default:
            return state;
    }
}