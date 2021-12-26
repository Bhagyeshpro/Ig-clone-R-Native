import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { Feather, Entypo, AntDesign, FontAwesome5  } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.contianer}>
            <TouchableOpacity>
            <Image style={styles.logo} source={{ uri: `https://www.seekpng.com/png/full/813-8136306_trend-new-instagram-logo-2019-png-edigital-instagram.png`}} />
            </TouchableOpacity>
            <View style={styles.headerRight}>
                <TouchableOpacity>
                    <AntDesign style={styles.icon} name="plussquareo" size={25} color="white" />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={styles.unReadBadge}>
                        <Text style={styles.unReadBadgeText}>11</Text>
                    </View>
                <Entypo style={styles.icon} name="direction" size={25} color="white" />
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
        // marginRight: 40,
        flexDirection: "row",
    },
    logo: {
        width: 110,
        height: 50,
        resizeMode: "contain",
    },
    headerRight:{
        width: 10,
        flexDirection: 'row',
        flex: 1,
        justifyContent: "flex-end"
    },
    icon: {
        marginHorizontal: 10,
    },
    unReadBadge: {
        backgroundColor: "#ff3250",
        position: "absolute",
        left: 24,
        bottom: 16,
        height: 20,
        width: 20,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100, //Make badge in front of icon
    }, 
    unReadBadgeText: {
        position: "absolute",
        bottom: 2,
        color: "white",
        fontSize: 14,
        fontWeight: "700",
    },
})

export default Header
