// creating the user account info page

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SettingsFooter from "../navigations/settingsfooter";
import SettingsHeader from "../navigations/settingshead";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Profile() {
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <SettingsHeader item={"Profile"} event={"Edit profile"} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.parentContainer}>
              <View style={styles.profilePhoto}></View>
              <TouchableOpacity style={styles.profImg}>
                <Text style={{ color: "white", textAlign: "center" }}>
                  Update Image
                </Text>
              </TouchableOpacity>

              <TextInput placeholder="Philemon Oppong" style={styles.Input} />
              <TextInput placeholder="***********" style={styles.Input} />
              <TextInput placeholder="+233534665583" style={styles.Input} />
            </View>
            <SettingsFooter item={"Done"} />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: wp(100),
    height: hp(70),
    alignSelf: "center",
    paddingVertical: 100,
  },

  profilePhoto: {
    borderWidth: 1,
    width: 200,
    alignSelf: "center",
    height: 200,
    borderRadius: "50%",
    backgroundColor: "#f7f7f7",
  },

  profImg: {
    backgroundColor: "#B99B43",
    width: 100,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: hp(4),
    padding: "1%",
  },

  Input: {
    borderWidth: 1,
    marginHorizontal: "10%",
    marginVertical: "2%",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
