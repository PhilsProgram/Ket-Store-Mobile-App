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
  const XSmallUI = () => {
    return (
      <>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <SettingsHeader item={"Profile"} event={"Edit profile"} />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
            >
              <View style={small.parentContainer}>
                <View style={small.profilePhoto}></View>
                <TouchableOpacity style={small.profImg}>
                  <Text style={{ color: "white", textAlign: "center" }}>
                    Update Image
                  </Text>
                </TouchableOpacity>

                <TextInput placeholder="Philemon Oppong" style={small.Input} />
                <TextInput placeholder="***********" style={small.Input} />
                <TextInput placeholder="+233534665583" style={small.Input} />
              </View>
              <SettingsFooter item={"Done"} />
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </>
    );
  };
  const SmallUI = () => {
    return (
      <>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <SettingsHeader item={"Profile"} event={"Edit profile"} />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
            >
              <View style={small.parentContainer}>
                <View style={small.profilePhoto}></View>
                <TouchableOpacity style={small.profImg}>
                  <Text style={{ color: "white", textAlign: "center" }}>
                    Update Image
                  </Text>
                </TouchableOpacity>

                <TextInput placeholder="Philemon Oppong" style={small.Input} />
                <TextInput placeholder="***********" style={small.Input} />
                <TextInput placeholder="+233534665583" style={small.Input} />
              </View>
              <SettingsFooter item={"Done"} />
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </>
    );
  };
  const MediumUI = () => {
    return (
      <>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <SettingsHeader item={"Profile"} event={"Edit profile"} />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
            >
              <View style={medium.parentContainer}>
                <View style={medium.profilePhoto}></View>
                <TouchableOpacity style={medium.profImg}>
                  <Text style={{ color: "white", textAlign: "center" }}>
                    Update Image
                  </Text>
                </TouchableOpacity>

                <TextInput placeholder="Philemon Oppong" style={medium.Input} />
                <TextInput placeholder="***********" style={medium.Input} />
                <TextInput placeholder="+233534665583" style={medium.Input} />
              </View>
              <SettingsFooter item={"Done"} />
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </>
    );
  };
  const LargeUI = () => {
    return (
      <>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <SettingsHeader item={"Profile"} event={"Edit profile"} />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
            >
              <View style={large.parentContainer}>
                <View style={large.profilePhoto}></View>
                <TouchableOpacity style={large.profImg}>
                  <Text style={{ color: "white", textAlign: "center" }}>
                    Update Image
                  </Text>
                </TouchableOpacity>

                <TextInput placeholder="Philemon Oppong" style={large.Input} />
                <TextInput placeholder="***********" style={large.Input} />
                <TextInput placeholder="+233534665583" style={large.Input} />
              </View>
              <SettingsFooter item={"Done"} />
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </>
    );
  };
  const XLargeUI = () => {
    return (
      <>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <SettingsHeader item={"Profile"} event={"Edit profile"} />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
            >
              <View style={large.parentContainer}>
                <View style={large.profilePhoto}></View>
                <TouchableOpacity style={large.profImg}>
                  <Text style={{ color: "white", textAlign: "center" }}>
                    Update Image
                  </Text>
                </TouchableOpacity>

                <TextInput placeholder="Philemon Oppong" style={large.Input} />
                <TextInput placeholder="***********" style={large.Input} />
                <TextInput placeholder="+233534665583" style={large.Input} />
              </View>
              <SettingsFooter item={"Done"} />
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {width < 360 && <XSmallUI />}
      {width >= 360 && width < 480 && <SmallUI />}
      {width >= 480 && width < 600 && <MediumUI />}
      {width >= 600 && width < 900 && <LargeUI />}
      {width >= 900 && <XLargeUI />}
    </View>
  );
}

const small = StyleSheet.create({
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
const medium = StyleSheet.create({
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
const large = StyleSheet.create({
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