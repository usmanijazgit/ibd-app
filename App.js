import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Spinner from './screens/actions/Spinner'

import Navigator from './routes/homeStack';
import AdminNavigator from './routes/adminStack';

import firebase from 'firebase';
import reducer from './screens/reducers';

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const store = createStore(reducer);

class App extends React.Component {

state = {loggedIn: null}; 

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

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setTimeout(() => {
        this.setState({loggedIn: true});
      }, 2000);
    } else {
      this.setState({loggedIn: false});
    }
  });

}


  renderContent() {

    switch (this.state.loggedIn){
      case true:
        return <AdminNavigator />
      case false: 
        return <Navigator />;
      default:
        return <Spinner size="large" />
    }

  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.screen}>
          {this.renderContent()}
        </View>        
      </Provider>
    );
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;
