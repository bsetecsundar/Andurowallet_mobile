/**
 * @format
 */
//import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);

import { Navigation } from "react-native-navigation";
import { GettingStart } from '../component/GettingStart/GettingStart';
import { SettingsScreen } from '../component/SettingsScreen';
import { CreateWallet } from '../component/CreateWallet/CreateWallet';
import { ImportWallet } from '../component/ImportWallet/ImportWallet';
import { SetUp } from '../component/SetUP/SetUp';
import { Greating } from '../component/Greating/Greating';
import { ConfirmSeed } from '../component/ConfirmSeed/ConfirmSeed';
import { Dashboard } from '../component/Dashboard/Dashboard';
import { Home } from '../component/Home/Home';
import { Send } from '../component/Send/Send';
import { Sendto } from '../component/SendTo/SendTo';
import { Receive } from '../component/receive/Receive';
import { NftCreate } from '../UI/NftCreate/NftCreate';
import { Setting } from '../component/Settings/Setting';
import { Nft } from '../component/Nft/Nft';
import { NftTab } from '../component/NftTab/NftTab';
import { BackupWallet } from '../component/Backupwallet/BackupWallet';
import CreatenewPassword from '../UI/CreatePassword/CreatenewPassword';
import { NfttabList } from '../UI/NfttabList/NfttabList';
import { TokenTab } from '../UI/TokenTab/TokenTab';
import { ManageToken } from '../UI/ManageToken/ManageToken';
import { TestnetList } from '../UI/TestnetList/TestnetList';
import { NftDetails } from '../component/NftDetails/NftDetails';
import { ConfirmSend } from '../component/ConfirmSend/ConfirmSend';
import { SendNft } from '../component/SendNft/SendNft';
import { ManageTokenDetails } from '../component/ManageTokenDetails/ManageTokenDetails';
import { black, white } from "../styles/Variables";
import { Login } from '../UI/Login/Login';


Navigation.registerComponent('gettingStart', () => GettingStart);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('CreateWallet', () => CreateWallet);
Navigation.registerComponent('ImportWallet', () => ImportWallet);
Navigation.registerComponent('SetUp', () => SetUp);
Navigation.registerComponent('Greating', () => Greating);
Navigation.registerComponent('ConfirmSeed', () => ConfirmSeed);
Navigation.registerComponent('Dashboard', () => Dashboard);
Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Send', () => Send);
Navigation.registerComponent('Sendto', () => Sendto);
Navigation.registerComponent('Receive', () => Receive);
Navigation.registerComponent('NftCreate', () => NftCreate);
Navigation.registerComponent('Setting', () => Setting);
Navigation.registerComponent('Nft', () => Nft);
Navigation.registerComponent('NftTab', () => NftTab);
Navigation.registerComponent('BackupWallet', () => BackupWallet);
Navigation.registerComponent('CreatenewPassword', () => CreatenewPassword);
Navigation.registerComponent('NfttabList', () => NfttabList);
Navigation.registerComponent('ManageToken', () => ManageToken);
Navigation.registerComponent('TokenTab', () => TokenTab);
Navigation.registerComponent('TestnetList', () => TestnetList);
Navigation.registerComponent('NftDetails', () => NftDetails);
Navigation.registerComponent('ConfirmSend', () => ConfirmSend);
Navigation.registerComponent('SendNft', () => SendNft);
Navigation.registerComponent('ManageTokenDetails', () => ManageTokenDetails);
Navigation.registerComponent('Login', () => Login);

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
  root: {
    bottomTabs: {
      options: {
        bottomTabs: {
          backgroundColor: '#626b72',
          dotIndicator: {
            color: 'black',
            size: 5,
            visible:true,
          },

        },

      },
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
                icon: require('../assets/images/home.png'),
                textColor: 'white',
                selectedIconColor:'#04f76e',
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
                  name: 'NftTab',
                },
              },
            ],
            options: {
              bottomTab: {
                icon: require('../assets/images/centernft.png'),
                iconWidth: 43,
                iconHeight: 43,
                selectedIconColor:'#04f76e',
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
                icon: require('../assets/images/setting.png'),
                textColor: 'white',
                selectedIconColor:'#04f76e',
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


const route = {
  gettingStarted: gettingStart,
  afterLogin: afterLogin,
};
export default route;