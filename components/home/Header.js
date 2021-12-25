import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { Feather, Entypo, AntDesign, FontAwesome5  } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.contianer}>
            <TouchableOpacity>
            <Image style={styles.logo} source={require('../../Insta Assets/Logo Insta.png')} />
            </TouchableOpacity>
            <View style={styles.headerRight}>
                <TouchableOpacity>
                    <AntDesign style={styles.icon} name="plussquareo" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                <AntDesign style={styles.icon} name="hearto" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unReadBadge}>
                        <Text style={styles.unReadBadgeText}>11</Text>
                    </View>
                <Entypo style={styles.icon} name="direction" size={24} color="white" />
                </TouchableOpacity>
            </View>             
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginRight: 40,
        flexDirection: "row",
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: "contain",
    },
    headerRight:{
        width: 40,
        flexDirection: 'row',
        justifyContent: "space-evenly"
    },
    icon: {
        marginHorizontal: 5,
    },
    unReadBadge: {
        backgroundColor: "#ff3250",
        position: "absolute",
        left: 20,
        bottom: 18,
        height: 15,
        width: 20,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100, //Make badge in front of icon
    }, 
    unReadBadgeText: {
        color: "white",
        fontSize: 12,
        fontWeight: 600,
    },
})

export default Header
