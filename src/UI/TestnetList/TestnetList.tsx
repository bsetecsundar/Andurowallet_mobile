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
  Text,
  View,
} from 'react-native';
import Fonts from '../../styles/Fonts';
import Custom from '../../styles/Custom';
import { Navigation } from 'react-native-navigation';

export function TestnetList(this: any, props: any): React.JSX.Element {

  return (
    <>

      <View>
        <View>
          <Pressable
            onPress={() => Navigation.push(props.componentId, {
              component: {
                name: 'Home',
                options: {
                  topBar: {
                    visible: false,
                  }
                }
              }
            })}>
            <View style={[Custom.dashboardlist]}>
              <View style={[Custom.dashboradlistflx]}>
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
                <Text style={[Fonts.regular, Custom.dashboardlistleftfont]}>0 BTC</Text>
                <Text style={[Fonts.Light, Custom.dashboardlistrightfont]}>$0.00 USD</Text>
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
                  }
                }
              }
            })}>
            <View style={[Custom.dashboardlist]}>
              <View style={[Custom.dashboradlistflx]}>
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
                <Text style={[Fonts.regular, Custom.dashboardlistleftfont]}>0 BTC</Text>
                <Text style={[Fonts.Light, Custom.dashboardlistrightfont]}>$0.00 USD</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
}
