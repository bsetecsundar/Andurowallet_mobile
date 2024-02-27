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
import { greyHiglight,primary, white, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons/faArrowsRotate';

function ImportWallet(): React.JSX.Element {

  return (
    <>
      <View style={Custom.bgview}>
        <View style={Custom.dflxstart}>
        <View>
            <View style={[Custom.homepageflx]}>
                <View>
                <Image source={require('./src/assets/images/bitcoin.png')} 
                style={[Custom.logoimg,Custom.homebitcoin]} />
                </View>
                <View>
                  <Text style={[Fonts.regular,Custom.sendtext]}>
                   0 BTC <Button buttonStyle={{
                    backgroundColor: "transparent",
                    padding:0
                  }}>
                    <FontAwesomeIcon icon={faArrowsRotate} color='white'/></Button> 
                  </Text>
                  <Text style={[Fonts.Light,{color:white,fontSize:20}]}>
                  $0.00 USD
                  </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={[Custom.homebuton]}>
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
                    paddingRight:40
                  }}><Image source={require('./src/assets/images/peginblk.png')} style={Custom.peginimg}
                    /></Button>
                  <Text style={[Custom.sendtext]}>Convert</Text>
                </View>
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
                    paddingRight:40
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
          <View>
                <Text style={[Fonts.Light,Custom.Transactiontitle]}>
                Transaction History
                </Text>
        </View>
        <View>
            <View style={[Custom.dashboardlist]}>
              <View style={[Custom.dashboradlistflx]}>
                <View>
                <Image source={require('./src/assets/images/bitcoin-main.png')} 
                style={[Custom.logoimg,Custom.bitcoinhome,]} />
                </View>
                <View>
                  <Text style={[Fonts.regular,Custom.dashboardbtc]}>
                    BTC
                  </Text>
                  <Text style={[Fonts.Light,Custom.btcoindash]}>
                    Bitcoin Testnet
                  </Text>
                </View>
              </View>
              <View>
                <Text style={[Fonts.regular,Custom.dashboardbtc]}>0 BTC</Text>
                <Text style={[Fonts.Light,Custom.btcoindash]}>$0.00 USD</Text>
              </View>
            </View>
            <View style={[Custom.dashboardlist]}>
              <View style={[Custom.dashboradlistflx]}>
                <View>
                <Image source={require('./src/assets/images/bitcoin-main.png')} 
                style={[Custom.logoimg,Custom.bitcoinhome,]} />
                </View>
                <View>
                  <Text style={[Fonts.regular,Custom.dashboardbtc]}>
                    BTC
                  </Text>
                  <Text style={[Fonts.Light,Custom.btcoindash]}>
                    Bitcoin Testnet
                  </Text>
                </View>
              </View>
              <View>
                <Text style={[Fonts.regular,Custom.dashboardbtc]}>0 BTC</Text>
                <Text style={[Fonts.Light,Custom.btcoindash]}>$0.00 USD</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      </>
  );
}


export default ImportWallet;
