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
import { gray, greylightwhite, primary, text } from '../../styles/Variables';


export function NftTab(props: any): React.JSX.Element {
    return (
        <>
        <SafeAreaView>
        <View
    style={Custom.bgview}>
        <Header />
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <View>
            <Button size="lg" buttonStyle={{
              backgroundColor: gray,
              borderRadius: 4,
              height:53,
            }} titleStyle={{
              color: text,
              fontWeight: 'bold', fontSize: 18,
            }} containerStyle={{
              marginVertical: 10,
              paddingTop:0,
            }}>@</Button>
            </View>
            <View>
            <Input
                placeholder="New Password"
                placeholderTextColor="#fff"
                inputContainerStyle={{ borderBottomWidth: 0 }}
                containerStyle={[{
                  borderWidth: 2, height: 53, borderColor: greylightwhite, marginBottom: 8, borderRadius: 4, width: 250,
                  marginTop: 8,
                }]}
                style={{ color: '#fff' }}
              />
            </View>
            <View>
            <Button size="lg" buttonStyle={{
              backgroundColor: primary,
              borderRadius: 4,
            }} titleStyle={{
              color: '#000',
              fontWeight: 'bold', fontSize: 18,
            }} containerStyle={{
              marginVertical: 10,
            }}>Create</Button>
            </View>
        </View>
    </View>
            </SafeAreaView>
            </>
    );
}
