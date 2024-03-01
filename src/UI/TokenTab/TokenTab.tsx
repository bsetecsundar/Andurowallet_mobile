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
  Text,
  View,
} from 'react-native';
import { Button } from '@rneui/themed';
import { greyHiglight,primary, white, } from '../../../src/styles/Variables';
import Fonts from '../../../src/styles/Fonts';
import Custom from '../../../src/styles/Custom';
import { Navigation } from 'react-native-navigation';
import Header from '../../UI/Header/Header';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export function TokenTab (props:any): React.JSX.Element {
  
  return (
    <>
    <SafeAreaView>
      <View style={Custom.bgview}>
      <Pressable
            onPress={() => Navigation.push(props.componentId,{
              component:{
                name:'ManageToken',
              }
            })}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:'center',marginTop:20,marginBottom:12}}>
        <FontAwesomeIcon icon={faBars} size={16} color='white' /> 
         <Text style={{color:white,paddingLeft:6,fontSize:18}}>Manage token list</Text>
        </View>
        </Pressable>
        <View style={Custom.dashpaddrightleft}>
          <View>
          <View>
          <Pressable
            onPress={() => Navigation.push(props.componentId,{
              component:{
                name:'Home',
              }
            })}>
            <View style={[Custom.dashboardlist]}>
              <View style={[Custom.dashboradlistflx]}>
                <View>
                <Image source={require('../../assets/images/bitcoin-main.png')} 
                style={[Custom.logoimg, { width: 45, resizeMode: 'contain',marginRight:14, }]} />
                </View>
                <View>
                  <Text style={[Fonts.regular,{color:white,fontSize:17,}]}>
                    #2
                  </Text>
                  <Text style={[Fonts.Light,{color:white,fontSize:16}]}>
                    100 Token
                  </Text>
                  <Text style={[Fonts.Light,{color:white,fontSize:16}]}>
                AssetID: 3
                  </Text>
                </View>
              </View>
            </View>
            </Pressable>
          </View>
          <View>
          <Pressable
            onPress={() => Navigation.push(props.componentId,{
              component:{
                name:'Home',
                options:{
                  topBar:{
                    visible:false,
                  }
                }
              }
            })}>
            <View style={[Custom.dashboardlist]}>
              <View style={[Custom.dashboradlistflx]}>
                <View>
                <Image source={require('../../assets/images/bitcoin-main.png')} 
                style={[Custom.logoimg, { width: 45, resizeMode: 'contain',marginRight:14, }]} />
                </View>
                <View>
                  <Text style={[Fonts.regular,{color:white,fontSize:17,}]}>
                    #2
                  </Text>
                  <Text style={[Fonts.Light,{color:white,fontSize:16}]}>
                    100 Token
                  </Text>
                  <Text style={[Fonts.Light,{color:white,fontSize:16}]}>
                AssetID: 3
                  </Text>
                </View>
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
