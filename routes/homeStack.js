import React from 'react';
import {Image} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import TermsScreen from '../screens/TermsScreen';
import PatientInfoScreen from '../screens/PatientInfoScreen';
import HomeScreen from '../screens/HomeScreen';
import HomeScreenOption from '../screens/HomeScreenOption';
import PracticeStatement from '../screens/PracticeStatement';
import SubheadingScreen from '../screens/SubheadingScreen';
import SupportingText from '../screens/SupportingText';
import PICO from '../screens/PICO';
import OtherResources from '../screens/OtherResources';
import PracticalTips from '../screens/PracticalTips';
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
    SubheadingScreen: {
        screen: SubheadingScreen
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
    OtherResources: {
        screen: OtherResources
    },
    PracticalTips: {
        screen: PracticalTips
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

    
