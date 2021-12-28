import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'

import USERS from "../../data/users"

const Stories = () => {
    return (
        <View style={styles.container}>
            <ScrollView 
                stickyHeaderIndices={[1]}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
            {USERS.map((story, index) => (
                <TouchableOpacity>
                <View style={styles.storyContainer}  key={index}>
                <Image source={{ uri: story.image}} 
                style={styles.story} />
                <Text style={{color: "#fff", marginLeft: 10, fontSize: 12}}>{
                    story.user.length > 13 ? story.user.slice(0, 13).toLowerCase() + "..." :
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
     },
    storyContainer: {
        alignItems: 'center',
        // justifyContent: "center"
    },
    story: {
        width:70,
        height: 70,
        marginLeft: 10,
        borderWidth: 2.5,
        borderColor: "#ff8501",
        borderRadius: 50,
    },
})

export default Stories

    