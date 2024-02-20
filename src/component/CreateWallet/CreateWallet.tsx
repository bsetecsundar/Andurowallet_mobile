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
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { background, greyLight, white, primary,black,text } from '../../styles/Variables'

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
            <View style={styles.borderplus}>
              <FontAwesomeIcon icon={faPlus} style={styles.faplusicon}/>
            </View>
            <Text style={styles.gettingpara}>
              New here?
            </Text>
            </View>
            <Button size="lg" buttonStyle={{
              backgroundColor: primary,
              borderRadius: 4,
            }} titleStyle={{
              color: black,
              fontWeight: 'bold', fontSize: 18,
            }}>Create Wallet</Button>
          </View>
          <View style={styles.creaeborder}>
          <View style={styles.fontplus}>
            <View style={styles.borderplus}>
              <FontAwesomeIcon icon={faDownload} style={styles.faplusicon}/>
            </View>
            <Text style={styles.gettingpara}>
            Have a seed phrase?
            </Text>
            </View>
            <Button size="lg" buttonStyle={{
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
  );
}

const styles = StyleSheet.create({
  bgview: {
    backgroundColor: background,
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
    fontSize: 18,
    paddingRight: 2,
    textAlign: 'center',
    color: text,
    paddingBottom: 16,
  },
  logoimg: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  creaeborder: {
    borderStyle: 'solid',
    borderColor: greyLight,
    borderWidth: 1,
    width: 300,
    padding: 24,
    marginBottom: 16,
  },
  fontplus:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  borderplus:{
    borderStyle: 'solid',
    borderColor: white,
    borderWidth: 2,
    borderRadius: 3,
    padding:6,
    marginBottom:8,
  },
  faplusicon:{
    color:white,
  }
});

export default CreateWallet;
