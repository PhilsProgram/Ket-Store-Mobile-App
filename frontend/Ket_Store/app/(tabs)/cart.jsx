import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import FooterNav from "../navigations/footerNav";
import HeaderNav from "../navigations/HeaderNav";
import SettingsFooter from "../navigations/settingsfooter";

const items = [
  { id: "1", name: "Wooden Hair brush", unit: "GH₵ 200.00", qty: "10 packs", price: "2,000" },
  { id: "2", name: "Wooden Hair brush", unit: "GH₵ 200.00", qty: "10 packs", price: "2,000" },
  { id: "3", name: "Wooden Hair brush", unit: "GH₵ 200.00", qty: "10 packs", price: "2,000" },
  { id: "5", name: "Wooden Hair brush", unit: "GH₵ 200.00", qty: "10 packs", price: "2,000" },
  { id: "6", name: "Wooden Hair brush", unit: "GH₵ 200.00", qty: "10 packs", price: "2,000" },
  { id: "7", name: "Wooden Hair brush", unit: "GH₵ 200.00", qty: "10 packs", price: "2,000" },
  { id: "8", name: "Wooden Hair brush", unit: "GH₵ 200.00", qty: "10 packs", price: "2,000" },
  { id: "9", name: "Wooden Hair brush", unit: "GH₵ 200.00", qty: "10 packs", price: "2,000" },
  { id: "10", name: "Wooden Hair brush", unit: "GH₵ 200.00", qty: "10 packs", price: "2,000" },
  { id: "11", name: "Wooden Hair brush", unit: "GH₵ 200.00", qty: "10 packs", price: "2,000" },
  { id: "12", name: "Wooden Hair brush", unit: "GH₵ 200.00", qty: "10 packs", price: "2,000" },
  { id: "13", name: "Wooden Hair brush", unit: "GH₵ 200.00", qty: "10 packs", price: "2,000" }
];

const Orders = ({item}) => {
  while ( item ) {
    <View style={styles.itemContainer}>
    <View style={styles.imagePlaceholder}>
      <Text style={styles.priceTag}>{item.unit}</Text>
    </View>
    <View style={styles.itemDetails}>
      <Text style={styles.itemName}>
        Item: <Text style={styles.boldText}>{item.name}</Text>
      </Text>
      <Text style={styles.itemQty}>
        Qnty: <Text style={styles.boldText}>{item.qty}</Text>
      </Text>
    </View>
    <View style={styles.bulkPrice}><Text style={styles.bulkPriceText}>{item.price}</Text></View>
  </View>
  }
}

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      
    <HeaderNav title="Cart" img="shopping-cart"/>
      <ScrollView>
        {Orders(items)}
      </ScrollView>
      <SettingsFooter item={"Place Order"} style={styles.orderButton}/>
      <FooterNav/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff" 
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
    marginLeft: 15 
  },
  itemName: { 
    color: "gray", 
    fontSize: 15 
  },
  itemQty: { 
    color: "gray", 
    fontSize: 14 
  },
  boldText: { 
    fontWeight: "bold" 
  },
  bulkPrice: {
    borderColor: "#9D2B27",
    borderWidth: 1,
    width: 100,
    marginTop: "20%",
    borderRadius: 10,
    alignItems: "center"
  },
  bulkPriceText: {
    color: "#9D2B27",
    fontSize: 18
  },
  removeItem: {
    position: "absolute",
    right: "-45%",
    top: "-15%"
  },
  
});

export default CartScreen;









