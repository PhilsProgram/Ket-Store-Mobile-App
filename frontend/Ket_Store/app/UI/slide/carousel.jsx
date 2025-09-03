import { View, Text, StyleSheet, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { images } from "./imageData";

const randomCarouselItems = [
    { id: "1", title: "Blade comb", image: images.bladeComb },
    { id: "2", title: "Long Afro comb", image: images.longAfro },
    { id: "3", title: "Metal Afro comb", image: images.metalAfro },
    { id: "4", title: "New Metal Tail comb", image: images.newMetalTail },
    { id: "5", title: "Regular Afro comb", image: images.regularAfro },
    { id: "6", title: "Black Braid comb", image: images.blackBraid },
    { id: "7", title: "Small Hammer comb", image: images.smallHammer },
    { id: "8", title: "Triangle Hole Afro comb", image: images.traingleHoleAfro },
    { id: "9", title: "Two Tail comb", image: images.twoTail },
    { id: "10", title: "Umbrella comb", image: images.umbrella },
    { id: "11", title: "Subaru", image: images.Subaru },
    { id: "12", title: "Babies Brush", image: images.babiesBrush },
    { id: "13", title: "Bare Front mirror", image: images.bareFrontMirror },
    { id: "14", title: "Belt comb", image: images.beltComb },
    { id: "15", title: "Big Baby Set comb", image: images.bigBabySetComb },
    { id: "16", title: "Big Wig Brush", image: images.bigWigBrush },
    { id: "17", title: "Bonnet Sleep-Cap", image: images.bonnetSleepCap },
    { id: "18", title: "China Hair Dye", image: images.chinaHairDye },
    { id: "19", title: "Four Tail comb", image: images.fourTail },
    { id: "20", title: "Old Metal Tail comb", image: images.oldMetalTail },
    { id: "21", title: "One Sided comb", image: images.oneSided },
    { id: "22", title: "Small Hammer comb", image: images.smallHammer },
];

export const combsCarouselItems = randomCarouselItems.filter(item => /comb|brush/i.test(item.title))

export const mirrorCarouselItems = randomCarouselItems.filter(item => /mirror/i.test(item.title))

export const pegsCarouselItems = randomCarouselItems.filter(item => /pegs/i.test(item.title))

export const CarouselComponentAuto = () => {
    return (
    <View style={styles.container}>
        <Carousel
        loop
        width={300}
        height={290}
        autoPlay
        autoPlayInterval={3000}
        data={randomCarouselItems}
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

export const CarouselComponentCombs = () => {
    return (
        <View style={styles.container}>
            <Carousel
                width={300}
                height={290}
                swipeEnabled
                data={combsCarouselItems}
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

export const CarouselComponentMirror = () => {
    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={300}
                height={290}
                autoPlay
                autoPlayInterval={3000}
                data={mirrorCarouselItems}
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

export const CarouselComponentPegs = () => {
    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={300}
                height={290}
                autoPlay
                autoPlayInterval={3000}
                data={pegsCarouselItems}
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
