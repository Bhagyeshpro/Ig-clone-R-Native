import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { Feather, Entypo, AntDesign, FontAwesome5  } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.contianer}>
            <TouchableOpacity>
            <Image style={styles.logo} source={{ uri: `https://www.seekpng.com/png/full/813-8136306_trend-new-instagram-logo-2019-png-edigital-instagram.png`}} />
            </TouchableOpacity>
            {/* <TouchableOpacity>
            <Image style={{ backgroundColor: "#Fff", height: 20, width: 20}} source={{uri: 'data:image/png;base64,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'}} />
            </TouchableOpacity> */}
            <View style={styles.headerRight}>
                <TouchableOpacity>
                    <AntDesign style={styles.icon} name="plussquareo" size={24} color="white" />
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
        marginHorizontal: 10,
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
