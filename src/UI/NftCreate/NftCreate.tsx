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
import { Button, CheckBox } from '@rneui/themed';
import { greyHiglight, greylightwhite, primary, white, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { Input } from '@rneui/base';
import { Navigation } from 'react-native-navigation';
import Header from '../../UI/Header/Header';
import route from '../../Route/Route';

export function NftCreate(props: any): React.JSX.Element {
  return (
    <>
      <SafeAreaView>
        <View style={Custom.bgview}>
          <Header />
          <View style={{ marginTop: 18 }}>
            <View >
              <View style={Custom.logotext}>
                <Text style={Custom.sendheader}>
                  Create NFT
                </Text>
              </View>
            </View>
          </View>
          <View style={Custom.dflxstart}>
            <View>
              <View style={Custom.sendflx}>
                <View style={Custom.sendwidleft}>
                  <Text style={Custom.sendlabel}>
                    Name <Text style={{ fontSize: 12, lineHeight: 18, color: 'red', marginLeft: 4 }}>*</Text>
                  </Text>
                </View>
                <View style={[Custom.nftcreatinput, Custom.sendrightwid]}>
                  <Input
                    placeholder="Name"
                    placeholderTextColor="#fff"
                    containerStyle={[{
                      borderWidth: 2, height: 50, borderColor: greylightwhite, marginBottom: 8, borderRadius: 4, width: '100%',
                    }]}
                    inputContainerStyle={{ borderBottomWidth: 0, }}
                    style={{ color: '#fff' }}
                  />
                </View>
              </View>
              <View style={Custom.sendflx}>
                <View style={Custom.sendwidleft}>
                  <Text style={Custom.sendlabel}>
                    Symbol <Text style={{ fontSize: 12, lineHeight: 18, color: 'red', marginLeft: 4 }}>*</Text>
                  </Text>
                </View>
                <View style={[Custom.nftcreatinput, Custom.sendrightwid]}>
                  <Input
                    placeholder="Symbol"
                    placeholderTextColor="#fff"
                    containerStyle={[{
                      borderWidth: 2, height: 50, borderColor: greylightwhite, marginBottom: 8, borderRadius: 4, width: '100%',
                    }]}
                    inputContainerStyle={{ borderBottomWidth: 0, }}
                    style={{ color: '#fff' }}
                  />
                </View>
              </View>
              <View style={Custom.sendflx}>
                <View style={Custom.sendwidleft}>
                  <Text style={Custom.sendlabel}>
                    Image Type <Text style={{ fontSize: 12, lineHeight: 18, color: 'red', marginLeft: 4 }}>*</Text>
                  </Text>
                </View>
                <View style={[Custom.sendrightwid]}>
                  <View style={{ paddingTop: 30 }}>
                    <View>
                      <Input
                        placeholder="0"
                        placeholderTextColor="#fff"
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        containerStyle={[{
                          borderWidth: 2, height: 50, borderColor: '#eaf2e033', marginBottom: 8, borderRadius: 4, width: "100%",
                        }]}
                        style={{ color: white }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={Custom.sendflx}>
                <View style={Custom.sendwidleft}>
                  <Text style={Custom.sendlabel}>
                    Supply <Text style={{ fontSize: 12, lineHeight: 18, color: 'red', marginLeft: 4 }}>*</Text>
                  </Text>
                </View>
                <View style={[Custom.nftcreatinput, Custom.sendrightwid]}>
                  <Input
                    placeholder="Supply"
                    placeholderTextColor="#fff"
                    containerStyle={[{
                      borderWidth: 2, height: 50, borderColor: greylightwhite, marginBottom: 8, borderRadius: 4, width: '100%',
                    }]}
                    inputContainerStyle={{ borderBottomWidth: 0, }}
                    style={{ color: '#fff' }}
                  />
                </View>
              </View>

            </View>
          </View>
          <View style={[Custom.dflxremind]} >
            <Button size="lg"
              onPress={() => Navigation.setRoot(route.afterLogin)}
              buttonStyle={{
                backgroundColor: '#04f76e',
                borderRadius: 4,
              }} titleStyle={{
                color: '#000',
                fontWeight: 'bold', fontSize: 18,
              }} containerStyle={{
                marginVertical: 10,
                width: 100
              }}>Cancel</Button>
            <Button size="lg"
              buttonStyle={{
                backgroundColor: '#04f76e',
                borderRadius: 4,
              }} titleStyle={{
                color: '#000',
                fontWeight: 'bold', fontSize: 18,
              }} containerStyle={{
                marginVertical: 10,
                marginHorizontal: 10,
                width: 100
              }}>Create</Button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}