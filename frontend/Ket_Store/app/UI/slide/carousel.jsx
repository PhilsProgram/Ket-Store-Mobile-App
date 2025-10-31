import { View, Text, StyleSheet, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { images } from "./imageData";

const randomCarouselItems = [
  { id: "1", title: "Blade comb", image: images.bladeComb, price: "9.99" },
  { id: "2", title: "Long Afro comb", image: images.longAfro, price: "9.99"},
  { id: "3", title: "Metal Afro comb", image: images.metalAfro, price: "9.99"},
  { id: "4", title: "New Metal Tail comb", image: images.newMetalTail, price: "9.99"},
  { id: "5", title: "Regular Afro comb", image: images.regularAfro, price: "9.99" },
  { id: "6", title: "Black Braid comb", image: images.blackBraid, price: "9.99" },
  { id: "7", title: "Small Hammer comb", image: images.smallHammer, price: "9.99" },
  { id: "8", title: "Triangle Hole Afro comb", image: images.traingleHoleAfro, price: "9.99" },
  { id: "9", title: "Two Tail comb", image: images.twoTail, price: "9.99" },
  { id: "10", title: "Umbrella comb", image: images.umbrella, price: "9.99" },
  { id: "11", title: "Subaru", image: images.Subaru, price: "9.99" },
  { id: "12", title: "Babies Brush", image: images.babiesBrush, price: "9.99" },
  { id: "13", title: "Bare Front mirror", image: images.bareFrontMirror, price: "9.99" },
  { id: "14", title: "Belt comb", image: images.beltComb, price: "9.99" },
  { id: "15", title: "Big Baby Set comb", image: images.bigBabySetComb, price: "9.99" },
  { id: "16", title: "Big Wig Brush", image: images.bigWigBrush, price: "9.99" },
  { id: "17", title: "Bonnet Sleep-Cap", image: images.bonnetSleepCap, price: "9.99" },
  { id: "18", title: "China Hair Dye", image: images.chinaHairDye, price: "9.99" },
  { id: "19", title: "Four Tail comb", image: images.fourTail, price: "9.99" },
  { id: "20", title: "Old Metal Tail comb", image: images.oldMetalTail, price: "9.99" },
  { id: "21", title: "One Sided comb", image: images.oneSided, price: "9.99" },
  { id: "22", title: "Small Hammer comb", image: images.smallHammer, price: "9.99" },
  { id: "23", title: "Angela Mirror Big", image: images.angelaMirrorBig, price: "9.99" },
  { id: "24", title: "Big Scrubbing Brush", image: images.bigScrubbingBrush, price: "9.99" },
  { id: "25", title: "Both Sides comb", image: images.bothSidesComb, price: "9.99" },
  { id: "26", title: "CS Pegs", image: images.csPegs, price: "9.99" },
  { id: "27", title: "Cutter Set", image: images.cutterSet, price: "9.99" },
  { id: "28", title: "DIY Wig Cap 1", image: images.diyWigCap1, price: "9.99" },
  { id: "29", title: "DIY Wig Cap 2", image: images.diyWigCap2, price: "9.99" },
  { id: "30", title: "Ear Cleaner", image: images.earCleaner, price: "9.99" },
  { id: "31", title: "Feet Rubber", image: images.feetRubber, price: "9.99" },
  { id: "32", title: "Handkerchief Hanger", image: images.handkerchiefHanger, price: "9.99" },
  { id: "33", title: "Medium Baby Set comb", image: images.mediumBabySetComb, price: "9.99" },
  { id: "34", title: "Metal Feet Rubber", image: images.metalFeetRubber, price: "9.99" },
  { id: "35", title: "Mirror and Afro", image: images.mirrorAndAfro, price: "9.99" },
  { id: "36", title: "Miss Laureta Small", image: images.missLauretaSmall, price: "9.99" },
  { id: "37", title: "Nail Cuticle", image: images.nailCuticle, price: "9.99" },
  { id: "38", title: "Pedicure Set", image: images.pedicureSet, price: "9.99" },
  { id: "39", title: "Plastic Hair Brush", image: images.plasticHairBrush, price: "9.99" },
  { id: "40", title: "Ponny Net", image: images.ponnyNet, price: "9.99" },
  { id: "41", title: "Rubber Shoe Brush", image: images.rubberShoeBrush, price: "9.99" },
  { id: "42", title: "S Brush", image: images.sBrush, price: "9.99" },
  { id: "43", title: "Scissors", image: images.scissors, price: "9.99" },
  { id: "44", title: "Shower Cap", image: images.showerCap, price: "9.99" },
  {
    id: "45",
    title: "Small Scrubbing Brush",
    image: images.smallScrubbingBrush,
    price: "9.99"
  },
  { id: "46", title: "Tonging Comb", image: images.tongingComb, price: "9.99" },
  { id: "47", title: "Triangle Hole Afro", image: images.triangleHoleAfro, price: "9.99" },
  { id: "48", title: "Wig Cap", image: images.wigCap, price: "9.99" },
  { id: "49", title: "Wig Cap 1", image: images.wigCap1, price: "9.99" },
  { id: "50", title: "Wooden Hair Brush", image: images.woodenHairBrush, price: "9.99" },
  { id: "51", title: "Small Pegs", image: images.pegs, price:"9.99" }
];
// Listing new arrivals
const newArrivals = [
    { id: "1", title: "Brushset", image: images.brushset, price: "9.99"},
    { id: "2", title: "New Foot Scrub", image: images.newfootscrub, price: "9.99"},
    { id: "3", title: "Big Holes Stone", image: images.bigHolesStone, price: "9.99"},
    { id: "4", title: "Small Holes Stone", image: images.smallHolesStone, price: "9.99" },
];
// Listing items in categories
const categories = [
    { id: "1", title: "Combs", image: images.collectiveComb},
    { id: "2", title: "Pegs", image: images.collectivePegs},
    { id: "3", title: "Mirrors", image: images.mirror},
    { id: "4", title: "Brushes & Combs", image: images.brushesAndCombs},
];

export const combsCarouselItems = randomCarouselItems.filter((item) =>
  /comb|brush/i.test(item.title)
);

export const mirrorCarouselItems = randomCarouselItems.filter((item) =>
  /mirror/i.test(item.title)
);

export const pegsCarouselItems = randomCarouselItems.filter((item) =>
  /pegs/i.test(item.title)
);

// export const CarouselComponentAuto = () => {
//   return (
//     <View style={styles.container}>
//       <Carousel
//         customAnimation={"fade"}
//         mode="parallax"
//         loop
//         width={700}
//         height={290}
//         autoPlay
//         fadeEnabled={true}
//         scrollAnimationDuration={9000}
//         swipeEnabled={true}
//         autoPlayInterval={3000}
//         data={randomCarouselItems}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Image source={item.image} style={styles.image} />
//             <Text style={styles.title}>{item.title}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };
const CarouselComponentAutoSmall = () => {
  return (
    <View style={small.container}>
      <Carousel
        loop
        width={300}
        height={270}
        autoPlay
        autoPlayInterval={3500}
        data={randomCarouselItems}
        renderItem={({ item }) => (
          <View style={small.item}>
            <View style={small.priceTag}>
              <Text style={{ color: "white" }}>₵ {item.price}</Text>
            </View>
            <Image source={item.image} style={small.image} />
            <Text style={small.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export const CarouselComponentNewArrivals = () => {
  return (
    <View style={small.container}>
        <Carousel
        loop
        width={300}
        height={270}
        autoPlay
        autoPlayInterval={3000}
        data={newArrivals}
        renderItem={({ item }) => (
          <View style={small.item}>
            <View style={small.priceTag}>
                <Text style={{ color: "white" }}>₵ {item.price}</Text>
            </View>
            <Image source={item.image} style={small.image} />
            <Text style={small.title}>{item.title}</Text>
            </View>
        )}
      />
    </View>
  );
}

export const CarouselComponentCategories = () => {
    return (
        <View style={medium.container}>
            <Carousel
            loop
            width={300}
            height={270}
            autoPlay
            autoPlayInterval={10000}
            data={categories}
            renderItem={({ item }) => (
                <View style={medium.item}>
                <View style={medium.priceTag}>
                    <Text style={{ color: "white",  fontWeight: "bold", fontSize: 18 }}>{item.title}</Text>
                </View>
                <Image source={item.image} style={medium.image} />
                </View> 

            )}
            />
        </View>
    );
};

export const CarouselComponentCombs = () => {
  return (
    <View style={small.container}>
      <Carousel
        width={300}
        height={290}
        swipeEnabled
        data={combsCarouselItems}
        renderItem={({ item }) => (
          <View style={small.item}>
            <Image source={item.image} style={small.image} />
            <Text style={small.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};
export const CarouselComponentMirror = () => {
  return (
    <View style={small.container}>
      <Carousel
        loop
        width={300}
        height={290}
        autoPlay
        autoPlayInterval={3000}
        swipeEnabled
        data={mirrorCarouselItems}
        renderItem={({ item }) => (
          <View style={small.item}>
            <Image source={item.image} style={small.image} />
            <Text style={small.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};
export const CarouselComponentPegs = () => {
  return (
    <View style={small.container}>
      <Carousel
        loop
        width={300}
        height={290}
        autoPlay
        swipeEnabled
        autoPlayInterval={3000}
        data={pegsCarouselItems}
        renderItem={({ item }) => (
          <View style={small.item}>
            <Image source={item.image} style={small.image} />
            <Text style={small.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};
// export const CarouselComponentNewArrivals = () => {
//   return (
//     <View style={styles.container}>
//       <Carousel
//         loop
//         width={300}
//         height={290}
//         autoPlay
//         swipeEnabled
//         autoPlayInterval={3000}
//         data={newArrivals}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Image source={item.image} style={styles.image} />
//             <Text style={styles.title}>{item.title}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

const small = StyleSheet.create({
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
  priceTag: {
    position: "absolute",
    bottom: 60,
    right: 10,
    backgroundColor: "#9D2B27",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    zIndex: 2,
  },
});
const medium = StyleSheet.create({
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
  priceTag: {
    position: "absolute",
    bottom: 50,
    right: 10,
    backgroundColor: "#9D2B27",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    zIndex: 2,
  },
});
const large = StyleSheet.create({
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
  priceTag: {
    position: "absolute",
    bottom: 50,
    right: 10,
    backgroundColor: "#9D2B27",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    zIndex: 2,
  },
});

export default CarouselComponentAutoSmall;
