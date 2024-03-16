import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';


const MessageGroupScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Messages Group Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default MessageGroupScreen;
