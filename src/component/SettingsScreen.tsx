import { Navigation } from "react-native-navigation";
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
    },
  });
export const SettingsScreen = (props:any) => {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>This is SettingsScreen</Text>
      </View>
    );
  }