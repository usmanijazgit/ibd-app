import { RECORD_UPDATE } from './types';

export const recordUpdate = ({prop, value}) => {
    return {
        type: RECORD_UPDATE,
        payload: {prop, value}
    };
};