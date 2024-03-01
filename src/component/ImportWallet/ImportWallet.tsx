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

export function ImportWallet(): React.JSX.Element {

  return (
    <SafeAreaView>
    <View style={Custom.bgview}>
      <View style={Custom.dflx}>
        <View>
          <View style={Custom.logotext}>
            <Image source={require('../../assets/images/logo.png')} style={[Custom.logoimg, { width: 200, resizeMode: 'contain', }]} />
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
                  borderWidth: 2, height: 120, borderColor: '#eaf2e033', marginBottom: 8, borderRadius: 4, width: 250,
                  marginTop: 8,
                }]}
                style={{color:white}}
              />
          </View>
          <View style={Custom.inputflx}>
              <Input
                placeholder="New Password"
                placeholderTextColor="#fff"
                inputContainerStyle={{ borderBottomWidth: 0 }}
                containerStyle={[{
                  borderWidth: 2, height: 50, borderColor: '#eaf2e033', marginBottom: 8, borderRadius: 4, width: 250,
                  marginTop: 8,
                }]}
                style={{color:white}}
              />
              <Input
                placeholder="Confirm Password"
                placeholderTextColor="#fff"
                containerStyle={[ {
                  borderWidth: 2, height: 50, borderColor: '#eaf2e033', marginBottom: 8, borderRadius: 4, width: 250,
                }]}
                inputContainerStyle={{ borderBottomWidth: 0, }}
                style={{color:'#fff'}}
              />
            </View>
            <Button size="lg" buttonStyle={{
              backgroundColor: primary,
              borderRadius: 4,
            }} titleStyle={{
              color: '#000',
              fontWeight: 'bold', fontSize: 18,
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
