import { RECORD_UPDATE } from '../actions/types';

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
        default:
            return state;
    }
}