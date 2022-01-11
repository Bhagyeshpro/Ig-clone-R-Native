import React from 'react'
import { Image } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import SignUpForm from '../components/signUpScreen/SignUpForm';

const INSTAGRAM_LOGO = "https://blogger.googleusercontent.com/img/a/AVvXsEh34N6gSHFUsIs_-kfq3413kVEPLcvXydAbn6hV4bMqXBtVva14ntVYFD7od7-J-8iaUc8JuUc-UKJsgHU48GXUnciCA1m6RpafUSeBaF0PHS3g35FFrfp4bsZ5CcJ0uOXEvWm5WRcPpipbXfDlXJ1bMdDBEVxZfwLEeo1Vm1GbaM0vfxrcJVmNPo4W=s320";

const SignUpScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.logoContainer}>
                <Image source={{uri: INSTAGRAM_LOGO, height: 100, width: 100,}} />
            </View>
            <SignUpForm navigation={navigation} />
        </SafeAreaView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 12
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 60,
    },
})
