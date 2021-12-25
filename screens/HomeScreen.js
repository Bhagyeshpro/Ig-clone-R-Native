import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Header from '../components/Home/Header'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Text>HomeScreen</Text>
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
