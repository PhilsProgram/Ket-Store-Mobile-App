// This page is going to contain the combs for the shop
import { SafeAreaView } from 'react-native-safe-area-context'; // This library provides a way to handle safe area insets
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // Importing necessary components from react-native
import HeaderNav from '../navigations/HeaderNav'; // Importing the HeaderNav component for the header navigation


export default function Combs () {
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderNav title="Combs" img="bars" />
                <View style={styles.container}>
                    <Text style={styles.title}>Combs</Text>
                    <Text style={styles.subtitle}>This page is going to show the kinds of combs available</Text>
                </View>
                <View style={styles.combContainer}>
                    <TouchableOpacity style={styles.combItem}>
                        <Text style={styles.combText}>Comb 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.combItem}>
                        <Text style={styles.combText}>Comb 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.combItem}>
                        <Text style={styles.combText}>Comb 3</Text>
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
    combContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    combItem: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
    },
    combText: {
        fontSize: 18,
    }
})