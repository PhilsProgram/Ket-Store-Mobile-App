// This is where the screen adjustment logic will be implemented
import { useWindowDimensions } from "react-native";

const { width, height } = useWindowDimensions();

export function deviceScreen () {
    // Setting the screen width
    const screenWidth = width;

    // Setting the screen height
    const screenHeight = height;

    // Checking the orientation of the device
    const isLandscape = screenWidth > screenHeight;
    const isPortrait = screenHeight > screenWidth;

    // Logging the screen dimensions and orientation
    console.log(`Screen Width: ${screenWidth}, Screen Height: ${screenHeight}`);
    console.log(`Is Landscape: ${isLandscape}, Is Portrait: ${isPortrait}`);

    // Checking the aspect ratio of the device
    const aspectRatio = width / height;
    return {
        screenWidth,
        screenHeight,
        isLandscape,
        isPortrait,
        aspectRatio,
    };
}




