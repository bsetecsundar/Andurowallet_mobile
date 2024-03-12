/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
    Image,
    Pressable,
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import { Button, Dialog, Input, Switch } from '@rneui/themed';
import { background, black, gray, greyHiglight, greylightwhite, primary, text, white, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';
import { Navigation } from 'react-native-navigation';
import Header from '../../UI/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons/faClipboard';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { ScrollView } from 'react-native';

export function NftDetails(props: any): React.JSX.Element {
    const [checked, setChecked] = useState(false);

    const [visible6, setVisible] = useState(false);
    const toggleDialog6 = () => {
        setVisible(!visible6);
    };

    const handleContinueAction = () => {
        setVisible(false)
        Navigation.push(props.componentId, {
            component: {
                name: 'SetUp',
                options: {
                    topBar: {
                        visible: false,
                    }
                }
            }
        })
    }
    const handleCloseAction = () => {
        setVisible(false)

    }
    return (
        <>
            <SafeAreaView>
                <Header />
                <ScrollView style={Custom.bgview}>
                    <View style={[Custom.bgview, { paddingBottom: 120 }]}>

                        <View style={{ paddingLeft: 12, paddingRight: 12 }}>
                            <Image source={require('../../assets/images/solana1.jpg')} style={[Custom.logoimg, { width: '100%', marginBottom: 22, marginTop: 22 }]} />
                        </View>
                        <View style={Custom.dashpaddrightleft}>
                            <View>
                                <Button size="lg"
                                    onPress={() => Navigation.push(props.componentId, {
                                        component: {
                                            name: 'SendNft',
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
                                        backgroundColor: primary,
                                        borderRadius: 8,
                                        width: '100%'
                                    }} titleStyle={{
                                        color: black,
                                        fontFamily: "NunitoSans-bold",
                                        fontWeight: 'bold', fontSize: 18,
                                    }} containerStyle={{
                                    }}>Send</Button>
                            </View>
                            <View>
                                <View>
                                    <Pressable>
                                        <View style={[Custom.dashboardlist, { backgroundColor: "#24292f", borderWidth: 0 }]}>
                                            <View style={[Custom.dashboradlistflx]}>
                                                <View>
                                                    <Text style={[Fonts.Light, { color: white, fontSize: 17, }]}>
                                                        Tx :
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Button size="sm"
                                                    onPress={() => Navigation.push(props.componentId, {
                                                        component: {
                                                            name: 'NftCreate',
                                                            options: {
                                                                topBar: {
                                                                    visible: false,
                                                                }, bottomTabs: {
                                                                    visible: false,
                                                                }
                                                            }
                                                        }
                                                    })} buttonStyle={{
                                                        backgroundColor: "#24292f",
                                                        borderRadius: 4,
                                                        borderBottomLeftRadius: 0,
                                                        borderTopLeftRadius: 0,
                                                    }} titleStyle={{
                                                        color: primary,
                                                        fontFamily: "NunitoSans-bold",
                                                        fontWeight: 'bold', fontSize: 18,
                                                    }} containerStyle={{
                                                    }}>
                                                    <Text style={[Fonts.regular, { color: primary, fontSize: 16, paddingRight: 4 }]}
                                                        numberOfLines={1} ellipsizeMode={'tail'}>7sddf6...df4454</Text>
                                                    <FontAwesomeIcon icon={faClipboard}
                                                        color='white' size={18} />
                                                </Button>
                                            </View>
                                        </View>
                                    </Pressable>
                                </View>
                                <View>
                                    <Pressable>
                                        <View style={[Custom.dashboardlist, { backgroundColor: "#24292f", borderWidth: 0 }]}>
                                            <View style={[Custom.dashboradlistflx]}>
                                                <View>
                                                    <Text style={[Fonts.Light, { color: white, fontSize: 17, }]}>
                                                        Symbol
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={[Fonts.Light, { color: text, }]}>Anduro</Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                </View>
                                <View>
                                    <Pressable>
                                        <View style={[Custom.dashboardlist, { backgroundColor: "#24292f", borderWidth: 0 }]}>
                                            <View style={[Custom.dashboradlistflx]}>
                                                <View>
                                                    <Text style={[Fonts.Light, { color: white, fontSize: 17, }]}>
                                                        Headline
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={[Fonts.Light, { color: text, }]}>Anduro NFT</Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                </View>
                                <View>
                                    <Pressable>
                                        <View style={[Custom.dashboardlist, { backgroundColor: "#24292f", borderWidth: 0 }]}>
                                            <View style={[Custom.dashboradlistflx]}>
                                                <View>
                                                    <Text style={[Fonts.Light, { color: white, fontSize: 17, }]}>
                                                        Asset ID
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={[Fonts.Light, { color: text, }]}>273</Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                </View>
                                <View>
                                    <Pressable>
                                        <View style={[Custom.dashboardlist, { backgroundColor: "#24292f", borderWidth: 0 }]}>
                                            <View style={[Custom.dashboradlistflx]}>
                                                <View>
                                                    <Text style={[Fonts.Light, { color: white, fontSize: 17, }]}>
                                                        Total Supply
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={[Fonts.Light, { color: text, }]}>5000000</Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                </View>
                                <View>
                                    <Pressable>
                                        <View style={[Custom.dashboardlist, { backgroundColor: "#24292f", borderWidth: 0 }]}>
                                            <View style={[Custom.dashboradlistflx]}>
                                                <View>
                                                    <Text style={[Fonts.Light, { color: white, fontSize: 17, }]}>
                                                        Available Supply
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={[Fonts.Light, { color: text, }]}>521000</Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                </View>
                                <View>
                                    <Pressable onPress={toggleDialog6}>
                                        <View style={[Custom.dashboardlist, { backgroundColor: "#24292f", borderWidth: 0 }]}>
                                            <View style={[Custom.dashboradlistflx]}>
                                                <View>
                                                    <Text style={[Fonts.Light, { color: white, fontSize: 17, }]}>
                                                        Show Asset History
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={[Fonts.Light, { color: text, }]}>
                                                    <FontAwesomeIcon icon={faArrowRight} color='white' size={18} /></Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                </View>
                                <View>
                                    <Pressable>
                                        <View style={[Custom.dashboardlist, { backgroundColor: "#24292f", borderWidth: 0 }]}>
                                            <View style={[Custom.dashboradlistflx]}>
                                                <View>
                                                    <Text style={[Fonts.Light, { color: white, fontSize: 17, }]}>
                                                        Show Holders
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={[Fonts.Light, { color: text, }]}>
                                                    <FontAwesomeIcon icon={faArrowRight} color='white' size={18} /></Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                            <View style={{ marginTop: 22 }}>
                                <Text style={[Fonts.medium, { fontSize: 22, color: white, marginBottom: 22 }]}>
                                    Properties
                                </Text>
                                <View style={[Custom.creaeborder, { padding: 16, borderRadius: 4 }]}>
                                    <Text style={[Fonts.regular, { color: white, fontSize: 16 }]}>
                                        TRAITS1
                                    </Text>
                                    <Text style={[Fonts.Light, { color: white, fontSize: 14 }]}>
                                        traits2
                                    </Text>
                                </View>
                            </View>

                            <Dialog
                                isVisible={visible6}
                                onBackdropPress={toggleDialog6}
                                overlayStyle={{ backgroundColor: background, borderWidth: 0.5, borderColor: primary, }}
                            >
                                <Dialog.Title title="Assets History" titleStyle={[Fonts.medium, {
                                    fontSize: 22, color: '#fff',
                                    borderBottomWidth: 0.5, borderBottomColor: text, paddingBottom: 16,position: 'relative'
                                }]} />
                                <View style={Custom.dashpaddrightleft}>
                                    <View>
                                    <View style={{ position: 'absolute', top:-50,right:-20 }}>
                                        <Pressable onPress={handleCloseAction}>
                                        <FontAwesomeIcon icon={faXmark} color='white' size={22} />
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
                            </Dialog>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}