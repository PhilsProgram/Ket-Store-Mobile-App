// This page is going to contain the combs for the shop
import { SafeAreaView } from 'react-native-safe-area-context'; // This library provides a way to handle safe area insets
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button, TextInput } from 'react-native'; // Importing necessary components from react-native
import {  } from '../navigations/settingshead.jsx'; // Importing the HeaderNav component for the header navigation
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Responsive design utilities
import SettingsHeader from "../navigations/settingshead.jsx"; // Importing the HeaderNav component for the header navigation

export default function XSmallUIShop () {
    return (
        <SafeAreaView>
            <ScrollView style={small.scrollView}>
                <SettingsHeader item="Explore Product"/>
                <View style={small.placeholder}></View>
                <View style={small.description}>
                    <Text style={small.title}>Name / Tittle</Text>
                    <Text style={small.subtitle}>This is the description part for the product to help customers read its use and make decisions especially for new products to try out</Text>
                    <TextInput placeholder="enter quantity" style={small.input} />
                    <View style={small.buttonContainer}>
                    <TouchableOpacity style={small.button}>Cancel</TouchableOpacity>
                    <TouchableOpacity style={small.button}>Add</TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export function SmallUIShop () {
    return (
        <SafeAreaView>
            <ScrollView style={small.scrollView}>
                <SettingsHeader item="Explore Product"/>
                <View style={small.placeholder}></View>
                <View style={small.description}>
                    <Text style={small.title}>Name / Tittle</Text>
                    <Text style={small.subtitle}>This is the description part for the product to help customers read its use and make decisions especially for new products to try out</Text>
                    <TextInput placeholder="enter quantity" style={small.input} />
                    <View style={small.buttonContainer}>
                    <TouchableOpacity style={small.button}>Cancel</TouchableOpacity>
                    <TouchableOpacity style={small.button}>Add</TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export function MediumUIShop () {
    return (
        <SafeAreaView>
            <ScrollView style={medium.scrollView}>
                <SettingsHeader item="Explore Product"/>
                <View style={medium.placeholder}></View>
                <View style={medium.description}>
                    <Text style={medium.title}>Name / Tittle</Text>
                    <Text style={medium.subtitle}>This is the description part for the product to help customers read its use and make decisions especially for new products to try out</Text>
                    <TextInput placeholder="enter quantity" style={medium.input} />
                    <View style={medium.buttonContainer}>
                    <TouchableOpacity style={medium.button}>Cancel</TouchableOpacity>
                    <TouchableOpacity style={medium.button}>Add</TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export function LargeUIShop () {
    return (
        <SafeAreaView>
            <ScrollView style={large.scrollView}>
                <SettingsHeader item="Explore Product"/>
                <View style={large.placeholder}></View>
                <View style={large.description}>
                    <Text style={large.title}>Name / Tittle</Text>
                    <Text style={large.subtitle}>This is the description part for the product to help customers read its use and make decisions especially for new products to try out</Text>
                    <TextInput placeholder="enter quantity" style={large.input} />
                    <View style={large.buttonContainer}>
                    <TouchableOpacity style={large.button}>Cancel</TouchableOpacity>
                    <TouchableOpacity style={large.button}>Add</TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export function XLargeUIShop () {
    return (
        <SafeAreaView>
            <ScrollView style={Large.scrollView}>
                <SettingsHeader item="Explore Product"/>
                <View style={Large.placeholder}></View>
                <View style={Large.description}>
                    <Text style={Large.title}>Name / Tittle</Text>
                    <Text style={Large.subtitle}>This is the description part for the product to help customers read its use and make decisions especially for new products to try out</Text>
                    <TextInput placeholder="enter quantity" style={Large.input} />
                    <View style={Large.buttonContainer}>
                    <TouchableOpacity style={Large.button}>Cancel</TouchableOpacity>
                    <TouchableOpacity style={Large.button}>Add</TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const small = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%'),
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 20,
    },
    placeholder: {
        height: hp('45%'),
        position: 'relative',
        backgroundColor: '#dfddddff',
        margin: 10,
        marginTop: hp(2),
        borderRadius: 10,
    },
    description: {
        width: wp(90),
        alignSelf: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
    },
    combContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    combItem: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
    },
    combText: {
        fontSize: 18,
    },
    input: {
        backgroundColor: "#e3e3e3",
        width: "90%",
        alignSelf: "center",
        alignContent: "center",
        marginVertical: 20,
        padding: 10,
        borderRadius: 6,
        fontFamily: "sans-serif",
        color: "#646363ff",
    },
    buttonContainer: {
        position: "relative",
        justifyContent: "space-between",
        borderColor: "red",
        height: 50,
        flexDirection: "row",
        position: "relative",
        width: "90%",
        alignSelf: "center"

    },
    button: {
        backgroundColor: "#9D2B27",
        width: "45%",
        borderRadius: 6,
        justifyContent: "center",
        color: "white",
        alignItems: "center",
        fontWeight: "600",
        fontFamily: "sans-serif",
        padding: 4,
    }
})
const medium = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%'),
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 20,
    },
    placeholder: {
        height: hp('40%'),
        position: 'relative',
        backgroundColor: '#dfddddff',
        margin: 10,
        marginTop: hp(3),
        borderRadius: 10,
    },
    description: {
        width: wp(90),
        alignSelf: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
    },
    combContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    combItem: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
    },
    combText: {
        fontSize: 18,
    },
    input: {
        backgroundColor: "#e3e3e3",
        width: "90%",
        alignSelf: "center",
        alignContent: "center",
        marginVertical: 20,
        padding: 10,
        borderRadius: 6,
        fontFamily: "sans-serif",
        color: "#646363ff",
    },
    buttonContainer: {
        position: "relative",
        justifyContent: "space-between",
        borderColor: "red",
        height: 50,
        flexDirection: "row",
        position: "relative",
        width: "90%",
        alignSelf: "center"

    },
    button: {
        backgroundColor: "#9D2B27",
        width: "40%",
        borderRadius: 6,
        justifyContent: "center",
        color: "white",
        alignItems: "center",
        fontWeight: "600",
        fontFamily: "sans-serif",
        padding: 4,
    }
})
const large = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%'),
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 20,
    },
    placeholder: {
        height: hp('40%'),
        position: 'relative',
        backgroundColor: '#dfddddff',
        margin: 10,
        marginTop: hp(3),
        borderRadius: 10,
    },
    description: {
        width: wp(90),
        alignSelf: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
    },
    combContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    combItem: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
    },
    combText: {
        fontSize: 18,
    },
    input: {
        backgroundColor: "#e3e3e3",
        width: "90%",
        alignSelf: "center",
        alignContent: "center",
        marginVertical: 20,
        padding: 10,
        borderRadius: 6,
        fontFamily: "sans-serif",
        color: "#646363ff",
    },
    buttonContainer: {
        position: "relative",
        justifyContent: "space-between",
        borderColor: "red",
        height: 50,
        flexDirection: "row",
        position: "relative",
        width: "90%",
        alignSelf: "center"

    },
    button: {
        backgroundColor: "#9D2B27",
        width: "40%",
        borderRadius: 6,
        justifyContent: "center",
        color: "white",
        alignItems: "center",
        fontWeight: "600",
        fontFamily: "sans-serif",
        padding: 4,
    }
})