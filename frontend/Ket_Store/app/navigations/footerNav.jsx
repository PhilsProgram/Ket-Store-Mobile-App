import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Link } from "expo-router";


const NavItem = ({ icon, label, linking }) => (
    <Link href={linking} asChild>
    <TouchableOpacity style={styles.navItem}>
      <FontAwesome5 name={icon} size={29} color="#fff" />
      <Text style={styles.navText}>{label}</Text>
    </TouchableOpacity>
    </Link>
);

export default function FooterNav() {

  return (
    <View style={styles.bottomNav}>
      <NavItem icon="home" label="Home" linking="/welcome"/>
      <NavItem icon="shopping-bag" label="Shop" linking="/shop"/>
      <NavItem icon="shopping-cart" label="Cart" linking="/cart"/>
      <NavItem icon="bars" label="Menu" linking="/menu"/>
    </View>
  );
}

const styles = StyleSheet.create({
  navItem: { 
    alignItems: "center", 
    marginBottom: 0 
},
  navText: { 
    color: "#fff", 
    fontSize: 18, 
    marginTop: 5 
},

  bottomNav: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#9D2B27",
    paddingVertical: 5,
    position: "absolute",
    paddingTop: 20,
    bottom: hp(-2),
    width: "100%",
    height: hp(12),
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
});