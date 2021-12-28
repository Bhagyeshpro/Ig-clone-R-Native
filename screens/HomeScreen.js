import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import POSTS from "../data/posts"

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Stories/>
            <ScrollView>
            {POSTS.map((post, index) => (
            <Post post={post} key={index} />
            ))}
            </ScrollView>
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
