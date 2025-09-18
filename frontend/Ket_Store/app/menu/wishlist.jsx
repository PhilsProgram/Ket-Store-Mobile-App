import { useWindowDimensions, View } from "react-native";
import XSmallUIWishlist,{ SmallUIWishList, MediumUIWishList, LargeUIWishList, XLargeUIWishList } from "../UI/wishlistUI.jsx";

export default function Wishlist(){
    const { width } = useWindowDimensions();
    return(
        <View style={{flex:1}}>
            {width < 375 && <XSmallUIWishlist />}
            {width >= 375 && width < 768 && <SmallUIWishList />}
            {width >= 768 && width < 1024 && <MediumUIWishList />}
            {width >= 1024 && width < 1440 && <LargeUIWishList />}
            {width >= 1440 && <XLargeUIWishList />}
        </View>
    )
}