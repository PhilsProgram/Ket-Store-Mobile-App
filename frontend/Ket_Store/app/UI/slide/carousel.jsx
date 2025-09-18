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
    { id: "23", title: "Angela Mirror Big", image: images.angelaMirrorBig },
    { id: "24", title: "Big Scrubbing Brush", image: images.bigScrubbingBrush },
    { id: "25", title: "Both Sides comb", image: images.bothSidesComb },
    { id: "26", title: "CS Pegs", image: images.csPegs },
    { id: "27", title: "Cutter Set", image: images.cutterSet },
    { id: "28", title: "DIY Wig Cap 1", image: images.diyWigCap1 },
    { id: "29", title: "DIY Wig Cap 2", image: images.diyWigCap2 },
    { id: "30", title: "Ear Cleaner", image: images.earCleaner },
    { id: "31", title: "Feet Rubber", image: images.feetRubber },
    { id: "32", title: "Handkerchief Hanger", image: images.handkerchiefHanger },
    { id: "33", title: "Medium Baby Set comb", image: images.mediumBabySetComb },
    { id: "34", title: "Metal Feet Rubber", image: images.metalFeetRubber },
    { id: "35", title: "Mirror and Afro", image: images.mirrorAndAfro },
    { id: "36", title: "Miss Laureta Small", image: images.missLauretaSmall },
    { id: "37", title: "Nail Cuticle", image: images.nailCuticle },
    { id: "38", title: "Pedicure Set", image: images.pedicureSet },
    { id: "39", title: "Plastic Hair Brush", image: images.plasticHairBrush },
    { id: "40", title: "Ponny Net", image: images.ponnyNet },
    { id: "41", title: "Rubber Shoe Brush", image: images.rubberShoeBrush },
    { id: "42", title: "S Brush", image: images.sBrush },
    { id: "43", title: "Scissors", image: images.scissors },
    { id: "44", title: "Shower Cap", image: images.showerCap },
    { id: "45", title: "Small Scrubbing Brush", image: images.smallScrubbingBrush },
    { id: "46", title: "Tonging Comb", image: images.tongingComb },
    { id: "47", title: "Triangle Hole Afro", image: images.triangleHoleAfro },
    { id: "48", title: "Wig Cap", image: images.wigCap },
    { id: "49", title: "Wig Cap 1", image: images.wigCap1 },
    { id: "50", title: "Wooden Hair Brush", image: images.woodenHairBrush }
];

export const combsCarouselItems = randomCarouselItems.filter(item => /comb|brush/i.test(item.title))

export const mirrorCarouselItems = randomCarouselItems.filter(item => /mirror/i.test(item.title))

export const pegsCarouselItems = randomCarouselItems.filter(item => /pegs/i.test(item.title))

export const newArrivals = randomCarouselItems.filter(item => /new/i.test(item.title))


export const CarouselComponentAuto = () => {
    return (
    <View style={styles.container}>
        <Carousel
        customAnimation={"fade"}
        mode="parallax"
        loop
        width={700}
        height={290}
        autoPlay
        fadeEnabled={true}
        scrollAnimationDuration={9000}
        swipeEnabled={true}
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
const CarouselComponentAutoSmall = () => {
    return (
    <View style={styles.container}>
        <Carousel
        loop
        width={300}
        height={270}
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
                swipeEnabled
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
                swipeEnabled
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
export const CarouselComponentNewArrivals = () => {
    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={300}
                height={290}
                autoPlay
                swipeEnabled
                autoPlayInterval={3000}
                data={newArrivals}
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
        // borderWidth: 1,
        // borderColor: "#a6a056ff",
        borderRadius: 10,
        padding: 5,
        // backgroundColor: "#f5f5dcff",
        width: "100%",
    },
    item: {
        width: "auto",
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        elevation: 5,
    },
    image: {
        width: "100%",
        height: "76%",
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

export default CarouselComponentAutoSmall;