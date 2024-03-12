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
import { primary,black, bold } from '../../../src/styles/Variables';
import Custom from '../../../src/styles/Custom';
import { Navigation } from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import { fonts } from '@rneui/base';
import Fonts from '../../styles/Fonts';

export function Login (props:any) {

  return (
    <SafeAreaView>
    <View
    style={Custom.bgview}>
      <View style={Custom.dflx}>
        <View style={{paddingLeft:12,paddingRight:12}}> 
          <View style={Custom.logotextbtm}>
            <Image source={require('../../assets/images/small_logo.png')} style={[Custom.logoimgget,]} />
          </View>
          <Text style={[Custom.headertitle,{paddingBottom:18}]}>
          Log In To Anduro Wallet
              </Text>
          <View>
            <Button size="lg"
            onPress={() => Navigation.push(props.componentId,{
              component:{
                name:'Dashboard',
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
              color: black, fontSize: 18,
              paddingLeft:16,paddingRight:16,
              fontWeight:'700',
              fontFamily: "NunitoSans-bold",
            }}>Unlock</Button>
          </View>
        </View>
        
      </View>
    </View>
    </SafeAreaView>
  );
}
