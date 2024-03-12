/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Button } from '../../../node_modules/@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons/faClipboard';
import Custom from '../../../src/styles/Custom';
import { Navigation } from 'react-native-navigation';
import Fonts from '../../styles/Fonts';
import Clipboard from '@react-native-clipboard/clipboard';



export function SetUp(props: any): React.JSX.Element {
  const backupwallet = [
    'arrange', 'calds', 'dog', 'cat', 'viwe', 'sun', 'arrange', 'arrange', 'arrange', 'arrange', 'arrange','arrange'
  ]

  const handleClipboard = () => {
    const backupString = backupwallet.join('\n');
    Clipboard.setString(backupString);
  };
  return (
    <SafeAreaView>
    <View style={Custom.bgview}>
      <View style={[Custom.dashpaddrightleft,{marginTop:20}]}>
        <View>
          <View style={Custom.logotext}>
            <Image source={require('../../assets/images/small_logo.png')} style={[Custom.logoimg, { width: 200,
              resizeMode: 'contain',paddingTop:12 }]} />
          </View>
          <View>
            <Text style={Custom.setupseed}>
              Set up seed phrase
            </Text>
            <Text style={[Custom.importwalletpara]}>
              This allows you to back up and restore your account
            </Text>
            <Text style={[Custom.importwalletpara]}>
              WARNING: Never disclose your seed phrase. Anyone with it can take your cryptocurrency.
            </Text>
            <View style={[Custom.bordersetup]}>
              <View style={[Custom.setupseedborder]}>
              {backupwallet.map((item: any, index: any) => {
                  return (
                    <Text style={[Fonts.Light,{ color: 'white', fontSize: 16, padding: 8, }]} key={`key_${item}_${index}`}>{item}</Text>
                  );
                })}
              </View>
              <Pressable onPress={handleClipboard}>
              <FontAwesomeIcon icon={faClipboard} style={Custom.faclipboard} size={20} />
              </Pressable>
            </View>
            <View style={[Custom.dflxremind]} >
              <Button size="lg"
                onPress={() => Navigation.push(props.componentId, {
                  component: {
                    name: 'Greating',
                    options:{
                      topBar:{
                        visible:false,
                      }
                    }
                  }
                })}
                buttonStyle={{
                  borderColor: '#04f76e',
                  borderRadius: 8,
                  borderWidth: 1,
                }} titleStyle={{
                  color: '#04f76e',
                  fontFamily: "NunitoSans-light",
                  fontWeight:'200',  fontSize: 18,
                }} containerStyle={{
                  marginVertical: 10,
                  marginHorizontal: 10,
                }}
                type="outline">Remind Later</Button>
              <Button size="lg"
                onPress={() => Navigation.push(props.componentId, {
                  component: {
                    name: 'ConfirmSeed',
                    options:{
                      topBar:{
                        visible:false,
                      }
                    }
                  }
                })}
                buttonStyle={{
                  backgroundColor: '#04f76e',
                  borderRadius: 8,
                }} titleStyle={{
                  color: '#000',
                  fontFamily: "NunitoSans-bold",
                  fontWeight:'bold', fontSize: 18,
                }} containerStyle={{
                  marginVertical: 10,
                }}>Next</Button>
            </View>

          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

