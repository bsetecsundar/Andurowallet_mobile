/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Button } from '../../../node_modules/@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import Custom from '../../../src/styles/Custom';



export function BackupWallet() {
  const backupwallet = [
    'arrange', 'calds', 'dog', 'cat', 'viwe', 'sun', 'arrange', 'arrange', 'arrange', 'arrange', 'arrange','arrange'
  ]


  return (
    <SafeAreaView>
      <View style={Custom.bgview}>
        <View style={Custom.dflx}>
          <View>
            <View style={Custom.logotext}>
              <Image source={require('../../assets/images/logo.png')} style={[Custom.logoimg, { width: 200, resizeMode: 'contain', }]} />
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
              <View style={[Custom.creaebordertopback]}>
                {backupwallet.map((item: any, index: any) => {
                  return (
                    <Text style={{ color: 'white', fontSize: 16, padding: 8, }} key={`key_${item}_${index}`}>{`${index + 1}.${item}`}</Text>
                  );
                })}
                <View style={[Custom.dflxremindabsolut]} >
                  <Button size="lg" buttonStyle={{
                    backgroundColor: '#04f76e',
                    borderRadius: 4,
                  }} titleStyle={{
                    color: '#000',
                    fontWeight: 'bold', fontSize: 18,
                  }} containerStyle={{
                    marginVertical: 10,
                  }}><FontAwesomeIcon icon={faEye} /> Show</Button>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
