import { FontAwesome5 } from "@expo/vector-icons";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";

const navigation = useRouter();
export default function SettingsHeader({ item, event }) {
  return (
    <View>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <View style={styles.header}>
        <FontAwesome5 onPress={() => navigation.back()}
          name="arrow-left"
          size={25}
          color="#B99B43"
          style={styles.backArrow}
        />
        <Text style={styles.headerText}>{item}</Text>
        <Text style={styles.event}>{event}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: "#C0C0C0",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    paddingVertical: "2%",
  },
  backArrow: {
    position: "absolute",
    left: "3%",
  },
  headerText: {
    color: "#B99B43",
    fontSize: 23,
    marginHorizontal: "15%",
  },
  event: {
    color: "gray",
    fontSize: 20,
    position: "absolute",
    right: 10
  }
});
