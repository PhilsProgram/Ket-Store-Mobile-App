import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Profile from "../menu/profile";
import { Link } from "expo-router";

export default function XSmallUIHeaderNav({ title, img }) {
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
    style={small.header}
    >
      <StatusBar barStyle="light-content" backgroundColor="#9D2B27" />
      <View style={small.statusBar}>
      <View 
      style={small.navContainer}>
        <FontAwesome5
          name={img}
          size={25}
          color="#9D2B27"
          style={{ marginRight: 15 }}
        />
        <Text style={small.headerText}>{title}</Text>
      </View>
      <View style={small.iconContainer}>
      {/* Change the current theme of the app */}
      <TouchableOpacity style={small.themeToggle} onPress={toggleIcon}><FontAwesome5 name={iconName} size={25} color="#9D2B27" solid /></TouchableOpacity>

      <Link href="/menu/profile" asChild>
      <TouchableOpacity style={small.profile} ><FontAwesome5 name="user-circle" size={25} color="#9D2B27" solid/></TouchableOpacity>
      </Link>
      </View>
      </View>
    </LinearGradient>
  );
}

export const SmallUIHeaderNav = ({ title, img }) => {
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
    style={small.header}
    >
      <StatusBar barStyle="light-content" backgroundColor="#9D2B27" />
      <View 
      style={small.navContainer}>
        <FontAwesome5
          name={img}
          size={25}
          color="#9D2B27"
          style={{ marginRight: 15 }}
        />
        <Text style={small.headerText}>{title}</Text>
      </View>
      {/* Change the current theme of the app */}
      <TouchableOpacity style={small.themeToggle} onPress={toggleIcon}><FontAwesome5 name={iconName} size={25} color="#9D2B27" solid /></TouchableOpacity>

      <Link href="/menu/profile" asChild>
      <TouchableOpacity style={small.profile} ><FontAwesome5 name="user-circle" size={25} color="#9D2B27" solid/></TouchableOpacity>
      </Link>
    </LinearGradient>
  );
}

export const MediumUIHeaderNav = ({ title, img }) => {
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
    style={medium.header}
    >
      <StatusBar barStyle="light-content" backgroundColor="#9D2B27" />
      <View 
      style={medium.navContainer}>
        <FontAwesome5
          name={img}
          size={25}
          color="#9D2B27"
          style={{ marginRight: 15 }}
        />
        <Text style={medium.headerText}>{title}</Text>
      </View>
      {/* Change the current theme of the app */}
      <TouchableOpacity style={medium.themeToggle} onPress={toggleIcon}><FontAwesome5 name={iconName} size={25} color="#9D2B27" solid /></TouchableOpacity>

      <Link href="/menu/profile" asChild>
      <TouchableOpacity style={medium.profile} ><FontAwesome5 name="user-circle" size={25} color="#9D2B27" solid/></TouchableOpacity>
      </Link>
    </LinearGradient>
  );
}

export const LargeUIHeaderNav = ({ title, img }) => {
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
    style={large.header}
    >
      <StatusBar barStyle="light-content" backgroundColor="#9D2B27" />
      <View 
      style={large.navContainer}>
        <FontAwesome5
          name={img}
          size={25}
          color="#9D2B27"
          style={{ marginRight: 15 }}
        />
        <Text style={large.headerText}>{title}</Text>
      </View>
      {/* Change the current theme of the app */}
      <TouchableOpacity style={large.themeToggle} onPress={toggleIcon}><FontAwesome5 name={iconName} size={25} color="#9D2B27" solid /></TouchableOpacity>

      <Link href="/menu/profile" asChild>
      <TouchableOpacity style={large.profile} ><FontAwesome5 name="user-circle" size={25} color="#9D2B27" solid/></TouchableOpacity>
      </Link>
    </LinearGradient>
  );
}

export const XLargeUIHeaderNav = ({ title, img }) => {
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
    style={large.header}
    >
      <StatusBar barStyle="light-content" backgroundColor="#9D2B27" />
      <View 
      style={large.navContainer}>
        <FontAwesome5
          name={img}
          size={25}
          color="#9D2B27"
          style={{ marginRight: 15 }}
        />
        <Text style={large.headerText}>{title}</Text>
      </View>
      {/* Change the current theme of the app */}
      <TouchableOpacity style={large.themeToggle} onPress={toggleIcon}><FontAwesome5 name={iconName} size={25} color="#9D2B27" solid /></TouchableOpacity>

      <Link href="/menu/profile" asChild>
      <TouchableOpacity style={large.profile} ><FontAwesome5 name="user-circle" size={25} color="#9D2B27" solid/></TouchableOpacity>
      </Link>
    </LinearGradient>
  );
}

const small = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderBottomColor: "#9D2B27",
    borderBottomWidth: 1,
    height: 55,
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
    // borderWidth: 1,
    // paddingTop: 4,
    fontWeight: "bold"
  },
  profile: {
    width: "10%",
    height: "90%",
    position: "relative"
  },
  themeToggle: {
    height: "90%",
    position: "relative"
  },
  statusBar: {
    position: "relative",
    justifyContent: "space-between",
    height: StatusBar.currentHeight,
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: "black",
    width: "100%",
    flexDirection: "row",
    alignSelf: "bottom"
  },
  iconContainer: {
    height: "90%",
    position: "relative",
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-around"
  }
});
const medium = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderBottomColor: "#9D2B27",
    borderBottomWidth: 1,
    height: 55,
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
    // borderWidth: 1,
    // paddingTop: 4,
    fontWeight: "bold"
  },
  profile: {
    width: "10%",
    height: "90%",
    position: "relative"
  },
  themeToggle: {
    height: "90%",
    position: "relative"
  },
  statusBar: {
    position: "relative",
    justifyContent: "space-between",
    height: StatusBar.currentHeight,
    marginTop: 20,
    // borderWidth: 1,
    // borderColor: "black",
    width: "100%",
    flexDirection: "row",
    alignSelf: "bottom"
  },
  iconContainer: {
    height: "90%",
    position: "relative",
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-around"
  }
});
const large = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderBottomColor: "#9D2B27",
    borderBottomWidth: 1,
    height: 55,
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
    // borderWidth: 1,
    // paddingTop: 4,
    fontWeight: "bold"
  },
  profile: {
    width: "10%",
    height: "90%",
    position: "relative"
  },
  themeToggle: {
    height: "90%",
    position: "relative"
  },
  statusBar: {
    position: "relative",
    justifyContent: "space-between",
    height: StatusBar.currentHeight,
    marginTop: 20,
    // borderWidth: 1,
    // borderColor: "black",
    width: "100%",
    flexDirection: "row",
    alignSelf: "bottom"
  },
  iconContainer: {
    height: "90%",
    position: "relative",
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-around"
  }
});