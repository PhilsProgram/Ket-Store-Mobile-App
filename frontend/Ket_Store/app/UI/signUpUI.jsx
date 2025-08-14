import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export const XSmallUI = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <LinearGradient
        colors={["#FFFFFF", "#B99B43"]}
        locations={[0, 0.6]}
        style={small.container}
      >
        <View style={small.innerContainer}>
          <Text style={small.title}>Create new account</Text>

          <TextInput
            style={small.input}
            placeholder="First name"
            placeholderTextColor="gray"
          />
          <TextInput
            style={small.input}
            placeholder="Last name"
            placeholderTextColor="gray"
          />
          <TextInput
            style={small.input}
            placeholder="Phone number"
            placeholderTextColor="gray"
            keyboardType="phone-pad"
          />
          <TextInput
            style={small.input}
            placeholder="New password"
            placeholderTextColor="gray"
            secureTextEntry
          />
          <TextInput
            style={small.input}
            placeholder="Confirm password"
            placeholderTextColor="gray"
            secureTextEntry
          />

          <Text style={small.warningText}>
            Please confirm all the information provided is accurate{" "}
          </Text>

          <Link href="/welcome" asChild>
            <TouchableOpacity style={small.button}>
              <Text style={small.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </LinearGradient>
    </>
  );
};
export const SmallUI = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <LinearGradient
        colors={["#FFFFFF", "#B99B43"]}
        locations={[0, 0.6]}
        style={small.container}
      >
        <View style={small.innerContainer}>
          <Text style={small.title}>Create new account</Text>

          <TextInput
            style={small.input}
            placeholder="First name"
            placeholderTextColor="gray"
          />
          <TextInput
            style={small.input}
            placeholder="Last name"
            placeholderTextColor="gray"
          />
          <TextInput
            style={small.input}
            placeholder="Phone number"
            placeholderTextColor="gray"
            keyboardType="phone-pad"
          />
          <TextInput
            style={small.input}
            placeholder="New password"
            placeholderTextColor="gray"
            secureTextEntry
          />
          <TextInput
            style={small.input}
            placeholder="Confirm password"
            placeholderTextColor="gray"
            secureTextEntry
          />

          <Text style={small.warningText}>
            Please confirm all the information provided is accurate{" "}
          </Text>

          <Link href="/welcome" asChild>
            <TouchableOpacity style={small.button}>
              <Text style={small.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </LinearGradient>
    </>
  );
};
export const MediumUI = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <LinearGradient
        colors={["#FFFFFF", "#B99B43"]}
        locations={[0, 0.6]}
        style={medium.container}
      >
        <View style={medium.innerContainer}>
          <Text style={medium.title}>Create new account</Text>

          <TextInput
            style={medium.input}
            placeholder="First name"
            placeholderTextColor="gray"
          />
          <TextInput
            style={medium.input}
            placeholder="Last name"
            placeholderTextColor="gray"
          />
          <TextInput
            style={medium.input}
            placeholder="Phone number"
            placeholderTextColor="gray"
            keyboardType="phone-pad"
          />
          <TextInput
            style={medium.input}
            placeholder="New password"
            placeholderTextColor="gray"
            secureTextEntry
          />
          <TextInput
            style={medium.input}
            placeholder="Confirm password"
            placeholderTextColor="gray"
            secureTextEntry
          />

          <Text style={medium.warningText}>
            Please confirm all the information provided is accurate{" "}
          </Text>

          <Link href="/welcome" asChild>
            <TouchableOpacity style={medium.button}>
              <Text style={medium.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </LinearGradient>
    </>
  );
};
export const LargeUI = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <LinearGradient
        colors={["#FFFFFF", "#B99B43"]}
        locations={[0, 0.6]}
        style={large.container}
      >
        <View style={large.innerContainer}>
          <Text style={large.title}>Create new account</Text>

          <TextInput
            style={large.input}
            placeholder="First name"
            placeholderTextColor="gray"
          />
          <TextInput
            style={large.input}
            placeholder="Last name"
            placeholderTextColor="gray"
          />
          <TextInput
            style={large.input}
            placeholder="Phone number"
            placeholderTextColor="gray"
            keyboardType="phone-pad"
          />
          <TextInput
            style={large.input}
            placeholder="New password"
            placeholderTextColor="gray"
            secureTextEntry
          />
          <TextInput
            style={large.input}
            placeholder="Confirm password"
            placeholderTextColor="gray"
            secureTextEntry
          />

          <Text style={large.warningText}>
            Please confirm all the information provided is accurate{" "}
          </Text>

          <Link href="/welcome" asChild>
            <TouchableOpacity style={large.button}>
              <Text style={large.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </LinearGradient>
    </>
  );
};
export const XLargeUI = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <LinearGradient
        colors={["#FFFFFF", "#B99B43"]}
        locations={[0, 0.6]}
        style={large.container}
      >
        <View style={large.innerContainer}>
          <Text style={large.title}>Create new account</Text>

          <TextInput
            style={large.input}
            placeholder="First name"
            placeholderTextColor="gray"
          />
          <TextInput
            style={large.input}
            placeholder="Last name"
            placeholderTextColor="gray"
          />
          <TextInput
            style={large.input}
            placeholder="Phone number"
            placeholderTextColor="gray"
            keyboardType="phone-pad"
          />
          <TextInput
            style={large.input}
            placeholder="New password"
            placeholderTextColor="gray"
            secureTextEntry
          />
          <TextInput
            style={large.input}
            placeholder="Confirm password"
            placeholderTextColor="gray"
            secureTextEntry
          />

          <Text style={large.warningText}>
            Please confirm all the information provided is accurate{" "}
          </Text>

          <Link href="/welcome" asChild>
            <TouchableOpacity style={large.button}>
              <Text style={large.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </LinearGradient>
    </>
  );
};

  // Styles for the XSmall UI
const small = StyleSheet.create({
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
    fontSize: 30,
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
const medium = StyleSheet.create({
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
    fontSize: 40,
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
const large = StyleSheet.create({
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
    fontSize: 80,
    fontWeight: "bold",
    marginTop: "5%",
    marginBottom: "4%",
    color: "#000",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: "center",
  },
  input: {
    width: "50%",
    height: 50,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 35,
    fontSize: 20,
  },
  warningText: {
    color: "#872424ff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
