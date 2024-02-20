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
  SafeAreaView,
  ScrollView,
  StatusBar,
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
import { background, greylightwhite, primary, text } from './src/styles/Variables';


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

function CreatenewPassword(): React.JSX.Element {
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
              Create New Password
            </Text>
            <View style={styles.inputflx}>
              <Input
                placeholder="New Password"
                placeholderTextColor="#fff"
                inputContainerStyle={{ borderBottomWidth: 0 }}
                containerStyle={[{
                  borderWidth: 2, height: 50, borderColor: greylightwhite, marginBottom: 8, borderRadius: 4, width: 250,
                  marginTop: 8,
                }]}
                style={{color:'#fff'}}
              />
              <Input
                placeholder="Confirm Password"
                placeholderTextColor="#fff"
                containerStyle={[ {
                  borderWidth: 2, height: 50, borderColor: greylightwhite, marginBottom: 8, borderRadius: 4, width: 250,
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
            }}>Create</Button>
          </View>
          <Text style={[styles.gettingpara, { color: primary }]}>
            Skip
          </Text>

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
    fontSize: 18,
    textAlign: 'center',
    color: text,
    paddingBottom: 8,
  },
  logoimg: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  input: {
    height: 50,
    borderWidth: 2,
    padding: 10,
    borderColor: greylightwhite,
    width: 250,
    borderRadius: 4,
  },
  inputnbm: {
    paddingBottom: 8,
    paddingTop: 8,
  },
  inputflx: {
    flex: 0,
    flexDirection: 'column',
    rowGap: 2,
  },
});

export default CreatenewPassword;
