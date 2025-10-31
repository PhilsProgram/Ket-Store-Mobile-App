import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FooterNav from "../navigations/footerNav";
import XSmallUIHeaderNav, { SmallUIHeaderNav, MediumUIHeaderNav, LargeUIHeaderNav, XLargeUIHeaderNav } from "./headerNavUI.jsx";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Link } from "expo-router";

const SETTINGS_OPTIONS = [
  {
    index: "1",
    title: "Order History",
    subtitle: "Orders made so far, check them out",
    link: "/menu/orderhistory",
  },
  {
    index: "2",
    title: "Notifications",
    subtitle: "This is really important, read now",
    link: "/menu/notification",
  },
  {
    index: "3",
    title: "Report / Contribute",
    subtitle: "Help us improve, is there something wrong?",
    link: "/menu/support",
  },
];

export default function XSmallUI() {
  return (
    <SafeAreaProvider style={{flex: 1, backgroundColor: "white"}}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={small.container}>
          <XSmallUIHeaderNav title="More" img="bars" />

          <ScrollView style={small.scroll} showsVerticalScrollIndicator={false}>
            {SETTINGS_OPTIONS.map((item) => (
              <Link href={item.link} asChild>
                <TouchableOpacity style={small.optionContainer}>
                  <Text
                    style={[
                      small.optionTitle,
                      item.isDanger && small.dangerText,
                    ]}
                  >
                    {item.title}
                  </Text>
                  <Text style={small.optionSubtitle}>{item.subtitle}</Text>
                </TouchableOpacity>
              </Link>
            ))}
            ;
            <TouchableOpacity
              key={"6"}
              style={small.optionContainer}
              onPress={() =>
                Alert.alert("Log Out", "Are you sure you want to log out?", [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  { text: "Yes", onPress: () => console.log("Logged Out") },
                ])
              }
            >
              <Text style={[small.optionTitle, small.dangerText]}>Log Out</Text>
              <Text style={small.optionSubtitle}>
                log out of your account now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              key={"7"}
              style={small.optionContainer}
              onPress={() =>
                Alert.alert(
                  "Delete Account",
                  "This action will take off your credentials from our database. \n Do you wish to continue?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    { text: "Yes", onPress: () => console.log("Logged Out") },
                  ]
                )
              }
            >
              <Text style={[small.optionTitle, small.dangerText]}>
                Delete Account
              </Text>
              <Text style={small.optionSubtitle}>
                Clear your details from our database
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <FooterNav />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export const SmallUI = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={small.container}>
          <SmallUIHeaderNav title="More" img="bars" />

          <ScrollView style={small.scroll} showsVerticalScrollIndicator={false}>
            {SETTINGS_OPTIONS.map((item) => (
              <Link href={item.link} asChild>
                <TouchableOpacity style={small.optionContainer}>
                  <Text
                    style={[
                      small.optionTitle,
                      item.isDanger && small.dangerText,
                    ]}
                  >
                    {item.title}
                  </Text>
                  <Text style={small.optionSubtitle}>{item.subtitle}</Text>
                </TouchableOpacity>
              </Link>
            ))}
            ;
            <TouchableOpacity
              key={"6"}
              style={small.optionContainer}
              onPress={() =>
                Alert.alert("Log Out", "Are you sure you want to log out?", [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  { text: "Yes", onPress: () => console.log("Logged Out") },
                ])
              }
            >
              <Text style={[small.optionTitle, small.dangerText]}>Log Out</Text>
              <Text style={small.optionSubtitle}>
                log out of your account now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              key={"7"}
              style={small.optionContainer}
              onPress={() =>
                Alert.alert(
                  "Delete Account",
                  "This action will take off your credentials from our database. \n Do you wish to continue?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    { text: "Yes", onPress: () => console.log("Logged Out") },
                  ]
                )
              }
            >
              <Text style={[small.optionTitle, small.dangerText]}>
                Delete Account
              </Text>
              <Text style={small.optionSubtitle}>
                Clear your details from our database
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <FooterNav />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export const MediumUI = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={medium.container}>
          <MediumUIHeaderNav title="More" img="bars" />

          <ScrollView
            style={medium.scroll}
            showsVerticalScrollIndicator={false}
          >
            {SETTINGS_OPTIONS.map((item) => (
              <Link href={item.link} asChild>
                <TouchableOpacity style={medium.optionContainer}>
                  <Text
                    style={[
                      medium.optionTitle,
                      item.isDanger && medium.dangerText,
                    ]}
                  >
                    {item.title}
                  </Text>
                  <Text style={medium.optionSubtitle}>{item.subtitle}</Text>
                </TouchableOpacity>
              </Link>
            ))}
            ;
            <TouchableOpacity
              key={"6"}
              style={medium.optionContainer}
              onPress={() =>
                Alert.alert("Log Out", "Are you sure you want to log out?", [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  { text: "Yes", onPress: () => console.log("Logged Out") },
                ])
              }
            >
              <Text style={[medium.optionTitle, medium.dangerText]}>
                Log Out
              </Text>
              <Text style={medium.optionSubtitle}>
                log out of your account now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              key={"7"}
              style={medium.optionContainer}
              onPress={() =>
                Alert.alert(
                  "Delete Account",
                  "This action will take off your credentials from our database. \n Do you wish to continue?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    { text: "Yes", onPress: () => console.log("Logged Out") },
                  ]
                )
              }
            >
              <Text style={[medium.optionTitle, medium.dangerText]}>
                Delete Account
              </Text>
              <Text style={medium.optionSubtitle}>
                Clear your details from our database
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <FooterNav />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export const LargeUI = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={large.container}>
          <LargeUIHeaderNav title="More" img="bars" />

          <ScrollView style={large.scroll} showsVerticalScrollIndicator={false}>
            {SETTINGS_OPTIONS.map((item) => (
              <Link href={item.link} asChild>
                <TouchableOpacity style={large.optionContainer}>
                  <Text
                    style={[
                      large.optionTitle,
                      item.isDanger && large.dangerText,
                    ]}
                  >
                    {item.title}
                  </Text>
                  <Text style={large.optionSubtitle}>{item.subtitle}</Text>
                </TouchableOpacity>
              </Link>
            ))}
            ;
            <TouchableOpacity
              key={"6"}
              style={large.optionContainer}
              onPress={() =>
                Alert.alert("Log Out", "Are you sure you want to log out?", [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  { text: "Yes", onPress: () => console.log("Logged Out") },
                ])
              }
            >
              <Text style={[large.optionTitle, large.dangerText]}>Log Out</Text>
              <Text style={large.optionSubtitle}>
                log out of your account now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              key={"7"}
              style={large.optionContainer}
              onPress={() =>
                Alert.alert(
                  "Delete Account",
                  "This action will take off your credentials from our database. \n Do you wish to continue?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    { text: "Yes", onPress: () => console.log("Logged Out") },
                  ]
                )
              }
            >
              <Text style={[large.optionTitle, large.dangerText]}>
                Delete Account
              </Text>
              <Text style={large.optionSubtitle}>
                Clear your details from our database
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <FooterNav />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export const XLargeUI = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={large.container}>
          <XLargeUIHeaderNav title="More" img="bars" />

          <ScrollView style={large.scroll} showsVerticalScrollIndicator={false}>
            {SETTINGS_OPTIONS.map((item) => (
              <Link href={item.link} asChild>
                <TouchableOpacity style={large.optionContainer}>
                  <Text
                    style={[
                      large.optionTitle,
                      item.isDanger && large.dangerText,
                    ]}
                  >
                    {item.title}
                  </Text>
                  <Text style={large.optionSubtitle}>{item.subtitle}</Text>
                </TouchableOpacity>
              </Link>
            ))}
            ;
            <TouchableOpacity
              key={"6"}
              style={large.optionContainer}
              onPress={() =>
                Alert.alert("Log Out", "Are you sure you want to log out?", [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  { text: "Yes", onPress: () => console.log("Logged Out") },
                ])
              }
            >
              <Text style={[large.optionTitle, large.dangerText]}>Log Out</Text>
              <Text style={large.optionSubtitle}>
                log out of your account now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              key={"7"}
              style={large.optionContainer}
              onPress={() =>
                Alert.alert(
                  "Delete Account",
                  "This action will take off your credentials from our database. \n Do you wish to continue?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    { text: "Yes", onPress: () => console.log("Logged Out") },
                  ]
                )
              }
            >
              <Text style={[large.optionTitle, large.dangerText]}>
                Delete Account
              </Text>
              <Text style={large.optionSubtitle}>
                Clear your details from our database
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <FooterNav />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const small = StyleSheet.create({
  scroll: {
    width: "100%",
    height: hp(80),
  },
  container: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#9D2B27",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },
  optionContainer: {
    padding: 15,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#9D2B27",
  },
  optionSubtitle: {
    fontSize: 16,
    color: "#666",
  },
  dangerText: {
    color: "#D32F2F",
  },
  navContainer: {
    width: "30%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
const medium = StyleSheet.create({
  scroll: {
    width: "100%",
    height: "auto",
  },
  container: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#9D2B27",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },
  optionContainer: {
    padding: 15,
    height: 85,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#9D2B27",
  },
  optionSubtitle: {
    fontSize: 16,
    color: "#666",
  },
  dangerText: {
    color: "#D32F2F",
  },
  navContainer: {
    width: "30%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
const large = StyleSheet.create({
  scroll: {
    width: "100%",
    height: "auto",
  },
  container: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#9D2B27",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },
  optionContainer: {
    padding: 15,
    height: 85,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#9D2B27",
  },
  optionSubtitle: {
    fontSize: 16,
    color: "#666",
  },
  dangerText: {
    color: "#D32F2F",
  },
  navContainer: {
    width: "30%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});