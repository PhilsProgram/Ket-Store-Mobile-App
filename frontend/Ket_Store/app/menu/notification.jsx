// creating the notification section

import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SettingsHeader from "../navigations/settingshead";
import SettingsFooter from "../navigations/settingsfooter";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Notifications() {
  return (
    <>
      <SettingsHeader item={"Notifications"} event={"Mark all read"} />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        <TouchableOpacity>
        <View style={styles.notContainer}>
          <Text style={styles.title}>New goods arrived today!!!</Text>
          <Text style={styles.description}>
            Please be informed that there are set of goods in now, check out and
            place an order
          </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.notContainer}>
          <Text style={styles.title}>New goods arrived today!!!</Text>
          <Text style={styles.description}>
            Please be informed that there are set of goods in now, check out and
            place an order
          </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.notContainer}>
          <Text style={styles.title}>New goods arrived today!!!</Text>
          <Text style={styles.description}>
            Please be informed that there are set of goods in now, check out and
            place an order
          </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.notContainer}>
          <Text style={styles.title}>New goods arrived today!!!</Text>
          <Text style={styles.description}>
            Please be informed that there are set of goods in now, check out and
            place an order
          </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.notContainer}>
          <Text style={styles.title}>New goods arrived today!!!</Text>
          <Text style={styles.description}>
            Please be informed that there are set of goods in now, check out and
            place an order
          </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.notContainer}>
          <Text style={styles.title}>New goods arrived today!!!</Text>
          <Text style={styles.description}>
            Please be informed that there are set of goods in now, check out and
            place an order
          </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.notContainer}>
          <Text style={styles.title}>New goods arrived today!!!</Text>
          <Text style={styles.description}>
            Please be informed that there are set of goods in now, check out and
            place an order
          </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.notContainer}>
          <Text style={styles.title}>New goods arrived today!!!</Text>
          <Text style={styles.description}>
            Please be informed that there are set of goods in now, check out and
            place an order
          </Text>
        </View>
        </TouchableOpacity>

      </ScrollView>
      <SettingsFooter item={"Delete All"} onPress={()=>Alert.alert("Delete All", "Clear all order History", [{text:"Cancel",onPress:()=>console.log("Cancel Pressed")}, {text:"Yes",onPress:()=>console.log("Order Deleted")}])}/>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    width: "90%",
    alignSelf: "center",
  },

  notContainer: {
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "column",
    paddingVertical: hp(2),
    marginVertical: hp(1),
  },
  title: {
    fontSize: 20,
  },
  description: {
    color: "gray",
  },
});
