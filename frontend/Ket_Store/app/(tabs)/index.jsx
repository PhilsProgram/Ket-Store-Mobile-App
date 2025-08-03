import { Link } from "expo-router";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Use expo-linear-gradient for Expo
import { HelloWave } from "@/components/HelloWave";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function WelcomePage() {
  return (
    <LinearGradient
      colors={["#BDAC47", "#9D2B27"]}
      style={styles.linearGradient}
    >
      <StatusBar barStyle={"light-content"} backgroundColor={"#BDAC47"} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.contentText}>Welcome to </Text>
          <Text style={styles.companyName}>
            KET STORE <HelloWave />
          </Text>
          <Text style={styles.addressingInfo}>
            Before we start, kindly contact the CEO for sign up access pin
          </Text>
          <Text style={styles.addressing}>WhatsApp link</Text>
          <Text style={styles.addressing}>Do you have the pin already?</Text>
          <TextInput placeholder="Enter pin" style={styles.input} />

          <Link href="/signup" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </Link>

          <Text style={styles.addressing}>
            Shop the best "Everyday Essentials" at our store and have it
            delivered intact
          </Text>
          <Text style={styles.addressTag}>@KET Dynasty Enterprise</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingTop: "40%",
    height: hp(100),
  },
  innerContainer: {
    borderRadius: 10,
    width: "80%",
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