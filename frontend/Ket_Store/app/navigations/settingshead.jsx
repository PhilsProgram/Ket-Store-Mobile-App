import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View, Alert, useWindowDimensions } from "react-native";
import { useRouter } from "expo-router";

export default function SettingsHeader({ item, event, name }) {
  const navigation = useRouter();
  const { width } = useWindowDimensions();
  const XSmall = (
    <View>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <View style={small.header}>
        <FontAwesome5 onPress={() => navigation.back()}
          name="arrow-left"
          size={22}
          color="#B99B43"
          style={small.backArrow}
        />
        <Text style={small.headerText}>{item}</Text>
        <Text style={small.event}>{event}</Text>
        <FontAwesome5
        name={name}
        size={20}
        color="#9D2B27"
        style={small.trashCan}
        onPress={() =>
          Alert.alert("Delete All", "Clear all order History", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Yes", onPress: () => console.log("Order Deleted") },
          ])
        }
      />
      </View>
    </View>
  );
  const Small = (
    <View >
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <View style={small.header}>
        <FontAwesome5 onPress={() => navigation.back()}
          name="arrow-left"
          size={25}
          color="#B99B43"
          style={small.backArrow}
        />
        <FontAwesome5
        name="trash"
        size={20}
        color="#9D2B27"
        style={small.trashCan}
        onPress={() =>
          Alert.alert("Delete All", "Clear all order History", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Yes", onPress: () => console.log("Order Deleted") },
          ])
        }
      />
        <Text style={small.headerText}>{item}</Text>
        <Text style={small.event}>{event}</Text>
      </View>
    </View>
  );
  const Medium = (
    <View >
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <View style={medium.header}>
        <FontAwesome5 onPress={() => navigation.back()}
          name="arrow-left"
          size={25}
          color="#B99B43"
          style={medium.backArrow}
        />
        <FontAwesome5
        name="trash"
        size={20}
        color="#9D2B27"
        style={medium.trashCan}
        onPress={() =>
          Alert.alert("Delete All", "Clear all order History", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Yes", onPress: () => console.log("Order Deleted") },
          ])
        }
      />
        <Text style={medium.headerText}>{item}</Text>
        <Text style={medium.event}>{event}</Text>
      </View>
    </View>
  );
  const Large = (
    <View >
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <View style={large.header}>
        <FontAwesome5 onPress={() => navigation.back()}
          name="arrow-left"
          size={25}
          color="#B99B43"
          style={large.backArrow}
        />
        <FontAwesome5
        name="trash"
        size={20}
        color="#9D2B27"
        style={large.trashCan}
        onPress={() =>
          Alert.alert("Delete All", "Clear all order History", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Yes", onPress: () => console.log("Order Deleted") },
          ])
        }
      />
        <Text style={large.headerText}>{item}</Text>
        <Text style={large.event}>{event}</Text>
      </View>
    </View>
  );
  const XLarge = (
    <View >
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <View style={large.header}>
        <FontAwesome5 onPress={() => navigation.back()}
          name="arrow-left"
          size={25}
          color="#B99B43"
          style={large.backArrow}
        />
        <FontAwesome5
        name="trash"
        size={20}
        color="#9D2B27"
        style={large.trashCan}
        onPress={() =>
          Alert.alert("Delete All", "Clear all order History", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "Yes", onPress: () => console.log("Order Deleted") },
          ])
        }
      />
        <Text style={large.headerText}>{item}</Text>
        <Text style={large.event}>{event}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {width < 360 && XSmall}
      {width >= 360 && width < 480 && Small}
      {width >= 480 && width < 600 && Medium}
      {width >= 600 && width < 900 && Large}
      {width >= 900 && XLarge}
    </View>
  );
}

const small = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: "#C0C0C0",
    width: "100%",
    height: 40,
    justifyContent: "center",
    paddingTop: "5.5%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  backArrow: {
    position: "relative",
  },
  headerText: {
    color: "#B99B43",
    fontSize: 17,
    fontWeight: "bold",
  },
  event: {
    color: "gray",
    fontSize: 20,
    position: "absolute",
    right: 10,
    marginRight: 100
  },
  trashCan: {
    position: "relative",
  },
});
const medium = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: "#C0C0C0",
    width: "100%",
    height: 40,
    justifyContent: "center",
    paddingTop: "5.5%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  backArrow: {
    position: "relative",
  },
  headerText: {
    color: "#B99B43",
    fontSize: 17,
    fontWeight: "bold",
  },
  event: {
    color: "gray",
    fontSize: 20,
    position: "absolute",
    right: 10,
    marginRight: 100
  },
  trashCan: {
    position: "relative",
  },
});
const large = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: "#C0C0C0",
    width: "100%",
    height: 40,
    justifyContent: "center",
    paddingTop: "5.5%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  backArrow: {
    position: "relative",
  },
  headerText: {
    color: "#B99B43",
    fontSize: 17,
    fontWeight: "bold",
  },
  event: {
    color: "gray",
    fontSize: 20,
    position: "absolute",
    right: 10,
    marginRight: 100
  },
  trashCan: {
    position: "relative",
  },
});