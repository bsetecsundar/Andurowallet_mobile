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
import { Button } from '@rneui/themed';
import { primary,black } from '../../../src/styles/Variables';
import Custom from '../../../src/styles/Custom';
import { Navigation } from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

export function  GettingStart (props:any) {

  return (
    <SafeAreaView>
    <View
    style={Custom.bgview}>
      <View style={Custom.dflx}>
        <View>
          <View style={Custom.logotextbtm}>
            <Image source={require('../../assets/images/logo.png')} style={[Custom.logoimgget,]} />
          </View>
          <Text style={Custom.startget}>
            Your connection to next-generation Bitcoin applications
          </Text>
          <View>
            <Button size="lg"
            onPress={() => Navigation.push(props.componentId,{
              component:{
                name:'CreateWallet',
                options:{
                  topBar:{
                    visible:false,
                  }
                }
              }
            })}
             buttonStyle={{
              backgroundColor: primary,
              borderRadius: 8,
            }} titleStyle={{
              color: black,
              fontWeight: 'bold', fontSize: 18,
            }}>Start</Button>
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}
