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
import { Button } from '@rneui/themed';
import { greyHiglight,primary, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';

function ImportWallet(): React.JSX.Element {

  return (
    <>
      <View style={Custom.bgview}>
        <View style={Custom.dflxstart}>
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
                  }}><Image source={require('./src/assets/images/up-send-arrow.png')}
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
 
                  }}><Image source={require('./src/assets/images/down-receive-arrow.png')} /></Button>
                  <Text style={[Custom.sendtext]}>Receive</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
          <View>
            <View style={[Custom.dashboardlist]}>
              <View style={[Custom.dashboradlistflx]}>
                <View>
                <Image source={require('./src/assets/images/bitcoin-main.png')} 
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
          </View>
          <View>
            <View style={[Custom.dashboardlist]}>
              <View style={[Custom.dashboradlistflx]}>
                <View>
                <Image source={require('./src/assets/images/bitcoin.png')} 
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
          </View>
        </View>
        </View>
      </View>
      </>
  );
}


export default ImportWallet;
