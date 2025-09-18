import { useWindowDimensions, View } from "react-native";
import XSmallNotification, { SmallNotification, MediumNotification, LargeNotification, XLargeNotification } from "../UI/notifications.jsx";

export default function Notification() {
    const { width } = useWindowDimensions();
        return (
        <View style={{ flex: 1 }}>
            {width < 360 && <XSmallNotification />}
            {width >= 360 && width < 480 && <SmallNotification />}
            {width >= 480 && width < 600 && <MediumNotification />}
            {width >= 600 && width < 900 && <LargeNotification />}
            {width >= 900 && <XLargeNotification />}
        </View>
        );
}