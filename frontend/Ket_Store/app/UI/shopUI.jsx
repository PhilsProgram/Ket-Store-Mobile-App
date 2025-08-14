import React from "react";
import { View, Text, ScrollView, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import FooterNav from "../navigations/footerNav.jsx";
import HeaderNav from "../navigations/HeaderNav.jsx";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";

//  Checking if the device of the screen is very small
export const XSmallUI = () => {
  const renderCategory = (linking, title) => (
  <Link href={linking} asChild>
    <TouchableOpacity style={xsmall.categoryContainer}>
      <Text style={xsmall.categoryTitle}>{title}</Text>
      <View style={xsmall.card}>
        <View style={xsmall.inner}>
          <Pressable style={xsmall.button}>
            <Text style={xsmall.buttonText}>Buy</Text>
          </Pressable>
        </View>
      </View>
    </TouchableOpacity>
  </Link>
  );
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
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
  const renderCategory = (linking, title) => (
  <Link href={linking} asChild>
    <TouchableOpacity style={small.categoryContainer}>
      <Text style={small.categoryTitle}>{title}</Text>
      <View style={small.card}>
        <View style={small.inner}>
          <Pressable style={small.button}>
            <Text style={small.buttonText}>Buy</Text>
          </Pressable>
        </View>
        <View style={small.inner}>
          <Pressable style={small.button}>
            <Text style={small.buttonText}>Buy</Text>
          </Pressable>
        </View>
      </View>
    </TouchableOpacity>
  </Link>
  );
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
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
  const renderCategory = (linking, title) => (
  <Link href={linking} asChild>
    <TouchableOpacity style={medium.categoryContainer}>
      <Text style={medium.categoryTitle}>{title}</Text>
      <View style={medium.card}>
        <View style={medium.inner}>
          <Pressable style={medium.button}>
            <Text style={medium.buttonText}>Buy</Text>
          </Pressable>
        </View>
        <View style={medium.inner}>
          <Pressable style={medium.button}>
            <Text style={medium.buttonText}>Buy</Text>
          </Pressable>
        </View>
      </View>
    </TouchableOpacity>
  </Link>
  );
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
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
  const renderCategory = (linking, title) => (
  <Link href={linking} asChild>
    <TouchableOpacity style={large.categoryContainer}>
      <Text style={large.categoryTitle}>{title}</Text>
        <View style={large.inner}>
          <Pressable style={large.button}>
            <Text style={large.buttonText}>Buy</Text>
          </Pressable>
        </View>
    </TouchableOpacity>
  </Link>
);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
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
  const renderCategory = (linking, title) => (
  <Link href={linking} asChild>
    <TouchableOpacity style={xlarge.categoryContainer}>
      <Text style={xlarge.categoryTitle}>{title}</Text>
      <View style={xlarge.card}>
        <View style={xlarge.inner}>
          <Pressable style={xlarge.button}>
            <Text style={xlarge.buttonText}>Buy</Text>
          </Pressable>
        </View>
        <View style={xlarge.inner}>
          <Pressable style={xlarge.button}>
            <Text style={xlarge.buttonText}>Buy</Text>
          </Pressable>
        </View>
      </View>
    </TouchableOpacity>
  </Link>
  );
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={xlarge.container}>
          <HeaderNav title="Shop" img="shopping-bag" />
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
    backgroundColor: "#a6a056ff",
    borderRadius: 20,
    marginTop: "30%",
    padding: 7.5  ,
    width: "80%",
    alignSelf: "center"
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
    width: "100%",
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
    backgroundColor: "#a6a056ff",
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
    backgroundColor: "#a6a056ff",
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
    paddingBottom: hp(10),
  },
  contentContainer: {
    margin: hp(5),
    marginBottom: hp(10),
    justifyContent: "space-between",
    height: hp(170),
  },
  categoryContainer: {
    height: hp(50),
  },
  categoryTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#8B0000",
    margin: 10,
    alignSelf: "center",
  },
  button: {
    width: "30%",
    backgroundColor: "#a6a056ff",
    borderRadius: 20,
    padding: 7,
    position: "absolute",
    bottom: 10,
    right: wp("2%"),
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
    height: hp(48),
    width: "100%",
    backgroundColor: "#D3D3D3",
  },
});
const xlarge = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: hp(10),
  },
  contentContainer: {
    margin: hp(4),
    marginBottom: hp(10),
    justifyContent: "space-between",
    height: hp(170),
  },
  categoryContainer: {
    width: "100%"
  },
  card: {
    width: "100%",
    height: hp(48.5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center"

  },
  categoryTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#8B0000",
    margin: 10,
    alignSelf: "center"
  },
  button: {
    width: "30%",
    height: "15%",
    backgroundColor: "#a6a056ff",
    borderRadius: 20,
    padding: 7,
    position: "absolute",
    bottom: 10,
    right: wp("2%"),
    justifyContent: "center",
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
    height: hp(48),
    width: "49%",
    backgroundColor: "#D3D3D3",
  },
});
// ----------------------------------------------------------    Shop page    -------------------------------------------------------------------------------