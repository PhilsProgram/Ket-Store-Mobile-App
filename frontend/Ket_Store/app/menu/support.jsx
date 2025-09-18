import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Platform, KeyboardAvoidingView, useWindowDimensions } from "react-native";
import SettingsHeader from "../navigations/settingshead";
import SettingsFooter from "../navigations/settingsfooter";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Support() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const XSmallUI = (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={small.container}>
      <SettingsHeader item={"Support"} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{
          width: "90%",
          alignSelf: "center",
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
            }}/>
        </View>
        <SettingsFooter item="Send" />
      </ScrollView>
      </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
  const SmallUI = (
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
  )
  const MediumUI = (
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
  )
  const LargeUI = (
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
  )
  const XLarge = (
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
  )

  return (
    <View style={{ flex: 1 }}>
      {width < 375 && XSmallUI}
      {width >= 375 && width < 768 && SmallUI}
      {width >= 768 && width < 1024 && MediumUI}
      {width >= 1024 && width < 1440 && LargeUI}
      {width >= 1440 && XLarge}
    </View>
  );
}

const small = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: hp(100),
  },
  input: {
    backgroundColor: "#F2F2F2",
    borderRadius: 50,
    paddingHorizontal: 20,
    marginVertical: 30,
    height: 50,
    fontSize: 16,
  },
});
const medium = StyleSheet.create({
  input: {
    backgroundColor: "#F2F2F2",
    borderRadius: 50,
    paddingHorizontal: 20,
    marginVertical: 30,
    height: 50,
    fontSize: 16,
  },
});
const large = StyleSheet.create({
  input: {
    backgroundColor: "#F2F2F2",
    borderRadius: 50,
    paddingHorizontal: 20,
    marginVertical: 30,
    height: 50,
    fontSize: 16,
  },
});