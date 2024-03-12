/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef, useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'react-native';
import { Avatar, Button, CheckBox, Dialog, ListItem } from '@rneui/themed';
import { background, gray, greyHiglight, greylightwhite, primary, text, white, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons/faAngleUp';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { Input } from '@rneui/base';
import { Navigation } from 'react-native-navigation';
import Header from '../../UI/Header/Header';
import route from '../../Route/Route';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { Icon } from 'react-native-vector-icons/Icon';

type ActionSheetType = ActionSheetRef | null;

export function NftCreate(props: any): React.JSX.Element {
  const actionSheetRef = useRef<ActionSheetType>(null);
  const [expanded, setExpanded] = React.useState(false);

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
  return (
    <>
      <SafeAreaView>
        <Header />
        <KeyboardAwareScrollView style={Custom.bgview}>
          <View style={[Custom.bgview, { paddingBottom: 120 }]}>
            <View style={{ marginTop: 18 }}>
              <View >
                <View style={Custom.logotext}>
                  <Text style={Custom.sendheader}>
                    Create NFT
                  </Text>
                </View>
              </View>
            </View>
            <View style={[Custom.dflxstart,]}>
              <View style={{ flex: 1 }}>
                <View style={Custom.sendflx}>
                  <View style={Custom.sendwidleft}>
                    <Text style={Custom.sendlabel}>
                      Name <Text style={{ fontSize: 12, lineHeight: 18, color: 'red', marginLeft: 4 }}>*</Text>
                    </Text>
                  </View>
                  <View style={[Custom.nftcreatinput, Custom.sendrightwid]}>
                    <Input
                      placeholder="Name"
                      placeholderTextColor="#fff"
                      containerStyle={[{
                        borderWidth: 1, height: 50, borderColor: greylightwhite, marginBottom: 8, borderRadius: 6, width: '100%',
                      }]}
                      inputContainerStyle={{ borderBottomWidth: 0, }}
                      style={[Fonts.Light, { color: '#fff' }]}
                    />
                  </View>
                </View>
                <View style={Custom.sendflx}>
                  <View style={Custom.sendwidleft}>
                    <Text style={Custom.sendlabel}>
                      Symbol <Text style={{ fontSize: 12, lineHeight: 18, color: 'red', marginLeft: 4 }}>*</Text>
                    </Text>
                  </View>
                  <View style={[Custom.nftcreatinput, Custom.sendrightwid]}>
                    <Input
                      placeholder="Symbol"
                      placeholderTextColor="#fff"
                      containerStyle={[{
                        borderWidth: 1, height: 50, borderColor: greylightwhite, marginBottom: 8, borderRadius: 6, width: '100%',
                      }]}
                      inputContainerStyle={{ borderBottomWidth: 0, }}
                      style={[Fonts.Light, { color: '#fff' }]}
                    />
                  </View>
                </View>
                <View style={Custom.sendflx}>
                  <View style={Custom.sendwidleft}>
                    <Text style={Custom.sendlabel}>
                      Image Type <Text style={{ fontSize: 12, lineHeight: 18, color: 'red', marginLeft: 4 }}>*</Text>
                    </Text>
                  </View>

                  <View style={[Custom.nftcreatinput, Custom.sendrightwid]}>
                    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                      <Button title="Show Options" onPress={handleShowOptions} buttonStyle={{
                        backgroundColor: '#04f76e',
                        borderRadius: 6,
                      }} titleStyle={{
                        color: '#000',
                        fontFamily: "NunitoSans-bold",
                        fontWeight: 'bold', fontSize: 18,
                      }} containerStyle={{
                        marginBottom: 22,
                        marginLeft: 6
                      }} />
                      <Input
                        placeholder="Enter url with the type jpeg, jpg, png or gif"
                        placeholderTextColor="#fff"
                        containerStyle={[{
                          borderWidth: 1, height: 50, borderColor: greylightwhite, marginBottom: 8, borderRadius: 6, width: '100%',
                        }]}
                        inputContainerStyle={{ borderBottomWidth: 0, }}
                        style={[Fonts.Light, { color: '#fff' }]}
                      />
                      <ActionSheet ref={actionSheetRef} containerStyle={{ backgroundColor: background }}>
                        <View style={{ padding: 20 }}>
                          <Text style={[Fonts.medium, { color: text, fontSize: 20, textAlign: 'center', paddingBottom: 12 }]}>Select ImageType</Text>
                          <Text onPress={() => handleOptionSelected(0)}
                            style={[Fonts.medium, { color: text, fontSize: 18, paddingBottom: 14 }]}>URL</Text>
                          <Text onPress={() => handleOptionSelected(1)}
                            style={[Fonts.medium, { color: text, fontSize: 18 }]}>Upload</Text>
                        </View>
                      </ActionSheet>
                    </View>
                    <View>
                    </View>
                  </View>

                </View>
                <View style={Custom.sendflx}>
                  <View style={Custom.sendwidleft}>
                    <Text style={Custom.sendlabel}>
                      Supply <Text style={{ fontSize: 12, lineHeight: 18, color: 'red', marginLeft: 4 }}>*</Text>
                    </Text>
                  </View>
                  <View style={[Custom.nftcreatinput, Custom.sendrightwid]}>
                    <Input
                      placeholder="Supply"
                      placeholderTextColor="#fff"
                      containerStyle={[{
                        borderWidth: 1, height: 50, borderColor: greylightwhite, marginBottom: 8, borderRadius: 6, width: '100%',
                      }]}
                      inputContainerStyle={{ borderBottomWidth: 0, }}
                      style={[Fonts.Light, { color: '#fff' }]}
                    />
                  </View>
                </View>
                <View style={{ marginTop: 22 }}>
                  <ListItem.Accordion
                    content={
                      <ListItem.Content>
                        <ListItem.Title style={[Fonts.medium, { color: '#f2eae1', fontSize: 16 }]}>Traits (optional)</ListItem.Title>
                        <FontAwesomeIcon
                          icon={expanded ? faAngleUp : faAngleDown}
                          style={[Custom.logoimg, {
                            width: 15,

                            position: 'absolute',
                            right: -25,
                            zIndex: 999
                          }]}
                          color='white'
                        />
                      </ListItem.Content>
                    } style={{ width: '100%', position: 'relative' }}
                    containerStyle={{ backgroundColor: '#24292f', borderWidth: 0.5, borderColor: '#eaf2e033', borderRadius: 1 }}
                    isExpanded={expanded}
                    onPress={() => {
                      setExpanded(!expanded);
                    }}
                  >
                    <ListItem style={{ width: '100%' }} containerStyle={{
                      backgroundColor: 'transparent', borderBottomLeftRadius: 1,
                      borderBottomRightRadius: 1, borderWidth: 0.5, borderColor: '#eaf2e033', borderTopWidth: 0
                    }}>
                      <ListItem.Content style={{ width: '100%' }}>
                        <ListItem.Title style={[Fonts.medium, { color: '#f2eae1', fontSize: 16 }]}>These describe your item and will appear as filters in your collections page.</ListItem.Title>
                        <ListItem.Subtitle style={{ marginTop: 12 }}>
                          <Button size="sm" onPress={toggleDialog6}
                            buttonStyle={{
                              backgroundColor: 'transparent',
                            }} titleStyle={{
                              color: '#f2eae1',
                              fontFamily: "NunitoSans-Medium", fontSize: 18,
                            }} containerStyle={{
                              paddingLeft: 0,
                            }}><FontAwesomeIcon icon={faPlus} color='#f2eae1' /> Add Trait</Button></ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                  </ListItem.Accordion>
                </View>

              </View>
              <View style={[{ flexDirection: 'row', paddingLeft: 12, paddingRight: 12, marginTop: 22, marginBottom: 22 }]} >
                <View style={{ width: "50%" }}>
                  <Button size="lg"
                    onPress={() => Navigation.push(props.componentId, {
                      component: {
                        name: 'NftTab',
                        options: {
                          topBar: {
                            visible: false,
                          },

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
                      marginRight: 6
                    }}>Close</Button>
                </View>

                <View style={{ width: "50%", }}>
                  <Button size="lg" buttonStyle={{
                    backgroundColor: '#04f76e',
                    borderRadius: 6,
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
            </View>
          </View>
          <Dialog
            isVisible={visible6}
            onBackdropPress={toggleDialog6}
            overlayStyle={{ backgroundColor: background }}
          >
            <Dialog.Title title="Add Traitd" titleStyle={[Fonts.medium, {
              fontSize: 22, color: '#fff',
              borderBottomWidth: 0.5, borderBottomColor: text, paddingBottom: 16, textAlign: 'center', position: 'relative'
            }]} >

              <Button size="sm" onPress={toggleDialog6}
                buttonStyle={{
                  backgroundColor: 'transparent',
                }} titleStyle={{
                  color: '#f2eae1',
                  fontFamily: "NunitoSans-Medium", fontSize: 18,
                }} containerStyle={{
                  paddingLeft: 0,
                }}><FontAwesomeIcon icon={faPlus} color='#f2eae1' /> Add Trait</Button></Dialog.Title>
            <View style={{ position: 'absolute', top: 24, right: 20, }}>
              <FontAwesomeIcon icon={faXmark} color='white' size={22} />
            </View>
            <View style={Custom.sendflx}>
              <View style={Custom.sendwidleft}>
                <Text style={Custom.sendlabel}>
                  Type <Text style={{ fontSize: 12, lineHeight: 18, color: 'red', marginLeft: 4 }}>*</Text>
                </Text>
              </View>
              <View style={[Custom.nftcreatinput, Custom.sendrightwid]}>
                <Input
                  placeholder="Ex. Character"
                  placeholderTextColor="#fff"
                  containerStyle={[{
                    borderWidth: 1, height: 50, borderColor: greylightwhite, marginBottom: 8, borderRadius: 6, width: '100%',
                  }]}
                  inputContainerStyle={{ borderBottomWidth: 0, }}
                  style={[Fonts.Light, { color: '#fff' }]}
                />
              </View>
            </View>
            <View style={Custom.sendflx}>
              <View style={Custom.sendwidleft}>
                <Text style={Custom.sendlabel}>
                  Name <Text style={{ fontSize: 12, lineHeight: 18, color: 'red', marginLeft: 4 }}>*</Text>
                </Text>
              </View>
              <View style={[Custom.nftcreatinput, Custom.sendrightwid]}>
                <Input
                  placeholder="Ex. Male"
                  placeholderTextColor="#fff"
                  containerStyle={[{
                    borderWidth: 1, height: 50, borderColor: greylightwhite, marginBottom: 8, borderRadius: 6, width: '100%',
                  }]}
                  inputContainerStyle={{ borderBottomWidth: 0, }}
                  style={[Fonts.Light, { color: '#fff' }]}
                />
              </View>
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
              }}>Continue</Button>
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
              }}>Close</Button>
            </View>
          </Dialog>
        </KeyboardAwareScrollView>
      </SafeAreaView>

    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: '#307ecc',
    padding: 16,
  },
  buttonStyle: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#f5821f',
    marginTop: 30,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  titleStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});
