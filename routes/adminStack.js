import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import AdminHome from '../screens/AdminHome';
import CreateAdmin from '../screens/CreateAdmin';
import CreateRecord from '../screens/CreateRecord';
import RecordCreation from '../screens/RecordCreation';
import RecordList from '../screens/RecordList';
import RecordEdit from '../screens/RecordEdit';

const AdminStack = createStackNavigator({
   
    AdminHome: {
        screen: AdminHome
    },
    CreateAdmin: {
        screen: CreateAdmin
    },
    RecordList: {
        screen: RecordList
    },
    RecordCreation: {
        screen: RecordCreation
    },
    RecordEdit: {
        screen: RecordEdit
    }  
    // CreateRecord: {
    //     screen: CreateRecord
    // }   

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