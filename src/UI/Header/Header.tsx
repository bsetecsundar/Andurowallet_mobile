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
      <View style={Custom.setpasswordheder}>
      <View>
      <Text style={Custom.headertool}>
        Set your password 
        </Text>
      </View>
      <View>
      <FontAwesomeIcon color='white' size={22} icon={faCircleExclamation} />
      </View>
      </View>
    </View>
  );
}

export default Header;
