import React from 'react'
import { KeyboardAvoidingView, StyleSheet,Pressable, TouchableOpacity, Text, TextInput, View } from 'react-native'
import { Formik } from 'formik'
import * as Yup from "yup"
import Validator from "email-validator"

const SignUpForm = ({navigation}) => {
    const SignUpFormSchema = Yup.object().shape({
        email: Yup.string().email().required("An email is required"),
        username: Yup.string().required().min(2, "Minimum 2 characters is required"),
        fullname: Yup.string().required().min(3, "Minimum 3 characters is required" ),
        password: Yup.string().required().min(8, "Your password has to have at least 8 characters")
    })

    return (
        <KeyboardAvoidingView style={styles.container}>
        <Formik
            initialValues={{email: '', password: '', username: '', fullname: ''}}
            onSubmit={values => {
                console.log(values)
            }}
            validationSchema={SignUpFormSchema}
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
                autoFocus={false}
                keyboardType='email-address'
                textContentType='emailAddress'
                selectionColor="lightblue"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
             />
            <TextInput
                placeholderTextColor="#000"
                placeholder="Full Name"
                style={[styles.textInput, {
                    borderColor: 
                        values.fullname.length < 1 || values.fullname.length > 3 ? "black" : "red"
                }]}
                textContentType='name'
                onChangeText={handleChange("fullname")}
                onBlur={handleBlur("fullname")}
                value={values.fullname}
                autoCorrect={false}
            />
            <TextInput
                placeholderTextColor="#000"
                placeholder="Username"
                style={[styles.textInput, {
                    borderColor: 
                        values.username.length < 1 || values.username.length > 2 ? "black" : "red"
                }]}
                textContentType='username'
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                autoCorrect={false}
            />
            <TextInput 
                placeholderTextColor="#000" 
                placeholder='Password' 
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
      
        <View style={styles.buttonContainer}>
            <Pressable onPress={handleSubmit} titleSize={20} style={styles.button(isValid)}
                disabled={!isValid}
            >
                <Text style={{color: 'white', fontSize: 17, fontWeight: "600"}}>Sign Up</Text>
            </Pressable>
        </View>
        <View style={styles.logInContainer}>
            <Text style={{fontWeight: "600"}} >Already Have An Account?</Text>
            <TouchableOpacity activeOpacity={.5} titleSize={20} onPress={() => navigation.navigate("LoginScreen")}>
                <Text style={{color: "#0095f6", fontWeight: "600", marginLeft: 5}}>Log In</Text>
            </TouchableOpacity>
        </View>
        </>
        )}

        </Formik>
        </KeyboardAvoidingView>
    )
}

export default SignUpForm

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
    logInContainer: {
        flexDirection: "row",
        justifyContent: "center",
    
    },
})
