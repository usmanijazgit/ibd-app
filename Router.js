import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import AdminLogin from './screens/AdminLogin';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" >
                <Scene key="login" component={AdminLogin} />
            </Scene>
        </Router>
    );
};

export default RouterComponent;