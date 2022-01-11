import React from 'react'
import { Button, KeyboardAvoidingView } from 'react-native';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import LoginForm from '../components/loginScreen/LoginForm';

const INSTAGRAM_LOGO = "https://blogger.googleusercontent.com/img/a/AVvXsEh34N6gSHFUsIs_-kfq3413kVEPLcvXydAbn6hV4bMqXBtVva14ntVYFD7od7-J-8iaUc8JuUc-UKJsgHU48GXUnciCA1m6RpafUSeBaF0PHS3g35FFrfp4bsZ5CcJ0uOXEvWm5WRcPpipbXfDlXJ1bMdDBEVxZfwLEeo1Vm1GbaM0vfxrcJVmNPo4W=s320";

const LoginScreen = ({navigation}) =>(
        <SafeAreaView style={styles.container}>

            <View style={styles.logoContainer}>
                <Image source={{uri: INSTAGRAM_LOGO, height: 100, width: 100,}} />
            </View>
            <LoginForm navigation={navigation} />        
        </SafeAreaView>
    )


export default LoginScreen

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
