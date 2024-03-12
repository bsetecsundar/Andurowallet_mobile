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
import Custom from '../../../src/styles/Custom';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { Button, Input } from '@rneui/base';
import { greylightwhite } from '../../../src/styles/Variables';
import { Navigation } from 'react-native-navigation';

export function Sendto(props:any): React.JSX.Element {
  return (
    <SafeAreaView>
    <View style={Custom.bgview}>
      <View style={Custom.headersend}>
        <View style={Custom.logotext}>
          <Image source={require('../../assets/images/small_logo.png')} style={[Custom.logoimg, { width: 80, resizeMode: 'contain', }]} />
        </View>
        <View>
          <Text style={Custom.sendlabel}>
            Send to
          </Text>
        </View>
        <View>
          <Text style={Custom.sendlabel}>
            Cancel
          </Text>
        </View>
      </View>
      <View>
        <Input
          placeholder="Enter Receiver address"
          placeholderTextColor="#fff"
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={[{
            borderWidth: 2, height: 75, borderColor: greylightwhite, width: "100%",
            borderLeftWidth: 0, borderRightWidth: 0, paddingTop: 10,position:'relative'
          }]}
          style={{ color: '#fff' }}
        />
        <Button size="lg" onPress={() => Navigation.push(props.componentId,{
              component:{
                name:'Send',
                options:{
                  topBar:{
                    visible:false,
                  },bottomTabs: {
                    visible: false,
                }
                }
              }
            })}buttonStyle={{
                    backgroundColor: 'transparent',
                    borderRadius: 4,
                  }} titleStyle={{
                    color: '#000',
                    fontFamily: "NunitoSans-bold",
                    fontWeight:'bold',fontSize: 18,
                  }} containerStyle={{position:'absolute',top:0,right:4
                  }} ><FontAwesomeIcon icon={faArrowRight} color='white' size={22} style={{}}/></Button>
      </View>
      <View style={Custom.headersend}>
        <View>
          <Text style={Custom.sendlabel}>
            Recents
          </Text>
        </View>
      </View>
  </View>
    </SafeAreaView>
  );
}
