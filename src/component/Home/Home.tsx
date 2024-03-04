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
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from '@rneui/themed';
import { black, greyHiglight, primary, white, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons/faArrowsRotate';
import { Pressable } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Header from '../../UI/Header/Header';
import { TestnetList } from '../../UI/TestnetList/TestnetList';
import LinearGradient from 'react-native-linear-gradient';

export function Home(props: any): React.JSX.Element {

  return (
    <>
      <SafeAreaView>
        <View style={Custom.bgview}>
          <Header />
          <View style={Custom.dashpaddrightleft}>
            <View>
              <View style={[Custom.homepageflx]}>
                <View>
                  <Image source={require('../../assets/images/bitcoin.png')}
                    style={[Custom.logoimg, Custom.homebitcoin]} />
                </View>
                <View>
                  <Text style={[Fonts.regular, Custom.sendtext]}>
                    0 BTC <Button buttonStyle={{
                      backgroundColor: "transparent",
                      padding: 0
                    }}>
                      <FontAwesomeIcon icon={faArrowsRotate} color='white' /></Button>
                  </Text>
                  <Text style={[Fonts.Light, { color: white, fontSize: 20 }]}>
                    $0.00 USD
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View style={[Custom.homebuton]}>
                <View style={{marginRight:22,marginLeft:16}}>
                  <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} colors={['#01c7ed', '#04f76e']} style={styles.linearGradient}>
                    <Button size="lg"
                      onPress={() => Navigation.push(props.componentId, {
                        component: {
                          name: 'send',
                          options: {
                            topBar: {
                              visible: false,
                            }
                          }
                        }
                      })}
                      buttonStyle={{
                        backgroundColor: "transparent",
                        borderRadius: 8,
                        paddingTop: 14
                      }} titleStyle={{
                        color: black,
                      }}><Image source={require('../../assets/images/peginblk.png')} style={Custom.peginimg} /></Button>
                  </LinearGradient>
                  <Text style={[Custom.sendtext]}>Convert</Text>
                </View>
                <View style={{marginRight:22}}>
                  <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} colors={['#01c7ed', '#04f76e']} style={styles.linearGradient}>
                    <Button size="lg"
                      onPress={() => Navigation.push(props.componentId, {
                        component: {
                          name: 'Sendto',
                          options: {
                            topBar: {
                              visible: false,
                            }
                          }
                        }
                      })}
                      buttonStyle={{
                        backgroundColor: "transparent",
                        borderRadius: 8,
                        paddingTop: 14
                      }} titleStyle={{
                        color: black,
                      }}><Image source={require('../../assets/images/up-send-arrow.png')} style={Custom.peginimg} /></Button>
                  </LinearGradient>
                  <Text style={[Custom.sendtext, { paddingLeft: 10 }]}>Send</Text>
                </View>
                <View>
                  <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} colors={['#01c7ed', '#04f76e']} style={styles.linearGradient}>
                    <Button size="lg"
                      onPress={() => Navigation.push(props.componentId, {
                        component: {
                          name: 'Receive',
                          options: {
                            topBar: {
                              visible: false,
                            }
                          }
                        }
                      })}
                      buttonStyle={{
                        backgroundColor: "transparent",
                        borderRadius: 8,
                        paddingTop: 14
                      }} titleStyle={{
                        color: black,
                      }}><Image source={require('../../assets/images/down-receive-arrow.png')} style={Custom.peginimg} /></Button>
                  </LinearGradient>
                  <Text style={[Custom.sendtext]}>Receive</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={[Fonts.Light, Custom.Transactiontitle]}>
                Transaction History
              </Text>
            </View>
            <View>
              <TestnetList componentId={props.componentId} />
            </View>
          </View>
        </View>
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