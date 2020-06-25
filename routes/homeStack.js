import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import TermsScreen from '../screens/TermsScreen';
import PatientInfoScreen from '../screens/PatientInfoScreen';
import HomeScreenOption from '../screens/HomeScreenOption';
import PracticeStatement from '../screens/PracticeStatement';

const screens = {
    // Terms: {
    //     screen: TermsScreen
    // },
    // PatientInfo: {
    //     screen: PatientInfoScreen
    // },
    // Home: {
    //     screen: HomeScreenOption
    // }
      PracticeStatement: {
          screen: PracticeStatement
      }  
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);