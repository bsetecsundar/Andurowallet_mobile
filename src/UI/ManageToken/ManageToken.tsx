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
import { Button, Input, Switch } from '@rneui/themed';
import { black, gray, greyHiglight, greylightwhite, primary, text, white, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';
import { Navigation } from 'react-native-navigation';
import Header from '../../UI/Header/Header';
import { ScrollView } from 'react-native';

export function ManageToken(props: any): React.JSX.Element {
    const [checked, setChecked] = useState(false);

    const toggleSwitch = () => {
        setChecked(!checked);
    };
    return (
        <>
            <SafeAreaView>

                <View style={Custom.bgview}>
                    <Header />
                    <View style={Custom.dashpaddrightleft}>
                        <View>
                            <Button size="lg"
                                onPress={() => Navigation.push(props.componentId, {
                                    component: {
                                        name: 'NftCreate',
                                        options: {
                                            topBar: {
                                                visible: false,
                                            }
                                        }
                                    }
                                })}
                                buttonStyle={{
                                    backgroundColor: primary,
                                    borderRadius: 8,
                                    width: 100
                                }} titleStyle={{
                                    color: black,
                                    fontWeight: "700", fontSize: 18,
                                }} containerStyle={{
                                    marginVertical: 10,
                                    marginLeft: 'auto'
                                }}>Create</Button>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                            <View>
                                <Input
                                    placeholder="Search Your collectibles"
                                    placeholderTextColor="#fff"
                                    inputContainerStyle={{ borderBottomWidth: 0 }}
                                    containerStyle={[{
                                        borderWidth: 2, height: 51, borderColor: greylightwhite, marginBottom: 8, borderRadius: 4, width: 250,
                                        marginTop: 8,
                                    }]}
                                    style={{ color: '#fff' }}
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
                                                }
                                            }
                                        }
                                    })} buttonStyle={{
                                        backgroundColor: "#24292f",
                                        borderRadius: 4,
                                        borderBottomLeftRadius: 0,
                                        borderTopLeftRadius: 0,
                                    }} titleStyle={{
                                        color: white,
                                        fontWeight: "500", fontSize: 18,
                                    }} containerStyle={{
                                        marginVertical: 10,
                                    }}>Search</Button>
                            </View>
                        </View>
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
                                    <View style={[Custom.dashboardlist, { backgroundColor: "#24292f", borderWidth: 0 }]}>
                                        <View style={[Custom.dashboradlistflx]}>
                                            <View>
                                                <Image source={require('../../assets/images/bitcoin-main.png')}
                                                    style={[Custom.logoimg, { width: 45, resizeMode: 'contain', marginRight: 14, }]} />
                                            </View>
                                            <View>
                                                <Text style={[Fonts.regular, { color: white, fontSize: 17, }]}>
                                                    #1
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ marginBottom: 28 }}>
                                            <Switch
                                                value={checked}
                                                onValueChange={(value) => setChecked(value)}
                                                style={[Custom.postiotoggle,]}
                                                trackColor={{ true: '#04f76e', false: 'white' }}
                                                thumbColor='#FFF'

                                            />
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
                                    <View style={[Custom.dashboardlist, { backgroundColor: "#24292f", borderWidth: 0 }]}>
                                        <View style={[Custom.dashboradlistflx]}>
                                            <View>
                                                <Image source={require('../../assets/images/bitcoin-main.png')}
                                                    style={[Custom.logoimg, { width: 45, resizeMode: 'contain', marginRight: 14, }]} />
                                            </View>
                                            <View>
                                                <Text style={[Fonts.regular, { color: white, fontSize: 17, }]}>
                                                    #2
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ marginBottom: 28 }}>
                                            <Switch
                                                value={checked}
                                                onValueChange={(value) => setChecked(value)}
                                                style={[Custom.postiotoggle,]}
                                                trackColor={{ true: '#04f76e', false: 'white' }}
                                                thumbColor='#FFF'

                                            />
                                        </View>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                    </View>

                </View>
                
            </SafeAreaView>
        </>
    );
}
