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
import { primary,black } from '../../../src/styles/Variables';
import Custom from '../../../src/styles/Custom';

function GettingStart(): React.JSX.Element {

  return (
    <View
    style={Custom.bgview}>
      <View style={Custom.dflx}>
        <View>
          <View style={Custom.logotextbtm}>
            <Image source={require('./src/assets/images/logo.png')} style={[Custom.logoimgget,]} />
          </View>
          <Text style={Custom.startget}>
            Your connection to next-generation Bitcoin applications
          </Text>
          <View>
            <Button size="lg" buttonStyle={{
              backgroundColor: primary,
              borderRadius: 4,
            }} titleStyle={{
              color: black,
              fontWeight: 'bold', fontSize: 18, 
            }}>Start</Button>
          </View>
        </View>
      </View>
    </View>
  );
}


export default GettingStart;
