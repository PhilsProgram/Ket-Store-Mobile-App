import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { deviceScreen, deviceCategories } from "../UI/screenAdjust";

export default function SignupScreen() {
  if (deviceScreen().screenHeight == deviceCategories.xsmall) {
    return (
      <>
        <StatusBar barStyle={"dark-content"} />
        <LinearGradient
          colors={["#FFFFFF", "#B99B43"]}
          locations={[0, 0.6]}
          style={styles.container}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Create new account</Text>

            <TextInput
              style={styles.input}
              placeholder="First name"
              placeholderTextColor="gray"
            />
            <TextInput
              style={styles.input}
              placeholder="Last name"
              placeholderTextColor="gray"
            />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              placeholderTextColor="gray"
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="New password"
              placeholderTextColor="gray"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              placeholderTextColor="gray"
              secureTextEntry
            />

            <Text style={styles.warningText}>
              Please confirm all the information provided is accurate{" "}
            </Text>

            <Link href="/welcome" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </LinearGradient>
      </>
    );
  } else if (deviceScreen().screenHeight == deviceCategories.small) {
    return (
      <>
        <StatusBar barStyle={"dark-content"} />
        <LinearGradient
          colors={["#FFFFFF", "#B99B43"]}
          locations={[0, 0.6]}
          style={styles.container}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Create new account</Text>

            <TextInput
              style={styles.input}
              placeholder="First name"
              placeholderTextColor="gray"
            />
            <TextInput
              style={styles.input}
              placeholder="Last name"
              placeholderTextColor="gray"
            />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              placeholderTextColor="gray"
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="New password"
              placeholderTextColor="gray"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              placeholderTextColor="gray"
              secureTextEntry
            />

            <Text style={styles.warningText}>
              Please confirm all the information provided is accurate{" "}
            </Text>

            <Link href="/welcome" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </LinearGradient>
      </>
    );
  } else if (deviceScreen().screenHeight == deviceCategories.medium) {
    return (
      <>
        <StatusBar barStyle={"dark-content"} />
        <LinearGradient
          colors={["#FFFFFF", "#B99B43"]}
          locations={[0, 0.6]}
          style={styles.container}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Create new account</Text>

            <TextInput
              style={styles.input}
              placeholder="First name"
              placeholderTextColor="gray"
            />
            <TextInput
              style={styles.input}
              placeholder="Last name"
              placeholderTextColor="gray"
            />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              placeholderTextColor="gray"
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="New password"
              placeholderTextColor="gray"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              placeholderTextColor="gray"
              secureTextEntry
            />

            <Text style={styles.warningText}>
              Please confirm all the information provided is accurate{" "}
            </Text>

            <Link href="/welcome" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </LinearGradient>
      </>
    );
  } else if (deviceScreen().screenHeight == deviceCategories.large) {
    return (
      <>
        <StatusBar barStyle={"dark-content"} />
        <LinearGradient
          colors={["#FFFFFF", "#B99B43"]}
          locations={[0, 0.6]}
          style={styles.container}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Create new account</Text>

            <TextInput
              style={styles.input}
              placeholder="First name"
              placeholderTextColor="gray"
            />
            <TextInput
              style={styles.input}
              placeholder="Last name"
              placeholderTextColor="gray"
            />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              placeholderTextColor="gray"
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="New password"
              placeholderTextColor="gray"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              placeholderTextColor="gray"
              secureTextEntry
            />

            <Text style={styles.warningText}>
              Please confirm all the information provided is accurate{" "}
            </Text>

            <Link href="/welcome" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </LinearGradient>
      </>
    );
  } else {
    return (
      <>
        <StatusBar barStyle={"dark-content"} />
        <LinearGradient
          colors={["#FFFFFF", "#B99B43"]}
          locations={[0, 0.6]}
          style={styles.container}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Create new account</Text>

            <TextInput
              style={styles.input}
              placeholder="First name"
              placeholderTextColor="gray"
            />
            <TextInput
              style={styles.input}
              placeholder="Last name"
              placeholderTextColor="gray"
            />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              placeholderTextColor="gray"
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="New password"
              placeholderTextColor="gray"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              placeholderTextColor="gray"
              secureTextEntry
            />

            <Text style={styles.warningText}>
              Please confirm all the information provided is accurate{" "}
            </Text>

            <Link href="/welcome" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </LinearGradient>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: "30%",
    color: "#000",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: "center",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 25,
    fontSize: 17,
  },
  warningText: {
    color: "#A52A2A",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 17,
  },
  button: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
