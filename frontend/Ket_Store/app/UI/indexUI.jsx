import { Link } from "expo-router";
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Use expo-linear-gradient for Expo
import { HelloWave } from "@/components/HelloWave";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { handleContact } from "../services/contact";

export default function XSmallUI() {
    return (
    <LinearGradient
        colors={["#BDAC47", "#9D2B27"]}
        style={small.linearGradient}
    >
        <StatusBar barStyle={"light-content"} backgroundColor={"#BDAC47"} />
        <ScrollView contentContainerStyle={small.scrollContainer}>
        <View style={small.innerContainer}>
            <Text style={small.contentText}>Welcome to </Text>
            <Text style={small.companyName}>
            KET STORE <HelloWave />
            </Text>
            <Text style={small.addressingInfo}>
            Contact us with the WhatsApp link below for sign up access pin
            </Text>
            <TouchableOpacity style={small.link} onPress={handleContact}>
            WhatsApp link here
            </TouchableOpacity>
            <Text style={small.addressing}>Do you have the pin already?</Text>
            <TextInput placeholder="Enter pin" style={small.input} />

            <Link href="/signup" asChild>
            <Pressable style={small.button}>
                <Text style={small.buttonText}>Continue</Text>
            </Pressable>
            </Link>

            <Text style={small.addressing}>
            Shop the best "Everyday Essentials" at our store and have it
            delivered intact
            </Text>
            <Text style={small.addressTag}>@KET Dynasty Enterprise</Text>
        </View>
        </ScrollView>
    </LinearGradient>
    );
};
export const SmallUI = () => {
    return (
    <LinearGradient
        colors={["#BDAC47", "#9D2B27"]}
        style={small.linearGradient}
    >
        <StatusBar barStyle={"light-content"} backgroundColor={"#BDAC47"} />
        <ScrollView contentContainerStyle={small.scrollContainer}>
        <View style={small.innerContainer}>
            <Text style={small.contentText}>Welcome to </Text>
            <Text style={small.companyName}>
            KET STORE <HelloWave />
            </Text>
            <Text style={small.addressingInfo}>
            Contact us with the WhatsApp link below for sign up access pin
            </Text>
            <TouchableOpacity style={small.link} onPress={handleContact}>
            WhatsApp link here
            </TouchableOpacity>
            <Text style={small.addressing}>Do you have the pin already?</Text>
            <TextInput placeholder="Enter pin" style={small.input} />

            <Link href="/signup" asChild>
            <Pressable style={small.button}>
                <Text style={small.buttonText}>Continue</Text>
            </Pressable>
            </Link>

            <Text style={small.addressing}>
            Shop the best "Everyday Essentials" at our store and have it
            delivered intact
            </Text>
            <Text style={small.addressTag}>@KET Dynasty Enterprise</Text>
        </View>
        </ScrollView>
    </LinearGradient>
    );
};
export const MediumUI = () => {
    return (
    <LinearGradient
        colors={["#BDAC47", "#9D2B27"]}
        style={medium.linearGradient}
    >
        <StatusBar barStyle={"light-content"} backgroundColor={"#BDAC47"} />
        <ScrollView contentContainerStyle={medium.scrollContainer}>
        <View style={medium.innerContainer}>
            <Text style={medium.contentText}>Welcome to </Text>
            <Text style={medium.companyName}>
            KET STORE <HelloWave />
            </Text>
            <Text style={medium.addressingInfo}>
            Contact us with the WhatsApp link below for sign up access pin
            </Text>
            <TouchableOpacity style={medium.link} onPress={handleContact}>
            WhatsApp link here
            </TouchableOpacity>
            <Text style={medium.addressing}>Do you have the pin already?</Text>
            <TextInput placeholder="Enter pin" style={medium.input} />

            <Link href="/signup" asChild>
            <Pressable style={medium.button}>
                <Text style={medium.buttonText}>Continue</Text>
            </Pressable>
            </Link>

            <Text style={medium.addressing}>
            Shop the best "Everyday Essentials" at our store and have it
            delivered intact
            </Text>
            <Text style={medium.addressTag}>@KET Dynasty Enterprise</Text>
        </View>
        </ScrollView>
    </LinearGradient>
        );
};
export const LargeUI = () => {
    return (
    <LinearGradient
        colors={["#BDAC47", "#9D2B27"]}
        style={large.linearGradient}
    >
        <StatusBar barStyle={"light-content"} backgroundColor={"#BDAC47"} />
        <ScrollView contentContainerStyle={large.scrollContainer}>
        <View style={large.innerContainer}>
            <Text style={large.contentText}>Welcome to </Text>
            <Text style={large.companyName}>
            KET STORE <HelloWave />
            </Text>
            <Text style={large.addressingInfo}>
            Contact us with the WhatsApp link below for sign up access pin
            </Text>
            <TouchableOpacity style={large.link} onPress={handleContact}>
            WhatsApp link here
            </TouchableOpacity>
            <Text style={large.addressing}>Do you have the pin already?</Text>
            <TextInput placeholder="Enter pin" style={large.input} />
            <Link href="/signup" asChild>
            <Pressable style={large.button}>
                <Text style={large.buttonText}>Continue</Text>
            </Pressable>
            </Link>

            <Text style={large.addressing}>
            Shop the best "Everyday Essentials" at our store and have it
            delivered intact
            </Text>
            <Text style={large.addressTag}>@KET Dynasty Enterprise</Text>
        </View>
        </ScrollView>
    </LinearGradient>
    );
};
export const XLargeUI = () => {
    return (
    <LinearGradient
        colors={["#BDAC47", "#9D2B27"]}
        style={large.linearGradient}
    >
        <StatusBar barStyle={"light-content"} backgroundColor={"#BDAC47"} />
        <ScrollView contentContainerStyle={large.scrollContainer}>
        <View style={large.innerContainer}>
            <Text style={large.contentText}>Welcome to </Text>
            <Text style={large.companyName}>
            KET STORE <HelloWave />
            </Text>
            <Text style={large.addressingInfo}>
            Before we start, kindly contact the CEO for sign up access pin with
            link below
            </Text>
            <TouchableOpacity style={large.link} onPress={handleContact}>
            WhatsApp link here
            </TouchableOpacity>
            <Text style={large.addressing}>Do you have the pin already?</Text>
            <TextInput placeholder="Enter pin" style={large.input} />

            <Link href="/signup" asChild>
            <Pressable style={large.button}>
                <Text style={large.buttonText}>Continue</Text>
            </Pressable>
            </Link>

            <Text style={large.addressing}>
            Shop the best "Everyday Essentials" at our store and have it
            delivered intact
            </Text>
            <Text style={large.addressTag}>@KET Dynasty Enterprise</Text>
        </View>
        </ScrollView>
    </LinearGradient>
    );
};

// Styles for various screen sizes
const small = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        paddingTop: "40%",
        height: hp(100),
    },

    scrollContainerlarge: {
        flexGrow: 1,
        justifyContent: "center",
        paddingTop: "10%",
        height: hp(70),
    },

    innerContainer: {
        borderRadius: 10,
        width: "80%",
        alignSelf: "center",
        justifyContent: "space-evenly",
    },

    innerContainerlarge: {
        borderRadius: 10,
        width: "60%",
        alignSelf: "center",
        justifyContent: "space-evenly",
    },

    contentText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    companyName: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
    },
    addressing: {
        color: "white",
        fontSize: wp(4.4),
        alignSelf: "center",
        fontWeight: "100",
        fontFamily: "sans-serif",
    },

    link: {
        color: "black",
        fontSize: 17,
        alignSelf: "center",
        fontWeight: "700",
        fontFamily: "sans-serif",
        padding: 4,
        // borderWidth: 1,
        // borderRadius: 5,
        justifyContent: "center",
    },

    addressingInfo: {
        color: "white",
        fontSize: 17,
        fontWeight: "100",
        marginBottom: "5%",
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
        padding: 10,
        width: "90%",
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 6,
        alignSelf: "center",
    },
    button: {
        backgroundColor: "black",
        borderRadius: 10,
        marginTop: 10,
        width: "50%",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 20,
    },
    buttonlarge: {
        backgroundColor: "black",
        borderRadius: 10,
        marginTop: 10,
        width: "50%",
        height: "13%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 40,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    addressTag: {
        color: "white",
        fontSize: wp(3),
        alignSelf: "center",
        marginTop: "5%",
        fontWeight: "900",
    },
});
const medium = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        paddingTop: "40%",
        height: hp(100),
    },

    scrollContainerxlarge: {
        flexGrow: 1,
        justifyContent: "center",
        paddingTop: "10%",
        height: hp(70),
    },

    innerContainer: {
        borderRadius: 10,
        width: "80%",
        alignSelf: "center",
        justifyContent: "space-evenly",
    },

    innerContainerxlarge: {
        borderRadius: 10,
        width: "60%",
        alignSelf: "center",
        justifyContent: "space-evenly",
    },

    contentText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    companyName: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
    },
    addressing: {
        color: "white",
        fontSize: 17,
        alignSelf: "center",
        fontWeight: "100",
        fontFamily: "sans-serif",
    },

    link: {
        color: "black",
        fontSize: 17,
        alignSelf: "center",
        fontWeight: "700",
        fontFamily: "sans-serif",
        paddingBottom: 10,
    },

    addressingInfo: {
        color: "white",
        fontSize: 17,
        fontWeight: "100",
        marginBottom: "5%",
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
        padding: 10,
        width: "80%",
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 6,
        alignSelf: "center",
    },
    button: {
        backgroundColor: "black",
        borderRadius: 10,
        marginTop: 10,
        width: "50%",
        height: "9%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 40,
    },
    buttonxlarge: {
        backgroundColor: "black",
        borderRadius: 10,
        marginTop: 10,
        width: "50%",
        height: "13%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 40,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    addressTag: {
        color: "white",
        fontSize: 12,
        alignSelf: "center",
        marginTop: "5%",
        fontWeight: "900",
    },
});
const large = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        paddingTop: "10%",
        height: hp(100),
    },

    innerContainer: {
        borderRadius: 10,
        width: "60%",
        alignSelf: "center",
        justifyContent: "space-evenly",
    },

    innerContainerxlarge: {
        borderRadius: 10,
        width: "60%",
        alignSelf: "center",
        justifyContent: "space-evenly",
    },

    contentText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    companyName: {
        color: "white",
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 10,
    },
    addressing: {
        color: "white",
        fontSize: 20,
        alignSelf: "center",
        fontWeight: "100",
        fontFamily: "sans-serif",
    },

    link: {
        color: "black",
        fontSize: 20,
        alignSelf: "center",
        fontWeight: "700",
        fontFamily: "sans-serif",
        paddingBottom: 10,
    },

    addressingInfo: {
        color: "white",
        fontSize: 18,
        fontWeight: "100",
        marginBottom: "5%",
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
        padding: 10,
        width: "80%",
        paddingVertical: "1.5%",
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 6,
        alignSelf: "center",
        fontSize: 18,
    },
    button: {
        backgroundColor: "black",
        borderRadius: 10,
        marginTop: 10,
        width: "50%",
        height: "9%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 40,
    },
    buttonxlarge: {
        backgroundColor: "black",
        borderRadius: 10,
        marginTop: 10,
        width: "50%",
        height: "13%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 40,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    addressTag: {
        color: "white",
        fontSize: 12,
        alignSelf: "center",
        marginTop: "5%",
        fontWeight: "900",
    },
});