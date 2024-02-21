/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  View,
} from 'react-native';
import Custom from '../../../src/styles/Custom';
function Header(): React.JSX.Element {
  return (
    <View style={Custom.bgview}>
      <View style={Custom.headerflx}>
        <View >
          <View style={Custom.logotext}>
            <Image source={require('./src/assets/images/small_logo.png')} style={[Custom.logoimg, { width: 160, resizeMode: 'contain', }]} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Header;
