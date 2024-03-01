/**
 * @format
 */
//import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);

import { Navigation } from "react-native-navigation";
import { GettingStart } from '../component/GettingStart/GettingStart';
import { SettingsScreen } from '../component/SettingsScreen';
import {CreateWallet} from '../component/CreateWallet/CreateWallet';
import { ImportWallet } from '../component/ImportWallet/ImportWallet';
import { SetUp } from '../component/SetUP/SetUp';
import { Greating } from '../component/Greating/Greating';
import { ConfirmSeed } from '../component/ConfirmSeed/ConfirmSeed';
import { Dashboard } from '../component/Dashboard/Dashboard';
import { Home } from '../component/Home/Home';
import { Send } from '../component/Send/Send';
import { Sendto } from '../component/SendTo/SendTo';
import { Receive } from '../component/receive/Receive';
import { NftCreate } from '../component/NftCreate/NftCreate';
import { Setting } from '../component/Settings/Setting';
import { Nft } from '../component/Nft/Nft';
import { NftTab } from '../component/NftTab/NftTab';
import CreatenewPassword  from '../UI/CreatePassword/CreatenewPassword';


Navigation.registerComponent('gettingStart', () => GettingStart);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('CreateWallet',() => CreateWallet);
Navigation.registerComponent('ImportWallet',() => ImportWallet);
Navigation.registerComponent('SetUp',() => SetUp);
Navigation.registerComponent('Greating',() => Greating);
Navigation.registerComponent('ConfirmSeed',() => ConfirmSeed);
Navigation.registerComponent('Dashboard',() => Dashboard);
Navigation.registerComponent('Home',() => Home);
Navigation.registerComponent('Send',() => Send);
Navigation.registerComponent('Sendto',() => Sendto);
Navigation.registerComponent('Receive',() => Receive);
Navigation.registerComponent('NftCreate',() => NftCreate);
Navigation.registerComponent('Setting',() => Setting);
Navigation.registerComponent('Nft',() => Nft);
Navigation.registerComponent('NftTab',() => NftTab);
Navigation.registerComponent('CreatenewPassword',() => CreatenewPassword);

const gettingStart = {
  stack: {
    children: [
      {
        component: {
          name: "gettingStart",
          options: {
              topBar: {
              visible: false,
          },
          bottomTabs: {
            visible: false
          }
          },
        },
      },
    ],
  },
};
const afterLogin = {
  root:{
    bottomTabs: {
    children: [
      {
        stack: {
          children: [
            {
              component: {
                name: 'Dashboard',
  
              },
            },
          ],
          options: {
            bottomTab: {
              text: 'Dashboard',
              icon: require('../assets/images/home.png'),
            },
            topBar: {
              visible: false,
          },
          },
        },
      },
      {
        stack: {
          children: [
            {
              component: {
                name: 'Nft',
              },
            },
          ],
          options: {
            bottomTab: {
              text: 'Nft',
              icon: require('../assets/images/logo.png'),
            },
            topBar: {
              visible: false,
          },
          },
        },
      },
      {
        stack: {
          children: [
            {
              component: {
                name: 'Setting',
              },
            },
          ],
          options: {
            bottomTab: {
              text: 'Setting',
              icon: require('../assets/images/setting.png'),
            },
            topBar: {
              visible: false,
          },
          },
        },
      },
    ],
  },
  },
  }
  

const route ={
  gettingStarted: gettingStart,
  afterLogin:afterLogin,
};
export default route;