import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile79671Navigator from '../features/UserProfile79671/navigator';
import Settings79670Navigator from '../features/Settings79670/navigator';
import Settings79668Navigator from '../features/Settings79668/navigator';
import SignIn279666Navigator from '../features/SignIn279666/navigator';
import Maps79574Navigator from '../features/Maps79574/navigator';
import Add-Item79573Navigator from '../features/Add-Item79573/navigator';
import Maps79569Navigator from '../features/Maps79569/navigator';
import UserProfile79565Navigator from '../features/UserProfile79565/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile79671: { screen: UserProfile79671Navigator },
Settings79670: { screen: Settings79670Navigator },
Settings79668: { screen: Settings79668Navigator },
SignIn279666: { screen: SignIn279666Navigator },
Maps79574: { screen: Maps79574Navigator },
Add-Item79573: { screen: Add-Item79573Navigator },
Maps79569: { screen: Maps79569Navigator },
UserProfile79565: { screen: UserProfile79565Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
