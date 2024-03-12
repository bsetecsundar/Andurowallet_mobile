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
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Button } from '@rneui/themed';
import { black, darkGreen, gray, greyHiglight, primary, white, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons/faArrowsRotate';
import { Pressable } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Header from '../../UI/Header/Header';
import { TestnetList } from '../../UI/TestnetList/TestnetList';
import LinearGradient from 'react-native-linear-gradient';

export function ManageTokenDetails(props: any): React.JSX.Element {

    return (
        <>
            <SafeAreaView>
                <Header />
                <ScrollView>
                    <View style={[Custom.bgview, { paddingBottom: 120 }]}>
                        <View style={Custom.dashpaddrightleft}>
                            <View>
                                <View style={[Custom.homepageflx]}>
                                    <View>
                                        <Image source={require('../../assets/images/bitcoin.png')}
                                            style={[Custom.logoimg, Custom.homebitcoin]} />
                                    </View>
                                </View>
                                <View style={{ marginBottom: 16 }}>
                                    <Text style={[Fonts.regular, Custom.sendtext, { textAlign: 'center', fontSize: 22 }]}>
                                        50000000 Anduro
                                    </Text>
                                    <Text style={[Fonts.regular, { color: greyHiglight, fontSize: 20, textAlign: 'center' }]}>
                                        Asset ID: 220
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <View style={[Custom.dflxremind, { justifyContent: "center", }]} >
                                    <Button size="lg"
                                        onPress={() => Navigation.push(props.componentId, {
                                            component: {
                                                name: 'SendNft',
                                                options: {
                                                    topBar: {
                                                        visible: false,
                                                    }
                                                }
                                            }
                                        })}
                                        buttonStyle={{
                                            backgroundColor: '#04f76e',
                                            borderRadius: 6,
                                        }} titleStyle={{
                                            color: '#000',
                                            fontFamily: "NunitoSans-bold",
                                            fontWeight: 'bold', fontSize: 18,
                                        }} containerStyle={{
                                            marginVertical: 10,
                                            width: "40%",
                                            paddingRight: 12,
                                        }}>Send</Button>
                                    <Button size="lg"
                                        onPress={() => Navigation.push(props.componentId, {
                                            component: {
                                                name: 'SendNft',
                                                options: {
                                                    topBar: {
                                                        visible: false,
                                                    }
                                                }
                                            }
                                        })}
                                        buttonStyle={{
                                            backgroundColor: '#04f76e',
                                            borderRadius: 6,
                                        }} titleStyle={{
                                            color: '#000',
                                            fontFamily: "NunitoSans-bold",
                                            fontWeight: 'bold', fontSize: 18,
                                        }} containerStyle={{
                                            marginVertical: 10,
                                            paddingLeft: 12,
                                            width: '40%'
                                        }}>Mint</Button>
                                </View>
                            </View>
                            <View>
                                <Text style={[Fonts.Light, Custom.Transactiontitle]}>
                                    Asset History
                                </Text>
                            </View>
                        </View>
                        <View style={Custom.dashpaddrightleft}>
                            <View>
                                <View>
                                    <Pressable>
                                        <View style={[Custom.dashboardlist, { borderWidth: 0, backgroundColor: gray }]}>
                                            <View style={[Custom.dashboradlistflx]}>
                                                <View>
                                                    <Image source={require('../../assets/images/bitcoin-main.png')}
                                                        style={[Custom.logoimg, { width: 45, resizeMode: 'contain', marginRight: 14, }]} />
                                                </View>
                                                <View>
                                                    <Text style={[Fonts.regular, { color: greyHiglight, fontSize: 17, paddingBottom: 6 }]}>
                                                        Mint
                                                    </Text>
                                                    <Text style={[Fonts.regular, { color: white, fontSize: 16, paddingBottom: 3 }]}>
                                                        50000000 Anduro
                                                    </Text>
                                                    <Text style={[Fonts.Light, { color: white, fontSize: 16, paddingBottom: 3 }]}>
                                                        Receiver:FEFd...D567
                                                    </Text>
                                                    <Text style={[Fonts.regular, { color: primary, fontSize: 16 }]}>
                                                        TX: FEFd...D567
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </Pressable>
                                </View>
                                <View>
                                    <Pressable>
                                        <View style={[Custom.dashboardlist, { borderWidth: 0, backgroundColor: gray }]}>
                                            <View style={[Custom.dashboradlistflx]}>
                                                <View>
                                                    <Image source={require('../../assets/images/bitcoin-main.png')}
                                                        style={[Custom.logoimg, { width: 45, resizeMode: 'contain', marginRight: 14, }]} />
                                                </View>
                                                <View>
                                                    <Text style={[Fonts.regular, { color: greyHiglight, fontSize: 17, paddingBottom: 6 }]}>
                                                        Mint
                                                    </Text>
                                                    <Text style={[Fonts.regular, { color: white, fontSize: 16, paddingBottom: 3 }]}>
                                                        50000000 Anduro
                                                    </Text>
                                                    <Text style={[Fonts.Light, { color: white, fontSize: 16, paddingBottom: 3 }]}>
                                                        Receiver:FEFd...D567
                                                    </Text>
                                                    <Text style={[Fonts.regular, { color: primary, fontSize: 16 }]}>
                                                        TX: FEFd...D567
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </Pressable>
                                </View>

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