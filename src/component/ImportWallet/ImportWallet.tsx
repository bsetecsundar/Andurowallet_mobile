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
import { Input } from '@rneui/base';
import { primary, white } from '../../../src/styles/Variables';
import Custom from '../../../src/styles/Custom';
import Fonts from '../../styles/Fonts';

export function ImportWallet(): React.JSX.Element {

  return (
    <SafeAreaView>
    <View style={Custom.bgview}>
      <View style={Custom.dflx}>
        <View style={{paddingLeft:16,paddingRight:16}}>
          <View style={Custom.logotext}>
            <Image source={require('../../assets/images/small_logo.png')} style={[Custom.logoimg, { width: 200, 
              resizeMode: 'contain',marginBottom:12 }]} />
          </View>
          <View>
            <Text style={Custom.gettingpara}>
            Import Wallet
            </Text>
            <Text style={[Custom.importwalletpara]}>
          Only the first account on this wallet will auto load. After completing this process,
              to add additional accounts, click the drop down menu, then select Create Account
          </Text>
          <View>
          <Input
                placeholder="Type or Paste your mnemonic secret phrase"
                placeholderTextColor="#fff"
                inputContainerStyle={{ borderBottomWidth: 0 }}
                containerStyle={[{
                  borderWidth: 2, height: 120, borderColor: '#eaf2e033', marginBottom: 8, borderRadius: 4,
                  marginTop: 8,
                }]}
                style={[Fonts.Light,{color:white}]}
              />
          </View>
          <View>
              <Input
                placeholder="New Password"
                placeholderTextColor="#fff"
                inputContainerStyle={{ borderBottomWidth: 0 }}
                containerStyle={[{
                  borderWidth: 2, height: 60, borderColor: '#eaf2e033', marginBottom: 8, borderRadius: 4, 
                  marginTop: 8, paddingTop: 3
                }]}
                style={[Fonts.Light,{color:white}]}
              />
              <Input
                placeholder="Confirm Password"
                placeholderTextColor="#fff"
                containerStyle={[ {
                  borderWidth: 2, height: 60, borderColor: '#eaf2e033', marginBottom: 8, borderRadius: 4, paddingTop: 3
                }]}
                inputContainerStyle={{ borderBottomWidth: 0, }}
                style={[Fonts.Light,{color:white}]}
              />
            </View>
            <Button size="lg" buttonStyle={{
              backgroundColor: primary,
              borderRadius: 4,
            }} titleStyle={{
              color: '#000',
              fontFamily: "NunitoSans-bold",
              fontWeight:'bold',fontSize: 18,
            }} containerStyle={{
              marginVertical: 10,
            }}>Import</Button>
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}
