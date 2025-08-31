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
const NavItem = ({ icon, label, linking, nav1, nav2, is }) => (
  <Link href={linking} asChild>
    <TouchableOpacity style={nav1}>
      <FontAwesome5
        name={icon}
        size={is}
        color="#fff"
        style={{ alignSelf: "center" }}
      />
      <Text style={nav2}>{label}</Text>
    </TouchableOpacity>
  </Link>
);

// Main Footer of the app
export default function XSmallUI() {
  return (
    <View style={small.bottomNav}>
      <NavItem
        icon="home"
        label="Home"
        linking="/welcome"
        nav1={small.navItem}
        nav2={small.navText}
        is={19}
      />
      <NavItem
        icon="shopping-bag"
        label="Shop"
        linking="/shop"
        nav1={small.navItem}
        nav2={small.navText}
        is={19}
      />
      <NavItem
        icon="shopping-cart"
        label="Cart"
        linking="/cart"
        nav1={small.navItem}
        nav2={small.navText}
        is={19}
      />
      <NavItem
        icon="bars"
        label="More"
        linking="/more"
        nav1={small.navItem}
        nav2={small.navText}
        is={19}
      />
    </View>
  );
}
export function SmallUI() {
  return (
    <View style={small.bottomNav}>
      <NavItem
        icon="home"
        label="Home"
        linking="/welcome"
        nav1={small.navItem}
        nav2={small.navText}
        is={20}
      />
      <NavItem
        icon="shopping-bag"
        label="Shop"
        linking="/shop"
        nav1={small.navItem}
        nav2={small.navText}
        is={20}
      />
      <NavItem
        icon="shopping-cart"
        label="Cart"
        linking="/cart"
        nav1={small.navItem}
        nav2={small.navText}
        is={20}
      />
      <NavItem
        icon="bars"
        label="More"
        linking="/more"
        nav1={small.navItem}
        nav2={small.navText}
        is={20}
      />
    </View>
  );
}
export function MediumUI() {
  return (
    <View style={medium.bottomNav}>
      <NavItem
        icon="home"
        label="Home"
        linking="/welcome"
        nav1={medium.navItem}
        nav2={medium.navText}
        is={20}
      />
      <NavItem
        icon="shopping-bag"
        label="Shop"
        linking="/shop"
        nav1={medium.navItem}
        nav2={medium.navText}
        is={20}
      />
      <NavItem
        icon="shopping-cart"
        label="Cart"
        linking="/cart"
        nav1={medium.navItem}
        nav2={medium.navText}
        is={20}
      />
      <NavItem
        icon="bars"
        label="More"
        linking="/more"
        nav1={medium.navItem}
        nav2={medium.navText}
        is={20}
      />
    </View>
  );
}
export function LargeUI() {
  return (
    <View style={large.bottomNav}>
      <NavItem
        icon="home"
        label="Home"
        linking="/welcome"
        nav1={large.navItem}
        nav2={large.navText}
        is={20}
      />
      <NavItem
        icon="shopping-bag"
        label="Shop"
        linking="/shop"
        nav1={large.navItem}
        nav2={large.navText}
        is={20}
      />
      <NavItem
        icon="shopping-cart"
        label="Cart"
        linking="/cart"
        nav1={large.navItem}
        nav2={large.navText}
        is={20}
      />
      <NavItem
        icon="bars"
        label="More"
        linking="/more"
        nav1={large.navItem}
        nav2={large.navText}
        is={20}
      />
    </View>
  );
}
export function XLargeUI() {
  return (
    <View style={large.bottomNav}>
      <NavItem
        icon="home"
        label="Home"
        linking="/welcome"
        nav1={large.navItem}
        nav2={large.navText}
        is={20}
      />
      <NavItem
        icon="shopping-bag"
        label="Shop"
        linking="/shop"
        nav1={large.navItem}
        nav2={large.navText}
        is={20}
      />
      <NavItem
        icon="shopping-cart"
        label="Cart"
        linking="/cart"
        nav1={large.navItem}
        nav2={large.navText}
        is={20}
      />
      <NavItem
        icon="bars"
        label="More"
        linking="/more"
        nav1={large.navItem}
        nav2={large.navText}
        is={20}
      />
    </View>
  );
}

const small = StyleSheet.create({
  navItem: {
    alignItems: "center",
    marginBottom: 0,
  },
  navText: {
    color: "#fff",
    fontSize: 17,
    marginTop: 5,
  },
  bottomNav: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#9D2B27",
    padding: 5,
    bottom: hp(-0.5),
    width: "100%",
    alignItems: "center",
    height: hp(11.5),
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
  }
});
const medium = StyleSheet.create({
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
const large = StyleSheet.create({
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