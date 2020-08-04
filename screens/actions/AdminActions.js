import firebase from 'firebase';
import { RECORD_UPDATE, RECORD_CREATE, RECORD_FETCH_SUCCESS, RECORD_SAVE_SUCCESS, RECORD_DELETE_SUCCESS } from './types';
import { Actions } from "react-native-router-flux";
require('@firebase/database');

const config ={
    apiKey: "AIzaSyBHKV7x97xwDrUVnc7Z6wPCiXV8Yc-_nO8",
          authDomain: "ibdtool-2a1c7.firebaseapp.com",
          databaseURL: "https://ibdtool-2a1c7.firebaseio.com",
          projectId: "ibdtool-2a1c7",
          storageBucket: "ibdtool-2a1c7.appspot.com",
          messagingSenderId: "633888609862",
          appId: "1:633888609862:web:4a4eff1a47f363aa5edc47",
          measurementId: "G-LF7BLTRE1G",
          presistance: true,
    };

    if (!firebase.apps.length) {
          firebase.initializeApp(config);
      }


const rootRef = firebase.database().ref();
const ibdRef = rootRef.child('ibd');

export const recordUpdate = ({prop, value}) => {
    return {
        type: RECORD_UPDATE,
        payload: {prop, value}
    };
};

export const recordCreate = ({
    headingone, headingtwo, subheading, 
    statement, supportingtext, 
    population, intervention, 
    comparator, outcome }) => {
            
   return (dispatch) => {

    if (headingone.trim() === '') {
        alert('Heading One Field is Blank');
        return;
    }

    if (headingtwo.trim() === '') {
        alert('Heading Two Field is Blank');
        return;
    }

    if (subheading.trim() === '') {
        alert('Subheading Field is Blank');
        return;
    }

    if (statement.trim() === '') {
        alert('Statement Field is Blank');
        return;
    }

    if (supportingtext.trim() === '') {
        alert('Supporting Text Field is Blank');
        return;
    }

    if (population.trim() === '') {
        alert('Population Field is Blank');
        return;
    }

    if (intervention.trim() === '') {
        alert('Intervention Field is Blank');
        return;
    }

    if (comparator.trim() === '') {
        alert('Comparator Field is Blank');
        return;
    }

    if (outcome.trim() === '') {
        alert('Outcome Field is Blank');
        return;
    }

    ibdRef.push({headingone, headingtwo, subheading, 
        statement, supportingtext, 
        population, intervention, 
        comparator, outcome })
        .then(() => {
            dispatch({type: RECORD_CREATE });
            Actions.pop();
        });

        

        alert('Record Added');
    }
           
    };

    export const recordSave = ({
        headingone, headingtwo, subheading, 
        statement, supportingtext, 
        population, intervention, 
        comparator, outcome, uid }) => {
                
       return (dispatch) => {
    
        if (headingone.trim() === '') {
            alert('Heading One Field is Blank');
            return;
        }
    
        if (headingtwo.trim() === '') {
            alert('Heading Two Field is Blank');
            return;
        }
    
        if (subheading.trim() === '') {
            alert('Subheading Field is Blank');
            return;
        }
    
        if (statement.trim() === '') {
            alert('Statement Field is Blank');
            return;
        }
    
        if (supportingtext.trim() === '') {
            alert('Supporting Text Field is Blank');
            return;
        }
    
        if (population.trim() === '') {
            alert('Population Field is Blank');
            return;
        }
    
        if (intervention.trim() === '') {
            alert('Intervention Field is Blank');
            return;
        }
    
        if (comparator.trim() === '') {
            alert('Comparator Field is Blank');
            return;
        }
    
        if (outcome.trim() === '') {
            alert('Outcome Field is Blank');
            return;
        }
    
        firebase.database().ref(`ibd/${uid}`)
        .set({headingone, headingtwo, subheading, 
            statement, supportingtext, 
            population, intervention, 
            comparator, outcome })
            .then(() => {
                dispatch({type: RECORD_SAVE_SUCCESS });
                Actions.pop();
                alert('Record Updated');
            });
            
            
        };
               
    };

    export const recordDelete = ({uid}) => {
        return (dispatch) => {
            firebase.database().ref(`ibd/${uid}`)
            .remove()
            .then(() => {
                dispatch({type: RECORD_DELETE_SUCCESS });
                Actions.pop();
                
            })
        };
    };

    export const recordsFetch = () => {
        return (dispatch) => {
            ibdRef.on('value', snapshot => {
                dispatch({type: RECORD_FETCH_SUCCESS, payload: snapshot.val()})
            });
        };
    };

