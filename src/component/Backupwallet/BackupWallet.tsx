/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from '../../../node_modules/@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import { faClipboard } from '@fortawesome/free-regular-svg-icons/faClipboard';
import Custom from '../../../src/styles/Custom';
import Fonts from '../../styles/Fonts';
import { background, greyHiglight } from '../../styles/Variables';
import Clipboard from '@react-native-clipboard/clipboard';



export function BackupWallet(props: any) : React.JSX.Element{
  const [showButton, setShowButton] = useState(true);

  const email = 'hello@example.com'
  const copyIt = ()=> Clipboard.setString(email)
  const backupwallet = [
    'arrange', 'calds', 'dog', 'cat', 'viwe', 'sun', 'arrange', 'arrange', 'arrange', 'arrange', 'arrange', 'arrange'
  ]
  const toggleDetails = () => {
    if(showButton){
      setShowButton(false);
    }
    if(!showButton){
      setShowButton(true)
    }
  };

  const handleClipboard = () => {
    const backupString = backupwallet.join('\n');
    Clipboard.setString(backupString);
  };

  return (
    <SafeAreaView>
      <View style={Custom.bgview}>
        <View style={Custom.dflx}>
          <View>
            <View style={Custom.logotext}>
              <Image source={require('../../assets/images/small_logo.png')} style={[Custom.logoimg, {
                width: 200,
                resizeMode: 'contain', marginBottom: 22
              }]} />
            </View>
            <View>
              <Text style={Custom.headertitle}>
                Backup Wallet
              </Text>
              <Text style={[Custom.importwalletpara]}>
                Write down your seed phrase and make sure to keep it private. This is the unique key to your wallet.
              </Text>
              <Text style={[Custom.importwalletpara]}>
                Seed phrase
              </Text>
              <View style={{
                borderStyle: 'solid',
                borderColor: greyHiglight,
                borderWidth: 1,
                margin: 16,
                position: 'relative',
              }}>
                <View style={[Custom.creaebordertopback,]}>
                  {backupwallet.map((item: any, index: any) => {
                    return (
                      <Text style={[Fonts.Light, { color: 'white', fontSize: 16, padding: 8, }]} key={`key_${item}_${index}`}>{`${index + 1}.${item}`}</Text>
                    );
                  })}
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginBottom: 12, marginRight: 12 }}>
                  <View>
                    <Button size="lg" buttonStyle={{
                      backgroundColor: 'transparent',
                      borderRadius: 4,
                    }} titleStyle={{
                      color: '#000',
                      fontFamily: "NunitoSans-bold",
                      fontWeight: 'bold', fontSize: 18,
                    }} containerStyle={{
                    }}  onPress={handleClipboard}> <FontAwesomeIcon icon={faClipboard} color='white' size={20} />
                    </Button>
                  </View>
                  <View>
                    <Button size="md" buttonStyle={{
                      backgroundColor: '#04f76e',
                      borderRadius: 4,
                    }} titleStyle={{
                      color: '#000',
                      fontFamily: "NunitoSans-bold",
                      fontWeight: 'bold', fontSize: 18,
                    }} containerStyle={{
                    }} onPress={toggleDetails}><FontAwesomeIcon icon={faEye} /></Button>
                  </View>

                </View>
                {showButton && (
                  <View style={[Custom.dflxremindabsolut, { zIndex: 9999 }]} >
                    <Button size="lg"
                      buttonStyle={{
                        backgroundColor: '#04f76e',
                        borderRadius: 4,
                      }} titleStyle={{
                        color: '#000',
                        fontFamily: "NunitoSans-bold",
                        fontWeight: 'bold', fontSize: 18,
                      }} containerStyle={{
                        marginVertical: 10,
                      }} onPress={toggleDetails}><FontAwesomeIcon icon={faEye} /> Show</Button>
                  </View>
                )}
                {showButton && (
                  <View style={[Custom.logoimg, {
                    width: '100%', position: 'absolute',
                    height: "100%", zIndex: 1, backgroundColor: background
                  }]} >
                  </View>
                )}
              </View>

            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: '#307ecc',
    padding: 16,
  },
  buttonStyle: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#f5821f',
    marginTop: 30,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  titleStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  blurContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity as needed
    //borderRadius: 10, // Adjust border radius as needed
    //padding: 10, // Adjust padding as needed
  },
});