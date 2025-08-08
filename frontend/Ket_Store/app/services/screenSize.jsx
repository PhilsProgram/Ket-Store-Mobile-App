// A list of device categories based on screen width
export const deviceCategories = {
    xsmall: width < 360,
    small: width >= 360 && width < 480,
    medium: width >= 480 && width < 600,
    large: width >= 600 && width < 900,
    xlarge: width >= 900,
};