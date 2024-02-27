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
import { Button } from '../../../node_modules/@rneui/themed';
import { black, primary, } from '../../../src/styles/Variables';
import Custom from '../../../src/styles/Custom';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons/faClipboard';

function CreateWallet(): React.JSX.Element {

  return (
    <View style={Custom.bgview}>
      <View style={Custom.dflx}>
        <View>
          <View style={Custom.logotextbtm}>
            <Image source={require('./src/assets/images/logo.png')} style={[Custom.logoimg, { width: 200, resizeMode: 'contain', }]} />
          </View>
          <View style={Custom.creaeborder}>
            <View style={Custom.fontplus}>
              <View>
                <Image source={require('./src/assets/images/qr-code.png')} style={[Custom.logoimg, { width: 150, resizeMode: 'contain', }]} />
              </View>
              <Text style={Custom.receivedaddress}>
              bc1q3ydwtpxw94x5c2jsh9d7upnshpl82j7s5zxmzg
              </Text>
              <FontAwesomeIcon icon={faClipboard} size={24} style={Custom.receiveclip}/>
            </View>
          </View>
          <View style={[Custom.dflxremind]} >
            <Button size="lg" buttonStyle={{
              backgroundColor: primary,
              borderRadius: 4,
            }} titleStyle={{
              color: black,
              fontWeight: 'bold', fontSize: 18,
            }} containerStyle={{
              marginVertical: 10,
            }}>Close</Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CreateWallet;
