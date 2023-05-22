import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';
import Main from '../index';
import SelectProfile from '../profiles/SelectProfile';


const AppNavigator = createStackNavigator({
    Main: {
      screen: Main,
    },
    SelectProfile: {
        screen: SelectProfile,
      },
  });
  
  export default createAppContainer(AppNavigator);