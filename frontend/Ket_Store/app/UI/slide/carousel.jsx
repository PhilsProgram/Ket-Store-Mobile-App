import { View, Text, StyleSheet, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { images } from "./imageData";
import { Easing } from "react-native-reanimated";

const carouselItems = [
    { id: "1", title: "Blade comb", image: images.bladeComb },
    { id: "2", title: "Long Afro", image: images.longAfro },
    { id: "3", title: "Metal Afro", image: images.metalAfro },
    { id: "4", title: "New Metal Tail", image: images.newMetalTail },
    { id: "5", title: "Regular Afro", image: images.regularAfro },
    { id: "6", title: "Black Braid", image: images.blackBraid },
    { id: "7", title: "Small Hammer", image: images.smallHammer },
    { id: "8", title: "Triangle Hole Afro", image: images.traingleHoleAfro },
    { id: "9", title: "Two Tail", image: images.twoTail },
    { id: "10", title: "Umbrella Comb", image: images.umbrella },
    { id: "11", title: "Subaru", image: images.Subaru },
    { id: "12", title: "Babies Brush", image: images.babiesBrush },
    { id: "13", title: "Bare Front Mirror", image: images.bareFrontMirror },
    { id: "14", title: "Belt Comb", image: images.beltComb },
    { id: "15", title: "Big Baby Set Comb", image: images.bigBabySetComb },
    { id: "16", title: "Big Wig Brush", image: images.bigWigBrush },
    { id: "17", title: "Bonnet Sleep Cap", image: images.bonnetSleepCap },
    { id: "18", title: "China Hair Dye", image: images.chinaHairDye },
    { id: "19", title: "Four Tail", image: images.fourTail },
    { id: "20", title: "Old Metal Tail", image: images.oldMetalTail },
    { id: "21", title: "One Sided", image: images.oneSided },
    { id: "22", title: "Small Hammer", image: images.smallHammer },
];

export const CarouselComponentAuto = () => {
    return (
    <View style={styles.container}>
        <Carousel
        loop
        width={300}
        height={290}
        autoPlay
        autoPlayInterval={4000}
        data={carouselItems}
        renderItem={({ item }) => (
            <View style={styles.item}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        )}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    item: {
        width: "auto",
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    image: {
        width: "100%",
        height: "70%",
        borderRadius: 10,
        resizeMode: "contain",
    },
    title: {
        color: "#a6a056ff",
        fontSize: 20,
        fontWeight: "bold",
        position: "relative",
        top: -5,
        zIndex: 1,
    },
});

export default CarouselComponentAuto;
