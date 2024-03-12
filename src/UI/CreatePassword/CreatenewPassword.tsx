/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Avatar, Button, Dialog, ListItem } from '@rneui/themed';
import { Input } from '@rneui/base';
import { background, greylightwhite, primary, text, white } from '../../../src/styles/Variables';
import Custom from '../../../src/styles/Custom';
import { Navigation } from 'react-native-navigation';
import Fonts from '../../styles/Fonts';

function CreatenewPassword(prop: any): React.JSX.Element {
  const [visible6, setVisible] = useState(false);
  const toggleDialog6 = () => {
    setVisible(!visible6);
  };

  const handleContinueAction = () => {
    setVisible(false)
    Navigation.push(prop.componentId, {
      component: {
        name: 'SetUp',
        options: {
          topBar: {
            visible: false,
          }
        }
      }
    })
  }
  const handleCloseAction = () => {
    setVisible(false)

  }

  return (
    <SafeAreaView>
      <View style={Custom.bgview}>
        <View style={{flex:1,justifyContent: 'center',flexDirection:'column',paddingLeft:16,paddingRight:16}}>
          <View>
            <View style={Custom.logotext}>
              <Image source={require('../../assets/images/small_logo.png')} style={[Custom.logoimg, { width: 200, 
                resizeMode: 'contain',marginBottom:12 }]} />
            </View>
            <View>
              <Text style={Custom.headertitle}>
                Create New Password
              </Text>
              <View>
                <Input
                  placeholder="New Password"
                  placeholderTextColor="#f2eae1"
                  inputContainerStyle={{ borderBottomWidth: 0 }}
                  containerStyle={[{
                    borderWidth: 2, height: 60, borderColor: greylightwhite, marginBottom: 12, borderRadius: 6,
                    marginTop: 8, paddingTop: 3
                  }]}
                  style={[Fonts.medium,{color: '#f2eae1'}]}
                />
                <Input
                  placeholder="Confirm Password"
                  placeholderTextColor="#f2eae1"
                  containerStyle={[{
                    borderWidth: 2, height: 60, borderColor: greylightwhite, marginBottom: 8, borderRadius: 6, paddingTop: 3
                  }]}
                  inputContainerStyle={{ borderBottomWidth: 0, }}
                  style={[Fonts.medium,{color: '#f2eae1'}]}
                />
              </View>
              <Button size="lg" buttonStyle={{
                backgroundColor: primary,
                borderRadius: 8,
              }} titleStyle={{
                color: '#000',
                fontFamily: "NunitoSans-bold",
                fontWeight:'bold',  fontSize: 18,
              }} containerStyle={{
                marginVertical: 10,
              }}>Create</Button>
            </View>
            <Text
              style={[Custom.gettingpara,Fonts.medium,{ color: primary, fontSize: 18, }]}
              onPress={toggleDialog6}>
              Skip
            </Text>
            <Dialog
              isVisible={visible6}
              onBackdropPress={toggleDialog6}
              overlayStyle={{ backgroundColor: background ,borderWidth: 0.5, borderColor: primary,}}
            >
              <Dialog.Title title="Warning" titleStyle={[Fonts.medium,{ fontSize: 22, color: '#fff', borderBottomWidth: 0.5, borderBottomColor: text, paddingBottom: 16 }]} />
              <Text style={[Fonts.medium,{ fontSize: 18, color: '#fff', paddingBottom: 24,paddingTop:12 }]}><Text style={[Fonts.medium,,{ fontWeight: '700', color: '#fff' }]}>Warning</Text> : We strongly recommend you to set the password for the wallet due to security reasons.</Text>
              <View style={[Custom.dflxremind, { justifyContent: 'flex-end', borderTopWidth: 0.5, borderTopColor: text, paddingTop: 12 }]} >
                <Button size="lg"
                  onPress={handleContinueAction} buttonStyle={{
                    backgroundColor: '#04f76e',
                    borderRadius: 4,
                  }} titleStyle={{
                    color: '#000',
                    fontFamily: "NunitoSans-bold",
                    fontWeight:'bold',  fontSize: 18,
                  }} containerStyle={{
                    marginVertical: 10,
                    marginRight: 12,
                    width: 110
                  }}>Continue</Button>
                <Button size="lg"
                onPress={handleCloseAction}buttonStyle={{
                  backgroundColor: '#04f76e',
                  borderRadius: 4,
                }} titleStyle={{
                  color: '#000',
                  fontFamily: "NunitoSans-bold",
                  fontWeight:'bold',  fontSize: 18,
                }} containerStyle={{
                  marginVertical: 10,
                  width: 110
                }}>Close</Button>
              </View>
            </Dialog>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    width: 220,
    margin: 20,
  },
  buttonContainer: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreatenewPassword;
