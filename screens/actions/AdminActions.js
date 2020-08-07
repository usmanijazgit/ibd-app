import firebase from 'firebase';
import { RECORD_UPDATE, RECORD_CREATE, RECORD_FETCH_SUCCESS, RECORD_SAVE_SUCCESS, RECORD_DELETE_SUCCESS } from './types';
import { Actions } from "react-native-router-flux";
require('@firebase/database');
import { withNavigation } from 'react-navigation';

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
    ibdHeadingOne, ibdHeadingTwo, ibdSubHeading, 
    ibdStatement, ibdSupportingText, 
    ibdPopulation, ibdIntervention, 
    ibdComparator, ibdOutcome, ibdOtherResources, ibdPracticalTips }) => {
            
   return (dispatch) => {

    if (ibdHeadingOne.trim() === '') {
        alert('Heading One Field is Blank');
        return;
    }

    if (ibdHeadingTwo.trim() === '') {
        alert('Heading Two Field is Blank');
        return;
    }

    if (ibdSubHeading.trim() === '') {
        alert('Subheading Field is Blank');
        return;
    }

    if (ibdStatement.trim() === '') {
        alert('Statement Field is Blank');
        return;
    }

    if (ibdSupportingText.trim() === '') {
        alert('Supporting Text Field is Blank');
        return;
    }

    if (ibdPopulation.trim() === '') {
        alert('Population Field is Blank');
        return;
    }

    if (ibdIntervention.trim() === '') {
        alert('Intervention Field is Blank');
        return;
    }

    if (ibdComparator.trim() === '') {
        alert('Comparator Field is Blank');
        return;
    }

    if (ibdOutcome.trim() === '') {
        alert('Outcome Field is Blank');
        return;
    }

    if (ibdOtherResources.trim() === '') {
        alert('Other Resources Field is Blank');
        return;
    }

    if (ibdPracticalTips.trim() === '') {
        alert('Practical Tips Field is Blank');
        return;
    }

    ibdRef.push({ibdHeadingOne, ibdHeadingTwo, ibdSubHeading, 
        ibdStatement, ibdSupportingText, 
        ibdPopulation, ibdIntervention, 
        ibdComparator, ibdOutcome, ibdOtherResources, ibdPracticalTips })
        .then(() => {
            dispatch({type: RECORD_CREATE });
            Actions.pop();
        });

        

        alert('Record Added');
    }
           
    };

    export const recordSave = ({
    ibdHeadingOne, ibdHeadingTwo, ibdSubHeading, 
    ibdStatement, ibdSupportingText, 
    ibdPopulation, ibdIntervention, 
    ibdComparator, ibdOutcome, ibdOtherResources, ibdPracticalTips, uid }) => {
                
       return (dispatch) => {
    
        if (ibdHeadingOne.trim() === '') {
            alert('Heading One Field is Blank');
            return;
        }
    
        if (ibdHeadingTwo.trim() === '') {
            alert('Heading Two Field is Blank');
            return;
        }
    
        if (ibdSubHeading.trim() === '') {
            alert('Subheading Field is Blank');
            return;
        }
    
        if (ibdStatement.trim() === '') {
            alert('Statement Field is Blank');
            return;
        }
    
        if (ibdSupportingText.trim() === '') {
            alert('Supporting Text Field is Blank');
            return;
        }
    
        if (ibdPopulation.trim() === '') {
            alert('Population Field is Blank');
            return;
        }
    
        if (ibdIntervention.trim() === '') {
            alert('Intervention Field is Blank');
            return;
        }
    
        if (ibdComparator.trim() === '') {
            alert('Comparator Field is Blank');
            return;
        }
    
        if (ibdOutcome.trim() === '') {
            alert('Outcome Field is Blank');
            return;
        }
    
        if (ibdOtherResources.trim() === '') {
            alert('Other Resources Field is Blank');
            return;
        }
    
        if (ibdPracticalTips.trim() === '') {
            alert('Practical Tips Field is Blank');
            return;
        }
    
        firebase.database().ref(`ibd/${uid}`)
        .set({ibdHeadingOne, ibdHeadingTwo, ibdSubHeading, 
            ibdStatement, ibdSupportingText, 
            ibdPopulation, ibdIntervention, 
            ibdComparator, ibdOutcome, ibdOtherResources, ibdPracticalTips })
            .then(() => {
                dispatch({type: RECORD_SAVE_SUCCESS });
                Actions.pop();
                alert('Record Updated');
                //this.props.navigation.navigate('RecordList')
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

