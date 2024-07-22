import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  imagesDataURL,
  DUMMYMENTOR,
  DUMMYMENTEE,
  DUMMYCHURCH,
} from "../constants/data";

const EditProfileScreen = () => {
  let dob = new Date.parse(DUMMYMENTOR.dob)
  const [selectedImage, setSelectedImage] = useState(imagesDataURL[0]);
  const [name, setName] = useState(DUMMYMENTOR.fullName);
  const [email, setEmail] = useState(DUMMYMENTOR.email);
  const [password, setPassword] = useState(DUMMYMENTOR.password);
  const [addressOne, setAddressOne] = useState(DUMMYMENTOR.addressOne);
  const [addressTwo, setAddressTwo] = useState("");

  // const [date, setDate] = useState(new Date(dob));
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false)

  const isMentor = DUMMYMENTOR.mentor; //set by profile
  const mentees = DUMMYMENTOR.mentees; // pulled from mongoDB connection
  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const showCalendar = (show) => {
    setShow(true);
    showMode('date')
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const navToProfile = (mentee) => {
    console.log("Nav to " + mentee.fullName + " profile");
  };

  return (
    <SafeAreaView style={styles.container}>
      {console.log(dob)}
      <View style={styles.header}>
        {/* <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="#000" />
        </TouchableOpacity> */}
        <Text style={styles.pageTitle}>Edit Profile</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView>
          <View style={styles.scrollViewImage}>
            <TouchableOpacity onPress={handleImageSelection}>
              <Image
                source={{ uri: selectedImage }}
                style={styles.imageStyle}
              />
              <View style={styles.imageView}>
                <MaterialIcons name="photo-camera" size={32} />
              </View>
            </TouchableOpacity>
          </View>
          {/* <View> */}
            <View style={styles.scrollViewProfile}>
              <Text style={styles.profileInfoTitle}>Name</Text>
              <View style={styles.profileInfo}>
                <TextInput
                  value={name}
                  onChangeText={(value) => setName(value)}
                  editable={true}
                />
              </View>
              <Text style={styles.profileInfoTitle}>Email</Text>
              <View style={styles.profileInfo}>
                <TextInput
                  value={email}
                  onChangeText={(value) => setEmail(value)}
                  editable={true}
                />
              </View>
            </View>
            <Text style={styles.profileInfoTitle}>Password</Text>
            <View style={styles.profileInfo}>
              <TextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                editable={true}
                secureTextEntry
              />
            </View>
            <Text style={styles.profileInfoTitle}>Address</Text>
            <View style={styles.profileInfo}>
              <TextInput
                value={addressOne}
                onChangeText={(value) => setAddressOne(value)}
                editable={true}
              />
            </View>
            <Text style={styles.profileInfoTitle}>Address Two</Text>
            <View style={styles.profileInfo}>
              <TextInput
                value={addressTwo}
                onChangeText={(value) => setAddressTwo(value)}
                editable={true}
              />
            </View>
            <Text style={styles.profileInfoTitle}>Birth Date</Text>
            {/* <View style={styles.profileInfo}> */}
              {/* <Text onPress={showCalendar}>Selected: {date.toLocaleString()}</Text> */}
              {setShow && (
                <DateTimePicker
                  value={date}
                  mode={mode}
                  onChange={onChange}
                  style={styles.calendar}
                />
              )}
            {/* </View> */}
            <Text style={styles.profileInfoTitle}></Text>
          {/* </View> */}
          {isMentor ? (
            mentees.map((mentee, index) => (
              <React.Fragment key={index}>
                <Text style={styles.profileInfoTitle}>Mentee</Text>
                <View style={styles.profileInfo}>
                  {/* <TouchableOpacity onPress={console.log("Hello")}> */}
                  <Text>{mentee.fullName}</Text>
                  {/* </TouchableOpacity> */}
                </View>
              </React.Fragment>
            ))
          ) : (
            <>
              <Text style={styles.profileInfoTitle}>Mentee</Text>
              <View style={styles.profileInfo}>
                <Text>Connor</Text>
                <Text>{mentor.mentee}</Text>
              </View>
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: "#fff",
    paddingHorizontal: 22,
  },
  header: {
    marginHorizontal: 12,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
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
  scrollViewImage: {
    alignItems: "center",
    marginVertical: 22,
  },
  imageStyle: {
    height: 170,
    width: 170,
    borderRadius: 85,
    borderWidth: 2,
    borderColor: "#000",
  },
  imageView: {
    position: "absolute",
    bottom: -4,
    right: 0,
    zIndex: 999,
  },
  scrollViewProfile: {
    flexDirection: "column",
    marginBottom: 6,
  },
  profileInfoTitle: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 20,
  },
  profileInfo: {
    height: 44,
    width: "100%",
    borderColor: "#544C4C",
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 6,
    justifyContent: "center",
    paddingLeft: 8,
  },
  calendar: {
    alignSelf: 'start'
  },
});

export default EditProfileScreen;
