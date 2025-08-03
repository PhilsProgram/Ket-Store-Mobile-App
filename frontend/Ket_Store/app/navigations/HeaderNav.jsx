import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import Profile from "../menu/profile";
import { Link } from "expo-router";

export default function HeaderNav({ title, img }) {

  // Handle the user profile page rendering

  return (
    <LinearGradient
    colors={["#9D2B27", "white"]}
    start={{ x:0, y:-0.5 }}
    end={{x:0, y:0.1 }}
    style={styles.header}
    >
      <StatusBar barStyle="light-content" backgroundColor="#9D2B27" />
      <View 
      style={styles.navContainer}>
        <FontAwesome5
          name={img}
          size={28}
          color="#9D2B27"
          style={{ marginRight: 15 }}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <Link href="/menu/profile" asChild>
      <TouchableOpacity style={styles.profile} ><FontAwesome5 name="user-circle" size={30} color="#9D2B27" solid/></TouchableOpacity>
      </Link>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderBottomColor: "#9D2B27",
    borderBottomWidth: 1
  },
  navContainer: {
    width: "auto",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "#9D2B27",
    fontSize: 20,
    fontWeight: "bold"
  },
  profile: {
    width: "10%",
    height: "90%",
    right: 35,
    top: 8,
    position: "absolute"
  },
});