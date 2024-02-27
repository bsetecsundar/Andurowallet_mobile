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
import Custom from '../../../src/styles/Custom';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons/faCircleExclamation';
import { Input } from '@rneui/base';
import { greylightwhite } from '../../../src/styles/Variables';

function Header(): React.JSX.Element {
  return (
    <View style={Custom.bgview}>
      <View style={Custom.headersend}>
          <View style={Custom.logotext}>
            <Image source={require('./src/assets/images/small_logo.png')} style={[Custom.logoimg, { width: 80, resizeMode: 'contain', }]} />
          </View>
          <View>
            <Text style={Custom.sendlabel}>
              Send to
            </Text>
          </View>
          <View>
            <Text style={Custom.sendlabel}>
              Cancel
            </Text>
          </View>
      </View>
      <View>
      <Input
                placeholder="Enter Receiver address"
                placeholderTextColor="#fff"
                inputContainerStyle={{ borderBottomWidth: 0 }}
                containerStyle={[{
                  borderWidth: 2, height: 75, borderColor: greylightwhite,width: "100%",
                  borderLeftWidth:0,borderRightWidth:0,paddingTop:10
                }]}
                style={{color:'#fff'}}
              />
      </View>
      <View style={Custom.headersend}>
          <View>
            <Text style={Custom.sendlabel}>
            Recents
            </Text>
          </View>
      </View>
    </View>
  );
}

export default Header;
