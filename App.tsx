/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Button } from '@rneui/themed';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { fonts, Input } from '@rneui/base';
import { background, gray, greyHiglight, greylightwhite, primary, regular, text, white } from './src/styles/Variables';
import Fonts from './src/styles/Fonts';



type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({ children, title }: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function ImportWallet(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <View style={styles.bgview}>
        <View style={styles.dflx}>
          <View>
            <View>
              <Text style={[styles.gettingpara, Fonts.medium]}>
                TOTAL BALANCE
              </Text>
              <Text style={[styles.importwalletpara, Fonts.regular]}>
                $0.00 USD
              </Text>
              <View style={[styles.dflxdash]}>
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
                  <Text style={[styles.sendtext]}>Send</Text>
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
                  <Text style={[styles.sendtext]}>Receive</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
          <View>
            <View style={[styles.dashboardlist]}>
              <View style={[styles.dashboradlistflx]}>
                <View>
                <Image source={require('./src/assets/images/bitcoin-main.png')} 
                style={[styles.logoimg, { width: 45, resizeMode: 'contain',marginRight:14, }]} />
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
            <View style={[styles.dashboardlist]}>
              <View style={[styles.dashboradlistflx]}>
                <View>
                <Image source={require('./src/assets/images/bitcoin_testnet.png')} 
                style={[styles.logoimg, { width: 45, resizeMode: 'contain',marginRight:14, }]} />
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

const styles = StyleSheet.create({
  bgview: {
    backgroundColor: background,
    height: '100%',
  },
  logotext: {
    textAlign: 'center',
    paddingBottom: 0,
  },
  dflx: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
  },
  gettingpara: {
    fontSize: 30,
    color: text,
    paddingBottom: 8,
    marginTop:22,
  },
  importwalletpara: {
    fontSize: 32,
    color: text,
    paddingBottom: 8,
    width: 255,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  logoimg: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  dflxdash:{
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
  },
  sendtext:{
    color:white,
    fontSize:22,
  },
  dashboardlist:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    borderWidth:1,
    borderColor:greylightwhite,
    padding:12,
    borderRadius:12,
    marginTop:16,
  },
  dashboradlistflx:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between', 
  },

});

export default ImportWallet;
