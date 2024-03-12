/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useRef, useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from '@rneui/themed';
import { background, black, gray, greyHiglight, primary, text, white, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';
import { Navigation } from 'react-native-navigation';
import Header from '../../UI/Header/Header';
import { TestnetList } from '../../UI/TestnetList/TestnetList';
import LinearGradient from 'react-native-linear-gradient';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';
import { faQrcode } from '@fortawesome/free-solid-svg-icons/faQrcode';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


type ActionSheetType = ActionSheetRef | null;
type ActionSheetTypeReceive = ActionSheetRef | null;
type ActionSheetTypeCurrency =ActionSheetRef | null;

export function Dashboard(props: any): React.JSX.Element {
  const [selectedCurrency ,setSelectedCurrency] = useState('USD');

  const actionSheetRef = useRef<ActionSheetType>(null);
  const actionSheetReceiveRef = useRef<ActionSheetTypeReceive>(null);
  const actionSheetReceiveRefer = useRef<ActionSheetTypeCurrency>(null);


  const handleShowOptions = () => {
    actionSheetRef.current?.show();
  };
  const handleShowReceiveOptions = () => {
    actionSheetReceiveRef.current?.show();
  };
  const handleShowCurrencyOptions = () => {
    actionSheetReceiveRefer.current?.show();
  };


  const handleOptionSelected = (index: number) => {
    if (index === 0) {
      console.log('Option 1 selected');
    } else if (index === 1) {
      console.log('Option 2 selected');
    }
    actionSheetRef.current?.hide();
  };
  const handleOptionReceiveSelected = (index: number) => {
    if (index === 0) {
      console.log('Option 1 selected');
    } else if (index === 1) {
      console.log('Option 2 selected');
    }
    actionSheetReceiveRef.current?.hide();
  };
  const handleOptionCurrency = (index: any) => {
    if (index === 0) {
      setSelectedCurrency('USD');
      console.log("option 1 is selected")

    } else if (index === 1) {
      setSelectedCurrency('BTC');
      console.log("option 2 is selected")

    }
    actionSheetReceiveRefer.current?.hide();
  };
  const handleCloseAction = () => {
    if (actionSheetRef.current) {
      actionSheetRef.current.hide();
    }

    if( actionSheetReceiveRef.current){
      actionSheetReceiveRef.current.hide();
    }
  };


  return (
    <>
      <SafeAreaView>
      <Header />
            <ScrollView style={Custom.bgview}>
        <View style={[Custom.bgview,{paddingBottom:120}]}>
          <View style={Custom.dashpaddrightleft}>
            <View>
              <View>
                <View style={{flexDirection:'row',alignItems:'baseline'}}>
                  <Text style={[Custom.dashboardtitle, Fonts.medium,{marginRight:12}]}>
                    TOTAL BALANCE
                  </Text>
                <ActionSheet ref={actionSheetReceiveRefer} containerStyle={{backgroundColor:background}}>
                        <View style={{ padding: 40 ,paddingLeft:20, paddingTop:20}}>
                          <Text style={[Fonts.medium, { color: text, fontSize: 20,textAlign:'center',paddingBottom:12}]}>Select Currency</Text>
                          <Text onPress={() => handleOptionCurrency(0)}
                            style={[Fonts.medium, { color: text, fontSize: 18, paddingBottom: 14 }]}>USD</Text>
                          <Text onPress={() => handleOptionCurrency(1)}
                            style={[Fonts.medium, { color: text, fontSize: 18 }]}>BTC</Text>
                        </View>
                </ActionSheet>
                <Button size="sm"
                onPress={handleShowCurrencyOptions}
                buttonStyle={{
                  backgroundColor: gray,
                  borderRadius: 12,
                }} titleStyle={{
                  color: white,
                  fontFamily: "NunitoSans-Light",
                  fontWeight:'100', fontSize: 18,
                  padding:4
                }}>{selectedCurrency}<Image source={require('../../assets/images/down.png')} /></Button>
                </View>
                <Text style={[Custom.dashboardusd, Fonts.regular]}>
                  {selectedCurrency === 'BTC' &&
                    <Text>0 BTC</Text>
                  }
                  {selectedCurrency !== 'BTC' &&
                    <Text>$0.00 USD</Text>
                  }
                </Text>
                <View style={[Custom.dflxdash]}>
                  <View >
                    <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} colors={['#01c7ed', '#04f76e']} style={styles.linearGradient}>
                      <Button size="lg" onPress={handleShowOptions}
                        buttonStyle={{
                          backgroundColor: "transparent",
                          borderRadius: 8,
                          paddingTop: 16
                        }} titleStyle={{
                          color: black,
                        }}><Image source={require('../../assets/images/up-send-arrow.png')} /></Button>
                    </LinearGradient>
                    <Text style={[Custom.sendtext]}>Send</Text>
                    <ActionSheet ref={actionSheetRef} containerStyle={{ backgroundColor: background }}>
                      <View style={{ padding: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                          <Text onPress={() => handleOptionSelected(0)}
                            style={[Fonts.medium, { color: text, fontSize: 22, paddingBottom: 14 }]}>Send</Text>
                          <Button size="lg" onPress={handleCloseAction}
                            buttonStyle={{
                              backgroundColor: "transparent",
                              borderRadius: 8,
                              paddingTop: 6
                            }} titleStyle={{
                              color: black,
                            }}><FontAwesomeIcon icon={faX} size={18} color='#fff'/></Button>

                        </View>
                        <TestnetList componentId={props.componentId} />
                      </View>
                    </ActionSheet>
                  </View>
                  <View>
                    <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} colors={['#01c7ed', '#04f76e']} style={styles.linearGradient}>
                      <Button size="lg" onPress={handleShowReceiveOptions}
                        buttonStyle={{
                          backgroundColor: "transparent",
                          borderRadius: 8,
                          paddingTop: 16,
                          paddingLeft: 8
                        }} titleStyle={{
                          color: black,
                        }}> <Image source={require('../../assets/images/down-receive-arrow.png')} /></Button>
                    </LinearGradient>
                    <Text style={[Custom.sendtext]}>Receive</Text>
                    <ActionSheet ref={actionSheetReceiveRef} containerStyle={{ backgroundColor: background }}>
                      <View style={{ padding: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                          <Text onPress={() => handleOptionReceiveSelected(0)}
                            style={[Fonts.medium, { color: text, fontSize: 22, paddingBottom: 14 }]}>Receive</Text>
                          <Button size="lg" onPress={handleCloseAction}
                            buttonStyle={{
                              backgroundColor: "transparent",
                              borderRadius: 8,
                              paddingTop: 6
                            }} titleStyle={{
                              color: black,
                            }}><FontAwesomeIcon icon={faX} size={18} color='#fff' /></Button>

                        </View>

                        <View>
                          <View>
                            <Pressable
                              onPress={() => Navigation.push(props.componentId, {
                                component: {
                                  name: 'Home',
                                  options: {
                                    topBar: {
                                      visible: false,
                                    },
                                    bottomTabs: {
                                      visible: false,
                                    }
                                  }
                                }
                              })}>
                              <View style={[Custom.dashboardlist]}>
                                <View style={[Custom.dashboradlistflx,{flexDirection:'column',justifyContent:'flex-start',
                              alignItems:'flex-start'}]}>
                                  <View >
                                    <Image source={require('../../assets/images/bitcoin-main.png')}
                                      style={[Custom.logoimg, { width: 45, resizeMode: 'contain', marginRight: 14, }]} />
                                  </View>
                                  <View>
                                    <Text style={[Fonts.regular, Custom.dashboardlistleftfont]}>
                                      BTC
                                    </Text>
                                    <Text style={[Fonts.Light, Custom.dashboardlistrightfont]}>
                                      Bitcoin Testnet
                                    </Text>
                                  </View>
                                </View>
                                <View style={[Custom.dashboradlistflx]}>
                                  <View style={{borderRadius:50,backgroundColor:'#24292f',marginRight:12,padding:14}}>
                                  <FontAwesomeIcon icon={faCopy} size={22} color='#f2eae1'/>
                                  </View>
                                  <View style={{borderRadius:50,backgroundColor:'#24292f',padding:14}}>
                                  <FontAwesomeIcon icon={faQrcode}  size={22} color='#f2eae1'/>
                                  </View>
                                </View>
                              </View>
                            </Pressable>
                          </View>
                          <View>
                            <Pressable
                              onPress={() => Navigation.push(props.componentId, {
                                component: {
                                  name: 'Home',
                                  options: {
                                    topBar: {
                                      visible: false,
                                    },
                                    bottomTabs: {
                                      visible: false,
                                    }
                                  }
                                }
                              })}>
                              <View style={[Custom.dashboardlist]}>
                                <View style={[Custom.dashboradlistflx,{flexDirection:'column',justifyContent:'flex-start',
                              alignItems:'flex-start'}]}>
                                  <View>
                                    <Image source={require('../../assets/images/bitcoin-main.png')}
                                      style={[Custom.logoimg, { width: 45, resizeMode: 'contain', marginRight: 14, }]} />
                                  </View>
                                  <View>
                                    <Text style={[Fonts.regular, Custom.dashboardlistleftfont]}>
                                      BTC
                                    </Text>
                                    <Text style={[Fonts.Light, Custom.dashboardlistrightfont]}>
                                      Bitcoin Testnet
                                    </Text>
                                  </View>
                                </View>
                                <View>
                                </View>
                                <View style={[Custom.dashboradlistflx]}>
                                  <View style={{borderRadius:50,backgroundColor:'#24292f',marginRight:12,padding:14}}>
                                  <FontAwesomeIcon icon={faCopy} size={22} color='#f2eae1'/>
                                  </View>
                                  <View style={{borderRadius:50,backgroundColor:'#24292f',padding:14}}>
                                  <FontAwesomeIcon icon={faQrcode}  size={22} color='#f2eae1'/>
                                  </View>
                                </View>
                              </View>
                            </Pressable>
                          </View>
                        </View>
                      </View>
                    </ActionSheet>
                  </View>

                </View>
              </View>
            </View>
            <View>
              <TestnetList componentId={props.componentId} />
            </View>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({

  linearGradient: {
    borderRadius: 8,
    width: 65,
    height: 65,
    marginRight: 18,
    marginBottom: 6,
  },
});