import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Platform, KeyboardAvoidingView, Dimensions
} from "react-native";
import SettingsHeader from "../navigations/settingshead";
import SettingsFooter from "../navigations/settingsfooter";
import { widthPercentageToDP as wp, heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default function Support() {

  // Whether Portrait or landscape
  const isLandscape = Dimensions.get("window").width > Dimensions.get("window").height;
  const isPortrait = Dimensions.get("window").width < Dimensions.get("window").height;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SettingsHeader item={"Support / Contribute"} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{
          width: "90%",
          alignSelf: "center",
          marginTop: hp(15),
        }}>
          <Text style={{
            color: "#B99B43",
            textAlign: "center",
            marginBottom: 15,
            fontSize: isLandscape ? wp(5) : hp(3),
          }}>Help us improve</Text>
          <Text style={{
            marginVertical: "2%",
            color: "#9D2B27",
            fontSize: isLandscape ? wp(3) : hp(2),
          }}>
            We are ready to listen to your views and opinion in how we can make
            this aapp very interesting to use
          </Text>
          <Text style={{
            marginVertical: "2%",
            color: "#9D2B27",
            fontSize: isLandscape ? wp(3) : hp(2),
          }}>
            Is there anything you are looking forward to see in the near future
            in the app, write it below and lets make preparations for that.
          </Text>
          <TextInput
            placeholder="Tell us your wish"
            style={{
              backgroundColor: "#F2F2F2",
              borderRadius: 50,
              paddingHorizontal: wp(5),
              marginVertical: hp(5),
              height: hp(7),
              fontSize: isLandscape ? wp(3) : hp(2),
            }}
          />
        </View>
        <SettingsFooter item="Send" />
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}