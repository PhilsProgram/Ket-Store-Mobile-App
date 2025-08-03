import { ScrollView, StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import React from "react";
import SettingsHeader from "../navigations/settingshead";
import SettingsFooter from "../navigations/settingsfooter";
import { FontAwesome5 } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function OrderHistory() {
  return (
    <>
      <SettingsHeader item="Order History"/>
        <FontAwesome5 name="trash" size={25} color="#9D2B27" style={styles.trashCan} onPress={()=>Alert.alert("Delete All", "Clear all order History", [{text:"Cancel",onPress:()=>console.log("Cancel Pressed")}, {text:"Yes",onPress:()=>console.log("Order Deleted")}])}/>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
            
            <View style={styles.orderMade}>
              <Text style={styles.orderDate}>Date: 2025-04-21</Text>
              <View style={styles.segment}>
                <Text>Item: Wooden Hairbrush</Text>
                <Text>Price: GH₵ 20.00</Text>
                <Text>Qnty: 5</Text>
              </View>
              <View style={styles.segment}>
                <Text>Item: Wooden Hairbrush</Text>
                <Text>Price: GH₵ 20.00</Text>
                <Text>Qnty: 5</Text>
              </View>
              <View style={styles.segment}>
                <Text>Item: Wooden Hairbrush</Text>
                <Text>Price: GH₵ 20.00</Text>
                <Text>Qnty: 5</Text>
              </View>
              <View style={styles.segment}>
                <Text>Item: Wooden Hairbrush</Text>
                <Text>Price: GH₵ 20.00</Text>
                <Text>Qnty: 5</Text>
              </View>
            </View>


            <View style={styles.orderMade}>
              <Text style={styles.orderDate}>Date: 2025-04-21</Text>
              <View style={styles.segment}>
                <Text>Item: Wooden Hairbrush</Text>
                <Text>Price: GH₵ 20.00</Text>
                <Text>Qnty: 5</Text>
              </View>
              <View style={styles.segment}>
                <Text>Item: Wooden Hairbrush</Text>
                <Text>Price: GH₵ 20.00</Text>
                <Text>Qnty: 5</Text>
              </View>
              <View style={styles.segment}>
                <Text>Item: Wooden Hairbrush</Text>
                <Text>Price: GH₵ 20.00</Text>
                <Text>Qnty: 5</Text>
              </View>
              <View style={styles.segment}>
                <Text>Item: Wooden Hairbrush</Text>
                <Text>Price: GH₵ 20.00</Text>
                <Text>Qnty: 5</Text>
              </View>
            </View>


        </ScrollView>
      <SettingsFooter item={"Back To Home"}/>
    </>
  );
}


const styles = StyleSheet.create({
    scroll: {
      borderColor: "gray",
      width: "90%",
      alignSelf: "center",
    },
    trashCan: {
      position: "absolute",
      right: "10%",
      top: hp(5),
  },
  orderMade: {
    borderBottomWidth: 1,
    borderColor: "gray",
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    marginVertical: wp(2),
    paddingHorizontal: wp(5),
  },
  orderDate: {
    textAlign: "center",
    padding: 10,
    color: "#9D2B27",
    fontSize: wp(4),
  },
  segment: {
    marginBottom: 20
  }
})