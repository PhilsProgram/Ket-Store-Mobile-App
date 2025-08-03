// This part of the program is going to be displaying the pegs available
import { SafeAreaView } from 'react-native-safe-area-context'; // This library provides a way to handle safe area insets
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // Importing necessary components from react-native
import HeaderNav from '../navigations/HeaderNav'; // Importing the HeaderNav component for the header navigation

export default function Pegs () {
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderNav title="Pegs" img="bars" />
                <View style={styles.container}>
                    <Text style={styles.title}>Pegs</Text>
                    <Text style={styles.subtitle}>This page is going to show the kinds of pegs available</Text>
                </View>
                <View style={styles.pegContainer}>
                    <TouchableOpacity style={styles.pegItem}>
                        <Text style={styles.pegText}>Peg 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pegItem}>
                        <Text style={styles.pegText}>Peg 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pegItem}>
                        <Text style={styles.pegText}>Peg 3</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
    },
    pegContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    pegItem: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
    },
    pegText: {
        fontSize: 18,
    }
})