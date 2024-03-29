/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import { Button } from '@rneui/themed';
import { greyHiglight, primary, } from './src/styles/Variables';
import Fonts from './src/styles/Fonts';
import Custom from './src/styles/Custom';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';

function ImportWallet(): React.JSX.Element {

  return (
    <>
      <View style={Custom.bgview}>
        <View>

          <View style={Custom.settingsborder}>
            <Button buttonStyle={{ justifyContent: 'flex-start', position: 'relative', backgroundColor: 'transparent', }}>
              <FontAwesomeIcon icon={faWallet} size={24} style={Custom.iconsetting} />
              <Text style={[Fonts.regular, Custom.settingtitle]}>
                Backup Wallet
              </Text>
              <FontAwesomeIcon icon={faChevronRight} size={20} style={Custom.iconsettt} />
            </Button>
          </View>
          <View style={Custom.settingsborder}>
            <Button buttonStyle={{ justifyContent: 'flex-start', position: 'relative', backgroundColor: 'transparent', }}>
              <FontAwesomeIcon icon={faCode} size={24} style={Custom.iconsetting} />
              <Text style={[Fonts.regular, Custom.settingtitle]}>
                Developer Mode
              </Text>
              <FontAwesomeIcon icon={faChevronRight} size={20} style={Custom.iconsettt} />
            </Button>
          </View>
          <View style={Custom.settingsborder}>
            <Button buttonStyle={{ justifyContent: 'flex-start', position: 'relative', backgroundColor: 'transparent', }}>
              <FontAwesomeIcon icon={faEye} size={24} style={Custom.iconsetting} />
              <Text style={[Fonts.regular, Custom.settingtitle]}>
                Change Password
              </Text>
              <FontAwesomeIcon icon={faChevronRight} size={20} style={Custom.iconsettt} />
            </Button>
          </View>
          <View style={Custom.settingsborder}>
            <Button buttonStyle={{ justifyContent: 'flex-start', position: 'relative', backgroundColor: 'transparent', }}>
              <FontAwesomeIcon icon={faLock} size={24} style={Custom.iconsetting} />
              <Text style={[Fonts.regular, Custom.settingtitle]}>
                Lock
              </Text>
              <FontAwesomeIcon icon={faChevronRight} size={20} style={Custom.iconsettt} />
            </Button>
          </View>
        </View>
      </View>
    </>
  );
}


export default ImportWallet;
