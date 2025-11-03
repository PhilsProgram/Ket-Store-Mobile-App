// This is the mirrors page foe all devices
import {  SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"; // This library provides a way to handle safe area insets
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Pressable, Image } from "react-native"; // Importing necessary components from react-native
import { Link } from "expo-router"; // Importing Link component for navigation
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"; // Responsive design utilities
// import XLargeUIHeaderNav from "../navigations/xlargeUIHeaderNav.jsx"; // Importing the HeaderNav component for the header navigation
import SettingsHeader from "../../navigations/settingshead";

export default function XLargeUIMirrors() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
        <View style={large.container}>
            <SettingsHeader title="Mirrors" img="shopping-bag" />
            <ScrollView
                contentContainerStyle={large.contentContainer}
                showsVerticalScrollIndicator={false}
            >
              {/* Product Card */}
                <View style={large.productCard}>
                <Image
                    source={{ uri: "https://via.placeholder.com/150" }}
                    style={large.productImage}
                />
                <Text style={large.productTitle}>Elegant Mirror</Text>
                <Text style={large.productPrice}>$19.99</Text>
                <Pressable style={large.buyButton}>
                    <Text style={large.buyButtonText}>Buy Now</Text>
                </Pressable>
                </View>
            </ScrollView>
        </View>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}  ;

const large = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
    contentContainer: {
    padding: 20,
    paddingBottom: hp(12),
  },
    productCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
    productImage: {
    width: wp("30%"),
    height: hp("20%"),
    marginBottom: 10,
  },
    productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    },
    productPrice: {
    fontSize: 16,
    color: "#888",
    },
    buyButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    },
    buyButtonText: {
    color: "white",
    fontSize: 16,
    },
});