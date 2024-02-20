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
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Button } from '../../../node_modules/@rneui/themed';
import { background, black, greyHiglight, primary, text } from '../../styles/Variables';
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

function CreateWallet(): React.JSX.Element {
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
          <View style={styles.creaeborder}>
            <View style={styles.fontplus}>
              <View>
                <Image source={require('./src/assets/images/success.png')} style={[styles.logoimg, { width: 150, resizeMode: 'contain', }]} />
              </View>
              <Text style={styles.gettingpara}>
                Thanks for using Anduro wallet. Your Wallet has been created successfully
              </Text>
            </View>
          </View>
          <View style={[styles.dflxremind]} >
            <Button size="lg" buttonStyle={{
              backgroundColor: primary,
              borderRadius: 4,
            }} titleStyle={{
              color: black,
              fontWeight: 'bold', fontSize: 18,
            }} containerStyle={{
              marginVertical: 10,
            }}>Close</Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgview: {
    backgroundColor:background,
    height: '100%',
  },
  logotext: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  dflx: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  gettingpara: {
    fontSize: 22,
    paddingRight: 2,
    textAlign: 'center',
    color: text,
    paddingBottom: 16,
    marginTop: 12,
  },
  logoimg: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  creaeborder: {
    borderStyle: 'solid',
    borderColor:  greyHiglight,
    borderWidth: 1,
    width: 300,
    padding: 24,
    marginBottom: 16,
  },
  fontplus: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dflxremind: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CreateWallet;
