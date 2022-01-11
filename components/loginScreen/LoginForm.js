import React from 'react'
import { KeyboardAvoidingView, Button, Pressable, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Formik} from "formik"
import * as Yup from "yup"
import Validator  from "email-validator"

const LoginForm = ({navigation}) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required("An email is required"),
        password: Yup.string().required().min(8, "Your password has to have at least 8 characters")
    })

    return (
        <KeyboardAvoidingView style={styles.container}>
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => {
                console.log(values)
            }}
            validationSchema={LoginFormSchema}
            validateOnMount={true}
        >
        {({handleBlur, handleSubmit, handleChange, values, errors, isValid }) => ( 
        <>
        <View style={styles.inputContainer}>
            <TextInput 
                placeholderTextColor="#000"
                placeholder='Phone number, username or email'  
                style={[styles.textInput, {
                    borderColor:
                    values.email.length < 1 || Validator.validate(values.email) ? "black" : "red"
                }]}
                autoFocus={true}
                keyboardType='email-address'
                textContentType='emailAddress'
                selectionColor="lightblue"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
             />
            <TextInput placeholderTextColor="#000" placeholder='Password' 
                style={[styles.textInput, {
                    borderColor: 
                    1 > values.password.length || values.password.length > 8 ? "black": "red"
                }]}
                autoCorrect={false}
                secureTextEntry
                textContentType='password'
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
            />
        </View>
        <View style={{alignItems: "flex-end", marginBottom: 10}}>
                <Text  style={{color: "#0095f6", fontWeight: "600"}}  >Forgot Password</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Pressable onPress={handleSubmit} titleSize={20} style={styles.button(isValid)}
                disabled={!isValid}
            >
                <Text style={{color: 'white', fontSize: 17, fontWeight: "600"}}>Log In</Text>
            </Pressable>
        </View>
        <View style={styles.signUpContainer}>
            <Text style={{fontWeight: "600"}} >Don't Have An Account?</Text>
            <TouchableOpacity activeOpacity={.5} titleSize={20} onPress={() => navigation.navigate("SignUpScreen")}>
                <Text style={{color: "#0095f6", fontWeight: "600", marginLeft: 5}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        </>
        )}
        </Formik>
        </KeyboardAvoidingView>
    )
}
    
export default LoginForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        marginTop:30,
    },
    textInput: {
        borderRadius: 4,
        marginVertical: 5,
        borderColor: "black",
        borderWidth: 1,
        padding: 6,
        backgroundColor: "#FAFAFA"
    },
    buttonContainer: {
        marginVertical: 40
    },
    button: isValid => ({
        backgroundColor: isValid ? "#0096F6" : "#9acaf7",
        alignItems: 'center',
        justifyContent: "center",
        minHeight: 35,
        borderRadius: 4
    }),
    signUpContainer: {
        flexDirection: "row",
        justifyContent: "center",
    
    },
})
