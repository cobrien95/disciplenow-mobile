import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const SettingScreen = ({ navigation }) => {
  const navigateToEditProfile = () => {
    navigation.navigate("Edit Profile");
  };

  const navigateToSecurity = () => {
    console.log("Security Function");
  };

  const navigateToNotifications = () => {
    console.log("Notification Function");
  };

  const navigateToPrivacy = () => {
    console.log("Privacy Function");
  };

  const navigateToMySubscription = () => {
    console.log("Subscription Function");
  };

  const navigateToSupport = () => {
    console.log("Support Function");
  };

  const navigateToTermsAndPolicies = () => {
    console.log("TermsAndPolicies Function");
  };

  const navigateToFreeSpace = () => {
    console.log("Free Space function");
  };

  const navigateToDateSaver = () => {
    console.log("Date Saver Function");
  };

  const navigateToReportProblem = () => {
    console.log("Report Problem function");
  };

  const addAccount = () => {
    console.log("Add Account");
  };

  const logout = () => {
    console.log("Logged out");
  };

  const accountItems = [
    {
      icon: "person-outline",
      text: "Edit Profile",
      action: navigateToEditProfile,
    },
    { icon: "security", text: "Security", action: navigateToSecurity },
    {
      icon: "notifications-none",
      text: "Notifications",
      action: navigateToNotifications,
    },
    {
      icon: "lock-outline",
      text: "Privacy",
      action: navigateToPrivacy,
    },
  ];

  const supportItems = [
    {
      icon: "credit-card",
      text: "My Subscription",
      action: navigateToMySubscription,
    },
    { icon: "help-outline", text: "Help & Support", action: navigateToSupport },
    {
      icon: "info-outline",
      text: "Terms and Policies",
      action: navigateToTermsAndPolicies,
    },
  ];

  const cacheAndCellularItems = [
    {
      icon: "delete-outline",
      text: "Free-up space",
      action: navigateToFreeSpace,
    },
    { icon: "save-alt", text: "Date Saver", action: navigateToDateSaver },
  ];

  const actionItems = [
    {
      icon: "outlined-flag",
      text: "Report A Problem",
      action: navigateToReportProblem,
    },
    {
      icon: "people-outline",
      text: "Add Account",
      action: addAccount,
    },
    { icon: "logout", text: "Logout", action: logout },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Account Settings */}
        <View style={styles.accountViewContainer}>
          <Text style={styles.renderSettingsTitle}>Account</Text>
          {accountItems.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                onPress={item.action}
                style={styles.renderSettingsItem}
              >
                <MaterialIcons name={item.icon} size={24} color="black" />
                <Text style={styles.renderSettingsItemText}>{item.text}</Text>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </View>

        {/* Support and About Settings */}
        <View style={styles.accountViewContainer}>
          <Text style={styles.renderSettingsTitle}>Support and About</Text>
          {supportItems.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                onPress={item.action}
                style={styles.renderSettingsItem}
              >
                <MaterialIcons name={item.icon} size={24} color="black" />
                <Text style={styles.renderSettingsItemText}>{item.text}</Text>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </View>

        {/* Terms and Policies Settings */}
        <View>
          <Text style={styles.renderSettingsTitle}>Cache and Cellular</Text>
          {cacheAndCellularItems.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                onPress={item.action}
                style={styles.renderSettingsItem}
              >
                <MaterialIcons name={item.icon} size={24} color="black" />
                <Text style={styles.renderSettingsItemText}>{item.text}</Text>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </View>

        {/* Action Settings */}
        <View>
          <Text style={styles.renderSettingsTitle}>Actions</Text>
          {actionItems.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                onPress={item.action}
                style={styles.renderSettingsItem}
              >
                <MaterialIcons name={item.icon} size={24} color="black" />
                <Text style={styles.renderSettingsItemText}>{item.text}</Text>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginHorizontal: 12,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  pageTitle: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 22,
  },
  accountViewContainer: {
    marginBottom: 12,
  },
  renderSettingsTitle: {
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 10,
  },
  renderSettingsItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingLeft: 12,
  },
  renderSettingsItemText: {
    marginLeft: 36,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 16,
  },
  scrollView: {
    marginHorizontal: 12,
  },
});

export default SettingScreen;
