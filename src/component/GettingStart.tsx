// import { Navigation } from "react-native-navigation";
// import { View, Text, Button, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//     root: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     text: {
//       fontSize: 20,
//     },
//   });

// export const GettingStart = (props:any) => {
//     return (
//       <View style={styles.root}>
//         <Text style={styles.text}>Home Screen welcome</Text>
//         <Button
//         title='Push Settings Screen'
//         color='#710ce3'
//         onPress={() => Navigation.push(props.componentId, {
//           component: {
//             name: 'Settings',
//             options: {
//               topBar: {
//                 title: {
//                   text: 'Settings'
//                 }
//               }
//             }
//           }
//         })}/>

//       </View>
//     );
//   };