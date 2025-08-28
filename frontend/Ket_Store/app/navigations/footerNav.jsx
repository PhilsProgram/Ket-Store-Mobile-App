import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Link } from "expo-router";

// Reusable NavItem
const NavItem = ({ icon, label, linking }) => (
  <Link href={linking} asChild>
    <TouchableOpacity style={styles.navItem}>
      <FontAwesome5
        name={icon}
        size={20}
        color="#fff"
        style={{ alignSelf: "center" }}
      />
      <Text style={styles.navText}>{label}</Text>
    </TouchableOpacity>
  </Link>
);

// Main Footer of the app
export default function FooterNav() {
  return (
    <View style={styles.bottomNav}>
      <NavItem
        icon="home"
        label="Home"
        linking="/welcome"
      />
      <NavItem
        icon="shopping-bag"
        label="Shop"
        linking="/shop"
      />
      <NavItem
        icon="shopping-cart"
        label="Cart"
        linking="/cart"
      />
      <NavItem
        icon="bars"
        label="More"
        linking="/menu"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navItem: {
    alignItems: "center",
    marginBottom: 0,
  },
  navText: {
    color: "#fff",
    fontSize: 18,
    marginTop: 5,
  },
  bottomNav: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#9D2B27",
    padding: 5,
    bottom: hp(-1),
    width: "100%",
    alignItems: "center",
    height: hp(12),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  active: {
    borderBottomWidth: 3,
    borderColor: "white",
    borderRadius: "50%",
    width: 80,
    height: 80,
    paddingBottom: 10,
  },
  inActive: {
    opacity: 0.8,
    paddingTop: 25,
  },
});
