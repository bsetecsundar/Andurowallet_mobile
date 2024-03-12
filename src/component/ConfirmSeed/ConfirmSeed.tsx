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
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Button } from '../../../node_modules/@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import Custom from '../../../src/styles/Custom';
import { Navigation } from 'react-native-navigation';
import route from '../../Route/Route';
import Header from '../../UI/Header/Header';
import Fonts from '../../styles/Fonts';


export function ConfirmSeed(props:any): React.JSX.Element {
  const confirmseedpharse = [
    'arrange', 'calds', 'dog', 'cat', 'viwe', 'sun', 'bike', 'skype', 'button', 'start', 'moon','run'
  ]

  return (
    <SafeAreaView >
      <Header />
    <ScrollView>
      <View style={[Custom.bgview,{paddingBottom:120}]}>
        <View>
          <View>
            <View>
              <Text style={[Custom.setupseed,{marginTop:20}]}>
                Confirm seed phrase
              </Text>
              <Text style={[Custom.importwalletpara]}>
                Select each word in the order you recorded before
              </Text>
              <View style={{flex:1,flexDirection:'column',paddingLeft:16,paddingRight:16,}}>
                {confirmseedpharse.map((item: any, index: any) => {
                  return (
                    <View style={[Custom.paddleftright]} key={index}>
                    <Text style={[Fonts.Light,{ color: 'white', fontSize: 16, padding: 8,textAlign:'center' }]} key={`key_${item}_${index}`}>{item}</Text>
                    </View>
                  );
                })}
              </View>
              <View style={[Custom.dflxremind]} >
                <Button size="lg"
                  // onPress={() => Navigation.push(props.componentId, {
                  //   component: {
                  //     name: 'Dashboard',
                  //     options:{
                  //       topBar:{
                  //         visible:false,
                  //       }
                  //     }
                  //   }
                  // })}
                  onPress={() => Navigation.setRoot(route.afterLogin)}
                  buttonStyle={{
                    backgroundColor: '#04f76e',
                    borderRadius: 8,
                  }} titleStyle={{
                    color: '#000',
                    fontFamily: "NunitoSans-bold",
                    fontWeight:'bold', fontSize: 18,
                  }} containerStyle={{
                    marginVertical: 10,
                  }}>Confirm</Button>
              </View>

            </View>
          </View>
        </View>

      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
