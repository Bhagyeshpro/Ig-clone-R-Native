import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import Header from '../components/home/Header'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Text>HomeScreen</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
    }
})

export default HomeScreen
