import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FooterNav from "../navigations/footerNav";
import HeaderNav from "../navigations/HeaderNav";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Link } from "expo-router";

const SETTINGS_OPTIONS = [
  {index: "1", title: "Order History", subtitle: "Orders made so far, check them out", link: "/menu/orderhistory" },
  {index: "2", title: "Notifications", subtitle: "This is really important, read now", link: "/menu/notification" },
  {index: "3", title: "Wishlist / Favorites", subtitle: "Checkout starred goods to be ordered", link: "/menu/wishlist" },
  {index: "4", title: "Reports and FAQ", subtitle: "Something went wrong? Let us know", link: "/menu/faq" },
  {index: "5", title: "Support / Contribute", subtitle: "Help us improve, what do you suggest", link: "/menu/support" },
];

export default function SettingsScreen() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <HeaderNav title="More" img="bars"/>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      {SETTINGS_OPTIONS.map((item) => (
        <Link href={item.link} asChild>
        <TouchableOpacity style={styles.optionContainer}>
          
          <Text style={[styles.optionTitle, item.isDanger && styles.dangerText]}>
            {item.title}
          </Text>
          <Text style={styles.optionSubtitle}>{item.subtitle}</Text>
        </TouchableOpacity>
        </Link>
      )
      )};

      <TouchableOpacity key={"6"} style={styles.optionContainer} onPress={() => Alert.alert( "Log Out", "Are you sure you want to log out?", [ { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" }, { text: "Yes", onPress: () => console.log("Logged Out") } ] ) }>
          <Text style={[styles.optionTitle, styles.dangerText]}>
            Log Out
          </Text>
          <Text style={styles.optionSubtitle}>log out of your account now</Text>
        </TouchableOpacity>

      <TouchableOpacity key={"7"} style={styles.optionContainer} onPress={() => Alert.alert( "Delete Account", "This action will take off your credentials from our database. \n Do you wish to continue?", [ { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" }, { text: "Yes", onPress: () => console.log("Logged Out") } ] ) }>
          <Text style={[styles.optionTitle, styles.dangerText]}>
            Delete Account
          </Text>
          <Text style={styles.optionSubtitle}>Clear your details from our database</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    <FooterNav/>
    </SafeAreaView>
  </SafeAreaProvider>
);
};

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
    height: "auto"
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
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  optionTitle: {
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#9D2B27" 
  },
  optionSubtitle: {
    fontSize: 18, 
    color: "#666" 
  },
  dangerText: {
    color: "#D32F2F" 
  },
  navContainer: {
    width: "30%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
  }
});