import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'

import USERS from "../../data/users"

const Stories = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
            {USERS.map((story, index) => (
                <TouchableOpacity>
                <View style={styles.storyContainer}  key={index}>
                <Image source={{ uri: story.image}} 
                style={styles.story} />
                <Text style={{color: "#fff", fontSize: 12}}>{
                    story.user.length > 10 ? story.user.slice(0, 10).toLowerCase() + "..." :
                    story.user.toLowerCase()
                }</Text>
                </View>
                </TouchableOpacity>
            ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
    },
    storyContainer: {
        alignItems: 'center',
    },
    story: {
        width:65,
        height: 65,
        marginLeft: 10,
        borderWidth: 2.5,
        borderColor: "#ff8501",
        borderRadius: 50,
    },
})

export default Stories

    