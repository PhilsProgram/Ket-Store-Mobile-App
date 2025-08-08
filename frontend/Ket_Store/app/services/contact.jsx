import { Linking } from "react-native";

// Create a function to handle the contact action
export function handleContact() {
    const whatsappUrl = "https://wa.me/233553286361"; // Replace with the actual WhatsApp number
    Linking.openURL(whatsappUrl).catch((err) => console.error("An error occurred", err));
}