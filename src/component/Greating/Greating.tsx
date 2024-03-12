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
import { Button } from '../../../node_modules/@rneui/themed';
import { black, primary, } from '../../../src/styles/Variables';
import Custom from '../../../src/styles/Custom';
import Header from '../../UI/Header/Header';
import { Navigation } from 'react-native-navigation';
import route from '../../Route/Route';


export function Greating(props: any): React.JSX.Element {

  return (
    <SafeAreaView>
      <View style={Custom.bgview}>
        <Header />
        <View style={Custom.dflx}>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            <View style={Custom.creaeborder}>
              <View style={Custom.fontplus}>
                <View>
                  <Image source={require('../../assets/images/success.png')} style={[Custom.logoimg, { width: 150, resizeMode: 'contain', }]} />
                </View>
                <Text style={Custom.greatingpara}>
                  Thanks for using Anduro wallet. Your Wallet has been created successfully
                </Text>
              </View>
            </View>
            <View style={[Custom.dflxremind]} >
              <Button size="lg"
     onPress={() => Navigation.setRoot(route.afterLogin)}
                buttonStyle={{
                  backgroundColor: primary,
                  borderRadius: 8,
                }} titleStyle={{
                  color: black,
                  fontFamily: "NunitoSans-bold",
                  fontWeight: 'bold', fontSize: 18,
                }} containerStyle={{
                  marginVertical: 10,
                }}>Close</Button>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
