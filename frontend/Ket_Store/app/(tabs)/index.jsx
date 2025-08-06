import { Link } from "expo-router";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Use expo-linear-gradient for Expo
import { HelloWave } from "@/components/HelloWave";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { deviceScreen, deviceCategories } from "../UI/screenAdjust";
import { handleContact } from "../UI/contact";

export default function WelcomePage() {
  // Checking the device screens to render the welcome page
  if (deviceScreen().screenHeight == deviceCategories.xsmall) {
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
              Before we start, kindly contact the CEO for sign up access pin with link below
            </Text>
            <TouchableOpacity style={styles.link} onPress={handleContact}>WhatsApp link here</TouchableOpacity>
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
  } else if (deviceScreen().screenHeight == deviceCategories.small) {
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
              Before we start, kindly contact the CEO for sign up access pin with link below
            </Text>
            <TouchableOpacity style={styles.link} onPress={handleContact}>WhatsApp link here</TouchableOpacity>
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
  } else if (deviceScreen().screenWidth == deviceCategories.medium) {
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
              Before we start, kindly contact the CEO for sign up access pin with link below
            </Text>
            <TouchableOpacity style={styles.link} onPress={handleContact}>WhatsApp link here</TouchableOpacity>
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
  } else if (deviceScreen().screenWidth == deviceCategories.large) {
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
              Before we start, kindly contact the CEO for sign up access pin with link below
            </Text>
            <TouchableOpacity style={styles.link} onPress={handleContact}>WhatsApp link here</TouchableOpacity>
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
  } else {
    return (
      <LinearGradient
        colors={["#BDAC47", "#9D2B27"]}
        style={styles.linearGradient}
      >
        <StatusBar barStyle={"light-content"} backgroundColor={"#BDAC47"} />
        <ScrollView contentContainerStyle={styles.scrollContainerxlarge}>
          <View style={styles.innerContainerxlarge}>
            <Text style={styles.contentText}>Welcome to </Text>
            <Text style={styles.companyName}>
              KET STORE <HelloWave />
            </Text>
            <Text style={styles.addressingInfo}>
              Before we start, kindly contact the CEO for sign up access pin with link below
            </Text>
            <TouchableOpacity style={styles.link} onPress={handleContact}>WhatsApp link here</TouchableOpacity>
            <Text style={styles.addressing}>Do you have the pin already?</Text>
            <TextInput placeholder="Enter pin" style={styles.input} />

            <Link href="/signup" asChild>
              <Pressable style={styles.buttonxlarge}>
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

  scrollContainerxlarge: {
    flexGrow: 1,
    justifyContent: "center",
    paddingTop: "10%",
    height: hp(70),
  },

  innerContainer: {
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },

  innerContainerxlarge: {
    borderRadius: 10,
    width: "60%",
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
    fontFamily: "sans-serif",
  },

  link: {
    color: "black",
    fontSize: 17,
    alignSelf: "center",
    fontWeight: "700",
    fontFamily: "sans-serif",
    paddingBottom: 10,
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
  buttonxlarge: {
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 10,
    width: "50%",
    height: "13%",
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
