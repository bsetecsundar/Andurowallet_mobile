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
import { Button } from '../../../node_modules/@rneui/themed';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons/faClipboard';
import { background, greyHiglight, text, white } from '../../../src/styles/Variables';

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

function App(): React.JSX.Element {
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
            Set up seed phrase
            </Text>
            <Text style={[styles.importwalletpara]}>
            This allows you to back up and restore your account
          </Text>
          <Text style={[styles.importwalletpara]}>
          WARNING: Never disclose your seed phrase. Anyone with it can take your cryptocurrency.
          </Text>
          <View style={[styles.creaeborder]}>
          <View style={[styles.setupflx]}>
            <View style={[styles.paddleftright]}>
            <Text style={{color:'white',fontSize:16,}}>arrange</Text>
            </View>
            <View style={[styles.paddleftright]}>
            <Text style={{color:'white'}}>clarify</Text>
            </View>
            <View style={[styles.paddleftright]}>
            <Text style={{color:'white',fontSize:16,}}>merry</Text>
            </View>
            <View style={[styles.paddleftright]}>
            <Text style={{color:'white',fontSize:16,}}>paddle</Text>
            </View>
            <View style={[styles.paddleftright]}>
            <Text style={{color:'white',fontSize:16,}}>mind</Text>
            </View>
            <View style={[styles.paddleftright]}>
            <Text style={{color:'white',fontSize:16,}}>possible</Text>
            </View>
            <View style={[styles.paddleftright]}>
            <Text style={{color:'white',fontSize:16,}}>estate</Text>
            </View>
            <View style={[styles.paddleftright]}>
            <Text style={{color:'white',fontSize:16,}}>glimpse</Text>
            </View>
            <View style={[styles.paddleftright]}>
            <Text style={{color:'white',fontSize:16,}}>bracket</Text>
            </View>
            <View style={[styles.paddleftright]}>
            <Text style={{color:'white',fontSize:16,}}>estate</Text>
            </View>
            <View style={[styles.paddleftright]}>
            <Text style={{color:'white',fontSize:16,}}>need</Text>
            </View>
            <View style={[styles.paddleftright]}>
            <Text style={{color:'white',fontSize:16,}}>nuclear</Text>
            </View>
          </View>
          <FontAwesomeIcon icon={faClipboard} style={styles.faplusicon} size={ 20 }  />
          </View>
          <View style={[styles.dflxremind]} >
          <Button size="lg" buttonStyle={{
             borderColor: '#04f76e',
              borderRadius: 4,
              borderWidth: 1,
            }} titleStyle={{
              color: '#04f76e',
              fontWeight: '200', fontSize: 18,
            }} containerStyle={{
              marginVertical: 10,
              marginHorizontal: 10,
            }}
            type="outline">Remind Later</Button>
            <Button size="lg" buttonStyle={{
              backgroundColor: '#04f76e',
              borderRadius: 4,
            }} titleStyle={{
              color: '#000',
              fontWeight: 'bold', fontSize: 18,
            }} containerStyle={{
              marginVertical: 10,
            }}>Next</Button>
          </View>

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
    color: '#f2eae2',
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
  creaeborder: {
    borderStyle: 'solid',
    borderColor: greyHiglight,
    borderWidth: 1,
    width: 300,
    padding: 24,
    marginBottom: 16,
    marginTop: 16,
  },
  setupflx:{
    width:255,
    marginLeft:'auto',
    marginRight:'auto',
    flexDirection: 'row',
     flexWrap: 'wrap',
     justifyContent:'center',
     alignItems:'center',
  },
  paddleftright:{
    padding:8,
  },
  faplusicon:{
    color:white,
    width:20,
    height:20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  dflxremind:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center',
    alignItems:'center',
  }
});

export default App;
