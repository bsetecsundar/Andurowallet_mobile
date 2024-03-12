/**
 * @format
 */
//import {AppRegistry} from 'react-native';
import App from './App';
//import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
//import route, { screens } from './src/Route/Route';
//screens();
import { Navigation } from "react-native-navigation";
import route from './src/Route/Route';
import SplashScreen from 'react-native-splash-screen';


Navigation.events().registerAppLaunchedListener(() => {
  SplashScreen.hide();
  Navigation.setRoot({
    root: route.gettingStarted,
  });
});
// Navigation.events().registerComponentDidAppearListener(
//   ({ componentId, componentName, passProps }) => {
//     console.log("componentName:12 ", componentName);
//     if(componentName=== 'ConfirmSeed'){
//       Navigation.setRoot({
//         root: route.afterLogin,
//       });

//     }
//   }
// );
