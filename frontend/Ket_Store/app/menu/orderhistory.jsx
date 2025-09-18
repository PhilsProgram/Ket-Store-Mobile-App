import XSmallOrderHistory, { SmallOrderHistory, MediumOrderHistory, LargeOrderHistory, XLargeOrderHistory } from "../UI/orderHistory.jsx";
import { useWindowDimensions, View } from "react-native";

export default function OrderHistory() {
    const { width } = useWindowDimensions();
        return (
        <View style={{ flex: 1 }}>
            {width < 360 && <XSmallOrderHistory />}
            {width >= 360 && width < 480 && <SmallOrderHistory />}
            {width >= 480 && width < 600 && <MediumOrderHistory />}
            {width >= 600 && width < 900 && <LargeOrderHistory />}
            {width >= 900 && <XLargeOrderHistory />}
        </View>
        );
};