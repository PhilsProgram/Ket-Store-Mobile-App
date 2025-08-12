import React from "react";
import { View, useWindowDimensions } from "react-native";
import { XSmallUI, SmallUI, MediumUI, LargeUI } from "../UI/cartUI.jsx";

export default function CartScreen() {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flex: 1 }}>
          {width < 360 && <XSmallUI />}
          {width >= 360 && width < 480 && <SmallUI />}
          {width >= 480 && width < 600 && <MediumUI />}
          {width >= 600 && width < 900 && <LargeUI />}
          {width >= 900 && <XLargeUI />}
        </View>
  );
};