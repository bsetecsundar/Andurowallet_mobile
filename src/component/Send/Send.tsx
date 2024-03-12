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
import { Button } from '@rneui/themed';
import { greyHiglight, primary, white, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { Input } from '@rneui/base';
import { Navigation } from 'react-native-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export function Send(props:any): React.JSX.Element {

  return (
    <>
    <SafeAreaView>
    <KeyboardAwareScrollView style={Custom.bgview}>
      <View style={[Custom.bgview]}>
        <View style={Custom.headerflx}>
          <View >
            <View style={Custom.logotext}>
              <Text style={Custom.sendheader}>
                Convert BTC to CBTC
              </Text>
              <View>
                <View style={Custom.marginleftright}>
                  <View style={[Custom.dashboardlist, { borderColor: primary }]}>
                    <View style={[Custom.dashboradlistflx, Custom.sendwidsev]}>
                      <View>
                        <Image source={require('../../assets/images/tick_green.png')}
                          style={[Custom.logoimg, Custom.bitcoinhome,]} />
                      </View>
                      <View>
                        <Text style={[Fonts.regular, Custom.dashboardbtc, { color: primary }]}>
                          bc1pd9wuxk9x290edjdk0t960xwtj238wnn6er99tj3sfhfc33uryauqld2dnp
                        </Text>
                      </View>
                    </View>
                    <View style={{ marginLeft: "auto", }}>
                      <FontAwesomeIcon icon={faXmark} color='white' />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={Custom.dflxstart}>
          <View>
            <View style={Custom.sendflx}>
              <View style={Custom.sendwidleft}>
                <Text style={Custom.sendlabel}>
                  Asset:
                </Text>
              </View>
              <View style={[Custom.dashboardlist, Custom.sendrightwid]}>
                <View style={[Custom.dashboradlistflx]}>
                  <View>
                    <Image source={require('../../assets/images/bitcoin-main.png')}
                      style={[Custom.logoimg, Custom.bitcoinhome,]} />
                  </View>
                  <View>
                    <Text style={[Fonts.regular, Custom.dashboardbtc]}>
                      BTC
                    </Text>
                    <Text style={[Fonts.Light, Custom.btcoindash]}>
                      Balance: 0 BTC
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={Custom.sendflx}>
              <View style={Custom.sendwidleft}>
                <Text style={Custom.sendlabel}>
                  Amount:
                </Text>
                <View style={{ width: 60 }}>
                  <Button size="sm" buttonStyle={{
                    backgroundColor: 'transparent',
                    borderRadius: 20,
                    borderColor: "#04f76e",
                    borderWidth: 1,
                  }} titleStyle={{
                    color: '#04f76e',
                    fontFamily: "NunitoSans-bold",
                    fontWeight:'bold',
                    fontSize: 12,
                  }} containerStyle={{
                    marginVertical: 10,
                    padding: 0
                  }}>Max</Button>
                </View>
              </View>
              <View style={[Custom.sendrightwid]}>
                <View style={[Custom.dashboardlist,]}>
                  <View>
                    <Input
                      placeholder="0"
                      placeholderTextColor="#fff"
                      inputContainerStyle={{ borderBottomWidth: 0 }}
                      containerStyle={[{
                        borderWidth: 0, height: 30, borderColor: '#eaf2e033', marginBottom: 8, borderRadius: 4, width: 250,
                      }]}
                      style={{ color: white }}
                    />
                    <Text style={Custom.sendrighinpu}>
                      BTC
                    </Text>
                  </View>
                </View>
                <Text style={Custom.sendtoppadd}>
                  $0.00 USD
                </Text>
              </View>
            </View>
            <View style={Custom.sendflx}>
              <View style={Custom.sendwidleft}>
                <Text style={Custom.sendlabel}>
                  CBTC Recipient:
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
                    <Text style={[Fonts.medium,{ fontSize: 14, color: 'red', paddingLeft: 8 }]}>
                      BTC will be converted to CBTC and sent here. Make sure this is a valid Coordinate address.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row',paddingLeft:12,paddingRight:12 , marginTop:22,marginBottom:22}} >
          <View style={{width:"50%"}}>
          <Button size="lg"
            onPress={() => Navigation.push(props.componentId, {
              component: {
                name: 'Home',
                options:{
                  topBar:{
                    visible:false,
                  },bottomTabs: {
                    visible: false,
                  }
                }
              }
            })}
            buttonStyle={{
              borderColor: '#04f76e',
              borderRadius: 30,
              borderWidth: 1,
            }} titleStyle={{
              color: '#04f76e',
              fontFamily: "NunitoSans-bold",
              fontWeight:'100',  fontSize: 18,
            }} containerStyle={{
              marginVertical: 10,
              marginHorizontal: 10,
            }}
            type="outline">Cancel</Button>
            </View>
            <View style={{width:"50%"}}>
          <Button size="lg" buttonStyle={{
            backgroundColor: '#04f76e',
            borderRadius: 30,
          }} titleStyle={{
            color: '#000',
            fontFamily: "NunitoSans-bold",
            fontWeight:'bold',  fontSize: 18,
          }} containerStyle={{
            marginVertical: 10,
          }}>Next</Button>
          </View>

        </View>
        </View>

      </View>
      </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}