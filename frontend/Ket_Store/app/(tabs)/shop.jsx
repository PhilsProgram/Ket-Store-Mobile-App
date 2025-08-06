import React from "react";
import { View, Text, ScrollView, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import FooterNav from "../navigations/footerNav";
import HeaderNav from "../navigations/HeaderNav";
import { deviceScreen, deviceCategories } from "../UI/screenAdjust";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function ShopScreen() {
  //  Checking if the device of the screen is very small
  if ( deviceScreen().screenWidth == deviceCategories.xsmall ) {
    return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, bargroundColor: "green" }}>
        <View style={styles.container}>
          {/* Header */}
          <HeaderNav title="Shop" img="shopping-bag" />
          {/* Scrollable Content */}
          <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            {renderCategory("/shopping/combs", "Combs" )}
            {renderCategory("/shopping/pegs", "Pegs" )}
            {renderCategory("/shopping/mirror", "Mirror" )}
          </ScrollView>
          <FooterNav />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    );
  }

  else if ( deviceScreen().screenWidth == deviceCategories.small ) {
    return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, bargroundColor: "green" }}>
        <View style={styles.container}>
          {/* Header */}
          <HeaderNav title="Shop" img="shopping-bag" />
          {/* Scrollable Content */}
          <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            {renderCategory("/shopping/combs", "Combs" )}
            {renderCategory("/shopping/pegs", "Pegs" )}
            {renderCategory("/shopping/mirror", "Mirror" )}
          </ScrollView>
          <FooterNav />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    );
  }

  else if ( deviceScreen().screenWidth == deviceCategories.medium ) {
    return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, bargroundColor: "green" }}>
        <View style={styles.container}>
          {/* Header */}
          <HeaderNav title="Shop" img="shopping-bag" />
          {/* Scrollable Content */}
          <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            {renderCategory("/shopping/combs", "Combs" )}
            {renderCategory("/shopping/pegs", "Pegs" )}
            {renderCategory("/shopping/mirror", "Mirror" )}
          </ScrollView>
          <FooterNav />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    );
  }

  else if ( deviceScreen().screenWidth == deviceCategories.large ) {
    return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, bargroundColor: "green" }}>
        <View style={styles.container}>
          {/* Header */}
          <HeaderNav title="Shop" img="shopping-bag" />
          {/* Scrollable Content */}
          <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            {renderCategory("/shopping/combs", "Combs" )}
            {renderCategory("/shopping/pegs", "Pegs" )}
            {renderCategory("/shopping/mirror", "Mirror" )}
          </ScrollView>
          <FooterNav />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    );
  }

  else {
    return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, bargroundColor: "green" }}>
        <View style={styles.container}>
          {/* Header */}
          <HeaderNav title="Shop" img="shopping-bag" />
          {/* Scrollable Content */}
          <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            {renderCategory("/shopping/combs", "Combs" )}
            {renderCategory("/shopping/pegs", "Pegs" )}
            {renderCategory("/shopping/mirror", "Mirror" )}
          </ScrollView>
          <FooterNav />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    );
  }
};

const renderCategory = (linking, title) => (
  <Link href={linking} asChild>
    <TouchableOpacity style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <View style={styles.card}>
        <View style={styles.inner}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Buy</Text>
          </Pressable>
        </View>
        <View style={styles.inner}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Buy</Text>
          </Pressable>
        </View>
      </View>
    </TouchableOpacity>
  </Link>
);

// Styles for the page
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  contentContainer: {
    padding: 20,
    paddingBottom: hp(10),
  },

  categoryContainer: {
    marginBottom: hp(10),
    height: hp(35),
  },

  categoryTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#8B0000",
    marginBottom: 10,
    alignSelf: "center",
  },

  card: {
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    alignItems: "center",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    backgroundColor: "#BDB76B",
    borderRadius: 20,
    padding: 7,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },

  activeNav: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  inner: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    height: "100%",
    width: "48%",
    paddingTop: "30%",
  },
});
// ----------------------------------------------------------    Shop page    -------------------------------------------------------------------------------
