/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Button } from '../../../node_modules/@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import Custom from '../../../src/styles/Custom';


function ConfirmSeed(): React.JSX.Element {

  return (
    <ScrollView>
      <View style={Custom.bgview}>

        <View style={Custom.dflx}>
          <View>
            <View style={Custom.logotext}>
              <Image source={require('./src/assets/images/logo.png')} style={[Custom.logoimg, { width: 200, resizeMode: 'contain', }]} />
            </View>
            <View>
              <Text style={Custom.gettingpara}>
                Confirm seed phrase
              </Text>
              <Text style={[Custom.importwalletpara]}>
                Select each word in the order you recorded before
              </Text>
              <View style={[Custom.setupflx]}>
                <View style={[Custom.paddleftright, { position: 'relative', }]}>
                  <Text style={[Custom.confirseedpara]}>arrange
                  </Text><FontAwesomeIcon icon={faXmark} style={Custom.xmark} />
                </View>
                <View style={[Custom.paddleftright]}>
                  <Text style={[Custom.confirseedpara]}>arrange</Text>
                </View>
                <View style={[Custom.paddleftright]}>
                  <Text style={[Custom.confirseedpara]}>clarify</Text>
                </View>
                <View style={[Custom.paddleftright]}>
                  <Text style={[Custom.confirseedpara]}>merry</Text>
                </View>
                <View style={[Custom.paddleftright]}>
                  <Text style={[Custom.confirseedpara]}>paddle</Text>
                </View>
                <View style={[Custom.paddleftright]}>
                  <Text style={[Custom.confirseedpara]}>mind</Text>
                </View>
                <View style={[Custom.paddleftright]}>
                  <Text style={[Custom.confirseedpara]}>possible</Text>
                </View>
                <View style={[Custom.paddleftright]}>
                  <Text style={[Custom.confirseedpara]}>estate</Text>
                </View>
                <View style={[Custom.paddleftright]}>
                  <Text style={[Custom.confirseedpara]}>glimpse</Text>
                </View>
                <View style={[Custom.paddleftright]}>
                  <Text style={[Custom.confirseedpara]}>bracket</Text>
                </View>
                <View style={[Custom.paddleftright]}>
                  <Text style={[Custom.confirseedpara]}>estate</Text>
                </View>
                <View style={[Custom.paddleftright]}>
                  <Text style={[Custom.confirseedpara]}>need</Text>
                </View>
                <View style={[Custom.paddleftright]}>
                  <Text style={[Custom.confirseedpara]}>nuclear</Text>
                </View>
              </View>
              <View style={[Custom.dflxremind]} >
                <Button size="lg" buttonStyle={{
                  backgroundColor: '#04f76e',
                  borderRadius: 4,
                }} titleStyle={{
                  color: '#000',
                  fontWeight: 'bold', fontSize: 18,
                }} containerStyle={{
                  marginVertical: 10,
                }}>Confirm</Button>
              </View>

            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}


export default ConfirmSeed;
