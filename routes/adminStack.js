import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import AdminHome from '../screens/AdminHome';
import CreateAdmin from '../screens/CreateAdmin';
import CreateRecord from '../screens/CreateRecord';



const AdminStack = createStackNavigator({
   
    AdminHome: {
        screen: AdminHome
    },
    CreateAdmin: {
        screen: CreateAdmin
    },
    CreateRecord: {
        screen: CreateRecord
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

export default createAppContainer(AdminStack);