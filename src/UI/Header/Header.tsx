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
import { background, gray, greylightwhite, primary, text } from '../../../src/styles/Variables';


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

function Header(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.bgview}>
      <View style={styles.headerflx}>
        <View >
          <View style={styles.logotext}>
            <Image source={require('./src/assets/images/small_logo.png')} style={[styles.logoimg, { width: 160, resizeMode: 'contain', }]} />
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
  headerflx: {
    width:'100%',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor:gray,
    paddingBottom:12,
    paddingTop:12,
  },

  logoimg: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

});

export default Header;
