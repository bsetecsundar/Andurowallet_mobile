/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
import { black, greyHiglight, primary, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';
import { Navigation } from 'react-native-navigation';
import Header from '../../UI/Header/Header';
import { TestnetList } from '../../UI/TestnetList/TestnetList';
import LinearGradient from 'react-native-linear-gradient';

export function Dashboard(props: any): React.JSX.Element {

  return (
    <>
      <SafeAreaView>
        <View style={Custom.bgview}>
          <Header />
          <View style={Custom.dashpaddrightleft}>
            <View>
              <View>
                <Text style={[Custom.dashboardtitle, Fonts.medium]}>
                  TOTAL BALANCE
                </Text>
                <Text style={[Custom.dashboardusd, Fonts.regular]}>
                  $0.00 USD
                </Text>
                <View style={[Custom.dflxdash]}>
                  <View >
                    <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} colors={['#01c7ed', '#04f76e']} style={styles.linearGradient}>
                      <Button size="lg"
                        onPress={() => Navigation.push(props.componentId, {
                          component: {
                            name: 'Dashboard',
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
                          paddingTop: 16
                        }} titleStyle={{
                          color: black,
                        }}><Image source={require('../../assets/images/up-send-arrow.png')} /></Button>
                    </LinearGradient>
                    <Text style={[Custom.sendtext]}>Send</Text>
                  </View>
                  <View>
                    <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} colors={['#01c7ed', '#04f76e']} style={styles.linearGradient}>
                      <Button size="lg"
                        onPress={() => Navigation.push(props.componentId, {
                          component: {
                            name: 'Dashboard',
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
                          paddingTop: 16,
                          paddingLeft:8
                        }} titleStyle={{
                          color: black,
                        }}> <Image source={require('../../assets/images/down-receive-arrow.png')} /></Button>
                    </LinearGradient>
                    <Text style={[Custom.sendtext]}>Receive</Text>
                  </View>

                </View>
              </View>
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