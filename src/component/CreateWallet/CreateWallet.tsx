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
  useColorScheme,
  View,
} from 'react-native';
import { Button } from '@rneui/themed';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { primary, black } from '../../../src/styles/Variables'
import Custom from '../../../src/styles/Custom';
import { Navigation } from 'react-native-navigation';
import Fonts from '../../styles/Fonts';
import { fonts } from '@rneui/base';

export function CreateWallet(props: any) {

  return (
    <SafeAreaView>
    <View style={Custom.bgview}>
      <View style={{flex:1,justifyContent: 'center',flexDirection:'column'}}>
        <View style={{paddingLeft:16,paddingRight:16,}}>
            <View style={Custom.logotextbtm}>
              <Image source={require('../../assets/images/small_logo.png')} style={[Custom.logoimg, { width: 200, resizeMode: 'contain', 
            marginBottom:12}]} />
            </View>
            <View>
            <View style={Custom.creaeborder}>
              <View style={Custom.fontplus}>
                <View style={Custom.borderplus}>
                  <FontAwesomeIcon icon={faPlus} style={Custom.faplusicon} />
                </View>
                <Text style={[Custom.titlepara,Fonts.medium]}>
                  New here?
                </Text>
              </View>
              <Button size="lg"
                onPress={() => Navigation.push(props.componentId, {
                  component: {
                    name: 'CreatenewPassword',
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
                  fontFamily: "NunitoSans-bold",
                  fontWeight:'bold', fontSize: 18,
                }}>Create Wallet</Button>
            </View>
            <View style={Custom.creaeborder}>
              <View style={Custom.fontplus}>
                <View style={[Custom.borderplus,{borderWidth:0}]}>
                  <FontAwesomeIcon icon={faDownload} size={20} style={Custom.faplusicon} />
                </View>
                <Text style={[Custom.titlepara,Fonts.medium]}>
                  Have a seed phrase?
                </Text>
              </View>
              <Button size="lg"
                onPress={() => Navigation.push(props.componentId, {
                  component: {
                    name: 'ImportWallet',
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
                  fontFamily: "NunitoSans-bold",
                  fontWeight:'bold'
                }}>Import Wallet</Button>
            </View>
            </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

