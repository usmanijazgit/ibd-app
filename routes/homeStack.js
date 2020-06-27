import React from 'react';
import {Image} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import TermsScreen from '../screens/TermsScreen';
import PatientInfoScreen from '../screens/PatientInfoScreen';
import HomeScreen from '../screens/HomeScreen';
import HomeScreenOption from '../screens/HomeScreenOption';
import PracticeStatement from '../screens/PracticeStatement';
import SupportingText from '../screens/SupportingText';
import PICO from '../screens/PICO';

const HomeStack = createStackNavigator({
   
    // Terms: {
    //     screen: TermsScreen
    // },
    // PatientInfo: {
    //     screen: PatientInfoScreen
    // },
    // Home: {
    //     screen: HomeScreen
    // },
    // HomeOption: {
    //     screen: HomeScreenOption
    // },
    PracticeStatement: {
        screen: PracticeStatement
    },  
    SupportingText: {
        screen: SupportingText
    },
    // PICO: {
    //     screen: PICO
    // }    

}, {
    defaultNavigationOptions: {
       headerStyle: {},
       headerShown: false,
    //    headerBackImage: () => <SomeElement />,
       headerBackTitle: null,
       headerLeftContainerStyle: {},
       headerRightContainerStyle: {},
    }

});

export default createAppContainer(HomeStack);

    


// const HomeStack = createStackNavigator(screens);

