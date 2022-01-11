import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Image } from 'react-native';
import { Divider } from 'react-native-elements';
import * as ImagePicker from "expo-image-picker"
import { TouchableOpacity } from 'react-native';
import { useWindowDimensions } from 'react-native';
import validUrl from "valid-url"


const PLACEHOLDER_IMG = 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

const uploadPostSchema = Yup.object().shape({
    imageURL: Yup.string().url().required("A URL is required"),
    caption: Yup.string().max(2200, "Caption has reached the charcter limit."),
})



const FormikPostUploader = ({navigation}) => {
    const [thumbnailURL, setThumbnailURL] = useState(PLACEHOLDER_IMG)
    const { width, height} = useWindowDimensions("window");
    const handleImagePress = () => {
        styles.activeImage;
    }
    
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 5],
            quality: 1,
        });
        
        console.log(result);
        
        if (!result.cancelled) {
            setThumbnailURL(result.uri);
        }
    };
    
    return (
        <Formik
            initialValues={{caption: "", imageURL: ""}}
            onSubmit={
                values => {
                    console.log(values)
                    console.log("Your Post Is Submitted Successfully!")
                    navigation.goBack()
                }
            }
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >   
            {({handleBlur, handleSubmit, handleChange, values, errors, isValid}) => 
            <>
                <View style={styles.container}>
                <TouchableOpacity>
                    <Image
                        source={{uri: validUrl.isUri(thumbnailURL) ? thumbnailURL : PLACEHOLDER_IMG}}
                        style={[styles.image, {width: 100, height: 100}]}                    
                    />
                </TouchableOpacity>
                <View style={{flex: 1, marginLeft:10 }}>
                <TextInput 
                    placeholder='Write Your Caption...' 
                    placeholderTextColor="gray"
                    multiline={true}
                    onChangeText={handleChange("caption")}
                    style={{color: "#fff", fontSize: 18}}
                    onBlur={handleBlur("caption")}
                    value={values.caption}
                />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                <Divider width={0.2} orientation='vertical' />
                <TextInput 
                    onChange={(e) => setThumbnailURL(e.nativeEvent.text)}
                    placeholder='Image URL...' 
                    placeholderTextColor="gray"
                    onChangeText={handleChange("imageURL")}
                    onBlur={handleBlur("imageURL")}
                    style={{color: "#fff", fontSize: 15, marginTop: 10}}
                    value={values.imageURL}
                />
                {errors.imageURL && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.imageURL}
                    </Text>
                )}
                 <Button title="Pick an image from camera roll" onPress={pickImage} />
                {/* {thumbnailURL && <Image source={{ uri: thumbnailURL }} style={{ width: 200, height: 200 }} />} */}
                <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                </View>
            </>

            }
        </Formik>
    )
}

export default FormikPostUploader

const styles = StyleSheet.create({
    bottomContainer: {
        marginHorizontal: 15,
    },
    container: {
        margin: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
})
