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

export function CreateWallet(props: any) {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
    <View style={Custom.bgview}>
      <View style={Custom.dflx}>
        <View>
          <View style={Custom.logotextbtm}>
            <Image source={require('../../assets/images/logo.png')} style={[Custom.logoimg, { width: 200, resizeMode: 'contain', }]} />
          </View>
          <View style={Custom.creaeborder}>
            <View style={Custom.fontplus}>
              <View style={Custom.borderplus}>
                <FontAwesomeIcon icon={faPlus} style={Custom.faplusicon} />
              </View>
              <Text style={Custom.titlepara}>
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
                borderRadius: 4,
              }} titleStyle={{
                color: black,
                fontWeight: 'bold', fontSize: 18,
              }}>Create Wallet</Button>
          </View>
          <View style={Custom.creaeborder}>
            <View style={Custom.fontplus}>
              <View style={Custom.borderplus}>
                <FontAwesomeIcon icon={faDownload} style={Custom.faplusicon} />
              </View>
              <Text style={Custom.titlepara}>
                Have a seed phrase?
              </Text>
            </View>
            <Button size="lg"
              onPress={() => Navigation.push(props.componentId, {
                component: {
                  name: 'ImportWallet'
                }
              })}
              buttonStyle={{
                backgroundColor: primary,
                borderRadius: 4,
              }} titleStyle={{
                color: black,
                fontWeight: 'bold', fontSize: 18,
              }}>Import Wallet</Button>
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

