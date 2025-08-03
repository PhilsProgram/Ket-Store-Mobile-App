// This page is going to show the kinds of mirror available
import React from 'react'; // This is a library for building user interfaces
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native'; // This library provides components for building user interfaces
import { SafeAreaView } from 'react-native-safe-area-context'; // This library provides a way to handle safe area insets
import HeaderNav from '../navigations/HeaderNav';


// Creating the mirror component
export default function Mirror () {
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderNav title="Mirror" img="bars" />
                <View style={styles.container}>
                    <Text style={styles.title}>Mirror</Text>
                    <Text style={styles.subtitle}>This page is going to show the kinds of mirror available</Text>
                </View>
                <View style={styles.mirrorContainer}>
                    <TouchableOpacity style={styles.mirrorItem}>
                        <Text style={styles.mirrorText}>Mirror 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mirrorItem}>
                        <Text style={styles.mirrorText}>Mirror 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mirrorItem}>
                        <Text style={styles.mirrorText}>Mirror 3</Text>
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
    mirrorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    mirrorItem: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
    },
    mirrorText: {
        fontSize: 18,
    }
})