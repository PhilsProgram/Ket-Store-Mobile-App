// This is where the screen adjustment logic will be implemented
import { useWindowDimensions } from "react-native";
const { width, height } = useWindowDimensions();


export function deviceScreen () {
    // Checking the orientation of the device
    const isLandscape = width > height;
    const isPortrait = height > width;

    // Logging the screen dimensions and orientation
    console.log(`Screen Width: ${width}, Screen Height: ${height}`);
    console.log(`Is Landscape: ${isLandscape}, Is Portrait: ${isPortrait}`);

    // Checking the aspect ratio of the device
    const aspectRatio = width / height;
    return {
        width,
        height,
        isLandscape,
        isPortrait,
        aspectRatio,
    };
}

// A list of device categories based on screen width
export const deviceCategories = {
    xsmall: width < 360,
    small: width >= 360 && width < 480,
    medium: width >= 480 && width < 600,
    large: width >= 600 && width < 900,
    xlarge: width >= 900,
};