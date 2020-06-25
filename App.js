import React from 'react';
import { StyleSheet, View} from 'react-native';

import Header from './components/Header';
import TermsScreen from './screens/TermsScreen';
import HomeScreen from './screens/HomeScreen';

import Navigator from './routes/homeStack';

export default function App() {

  return (
    <View style={styles.screen}>
        
        <Navigator />
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
