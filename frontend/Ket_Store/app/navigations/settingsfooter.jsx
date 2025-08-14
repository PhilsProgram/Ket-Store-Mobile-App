import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


const navigation = useRouter();
export default function SettingsFooter({item}) {
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity style={styles.button} onPress={ () => navigation.back() }>
        <Text style={styles.buttonText}>{item}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#B99B43",
        width: "40%",
        borderRadius: 50,
        alignSelf: "center",
        padding: "0.4%"
      },

      buttonText: {
        textAlign: "center",
        color: "white",
        height: "auto",
        fontSize: wp(2),
        fontWeight: "bold"
      },
})