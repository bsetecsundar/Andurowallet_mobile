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
import { Button } from '../../../node_modules/@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons/faClipboard';
import Custom from '../../../src/styles/Custom';



function App(): React.JSX.Element {

  return (
    <View style={Custom.bgview}>
      <View style={Custom.dflx}>
        <View>
          <View style={Custom.logotext}>
            <Image source={require('./src/assets/images/logo.png')} style={[Custom.logoimg, { width: 200, resizeMode: 'contain', }]} />
          </View>
          <View>
            <Text style={Custom.gettingpara}>
            Set up seed phrase
            </Text>
            <Text style={[Custom.importwalletpara]}>
            This allows you to back up and restore your account
          </Text>
          <Text style={[Custom.importwalletpara]}>
          WARNING: Never disclose your seed phrase. Anyone with it can take your cryptocurrency.
          </Text>
          <View style={[Custom.creaebordertop]}>
          <View style={[Custom.setupflxbox]}>
            <View style={[Custom.setupbox]}>
            <Text style={{color:'white',fontSize:16,}}>arrange</Text>
            </View>
            <View style={[Custom.setupbox]}>
            <Text style={{color:'white'}}>clarify</Text>
            </View>
            <View style={[Custom.setupbox]}>
            <Text style={{color:'white',fontSize:16,}}>merry</Text>
            </View>
            <View style={[Custom.setupbox]}>
            <Text style={{color:'white',fontSize:16,}}>paddle</Text>
            </View>
            <View style={[Custom.setupbox]}>
            <Text style={{color:'white',fontSize:16,}}>mind</Text>
            </View>
            <View style={[Custom.setupbox]}>
            <Text style={{color:'white',fontSize:16,}}>possible</Text>
            </View>
            <View style={[Custom.setupbox]}>
            <Text style={{color:'white',fontSize:16,}}>estate</Text>
            </View>
            <View style={[Custom.setupbox]}>
            <Text style={{color:'white',fontSize:16,}}>glimpse</Text>
            </View>
            <View style={[Custom.setupbox]}>
            <Text style={{color:'white',fontSize:16,}}>bracket</Text>
            </View>
            <View style={[Custom.setupbox]}>
            <Text style={{color:'white',fontSize:16,}}>estate</Text>
            </View>
            <View style={[Custom.setupbox]}>
            <Text style={{color:'white',fontSize:16,}}>need</Text>
            </View>
            <View style={[Custom.setupbox]}>
            <Text style={{color:'white',fontSize:16,}}>nuclear</Text>
            </View>
          </View>
          <FontAwesomeIcon icon={faClipboard} style={Custom.faclipboard} size={ 20 }  />
          </View>
          <View style={[Custom.dflxremind]} >
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



export default App;
