// creating the Report and FAQ section
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import SettingsHeader from "../navigations/settingshead.jsx"; // Importing the SettingsHeader component for the header
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function FAQ() {
  // Function to handle the question submission
  const handleQuestionSubmit = () => {
    Alert.alert("Submitted successfully", "Your opinion is with us now");
  };
  return (
    <>
      <SettingsHeader item={"Reports and FAQs"} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.parentContainer}>
            <Text style={[styles.writing, styles.title]}>
              FAQs or Frequently Asked Questions
            </Text>
            <Text style={styles.brief}>
              Frequently asked questions are questions that are asked concerning
              how the app works and how it should be used. All questions are
              answered via emails and are updated on the app.
            </Text>
            <Text style={styles.writing}>
              Your questions might be asked by someone already
            </Text>
            <Text style={styles.writing}>Check the questions asked below</Text>

            {/* Some of the suggested questions */}
            <TouchableOpacity style={styles.questionCOntainer}>
              <Text style={{ borderTopWidth: 1, paddingTop: "3%" }}>
                How do I contact you
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.questionCOntainer}>
              <Text>How do I place an order</Text>
            </TouchableOpacity>

            {/* Enter your own question */}
            <TextInput
              placeholder="Enter your own question"
              style={styles.questionInput}
            />
          </View>

          <TouchableOpacity
            title="Submit"
            style={styles.button}
            onPress={handleQuestionSubmit}
            text
          >
            <Text
              style={{ textAlign: "center", color: "white", fontSize: wp(5) }}
            >
              Send
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    // borderWidth: 1,
    paddingVertical: 10,
    width: "90%",
    alignSelf: "center",
  },

  title: {
    color: "green",
    fontSize: 20,
    marginVertical: "2%",
  },

  brief: {
    marginBottom: "10%",
  },

  questionCOntainer: {
    borderBottomWidth: 1,
    paddingVertical: "3%",
  },

  writing: {
    textAlign: "center",
    marginBottom: "5%",
  },

  questionInput: {
    backgroundColor: "#F2F2F2",
    borderRadius: 30,
    height: "12%",
    paddingLeft: "5%",
    marginTop: "12%",
  },
  button: {
    backgroundColor: "#B99B43",
    width: "90%",
    alignSelf: "center",
    marginTop: "5%",
    paddingVertical: "1%",
    borderRadius: 30,
  },
});
