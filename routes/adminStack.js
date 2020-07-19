import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CreateRecord from '../screens/CreateRecord';
import AdminLogin from '../screens/AdminLogin';

const AdminStack = createStackNavigator({
   
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