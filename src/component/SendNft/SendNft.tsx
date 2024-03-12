/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef, useState } from 'react';
import {
    Image,
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import { greylightwhite, white, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';
import Header from '../../UI/Header/Header';
import { ScrollView } from 'react-native';
import { Button, Input } from '@rneui/themed';
import { Navigation } from 'react-native-navigation';


export function SendNft(props: any): React.JSX.Element {



    return (
        <>
            <SafeAreaView>
                <Header />
                <ScrollView style={Custom.bgview}>
                    <View style={[Custom.bgview, { paddingBottom: 120 }]}>
                        <Text style={[Fonts.medium, Custom.headertitle, { color: white, textAlign: 'center', marginTop: 16 }]}>
                            Send Anduro
                        </Text>
                        <View style={{ paddingLeft: 12, paddingRight: 12 }}>
                            <Image source={require('../../assets/images/solana1.jpg')} style={[Custom.logoimg, { width: '100%', marginBottom: 16, marginTop: 16 }]} />
                            <Input
                                placeholder="Enter Quantity"
                                placeholderTextColor="#f2eae1"
                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                containerStyle={[{
                                    borderWidth: 2, height: 60, borderColor: greylightwhite, marginBottom: 12, borderRadius: 6,
                                    marginTop: 8, paddingTop: 3
                                }]}
                                style={[Fonts.medium, { color: '#f2eae1' }]}
                            />
                            <View style={{ position: 'relative' }}>
                                <Input
                                    placeholder="Recipient's Anduro address"
                                    placeholderTextColor="#f2eae1"
                                    inputContainerStyle={{ borderBottomWidth: 0 }}
                                    containerStyle={[{
                                        borderWidth: 2, height: 60, borderColor: greylightwhite, marginBottom: 12, borderRadius: 6,
                                        marginTop: 8, paddingTop: 3, paddingRight: 54
                                    }]}
                                    style={[Fonts.medium, { color: '#f2eae1', position: 'relative' }]}
                                />
                                <Text style={{
                                    color: white, backgroundColor: greylightwhite, position: 'absolute', right: 16,
                                    fontSize: 18, borderRadius: 999, height: 36, width: 36, padding: 8, paddingTop: 4, paddingLeft: 9, top: 19
                                }}>@</Text>
                            </View>

                            <View style={[Custom.dflxremind, { justifyContent: 'flex-end', paddingTop: 12 }]} >
                                <Button size="lg" buttonStyle={{
                                    backgroundColor: '#04f76e',
                                    borderRadius: 4,
                                }} titleStyle={{
                                    color: '#000',
                                    fontFamily: "NunitoSans-bold",
                                    fontWeight: 'bold', fontSize: 18,
                                }} containerStyle={{
                                    marginVertical: 10,
                                    width: "50%",
                                    paddingRight: 4,
                                }}>Cancel</Button>
                                <Button size="lg"
                                    onPress={() => Navigation.push(props.componentId, {
                                        component: {
                                            name: 'ConfirmSend',
                                            options: {
                                                topBar: {
                                                    visible: false,
                                                }, bottomTabs: {
                                                    visible: false,
                                                }
                                            }
                                        }
                                    })}
                                    buttonStyle={{
                                        backgroundColor: '#04f76e',
                                        borderRadius: 4,
                                    }} titleStyle={{
                                        color: '#000',
                                        fontFamily: "NunitoSans-bold",
                                        fontWeight: 'bold', fontSize: 18,
                                    }} containerStyle={{
                                        marginVertical: 10,
                                        paddingLeft: 4,
                                        width: '50%'
                                    }}>Send</Button>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}
