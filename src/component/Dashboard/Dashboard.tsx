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
import { Button } from '@rneui/themed';
import { greyHiglight,primary, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';
import { Navigation } from 'react-native-navigation';
import Header from '../../UI/Header/Header';

export function Dashboard(props:any): React.JSX.Element {
  
  return (
    <>
    <SafeAreaView>
      <View style={Custom.bgview}>
        <Header/>
        <View style={Custom.dashpaddrightleft}>
          <View>
            <View>
              <Text style={[Custom.dashboardtitle, Fonts.medium]}>
                TOTAL BALANCE
              </Text>
              <Text style={[Custom.dashboardusd, Fonts.regular]}>
                $0.00 USD
              </Text>
              <View style={[Custom.dflxdash]}>
                <View >
                  <Button size="lg" buttonStyle={{
                    backgroundColor: primary,
                    borderRadius: 8,
                    width:60,
                    height:60,
                  }} titleStyle={{
                    color: '#000',
                    fontWeight: 'bold', fontSize: 18,
                  }} containerStyle={{
                    marginVertical: 10,
                    paddingRight:22
                  }}><Image source={require('../../assets/images/up-send-arrow.png')}
                    /></Button>
                  <Text style={[Custom.sendtext]}>Send</Text>
                </View>
                <View>
                  <Button size="lg" buttonStyle={{
                    backgroundColor: primary,
                    borderRadius: 8,
                    width:60,
                    height:60,
                  }} titleStyle={{
                    color: '#000',
                    fontWeight: 'bold', fontSize: 18,
                  }} containerStyle={{
                    marginVertical: 10,
 
                  }}><Image source={require('../../assets/images/down-receive-arrow.png')} /></Button>
                  <Text style={[Custom.sendtext]}>Receive</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
          <View>
          <Pressable
            onPress={() => Navigation.push(props.componentId,{
              component:{
                name:'Home',
              }
            })}>
            <View style={[Custom.dashboardlist]}>
              <View style={[Custom.dashboradlistflx]}>
                <View>
                <Image source={require('../../assets/images/bitcoin-main.png')} 
                style={[Custom.logoimg, { width: 45, resizeMode: 'contain',marginRight:14, }]} />
                </View>
                <View>
                  <Text style={[Fonts.regular,{color:greyHiglight,fontSize:17,}]}>
                    BTC
                  </Text>
                  <Text style={[Fonts.Light,{color:greyHiglight,fontSize:16}]}>
                    Bitcoin Testnet
                  </Text>
                </View>
              </View>
              <View>
                <Text style={[Fonts.regular,{color:greyHiglight,fontSize:17,}]}>0 BTC</Text>
                <Text style={[Fonts.Light,{color:greyHiglight,fontSize:16}]}>$0.00 USD</Text>
              </View>
            </View>
            </Pressable>
          </View>
          <View>
          <Pressable
            onPress={() => Navigation.push(props.componentId,{
              component:{
                name:'Home',
                options:{
                  topBar:{
                    visible:false,
                  }
                }
              }
            })}>
            <View style={[Custom.dashboardlist]}>
              <View style={[Custom.dashboradlistflx]}>
                <View>
                <Image source={require('../../assets/images/bitcoin-main.png')} 
                style={[Custom.logoimg, { width: 45, resizeMode: 'contain',marginRight:14, }]} />
                </View>
                <View>
                  <Text style={[Fonts.regular,{color:greyHiglight,fontSize:17,}]}>
                    BTC
                  </Text>
                  <Text style={[Fonts.Light,{color:greyHiglight,fontSize:16}]}>
                    Bitcoin Testnet
                  </Text>
                </View>
              </View>
              <View>
                <Text style={[Fonts.regular,{color:greyHiglight,fontSize:17,}]}>0 BTC</Text>
                <Text style={[Fonts.Light,{color:greyHiglight,fontSize:16}]}>$0.00 USD</Text>
              </View>
            </View>
            </Pressable>
          </View>
        </View>
        </View>
        
      </View>
      </SafeAreaView>
      </>
  );
}
