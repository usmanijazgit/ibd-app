import firebase from 'firebase';

import { RECORD_UPDATE } from './types';

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
            // const {currentUser} = firebase.auth();
            ibdRef
            .push({headingone, headingtwo, subheading, 
                statement, supportingtext, 
                population, intervention, 
                comparator, outcome });
    };