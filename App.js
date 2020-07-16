import React from 'react';
import { StyleSheet, View } from 'react-native';

import Navigator from './routes/homeStack';
import firebase from 'firebase';
import { render } from 'react-dom';

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

class App extends React.Component {

//   UNSAFE_componentWillMount() {
//     var firebaseConfig = {
//       apiKey: "AIzaSyBHKV7x97xwDrUVnc7Z6wPCiXV8Yc-_nO8",
//       authDomain: "ibdtool-2a1c7.firebaseapp.com",
//       databaseURL: "https://ibdtool-2a1c7.firebaseio.com",
//       projectId: "ibdtool-2a1c7",
//       storageBucket: "ibdtool-2a1c7.appspot.com",
//       messagingSenderId: "633888609862",
//       appId: "1:633888609862:web:4a4eff1a47f363aa5edc47",
//       measurementId: "G-LF7BLTRE1G"
//     };
//     // Initialize Firebase
//     if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//     }

// }

constructor () {
  super();
  var config = {
    apiKey: "AIzaSyBHKV7x97xwDrUVnc7Z6wPCiXV8Yc-_nO8",
    authDomain: "ibdtool-2a1c7.firebaseapp.com",
    databaseURL: "https://ibdtool-2a1c7.firebaseio.com",
    projectId: "ibdtool-2a1c7",
    storageBucket: "ibdtool-2a1c7.appspot.com",
    messagingSenderId: "633888609862",
    appId: "1:633888609862:web:4a4eff1a47f363aa5edc47",
    measurementId: "G-LF7BLTRE1G"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
}


  render() {
    return (
      <View style={styles.screen}>

        <Navigator />
      </View>

    );
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;
