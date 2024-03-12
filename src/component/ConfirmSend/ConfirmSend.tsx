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
    Text,
    View,
} from 'react-native';
import { Button, Input, Switch } from '@rneui/themed';
import { background, black, gray, greyHiglight, greylightwhite, primary, text, white, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';
import { Navigation } from 'react-native-navigation';
import Header from '../../UI/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import { ScrollView } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';

type ActionSheetType = ActionSheetRef | null;

export function ConfirmSend(props: any): React.JSX.Element {

    const [checked, setChecked] = useState(false);
    const actionSheetRef = useRef<ActionSheetType>(null);
    const handleShowOptions = () => {
        actionSheetRef.current?.show();
    };
    const handleOptionSelected = (index: number) => {
        if (index === 0) {
            console.log('Option 1 selected');
        } else if (index === 1) {
            console.log('Option 2 selected');
        }
        actionSheetRef.current?.hide();
    };
    const handleCloseAction = () => {
        if (actionSheetRef.current) {
            actionSheetRef.current.hide();
        }
    };
    return (
        <>
            <SafeAreaView>
                <Header />
                <ScrollView style={Custom.bgview}>
                    <View style={[Custom.bgview, { paddingBottom: 120 }]}>
                        <Text style={[Fonts.medium,Custom.headertitle, { color: white, textAlign: 'center', marginTop: 16 }]}>
                            Confirm Send
                        </Text>
                        <View style={{ paddingLeft: 12, paddingRight: 12 }}>
                            <Image source={require('../../assets/images/solana1.jpg')} style={[Custom.logoimg, { width: '100%', marginBottom: 16, marginTop: 16 }]} />
                        </View>
                        <Text style={[Fonts.medium, { fontSize: 22, color: white, textAlign: 'center', }]}>
                            Anduro
                        </Text>
                        <Text style={[Fonts.Light, { fontSize: 20, color: white, textAlign: 'center', marginTop: 6 }]}>
                        Anduro
                        </Text>
                        <View style={Custom.dashpaddrightleft}>
                            <View>
                                <View>
                                    <Pressable>
                                        <View style={[Custom.dashboardlist, { backgroundColor: "#24292f", borderWidth: 0 }]}>
                                            <View style={[Custom.dashboradlistflx]}>
                                                <View>
                                                    <Text style={[Fonts.Light, { color: white, fontSize: 17, }]}>
                                                        To
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
                                                    <Text style={[Fonts.regular, { color: primary, fontSize: 16 }]}
                                                        numberOfLines={1} ellipsizeMode={'tail'}>7sdsd4561dsadsdsdasd5498454</Text>
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
                                                        Supply
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={[Fonts.Light, { color: text, }]}>10</Text>
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
                                                        Fee
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={[Fonts.Light, { color: text, }]}>$0.19 USD</Text>
                                                <Button size="sm"
                                                    onPress={handleShowOptions} buttonStyle={{
                                                        backgroundColor: "#24292f",
                                                        borderRadius: 4,
                                                        borderBottomLeftRadius: 0,
                                                        borderTopLeftRadius: 0,
                                                    }} titleStyle={{
                                                        color: primary,
                                                        fontFamily: "NunitoSans-bold",
                                                        fontWeight: 'bold', fontSize: 18,
                                                    }} containerStyle={{
                                                    }}><FontAwesomeIcon icon={faPen} color='white' size={14} />
                                                </Button>
                                            </View>
                                        </View>
                                    </Pressable>
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
                                    <Button size="lg" buttonStyle={{
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
                                    }}>Confirm</Button>
                                </View>
                            </View>
                        </View>
                    </View>
                    <ActionSheet ref={actionSheetRef} containerStyle={{ backgroundColor: background }}>
                        <View style={{ padding: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text onPress={() => handleOptionSelected(0)}
                                    style={[Fonts.medium, { color: text, fontSize: 22, paddingBottom: 14 }]}>Edit Fee</Text>
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
                                <Text style={[Fonts.medium, { color: white, fontSize: 18 }]}>
                                    Fee
                                </Text>
                                <Input
                                    placeholder="0    "
                                    placeholderTextColor="#f2eae1"
                                    inputContainerStyle={{ borderBottomWidth: 0 }}
                                    containerStyle={[{
                                        borderWidth: 1, height: 60, borderColor: greylightwhite, marginBottom: 12, borderRadius: 6,
                                        marginTop: 8, paddingTop: 3, paddingRight: 76
                                    }]}
                                    style={[Fonts.medium, { color: '#f2eae1', position: 'relative' }]}
                                />
                                <Text style={[Fonts.medium, { color: white, fontSize: 18, position: 'absolute', top: 48, right: 20 }]}>sat/B</Text>
                                <Text style={[Fonts.medium, { color: white, fontSize: 18 }]}>
                                    Total Fee: $0.20 USD
                                </Text>
                                <View style={[Custom.dflxremind, { justifyContent: 'space-between', paddingTop: 12 }]} >
                                    <Button size="lg" buttonStyle={{
                                        backgroundColor: '#04f76e',
                                        borderRadius: 6,
                                    }} titleStyle={{
                                        color: '#000',
                                        fontFamily: "NunitoSans-bold",
                                        fontWeight: 'bold', fontSize: 18,
                                    }} containerStyle={{
                                        marginVertical: 10,
                                        width: "auto",
                                    }}>Low</Button>
                                    <Button size="lg" buttonStyle={{
                                        backgroundColor: '#04f76e',
                                        borderRadius: 6,
                                    }} titleStyle={{
                                        color: '#000',
                                        fontFamily: "NunitoSans-bold",
                                        fontWeight: 'bold', fontSize: 18,
                                    }} containerStyle={{
                                        marginVertical: 10,
                                        width: 'auto'
                                    }}>Medium</Button>
                                    <Button size="lg" buttonStyle={{
                                        backgroundColor: '#04f76e',
                                        borderRadius: 6,
                                    }} titleStyle={{
                                        color: '#000',
                                        fontFamily: "NunitoSans-bold",
                                        fontWeight: 'bold', fontSize: 18,
                                    }} containerStyle={{
                                        marginVertical: 10,
                                        width: "auto",
                                    }}>High</Button>
                                    <Button size="lg" buttonStyle={{
                                        backgroundColor: '#04f76e',
                                        borderRadius: 6,
                                    }} titleStyle={{
                                        color: '#000',
                                        fontFamily: "NunitoSans-bold",
                                        fontWeight: 'bold', fontSize: 18,
                                    }} containerStyle={{
                                        marginVertical: 10,
                                        width: 'auto'
                                    }}>Custom</Button>
                                </View>
                                <Text style={[Fonts.medium, { color: white, fontSize: 18 }]}>
                                    Apply a higher fee to help your transaction confirm quickly, 
                                    especially when the network is congested.
                                </Text>
                                <View style={[Custom.dflxremind, { justifyContent: 'space-between', paddingTop: 12 }]} >
                                    <Button size="lg" buttonStyle={{
                                        backgroundColor: '#04f76e',
                                        borderRadius: 6,
                                    }} titleStyle={{
                                        color: '#000',
                                        fontFamily: "NunitoSans-bold",
                                        fontWeight: 'bold', fontSize: 18,
                                    }} containerStyle={{
                                        marginVertical: 10,
                                        width: '100%'
                                    }}>Apply</Button>
                                </View>
                            </View>
                        </View>
                    </ActionSheet>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}
