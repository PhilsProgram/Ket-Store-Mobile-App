import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import FooterNav from "../navigations/footerNav.jsx";
import HeaderNav from "../navigations/HeaderNav.jsx";

export function XSmallUI() {
  // checking whether it is a phone or a tablet
    const isLandscape =
    Dimensions.get("window").width > Dimensions.get("window").height;
    const isPortrait =
    Dimensions.get("window").width < Dimensions.get("window").height;

    return (
    // The nav bar for the page
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <HeaderNav title="Home" img="home" />

          {/* **********************************        The main content of the screen       ********************************* */}

            <ScrollView
            style={styles.contentPage}
            showsVerticalScrollIndicator={false}
            >
            {/* Trending sales section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                Trending Sales
                </Text>
                <View style={styles.placeHolder}></View>
            </View>

            {/* Best sellers section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                New Arrivals
                </Text>
                <View style={styles.placeHolder}></View>
            </View>

            {/* New arrivals section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                Categories
                </Text>
                <View style={styles.placeHolder}></View>
            </View>
            </ScrollView>

          {/* **************************************        The footer of the screen       ************************************ */}
            <FooterNav />
        </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
};

export function SmallUI() {
  // checking whether it is a phone or a tablet
    const isLandscape =
    Dimensions.get("window").width > Dimensions.get("window").height;
    const isPortrait =
    Dimensions.get("window").width < Dimensions.get("window").height;

    return (
    // The nav bar for the page
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <HeaderNav title="Home" img="home" />

          {/* **********************************        The main content of the screen       ********************************* */}

            <ScrollView
            style={styles.contentPage}
            showsVerticalScrollIndicator={false}
            >
            {/* Trending sales section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                Trending Sales
                </Text>
                <View style={styles.placeHolder}></View>
            </View>

            {/* Best sellers section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                New Arrivals
                </Text>
                <View style={styles.placeHolder}></View>
            </View>

            {/* New arrivals section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                Categories
                </Text>
                <View style={styles.placeHolder}></View>
            </View>
            </ScrollView>

          {/* **************************************        The footer of the screen       ************************************ */}
            <FooterNav />
        </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
};

export function MediumUI() {
  // checking whether it is a phone or a tablet
    const isLandscape =
    Dimensions.get("window").width > Dimensions.get("window").height;
    const isPortrait =
    Dimensions.get("window").width < Dimensions.get("window").height;

    return (
    // The nav bar for the page
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <HeaderNav title="Home" img="home" />

          {/* **********************************        The main content of the screen       ********************************* */}

            <ScrollView
            style={styles.contentPage}
            showsVerticalScrollIndicator={false}
            >
            {/* Trending sales section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                Trending Sales
                </Text>
                <View style={styles.placeHolder}></View>
            </View>

            {/* Best sellers section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                New Arrivals
                </Text>
                <View style={styles.placeHolder}></View>
            </View>

            {/* New arrivals section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                Categories
                </Text>
                <View style={styles.placeHolder}></View>
            </View>
            </ScrollView>

          {/* **************************************        The footer of the screen       ************************************ */}
            <FooterNav />
        </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
};

export function LargeUI() {
  // checking whether it is a phone or a tablet
    const isLandscape =
    Dimensions.get("window").width > Dimensions.get("window").height;
    const isPortrait =
    Dimensions.get("window").width < Dimensions.get("window").height;

    return (
    // The nav bar for the page
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <HeaderNav title="Home" img="home" />

          {/* **********************************        The main content of the screen       ********************************* */}

            <ScrollView
            style={styles.contentPage}
            showsVerticalScrollIndicator={false}
            >
            {/* Trending sales section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                Trending Sales
                </Text>
                <View style={styles.placeHolder}></View>
            </View>

            {/* Best sellers section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                New Arrivals
                </Text>
                <View style={styles.placeHolder}></View>
            </View>

            {/* New arrivals section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                Categories
                </Text>
                <View style={styles.placeHolder}></View>
            </View>
            </ScrollView>

          {/* **************************************        The footer of the screen       ************************************ */}
            <FooterNav />
        </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
};

export function XLargeUI() {
  // checking whether it is a phone or a tablet
    const isLandscape =
    Dimensions.get("window").width > Dimensions.get("window").height;
    const isPortrait =
    Dimensions.get("window").width < Dimensions.get("window").height;

    return (
    // The nav bar for the page
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <HeaderNav title="Home" img="home" />

          {/* **********************************        The main content of the screen       ********************************* */}

            <ScrollView
            style={styles.contentPage}
            showsVerticalScrollIndicator={false}
            >
            {/* Trending sales section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                Trending Sales
                </Text>
                <View style={styles.placeHolder}></View>
            </View>

            {/* Best sellers section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                New Arrivals
                </Text>
                <View style={styles.placeHolder}></View>
            </View>

            {/* New arrivals section */}
            <View style={styles.customStyle}>
                <Text
                style={{
                    color: "#9D2B27",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    marginLeft: 15,
                    paddingVertical: 5,
                    fontSize: isLandscape ? wp(3) : hp(3),
                }}
                >
                Categories
                </Text>
                <View style={styles.placeHolder}></View>
            </View>
            </ScrollView>

          {/* **************************************        The footer of the screen       ************************************ */}
            <FooterNav />
        </View>
        </SafeAreaView>
    </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
    backgroundColor: "#fff",
    },
    contentPage: {
        width: "90%",
        borderStyle: "solid",
        borderColor: "#D9D9D9",
        borderBottomWidth: 1,
        alignSelf: "center",
        marginBottom: wp(17),
    },
    customStyle: {
        height: hp(52),
    },
    placeHolder: {
        width: "100%",
        height: hp(40),
        alignSelf: "center",
        borderRadius: 10,
        backgroundColor: "#D9D9D9",
    },
    sectionHeader: {

    },
});
