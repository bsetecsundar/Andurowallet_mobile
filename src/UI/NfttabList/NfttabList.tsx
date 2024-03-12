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
    View,
} from 'react-native';
import { Tab, Text, TabView, Input, Button } from '@rneui/themed';
import Header from '../../UI/Header/Header';
import Custom from '../../styles/Custom';
import { gray, greylightwhite, primary, text, white } from '../../styles/Variables';
import { Navigation } from 'react-native-navigation';
import Fonts from '../../styles/Fonts';


export function NfttabList(this: any, props: any): React.JSX.Element {
    const [index, setIndex] = React.useState(0);
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <View
                        style={Custom.bgview}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, }}>
                            <View>
                                <Button size="lg" buttonStyle={{
                                    backgroundColor: gray,
                                    borderRadius: 4,
                                    borderBottomRightRadius: 0,
                                    borderTopRightRadius: 0,
                                    height: 53,
                                }} titleStyle={{
                                    color: text,
                                    fontFamily: "NunitoSans-bold",
                                    fontWeight: 'bold', fontSize: 18,
                                }} containerStyle={{
                                    marginVertical: 10,
                                    paddingTop: 0,
                                }}>@</Button>
                            </View>
                            <View>
                                <Input
                                    placeholder="Search Your collectibles"
                                    placeholderTextColor="#fff"
                                    inputContainerStyle={{ borderBottomWidth: 0 }}
                                    containerStyle={[{
                                        borderWidth: 2, height: 53, borderColor: greylightwhite, marginBottom: 8, borderRadius: 4, width: 250,
                                        marginTop: 8,
                                    }]}
                                    style={[Fonts.Light, { color: '#fff', }]}
                                />
                            </View>
                            <View>
                                <Button size="lg"
                                    onPress={() => Navigation.push(props.componentId, {
                                        component: {
                                            name: 'NftCreate',
                                            options: {
                                                topBar: {
                                                    visible: false,
                                                },
                                                bottomTabs: {
                                                    visible: false,
                                                }
                                            }
                                        }
                                    })} buttonStyle={{
                                        backgroundColor: primary,
                                        borderRadius: 4,
                                    }} titleStyle={{
                                        color: '#000',
                                        fontFamily: "NunitoSans-bold",
                                        fontWeight: 'bold', fontSize: 18,
                                    }} containerStyle={{
                                        marginVertical: 10,
                                        marginLeft: 6
                                    }}>Create</Button>
                            </View>
                        </View>
                        <View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
                                <View style={[{ position: 'relative', flex: 1, marginLeft: 12, marginRight: 12 }]}>
                                    <Pressable
                                        onPress={() => Navigation.push(props.componentId, {
                                            component: {
                                                name: 'NftDetails',
                                                options: {
                                                    topBar: {
                                                        visible: false,
                                                    }
                                                }
                                            }
                                        })}>
                                        <Image source={require('../../assets/images/solana1.jpg')} style={[{ width: "100%", height: 190, marginTop: 14 }]} />
                                        <View style={{
                                            position: 'absolute', bottom: -1, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            width: "100%"
                                        }}>
                                            <Text style={[Custom.nftidname, Fonts.medium]}>#1</Text>
                                            <Text style={[Custom.nftassetname, Fonts.Bold]}>AssetID: 1</Text>
                                        </View>
                                    </Pressable>
                                </View>
                                <View style={[{ position: 'relative', flex: 1, marginLeft: 12, marginRight: 12 }]}>
                                <Pressable
                                        onPress={() => Navigation.push(props.componentId, {
                                            component: {
                                                name: 'NftDetails',
                                                options: {
                                                    topBar: {
                                                        visible: false,
                                                    }
                                                }
                                            }
                                        })}>
                                    <Image source={require('../../assets/images/solana1.jpg')} style={[{ width: "100%", height: 190, marginTop: 14 }]} />
                                    <View style={{
                                        position: 'absolute', bottom: -1, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        width: "100%"
                                    }}>
                                        <Text style={[Custom.nftidname, Fonts.medium]}>#2</Text>
                                        <Text style={[Custom.nftassetname, Fonts.Bold]}>AssetID: 2</Text>
                                    </View>
                                    </Pressable>
                                </View>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
                                <View style={[{ position: 'relative', flex: 1, marginLeft: 12, marginRight: 12 }]}>
                                    <Image source={require('../../assets/images/solana1.jpg')} style={[{ width: "100%", height: 190, marginTop: 14 }]} />
                                    <View style={{
                                        position: 'absolute', bottom: -1, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        width: "100%"
                                    }}>
                                        <Text style={[Custom.nftidname, Fonts.medium]}>#3</Text>
                                        <Text style={[Custom.nftassetname, Fonts.Bold]}>AssetID: 3</Text>
                                    </View>
                                </View>
                                <View style={[{ position: 'relative', flex: 1, marginLeft: 12, marginRight: 12 }]}>
                                    <Image source={require('../../assets/images/solana1.jpg')} style={[{ width: "100%", height: 190, marginTop: 14 }]} />
                                    <View style={{
                                        position: 'absolute', bottom: -1, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        width: "100%"
                                    }}>
                                        <Text style={[Custom.nftidname, Fonts.medium]}>#4</Text>
                                        <Text style={[Custom.nftassetname, Fonts.Bold]}>AssetID: 4</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}
