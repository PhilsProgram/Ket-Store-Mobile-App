import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SettingsHeader from "../navigations/settingshead.jsx";
import SettingsFooter from "../navigations/settingsfooter.jsx";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function XSmallUINotifications() {
  return (
    <View style={small.parentContainer}>
      <SettingsHeader item={"Notifications"} name="trash"/>
      <ScrollView style={small.scroll} showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <SettingsFooter
        item={"Mark all read"}
        onPress={() =>
          Alert.alert("Mark all read", "Mark all notifications as read", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Yes", onPress: () => console.log("Order Deleted") },
          ])
        }
      />
    </View>
  );
};
export function SmallUINotifications() {
  return (
    <>
      <SettingsHeader item={"Notifications"} name="trash"/>
      <ScrollView style={small.scroll} showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={small.notContainer}>
            <Text style={small.title}>New goods arrived today!!!</Text>
            <Text style={small.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <SettingsFooter
        item={"Delete All"}
        onPress={() =>
          Alert.alert("Delete All", "Clear all order History", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Yes", onPress: () => console.log("Order Deleted") },
          ])
        }
      />
    </>
  );
};
export function MediumUINotifications() {
  return (
    <>
      <SettingsHeader item={"Notifications"} />
      <ScrollView style={medium.scroll} showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={medium.notContainer}>
            <Text style={medium.title}>New goods arrived today!!!</Text>
            <Text style={medium.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={medium.notContainer}>
            <Text style={medium.title}>New goods arrived today!!!</Text>
            <Text style={medium.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={medium.notContainer}>
            <Text style={medium.title}>New goods arrived today!!!</Text>
            <Text style={medium.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={medium.notContainer}>
            <Text style={medium.title}>New goods arrived today!!!</Text>
            <Text style={medium.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={medium.notContainer}>
            <Text style={medium.title}>New goods arrived today!!!</Text>
            <Text style={medium.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={medium.notContainer}>
            <Text style={medium.title}>New goods arrived today!!!</Text>
            <Text style={medium.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={medium.notContainer}>
            <Text style={medium.title}>New goods arrived today!!!</Text>
            <Text style={medium.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={medium.notContainer}>
            <Text style={medium.title}>New goods arrived today!!!</Text>
            <Text style={medium.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <SettingsFooter
        item={"Delete All"}
        onPress={() =>
          Alert.alert("Delete All", "Clear all order History", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Yes", onPress: () => console.log("Order Deleted") },
          ])
        }
      />
    </>
  );
};
export function LargeUINotifications() {
  return (
    <>
      <SettingsHeader item={"Notifications"} />
      <ScrollView style={large.scroll} showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <SettingsFooter
        item={"Delete All"}
        onPress={() =>
          Alert.alert("Delete All", "Clear all order History", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Yes", onPress: () => console.log("Order Deleted") },
          ])
        }
      />
    </>
  );
};
export function XLargeUINotifications() {
  return (
    <>
      <SettingsHeader item={"Notifications"}/>
      <ScrollView style={large.scroll} showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={large.notContainer}>
            <Text style={large.title}>New goods arrived today!!!</Text>
            <Text style={large.description}>
              Please be informed that there are set of goods in now, check out
              and place an order
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <SettingsFooter
        item={"Delete All"}
        onPress={() =>
          Alert.alert("Delete All", "Clear all order History", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Yes", onPress: () => console.log("Order Deleted") },
          ])
        }
      />
    </>
  );
};

const small = StyleSheet.create({
    parentContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  scroll: {
    width: "90%",
    alignSelf: "center",
    height: hp(80),
  },
  notContainer: {
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "column",
    paddingVertical: hp(0.6),
    padding: 5,
    marginVertical: hp(0.7),
    backgroundColor: "#efefefff",
  },
  title: {
    fontSize: 17,
  },
  description: {
    color: "gray",
  },
});
const medium = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  scroll: {
    width: "90%",
    alignSelf: "center",
    height: hp(80),
  },

  notContainer: {
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "column",
    paddingVertical: hp(0.6),
    marginVertical: hp(1),
  },
  title: {
    fontSize: 17,
  },
  description: {
    color: "gray",
  },
});
const large = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  scroll: {
    width: "90%",
    alignSelf: "center",
    height: hp(80),
  },

  notContainer: {
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "column",
    paddingVertical: hp(0.6),
    marginVertical: hp(1),
  },
  title: {
    fontSize: 17,
  },
  description: {
    color: "gray",
  },
});