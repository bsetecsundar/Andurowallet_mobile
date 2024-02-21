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
import { Button } from '../../../node_modules/@rneui/themed';
import { black, primary, } from '../../../src/styles/Variables';
import Custom from '../../../src/styles/Custom';


function CreateWallet(): React.JSX.Element {

  return (
    <View style={Custom.bgview}>
      <View style={Custom.dflx}>
        <View>
          <View style={Custom.logotextbtm}>
            <Image source={require('./src/assets/images/logo.png')} style={[Custom.logoimg, { width: 200, resizeMode: 'contain', }]} />
          </View>
          <View style={Custom.creaeborder}>
            <View style={Custom.fontplus}>
              <View>
                <Image source={require('./src/assets/images/success.png')} style={[Custom.logoimg, { width: 150, resizeMode: 'contain', }]} />
              </View>
              <Text style={Custom.greatingpara}>
                Thanks for using Anduro wallet. Your Wallet has been created successfully
              </Text>
            </View>
          </View>
          <View style={[Custom.dflxremind]} >
            <Button size="lg" buttonStyle={{
              backgroundColor: primary,
              borderRadius: 4,
            }} titleStyle={{
              color: black,
              fontWeight: 'bold', fontSize: 18,
            }} containerStyle={{
              marginVertical: 10,
            }}>Close</Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CreateWallet;
