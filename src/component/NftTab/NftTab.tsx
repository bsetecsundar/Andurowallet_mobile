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
  ScrollView,
  View,
} from 'react-native';
import { Tab, Text, TabView, Input, Button } from '@rneui/themed';
import Header from '../../UI/Header/Header';
import Custom from '../../styles/Custom';
import { black, gray, greylightwhite, primary, text } from '../../styles/Variables';
import { Navigation } from 'react-native-navigation';
import { NfttabList } from '../../UI/NfttabList/NfttabList';
import { TokenTab } from '../../UI/TokenTab/TokenTab';
import Fonts from '../../styles/Fonts';


export function NftTab(this: any, props: any): React.JSX.Element {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <SafeAreaView>
        <View
          style={Custom.bgview}>
          <Header />
          <Tab value={index} onChange={setIndex} dense style={{ paddingTop: 8, paddingBottom: 8 }} indicatorStyle={{
            backgroundColor: 'white',
            height: 2,
          }}>
            <Tab.Item titleStyle={[Fonts.Light, { color: primary, fontSize: 18 }]} >NFTs</Tab.Item>
            <Tab.Item titleStyle={[Fonts.Light, { color: primary, fontSize: 18 }]}>Tokens</Tab.Item>
          </Tab>
          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{ width: '100%' }}>
              <NfttabList componentId={props.componentId} />
            </TabView.Item>
            <TabView.Item style={{ width: '100%' }}>
              <TokenTab componentId={props.componentId} />
            </TabView.Item>
          </TabView>

        </View>
      </SafeAreaView>

    </>
  );
}
