import React from "react";
import { View, Text, ScrollView, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import FooterNav from "../navigations/footerNav.jsx";
import HeaderNav from "../navigations/HeaderNav.jsx";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";

//  Checking if the device of the screen is very small
export const XSmallUI = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "green" }}>
        <View style={xsmall.container}>
          {/* Header */}
          <HeaderNav title="Shop" img="shopping-bag" />
          {/* Scrollable Content */}
          <ScrollView
            contentContainerStyle={xsmall.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {renderCategory("/shopping/combs", "Combs")}
            {renderCategory("/shopping/pegs", "Pegs")}
            {renderCategory("/shopping/mirror", "Mirror")}
          </ScrollView>
          <FooterNav />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export const SmallUI = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "green" }}>
        <View style={small.container}>
          {/* Header */}
          <HeaderNav title="Shop" img="shopping-bag" />
          {/* Scrollable Content */}
          <ScrollView
            contentContainerStyle={small.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {renderCategory("/shopping/combs", "Combs")}
            {renderCategory("/shopping/pegs", "Pegs")}
            {renderCategory("/shopping/mirror", "Mirror")}
          </ScrollView>
          <FooterNav />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export const MediumUI = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "green" }}>
        <View style={medium.container}>
          {/* Header */}
          <HeaderNav title="Shop" img="shopping-bag" />
          {/* Scrollable Content */}
          <ScrollView
            contentContainerStyle={medium.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {renderCategory("/shopping/combs", "Combs")}
            {renderCategory("/shopping/pegs", "Pegs")}
            {renderCategory("/shopping/mirror", "Mirror")}
          </ScrollView>
          <FooterNav />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export const LargeUI = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "green" }}>
        <View style={large.container}>
          {/* Header */}
          <HeaderNav title="Shop" img="shopping-bag" />
          {/* Scrollable Content */}
          <ScrollView
            contentContainerStyle={large.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {renderCategory("/shopping/combs", "Combs")}
            {renderCategory("/shopping/pegs", "Pegs")}
            {renderCategory("/shopping/mirror", "Mirror")}
          </ScrollView>
          <FooterNav />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export const XLargeUI = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "green" }}>
        <View style={xlarge.container}>
          {/* Header */}
          <HeaderNav title="Shop" img="shopping-bag" />
          {/* Scrollable Content */}
          <ScrollView
            contentContainerStyle={xlarge.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {renderCategory("/shopping/combs", "Combs")}
            {renderCategory("/shopping/pegs", "Pegs")}
            {renderCategory("/shopping/mirror", "Mirror")}
          </ScrollView>
          <FooterNav />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
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
const xsmall = StyleSheet.create({
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

const small = StyleSheet.create({
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

const medium = StyleSheet.create({
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

const large = StyleSheet.create({
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

const xlarge = StyleSheet.create({
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
