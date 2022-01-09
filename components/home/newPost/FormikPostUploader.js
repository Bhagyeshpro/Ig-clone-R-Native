import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Image } from 'react-native';
import { Divider } from 'react-native-elements';

const PLACEHOLDER_IMG = 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

const uploadPostSchema = Yup.object().shape({
    imageURL: Yup.string().url().required("A URL is required"),
    caption: Yup.string().max(2200, "Caption has reached the charcter limit."),
})

const FormikPostUploader = () => {
    const [thumbnailURL, setThumbnailURL] = useState(PLACEHOLDER_IMG)

    return (
        <Formik
            initialValues={{caption: "", imageURL: ""}}
            onSubmit={values => console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >   
            {({handleBlur, handleSubmit, handleChange, values, errors, isValid}) => 
            <>
                <View style={styles.container}>
                    <Image
                        source={{uri: thumbnailURL ? thumbnailURL : PLACEHOLDER_IMG}}
                        style={{height: 100, width: 100}}                    
                    />
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
                    style={{color: "#ffffff", fontSize: 15, marginTop: 10}}
                    value={values.imageURL}
                />
                {errors.imageURL && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.imageURL}
                    </Text>
                )}
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
