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
import { Button } from '../../../node_modules/@rneui/themed';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TextInput } from '../../../node_modules/react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import {background , text, greyLight, white} from '../../../src/styles/Variables'

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

function ConfirmSeed(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView>
      <View style={styles.bgview}>

        <View style={styles.dflx}>
          <View>
            <View style={styles.logotext}>
              <Image source={require('./src/assets/images/logo.png')} style={[styles.logoimg, { width: 200, resizeMode: 'contain', }]} />
            </View>
            <View>
              <Text style={styles.gettingpara}>
                Confirm seed phrase
              </Text>
              <Text style={[styles.importwalletpara]}>
                Select each word in the order you recorded before
              </Text>
              <View style={[styles.setupflx]}>
                <View style={[styles.paddleftright, { position: 'relative', }]}>
                  <Text style={{ color: 'white', fontSize: 16, }}>arrange
                  </Text><FontAwesomeIcon icon={faXmark} style={styles.xmark} />
                </View>
                <View style={[styles.paddleftright]}>
                  <Text style={{ color: 'white', fontSize: 16, }}>arrange</Text>
                </View>
                <View style={[styles.paddleftright]}>
                  <Text style={{ color: 'white' }}>clarify</Text>
                </View>
                <View style={[styles.paddleftright]}>
                  <Text style={{ color: 'white', fontSize: 16, }}>merry</Text>
                </View>
                <View style={[styles.paddleftright]}>
                  <Text style={{ color: 'white', fontSize: 16, }}>paddle</Text>
                </View>
                <View style={[styles.paddleftright]}>
                  <Text style={{ color: 'white', fontSize: 16, }}>mind</Text>
                </View>
                <View style={[styles.paddleftright]}>
                  <Text style={{ color: 'white', fontSize: 16, }}>possible</Text>
                </View>
                <View style={[styles.paddleftright]}>
                  <Text style={{ color: 'white', fontSize: 16, }}>estate</Text>
                </View>
                <View style={[styles.paddleftright]}>
                  <Text style={{ color: 'white', fontSize: 16, }}>glimpse</Text>
                </View>
                <View style={[styles.paddleftright]}>
                  <Text style={{ color: 'white', fontSize: 16, }}>bracket</Text>
                </View>
                <View style={[styles.paddleftright]}>
                  <Text style={{ color: 'white', fontSize: 16, }}>estate</Text>
                </View>
                <View style={[styles.paddleftright]}>
                  <Text style={{ color: 'white', fontSize: 16, }}>need</Text>
                </View>
                <View style={[styles.paddleftright]}>
                  <Text style={{ color: 'white', fontSize: 16, }}>nuclear</Text>
                </View>
              </View>
              <View style={[styles.dflxremind]} >
                <Button size="lg" buttonStyle={{
                  backgroundColor: '#04f76e',
                  borderRadius: 4,
                }} titleStyle={{
                  color: '#000',
                  fontWeight: 'bold', fontSize: 18,
                }} containerStyle={{
                  marginVertical: 10,
                }}>Confirm</Button>
              </View>

            </View>
          </View>
        </View>

      </View>
    </ScrollView>
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
  importwalletpara: {
    fontSize: 17,
    textAlign: 'center',
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
  setupflx: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  paddleftright: {
    padding: 12,
    borderStyle: 'solid',
    borderColor: greyLight,
    borderWidth: 2,
    marginBottom: 7,
    marginTop: 7,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
  },
  dflxremind: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  xmark: {
    color: white,
    position: 'absolute',
    top: 17,
    right: 46,
    bottom: "auto",
  }
});

export default ConfirmSeed;
