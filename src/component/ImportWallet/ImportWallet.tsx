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
import { Input } from '@rneui/base';
import { background, primary, text, white } from '../../../src/styles/Variables';


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
    <View style={styles.bgview}>
      <View style={styles.dflx}>
        <View>
          <View style={styles.logotext}>
            <Image source={require('./src/assets/images/logo.png')} style={[styles.logoimg, { width: 200, resizeMode: 'contain', }]} />
          </View>
          <View>
            <Text style={styles.gettingpara}>
            Import Wallet
            </Text>
            <Text style={[styles.importwalletpara]}>
          Only the first account on this wallet will auto load. After completing this process,
              to add additional accounts, click the drop down menu, then select Create Account
          </Text>
          <View style={styles.inputflx}>
              <Input
                placeholder="New Password"
                placeholderTextColor="#fff"
                inputContainerStyle={{ borderBottomWidth: 0 }}
                containerStyle={[{
                  borderWidth: 2, height: 50, borderColor: '#eaf2e033', marginBottom: 8, borderRadius: 4, width: 250,
                  marginTop: 8,
                }]}
                style={{color:white}}
              />
              <Input
                placeholder="Confirm Password"
                placeholderTextColor="#fff"
                containerStyle={[ {
                  borderWidth: 2, height: 50, borderColor: '#eaf2e033', marginBottom: 8, borderRadius: 4, width: 250,
                }]}
                inputContainerStyle={{ borderBottomWidth: 0, }}
                style={{color:'#fff'}}
              />
            </View>
            <Button size="lg" buttonStyle={{
              backgroundColor: primary,
              borderRadius: 4,
            }} titleStyle={{
              color: '#000',
              fontWeight: 'bold', fontSize: 18,
            }} containerStyle={{
              marginVertical: 10,
            }}>Import</Button>
          </View>
        </View>
      </View>
    </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  gettingpara: {
    fontSize: 22,
    textAlign: 'center',
    color: text,
    paddingBottom: 8,
  },
  importwalletpara:{
    fontSize: 17,
    textAlign: 'center',
    color: text,
    paddingBottom: 8,
    width:255,
    marginLeft:'auto',
    marginRight:'auto'
  },
  logoimg: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  inputflx:{
    flex: 0,
    flexDirection:'column',
    rowGap:2,
  }
});

export default ImportWallet;
