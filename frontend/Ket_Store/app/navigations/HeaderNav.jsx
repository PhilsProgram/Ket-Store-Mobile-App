import { View, useWindowDimensions } from "react-native";
import XSmallUI, { SmallUI, MediumUI, LargeUI, XLargeUI } from "../UI/headerNavUI.jsx";

export default function HeaderNav() {
  const { width } = useWindowDimensions();
  return (
    <View>
      {width < 360 && <XSmallUI />}
      {width >= 360 && width < 480 && <SmallUI />}
      {width >= 480 && width < 600 && <MediumUI />}
      {width >= 600 && width < 900 && <LargeUI />}
      {width >= 900 && <XLargeUI />}
    </View>
  );
};