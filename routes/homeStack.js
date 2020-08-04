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
import Login from '../screens/Login';
import CreateRecord from '../screens/CreateRecord';
import AdminLogin from '../screens/AdminLogin';
// import ProjectsScreen from '../screens/ProjectsScreen';
import PrintScreen from '../screens/PrintScreen'

const HomeStack = createStackNavigator({
    
    // ProjectsScreen: {
    //     screen: ProjectsScreen
    // }

    Terms: {
        screen: TermsScreen
    },
    PatientInfo: {
        screen: PatientInfoScreen
    },
    AdminLogin: {
        screen: AdminLogin
    }, 
    Home: {
        screen: HomeScreen
    },
    HomeOption: {
        screen: HomeScreenOption
    },
    PracticeStatement: {
        screen: PracticeStatement
    },  
    SupportingText: {
        screen: SupportingText
    },
    PICO: {
        screen: PICO
    },  
    PrintScreen: {
        screen: PrintScreen
    }

}, {
    defaultNavigationOptions: {
       headerStyle: {},
       headerShown: false,
       headerBackTitle: null,
       headerLeftContainerStyle: {},
       headerRightContainerStyle: {},
    }

});

export default createAppContainer(HomeStack);

    
