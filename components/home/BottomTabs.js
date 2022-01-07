import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'

export const bottomTabsIcons = [
    {
        name: "Home", 
        active: 'https://blogger.googleusercontent.com/img/a/AVvXsEhTPB2FzvSyyPdbp2bL9Mz4tjYi-1GRSmGSLBAuw6TqGZEnBaY83TADdLbconTRHoKIf830GIwGQmo8uT2vur2KgyKTzIzyhHt7aCl1v6cicsYFG57DZQ_qxL0bfCLK_TyCIqrcb_k1m3gR-W7cok-TDEsebquJDTlaFQiE-GEAbwRH0xWwSFyuIKoB=s320',
        inactive: "https://blogger.googleusercontent.com/img/a/AVvXsEiTEKlde8s4Yp8UwcRF7_8LY8GpL9dw1jY4hUTJht5W8C_jzyn0X2QJfcXAZaogAglnojVn2JRvcE8J43p7eV0wfajpmcMeHesuRoFV4NmgwCxlGDoauXOkdMcKHqFZLXicF-5kC2cEfoQsnUnedDbBYNPiQoVprhJKKa-QRLD43iyPRQAxd-UJFJca=s320",
    },
    {
        name: "Search", 
        active: 'https://blogger.googleusercontent.com/img/a/AVvXsEijRFs1ymt_rhocvcXay5wkaQAewr_jgnEKaSAVg5NcfRK78EsrGZoFIepDTO0zF3DSa6-F8PFnGfiwItnHHbhr-ZvEckoW2d5mhOBvc5bjgPqeaoTs7Ca2zLLh3458FCdHFvT_udpkQPpkkE-6HTmx2sszjXT9JLfVVipIvlXcG-Ho0v7qsm9nhlk9=s320',
        inactive: "https://blogger.googleusercontent.com/img/a/AVvXsEijRFs1ymt_rhocvcXay5wkaQAewr_jgnEKaSAVg5NcfRK78EsrGZoFIepDTO0zF3DSa6-F8PFnGfiwItnHHbhr-ZvEckoW2d5mhOBvc5bjgPqeaoTs7Ca2zLLh3458FCdHFvT_udpkQPpkkE-6HTmx2sszjXT9JLfVVipIvlXcG-Ho0v7qsm9nhlk9=s320",
    },
    {
        name: "Reels", 
        active: 'https://blogger.googleusercontent.com/img/a/AVvXsEgeQVJ5uJ-BOsv89mndStdamgJwBeA5b9gvvJhgliL01vZNPmhB9g_hNizyvzLQ1sVfQ6-oWmUbqYvFFr7Z-U7NbTdoIYQuinqZPNyL3R5usp6cPCxqoYRpB_8tJhLdVQht6V4l5DVEdFARIqhx3CqBFHhnSxvCsAwYi8glDmQGaCeiTrjydlIsdLUE=s1080',
        inactive: "https://blogger.googleusercontent.com/img/a/AVvXsEgeQVJ5uJ-BOsv89mndStdamgJwBeA5b9gvvJhgliL01vZNPmhB9g_hNizyvzLQ1sVfQ6-oWmUbqYvFFr7Z-U7NbTdoIYQuinqZPNyL3R5usp6cPCxqoYRpB_8tJhLdVQht6V4l5DVEdFARIqhx3CqBFHhnSxvCsAwYi8glDmQGaCeiTrjydlIsdLUE=s1080",
    },
    {
        name: "Likes", 
        active: "https://blogger.googleusercontent.com/img/a/AVvXsEgBT5m5ukQyapPiu1EbIdxL9F79h9xIYJ4g9pSSUZf1uNhd6iQtHa9ajEeHSEtvUcczZcs0TfON4NYpq4qkduZDDuRUPLpbIpguip5o_kevvQuGXO8A0AdOG53LB75Q2R9zUDc6EGMx2MxseE7QrfoUoiw9Rb6wuSNMTRPKpvQy7tADEyPhR1pX19zn=s320",
        inactive: 'https://blogger.googleusercontent.com/img/a/AVvXsEh7rFXiY4RIKoDWPGNV-_UM8jZBaqMpTzz9HsZOW0trDQrI2G11LgsYOYQpYJ8ZWEuEty3XjyPzQ1YtHkjruRSzOGZ04eAeyHeKyEpEAos11xRuE2DRD43YhPLSzmHhegyzcSn-phtZoOGKU8KgFmkvOoIPA1-9fCKdDIDjywaRBJZoVf5ZEkKkygRb=s320',
    },
    {
        name: "Profile", 
        active: "https://pbs.twimg.com/profile_images/950737392943509504/kxYLXTsO_400x400.jpg",
        inactive: "https://pbs.twimg.com/profile_images/950737392943509504/kxYLXTsO_400x400.jpg",
    },
]

const BottomTabs = ({icons}) => {  
    const [activeTab, setActiveTab] = useState("Home")

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image 
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} 
        style={[
            styles.icons, 
            icon.name === "Profile" ? styles.profilePic() : null,
            activeTab === "Profile" && icon.name === activeTab 
                ? styles.profilePic(activeTab) : null,
            ]} 

        />
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper} >
        <Divider width={1} orientation='vertical'/>
        <View style={styles.container}>
        {icons.map((icon , index) => (
            <Icon key={index} icon={icon} />
        ))}
        </View>
        </View>
    )
}

export default BottomTabs

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        width: "100%",
        bottom: "0%",
        zIndex: 999,
        backgroundColor: "#000",
    },
    container : {
        flexDirection: "row",
        flex: 1,
        height: 50,
        alignItems: "center",
        // paddingTop: 5,
        justifyContent: "space-between"
    },
    icons: {
        width: 60, 
        height: 60,
  },
    profilePic: (activeTab  = '') => ({
        width: 30,
        height: 30,
        margin: 10,
        borderRadius:50,
        borderWidth: activeTab === "Profile" ? 2 : 0,
        borderColor: "#fff"
    })
})