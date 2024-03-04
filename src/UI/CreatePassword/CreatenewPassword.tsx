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
import { greylightwhite, primary } from '../../../src/styles/Variables';
import Custom from '../../../src/styles/Custom';
import { Navigation } from 'react-native-navigation';

function CreatenewPassword(prop:any): React.JSX.Element {

  return (
    <SafeAreaView>
    <View style={Custom.bgview}>
      <View style={Custom.dflx}>
        <View>
          <View style={Custom.logotext}>
            <Image source={require('../../assets/images/logo.png')} style={[Custom.logoimg, { width: 200, resizeMode: 'contain', }]} />
          </View>
          <View>
            <Text style={Custom.headertitle}>
              Create New Password
            </Text>
            <View style={Custom.inputflx}>
              <Input
                placeholder="New Password"
                placeholderTextColor="#f2eae1"
                inputContainerStyle={{ borderBottomWidth: 0 }}
                containerStyle={[{
                  borderWidth: 2, height: 56, borderColor: greylightwhite, marginBottom: 12, borderRadius: 6, width: 250,
                  marginTop: 8,paddingTop:1
                }]}
                style={{ color: '#f2eae1' }}
              />
              <Input
                placeholder="Confirm Password"
                placeholderTextColor="#f2eae1"
                containerStyle={[{
                  borderWidth: 2, height: 56, borderColor: greylightwhite, marginBottom: 8, borderRadius: 6, width: 250,paddingTop:1
                }]}
                inputContainerStyle={{ borderBottomWidth: 0, }}
                style={{ color: '#f2eae1' }}
              />
            </View>
            <Button size="lg" buttonStyle={{
              backgroundColor: primary,
              borderRadius: 8,
            }} titleStyle={{
              color: '#000',
              fontWeight: 'bold', fontSize: 18,
            }} containerStyle={{
              marginVertical: 10,
            }}>Create</Button>
          </View>
          <Text
            onPress={() => Navigation.push(prop.componentId, {
              component: {
                name: 'SetUp',
                options:{
                  topBar:{
                    visible:false,
                  }
                }
              }
            })}
            style={[Custom.gettingpara, { color: primary,fontSize:18, }]}>
            Skip
          </Text>

        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

export default CreatenewPassword;
