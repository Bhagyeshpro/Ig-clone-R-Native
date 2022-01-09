import React from 'react'
import { Image, SafeAreaView } from 'react-native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => {
    return (
        <View>
            <Header/>
            <FormikPostUploader/>
        </View>
    
    )
}

const Header = () => (
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Image
                    source={{uri: "https://blogger.googleusercontent.com/img/a/AVvXsEhv8UXT3xM5xq3T7WMUL1Nt4hryYoXvf8IONzmzAGsbA1Kbk1-cOjOKnF9sg00HEWpU6xdePTvM9s8FdMYm8KisYH54AcvmHr68S5RzXUiSpFPd_RqQudVSCuUfKKQNx0RQw9dtKosRx_QEt14fd0GZU3lzJQIVmC23S0s3RxrNmNjgSs1zbhEUagBY=s320"}}
                    style={{width: 35, height: 35 }}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>New Post</Text>
            <Text></Text>
        </View>
)

export default AddNewPost

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",   
    },
    headerText: {
        color: "white",
        fontWeight: "700",
        fontSize: 20,
        marginRight: 23,        
    },  
})
