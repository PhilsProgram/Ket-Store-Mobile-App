import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Profile from "../menu/profile";
import { Link } from "expo-router";

export default function HeaderNav({ title, img }) {
  const [ iconName, setIconName ] = useState("sun")
  const toggleIcon = () => {
    setIconName( prev => prev === "moon" ? "sun" : "moon")
  }
  // Handle the user profile page rendering
  return (
    <LinearGradient
    colors={["#b57e7cff", "white"]}
    start={{ x:0, y:-0.5 }}
    end={{x:0, y:0.1 }}
    style={styles.header}
    >
      <StatusBar barStyle="light-content" backgroundColor="#9D2B27" />
      <View 
      style={styles.navContainer}>
        <FontAwesome5
          name={img}
          size={30}
          color="#9D2B27"
          style={{ marginRight: 15 }}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
      {/* Change the current theme of the app */}
      <TouchableOpacity style={styles.themeToggle} onPress={toggleIcon}><FontAwesome5 name={iconName} size={25} color="#9D2B27" solid /></TouchableOpacity>

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
    paddingHorizontal: 70,
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
    right: 30,
    top: 8,
    position: "absolute"
  },
  themeToggle: {
    width: "10%",
    height: "90%",
    right: 100,
    top: 10,
    position: "absolute"
  }
});