import { ScrollView, StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import SettingsHeader from "../navigations/settingshead";
import SettingsFooter from "../navigations/settingsfooter";
import { FontAwesome5 } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function XSmallOrderHistory() {
  return (
    <View style={small.parent}>
      <SettingsHeader item="Order History" name="trash" style={small.header} />
      <ScrollView style={small.scroll} showsVerticalScrollIndicator={false}>
        <View style={small.orderMade}>
          <Text style={small.orderDate}>Date: 2025-04-21</Text>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
        </View>

        <View style={small.orderMade}>
          <Text style={small.orderDate}>Date: 2025-04-21</Text>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
        </View>
      </ScrollView>
      <SettingsFooter item={"Back To Home"} />
    </View>
  );
}
export function SmallOrderHistory() {
  return (
    <>
      <SettingsHeader item="Order History" />
      <FontAwesome5
        name="trash"
        size={25}
        color="#9D2B27"
        style={small.trashCan}
        onPress={() =>
          Alert.alert("Delete All", "Clear all order History", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Yes", onPress: () => console.log("Order Deleted") },
          ])
        }
      />
      <ScrollView style={small.scroll} showsVerticalScrollIndicator={false}>
        <View style={small.orderMade}>
          <Text style={small.orderDate}>Date: 2025-04-21</Text>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
        </View>

        <View style={small.orderMade}>
          <Text style={small.orderDate}>Date: 2025-04-21</Text>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={small.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
        </View>
      </ScrollView>
      <SettingsFooter item={"Back To Home"} />
    </>
  );
}
export function MediumOrderHistory() {
  return (
    <>
      <SettingsHeader item="Order History" />
      <FontAwesome5
        name="trash"
        size={25}
        color="#9D2B27"
        style={medium.trashCan}
        onPress={() =>
          Alert.alert("Delete All", "Clear all order History", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Yes", onPress: () => console.log("Order Deleted") },
          ])
        }
      />
      <ScrollView style={medium.scroll} showsVerticalScrollIndicator={false}>
        <View style={medium.orderMade}>
          <Text style={medium.orderDate}>Date: 2025-04-21</Text>
          <View style={medium.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={medium.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={medium.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={medium.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
        </View>

        <View style={medium.orderMade}>
          <Text style={medium.orderDate}>Date: 2025-04-21</Text>
          <View style={medium.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={medium.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={medium.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={medium.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
        </View>
      </ScrollView>
      <SettingsFooter item={"Back To Home"} />
    </>
  );
}
export function LargeOrderHistory() {
  return (
    <>
      <SettingsHeader item="Order History" />
      <FontAwesome5
        name="trash"
        size={25}
        color="#9D2B27"
        style={large.trashCan}
        onPress={() =>
          Alert.alert("Delete All", "Clear all order History", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Yes", onPress: () => console.log("Order Deleted") },
          ])
        }
      />
      <ScrollView style={large.scroll} showsVerticalScrollIndicator={false}>
        <View style={large.orderMade}>
          <Text style={large.orderDate}>Date: 2025-04-21</Text>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
        </View>

        <View style={large.orderMade}>
          <Text style={large.orderDate}>Date: 2025-04-21</Text>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
        </View>
      </ScrollView>
      <SettingsFooter item={"Back To Home"} />
    </>
  );
}
export function XlargeOrderHistory() {
  return (
    <>
      <SettingsHeader item="Order History" />
      <FontAwesome5
        name="trash"
        size={25}
        color="#9D2B27"
        style={large.trashCan}
        onPress={() =>
          Alert.alert("Delete All", "Clear all order History", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Yes", onPress: () => console.log("Order Deleted") },
          ])
        }
      />
      <ScrollView style={large.scroll} showsVerticalScrollIndicator={false}>
        <View style={large.orderMade}>
          <Text style={large.orderDate}>Date: 2025-04-21</Text>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
        </View>

        <View style={large.orderMade}>
          <Text style={large.orderDate}>Date: 2025-04-21</Text>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
          <View style={large.segment}>
            <Text>Item: Wooden Hairbrush</Text>
            <Text>Price: GH₵ 20.00</Text>
            <Text>Qnty: 5</Text>
          </View>
        </View>
      </ScrollView>
      <SettingsFooter item={"Back To Home"} />
    </>
  );
}

const small = StyleSheet.create({
  parent: { 
    flex: 1,
    backgroundColor: "#fff"
  },
  scroll: {
    width: "90%",
    height: hp(85),
    borderColor: "green",
    alignSelf: "center",
    height: hp(80),
  },
  header: {
    fontSize: wp(1),
  },
  orderMade: {
    borderBottomWidth: 1,
    borderColor: "gray",
    backgroundColor: "#e8e7e7ff",
    borderRadius: 10,
    marginVertical: wp(2),
    paddingHorizontal: wp(5),
  },
  orderDate: {
    textAlign: "center",
    padding: 10,
    color: "#9D2B27",
    fontSize: wp(4),
  },
  segment: {
    marginBottom: 20,
  },
});
const medium = StyleSheet.create({
  parent: { 
    flex: 1,
    backgroundColor: "#fff"
  },
  scroll: {
    width: "90%",
    height: hp(85),
    borderColor: "green",
    alignSelf: "center",
    height: hp(80),
  },
  header: {
    fontSize: wp(1),
  },
  orderMade: {
    borderBottomWidth: 1,
    borderColor: "gray",
    backgroundColor: "#e8e7e7ff",
    borderRadius: 10,
    marginVertical: wp(2),
    paddingHorizontal: wp(5),
  },
  orderDate: {
    textAlign: "center",
    padding: 10,
    color: "#9D2B27",
    fontSize: wp(4),
  },
  segment: {
    marginBottom: 20,
  },
});
const large = StyleSheet.create({
  parent: { 
    flex: 1,
    backgroundColor: "#fff"
  },
  scroll: {
    width: "90%",
    height: hp(85),
    borderColor: "green",
    alignSelf: "center",
    height: hp(80),
  },
  header: {
    fontSize: wp(1),
  },
  orderMade: {
    borderBottomWidth: 1,
    borderColor: "gray",
    backgroundColor: "#e8e7e7ff",
    borderRadius: 10,
    marginVertical: wp(2),
    paddingHorizontal: wp(5),
  },
  orderDate: {
    textAlign: "center",
    padding: 10,
    color: "#9D2B27",
    fontSize: wp(4),
  },
  segment: {
    marginBottom: 20,
  },
});