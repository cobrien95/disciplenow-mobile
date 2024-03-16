import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';


const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ProfileScreen;
