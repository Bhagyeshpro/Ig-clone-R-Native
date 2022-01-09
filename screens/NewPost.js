import React from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import AddNewPost from '../components/home/newPost/AddNewPost'

const NewPost = () => {
    return (
        <SafeAreaView style={{backgroundColor: "#000", flex: 1}}>
            <AddNewPost/>
        </SafeAreaView>
    )
}

export default NewPost

const styles = StyleSheet.create({})
