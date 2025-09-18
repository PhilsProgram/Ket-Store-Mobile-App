import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SettingsHeader from "../navigations/settingshead";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FontAwesome5 } from "@expo/vector-icons";

export default function XSmallUIWishList() {
  return (
    <View style={small.container}>
      <SettingsHeader item={"Favourites"} name="trash"/>
      <ScrollView
        style={small.parentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={20}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={20}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={20}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={20}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={20}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={20}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={20}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={20}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={20}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={20}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={20}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export function SmallUIWishList() {
  return (
    <View style={small.container}>
      <SettingsHeader item={"Favourites"} name="trash"/>
      <ScrollView
        style={small.parentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={small.section}>
          <TouchableOpacity>
            <View>
              <Text style={small.title}>New goods arrived today!!!</Text>
              <View>
                <View style={small.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={small.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export function MediumUIWishList() {
  return (
    <>
      <SettingsHeader item={"Favourites"} name="trash"/>
      <ScrollView
        style={medium.parentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={medium.section}>
          <TouchableOpacity>
            <View>
              <Text style={medium.title}>New goods arrived today!!!</Text>
              <View>
                <View style={medium.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={medium.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={medium.section}>
          <TouchableOpacity>
            <View>
              <Text style={medium.title}>New goods arrived today!!!</Text>
              <View>
                <View style={medium.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={medium.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={medium.section}>
          <TouchableOpacity>
            <View>
              <Text style={medium.title}>New goods arrived today!!!</Text>
              <View>
                <View style={medium.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={medium.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={medium.section}>
          <TouchableOpacity>
            <View>
              <Text style={medium.title}>New goods arrived today!!!</Text>
              <View>
                <View style={medium.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={medium.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={medium.section}>
          <TouchableOpacity>
            <View>
              <Text style={medium.title}>New goods arrived today!!!</Text>
              <View>
                <View style={medium.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={medium.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={medium.section}>
          <TouchableOpacity>
            <View>
              <Text style={medium.title}>New goods arrived today!!!</Text>
              <View>
                <View style={medium.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={medium.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={medium.section}>
          <TouchableOpacity>
            <View>
              <Text style={medium.title}>New goods arrived today!!!</Text>
              <View>
                <View style={medium.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={medium.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={medium.section}>
          <TouchableOpacity>
            <View>
              <Text style={medium.title}>New goods arrived today!!!</Text>
              <View>
                <View style={medium.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={medium.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={medium.section}>
          <TouchableOpacity>
            <View>
              <Text style={medium.title}>New goods arrived today!!!</Text>
              <View>
                <View style={medium.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={medium.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={medium.section}>
          <TouchableOpacity>
            <View>
              <Text style={medium.title}>New goods arrived today!!!</Text>
              <View>
                <View style={medium.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={medium.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={medium.section}>
          <TouchableOpacity>
            <View>
              <Text style={medium.title}>New goods arrived today!!!</Text>
              <View>
                <View style={medium.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={medium.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
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
export function LargeUIWishList() {
  return (
    <View style={large.container}>
      <SettingsHeader item={"Favourites"} name="trash"/>
      <ScrollView
        style={large.parentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export function XLargeUIWishList() {
  return (
    <View style={large.container}>
      <SettingsHeader item={"Favourites"} name="trash"/>
      <ScrollView
        style={large.parentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={large.section}>
          <TouchableOpacity>
            <View>
              <Text style={large.title}>New goods arrived today!!!</Text>
              <View>
                <View style={large.fav}>
                  <TouchableOpacity style={{ width: 28, alignSelf: "center" }}>
                    <FontAwesome5
                      name="star"
                      color={"#9D2B27"}
                      solid={true}
                      size={23}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={large.purchaseButton}>
                    <Text
                      style={{
                        color: "#B99B43",
                        textAlign: "center",
                        fontSize: wp(4),
                      }}
                    >
                      view more
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const small = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  parentContainer: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 10,
    height: hp(85),
  },

  section: {
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
    backgroundColor: "#efefefff",
    height: hp(10),
    paddingLeft: wp(2),
    borderRadius: wp(2),
    marginVertical: hp(1),
    paddingVertical: hp(1),
  },

  fav: {
    // borderWidth: 1,
    width: "30%",
    marginLeft: "70%",
    height: "100%",
    justifyContent: "space-evenly",
    // position: "absolute"
  },

  favText: {
    // borderWidth: 1,
    width: "70%",
  },
  title: {
    position: "absolute",
    fontSize: wp(5),
    marginTop: "5%",
  },
});
const medium = StyleSheet.create({
  parentContainer: {
    width: "93%",
    alignSelf: "center",
    marginBottom: 10,
    height: hp(85),
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
    width: "30%",
    marginLeft: "70%",
    height: "100%",
    justifyContent: "space-evenly",
  },

  favText: {
    // borderWidth: 1,
    width: "70%",
  },
  title: {
    position: "absolute",
    fontSize: wp(5),
    marginTop: "5%",
  },
});
const large = StyleSheet.create({
  parentContainer: {
    width: "93%",
    alignSelf: "center",
    marginBottom: 10,
    height: hp(85),
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
    justifyContent: "space-evenly",
    // position: "absolute"
  },

  favText: {
    // borderWidth: 1,
    width: "70%",
  },
  title: {
    position: "absolute",
    fontSize: wp(5),
    marginTop: "5%",
  },
});