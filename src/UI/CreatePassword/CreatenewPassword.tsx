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
import { Input } from '@rneui/base';
import { greylightwhite, primary } from '../../../src/styles/Variables';
import Custom from '../../../src/styles/Custom';

function CreatenewPassword(): React.JSX.Element {

  return (
    <View style={Custom.bgview}>
      <View style={Custom.dflx}>
        <View>
          <View style={Custom.logotext}>
            <Image source={require('./src/assets/images/logo.png')} style={[Custom.logoimg, { width: 200, resizeMode: 'contain', }]} />
          </View>
          <View>
            <Text style={Custom.createtitle}>
              Create New Password
            </Text>
            <View style={Custom.inputflx}>
              <Input
                placeholder="New Password"
                placeholderTextColor="#fff"
                inputContainerStyle={{ borderBottomWidth: 0 }}
                containerStyle={[{
                  borderWidth: 2, height: 50, borderColor: greylightwhite, marginBottom: 8, borderRadius: 4, width: 250,
                  marginTop: 8,
                }]}
                style={{color:'#fff'}}
              />
              <Input
                placeholder="Confirm Password"
                placeholderTextColor="#fff"
                containerStyle={[ {
                  borderWidth: 2, height: 50, borderColor: greylightwhite, marginBottom: 8, borderRadius: 4, width: 250,
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
            }}>Create</Button>
          </View>
          <Text style={[Custom.gettingpara, { color: primary }]}>
            Skip
          </Text>

        </View>
      </View>
    </View>
  );
}

export default CreatenewPassword;
