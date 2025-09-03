import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView } from "react-native";
import FooterNav from "../navigations/footerNav";
import XSmallUIHeaderNav, { LargeUIHeaderNav,MediumUIHeaderNav,SmallUIHeaderNav,XLargeUIHeaderNav } from "./headerNavUI.jsx";
import SettingsFooter from "../navigations/settingsfooter";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

// Sample data for cart items
const cartItems = [];

const Orders = ({ items }) => {
  if ( items === undefined || items.length === 0 ) {
    return <View style={small.emptyCartContainer}>
      <Image source={require("../../assets/images/otherAsset/empty-cart.png")} style={small.emptyCartImage} />
      <Text style={small.emptyCartText}>All selected orders will be displayed here.</Text></View>;
  }
  else{
    for (let i = 0; i < items.length; i++) {
      <View style={styles.itemContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.priceTag}>{items[i].unit}</Text>
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>
            Item: <Text style={styles.boldText}>{items[i].name}</Text>
          </Text>
          <Text style={styles.itemQty}>
            Qnty: <Text style={styles.boldText}>{items[i].qty}</Text>
          </Text>
        </View>
        <View style={styles.bulkPrice}>
          <Text style={styles.bulkPriceText}>{items[i].price}</Text>
        </View>
    </View>;
  }
  <SettingsFooter item={"Place Order"} style={small.orderButton}/>
}
};

const XSmallUI = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={small.container}>
        <XSmallUIHeaderNav title="Cart" img="shopping-cart" />
        <ScrollView style={small.scrollView}>{Orders(cartItems)}</ScrollView>
        <FooterNav />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const SmallUI = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={small.container}>
        <SmallUIHeaderNav title="Cart" img="shopping-cart" />
        <ScrollView>{Orders(items)}</ScrollView>
        <SettingsFooter item={"Place Order"} style={small.orderButton} />
        <FooterNav />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const MediumUI = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={medium.container}>
        <MediumUIHeaderNav title="Cart" img="shopping-cart" />
        <ScrollView>{Orders(items)}</ScrollView>
        <SettingsFooter item={"Place Order"} style={medium.orderButton} />
        <FooterNav />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const LargeUI = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={large.container}>
        <LargeUIHeaderNav title="Cart" img="shopping-cart" />
        <ScrollView>{Orders(items)}</ScrollView>
        <SettingsFooter item={"Place Order"} style={large.orderButton} />
        <FooterNav />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const XLargeUI = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={large.container}>
        <XLargeUIHeaderNav title="Cart" img="shopping-cart" />
        <ScrollView>{Orders(items)}</ScrollView>
        <SettingsFooter item={"Place Order"} style={large.orderButton} />
        <FooterNav />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const small = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    height: 1 + 50,
  },
  scrollView: {
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    height: "65%",
  },
  imagePlaceholder: {
    width: 110,
    height: 120,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  priceTag: {
    backgroundColor: "#BDAC47",
    color: "#fff",
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
  },
  itemDetails: {
    marginLeft: 15,
  },
  itemName: {
    color: "gray",
    fontSize: 15,
  },
  itemQty: {
    color: "gray",
    fontSize: 14,
  },
  boldText: {
    fontWeight: "bold",
  },
  bulkPrice: {
    borderColor: "#9D2B27",
    borderWidth: 1,
    width: 100,
    marginTop: "20%",
    borderRadius: 10,
    alignItems: "center",
  },
  bulkPriceText: {
    color: "#9D2B27",
    fontSize: 18,
  },
  removeItem: {
    position: "absolute",
    right: "-45%",
    top: "-15%",
  },
  emptyCartImage: {
    width: wp("100%"),
    height: hp("40%"),
    resizeMode: "contain",
    marginTop: hp("10%"),
  },
  emptyCartText: {
    color: "gray",
    fontSize: 16,
    width: wp("80%"),
    textAlign: "center",
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
const medium = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    height: 150,
  },
  imagePlaceholder: {
    width: 110,
    height: 120,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  priceTag: {
    backgroundColor: "#BDAC47",
    color: "#fff",
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
  },
  itemDetails: {
    marginLeft: 15,
  },
  itemName: {
    color: "gray",
    fontSize: 15,
  },
  itemQty: {
    color: "gray",
    fontSize: 14,
  },
  boldText: {
    fontWeight: "bold",
  },
  bulkPrice: {
    borderColor: "#9D2B27",
    borderWidth: 1,
    width: 100,
    marginTop: "20%",
    borderRadius: 10,
    alignItems: "center",
  },
  bulkPriceText: {
    color: "#9D2B27",
    fontSize: 18,
  },
  removeItem: {
    position: "absolute",
    right: "-45%",
    top: "-15%",
  },
});
const large = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    height: 150,
  },
  imagePlaceholder: {
    width: 110,
    height: 120,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  priceTag: {
    backgroundColor: "#BDAC47",
    color: "#fff",
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
  },
  itemDetails: {
    marginLeft: 15,
  },
  itemName: {
    color: "gray",
    fontSize: 15,
  },
  itemQty: {
    color: "gray",
    fontSize: 14,
  },
  boldText: {
    fontWeight: "bold",
  },
  bulkPrice: {
    borderColor: "#9D2B27",
    borderWidth: 1,
    width: 100,
    marginTop: "20%",
    borderRadius: 10,
    alignItems: "center",
  },
  bulkPriceText: {
    color: "#9D2B27",
    fontSize: 18,
  },
  removeItem: {
    position: "absolute",
    right: "-45%",
    top: "-15%",
  },
});

// export default CartScreen;
export { XSmallUI, SmallUI, MediumUI, LargeUI, XLargeUI };