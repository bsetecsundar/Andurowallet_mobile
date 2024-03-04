/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Button } from '../../../node_modules/@rneui/themed';
import { black, primary, } from '../../../src/styles/Variables';
import Custom from '../../../src/styles/Custom';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons/faClipboard';

export function Receive(): React.JSX.Element {

  return (
    <SafeAreaView>
    <View style={Custom.bgview}>
      <View style={Custom.dflx}>
        <View>
          <View style={Custom.logotextbtm}>
            <Image source={require('../../assets/images/logo.png')} style={[Custom.logoimg, { width: 200, resizeMode: 'contain', }]} />
            <Text style={Custom.headertitle}>
            Receive Address
              </Text>
          </View>
          <View style={Custom.creaeborder}>
            <View style={Custom.fontplus}>
              <View>
                <Image source={require('../../assets/images/qr-code.png')} style={[Custom.logoimg, { width: 150, resizeMode: 'contain', }]} />
              </View>
              <Text style={Custom.receivedaddress}>
              bc1q3ydwtpxw94x5c2jsh9d7upnshpl82j7s5zxmzg
              </Text>
              <FontAwesomeIcon icon={faClipboard} size={24} style={Custom.receiveclip}/>
            </View>
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}
