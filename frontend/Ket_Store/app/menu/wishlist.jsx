import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
  import SettingsHeader from "../navigations/settingshead";
  import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
  import { FontAwesome5 } from "@expo/vector-icons";
  
  export default function WishList() {
    return (
      <>
        <SettingsHeader item={"Favourites"} />
        <ScrollView style={styles.parentContainer} showsVerticalScrollIndicator={false}>
  
            <View style={styles.section}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.title}>New goods arrived today!!!</Text>
                  <View>
                    <View style={styles.fav}>
                      <TouchableOpacity style={{ width: 28, alignSelf: "center"}}>
                        <FontAwesome5 name="star" color={"#9D2B27"} solid={true} size={23} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.purchaseButton}>
                        <Text style={{ color: "#B99B43", textAlign: "center", fontSize: wp(4) }}>
                          view more
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
  
  
            <View style={styles.section}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.title}>New goods arrived today!!!</Text>
                  <View>
                    <View style={styles.fav}>
                      <TouchableOpacity style={{ width: 28, alignSelf: "center"}}>
                        <FontAwesome5 name="star" color={"#9D2B27"} solid={true} size={23} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.purchaseButton}>
                        <Text style={{ color: "#B99B43", textAlign: "center", fontSize: wp(4) }}>
                          view more
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
  
  
            <View style={styles.section}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.title}>New goods arrived today!!!</Text>
                  <View>
                    <View style={styles.fav}>
                      <TouchableOpacity style={{ width: 28, alignSelf: "center"}}>
                        <FontAwesome5 name="star" color={"#9D2B27"} solid={true} size={23} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.purchaseButton}>
                        <Text style={{ color: "#B99B43", textAlign: "center", fontSize: wp(4) }}>
                          view more
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
  
  
            <View style={styles.section}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.title}>New goods arrived today!!!</Text>
                  <View>
                    <View style={styles.fav}>
                      <TouchableOpacity style={{ width: 28, alignSelf: "center"}}>
                        <FontAwesome5 name="star" color={"#9D2B27"} solid={true} size={23} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.purchaseButton}>
                        <Text style={{ color: "#B99B43", textAlign: "center", fontSize: wp(4) }}>
                          view more
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
  
  
            <View style={styles.section}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.title}>New goods arrived today!!!</Text>
                  <View>
                    <View style={styles.fav}>
                      <TouchableOpacity style={{ width: 28, alignSelf: "center"}}>
                        <FontAwesome5 name="star" color={"#9D2B27"} solid={true} size={23} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.purchaseButton}>
                        <Text style={{ color: "#B99B43", textAlign: "center", fontSize: wp(4) }}>
                          view more
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
  
  
            <View style={styles.section}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.title}>New goods arrived today!!!</Text>
                  <View>
                    <View style={styles.fav}>
                      <TouchableOpacity style={{ width: 28, alignSelf: "center"}}>
                        <FontAwesome5 name="star" color={"#9D2B27"} solid={true} size={23} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.purchaseButton}>
                        <Text style={{ color: "#B99B43", textAlign: "center", fontSize: wp(4) }}>
                          view more
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
  
  
            <View style={styles.section}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.title}>New goods arrived today!!!</Text>
                  <View>
                    <View style={styles.fav}>
                      <TouchableOpacity style={{ width: 28, alignSelf: "center"}}>
                        <FontAwesome5 name="star" color={"#9D2B27"} solid={true} size={23} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.purchaseButton}>
                        <Text style={{ color: "#B99B43", textAlign: "center", fontSize: wp(4) }}>
                          view more
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
  
  
            <View style={styles.section}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.title}>New goods arrived today!!!</Text>
                  <View>
                    <View style={styles.fav}>
                      <TouchableOpacity style={{ width: 28, alignSelf: "center"}}>
                        <FontAwesome5 name="star" color={"#9D2B27"} solid={true} size={23} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.purchaseButton}>
                        <Text style={{ color: "#B99B43", textAlign: "center", fontSize: wp(4) }}>
                          view more
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
  
  
            <View style={styles.section}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.title}>New goods arrived today!!!</Text>
                  <View>
                    <View style={styles.fav}>
                      <TouchableOpacity style={{ width: 28, alignSelf: "center"}}>
                        <FontAwesome5 name="star" color={"#9D2B27"} solid={true} size={23} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.purchaseButton}>
                        <Text style={{ color: "#B99B43", textAlign: "center", fontSize: wp(4) }}>
                          view more
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
  
  
            <View style={styles.section}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.title}>New goods arrived today!!!</Text>
                  <View>
                    <View style={styles.fav}>
                      <TouchableOpacity style={{ width: 28, alignSelf: "center"}}>
                        <FontAwesome5 name="star" color={"#9D2B27"} solid={true} size={23} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.purchaseButton}>
                        <Text style={{ color: "#B99B43", textAlign: "center", fontSize: wp(4) }}>
                          view more
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
  
  
            <View style={styles.section}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.title}>New goods arrived today!!!</Text>
                  <View>
                    <View style={styles.fav}>
                      <TouchableOpacity style={{ width: 28, alignSelf: "center"}}>
                        <FontAwesome5 name="star" color={"#9D2B27"} solid={true} size={23} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.purchaseButton}>
                        <Text style={{ color: "#B99B43", textAlign: "center", fontSize: wp(4) }}>
                          view more
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
  
        </ScrollView>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    parentContainer: {
      width: "93%",
      alignSelf: "center",
      //borderWidth: 1,
      marginBottom: 10
    },
  
    section: {
      borderBottomWidth: 1,
      borderColor: "#E2E2E2",
      backgroundColor: "#F7F7F7",
      height: hp(10),
      paddingLeft: wp(2),
      borderRadius: wp(2),
      marginVertical: hp(1),
    },
  
    fav: {
      // borderWidth: 1,
      width: "30%",
      marginLeft: "70%",
      height: "100%",
      justifyContent: "space-evenly"
      // position: "absolute"
    },
  
    favText: {
      // borderWidth: 1,
      width: "70%",
    },
    title: {
      position: "absolute",
      fontSize: wp(5),
      marginTop: "5%"
    }
  });
  