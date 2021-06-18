import { StatusBar } from 'expo-status-bar';
import React, {useState, useLayoutEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
export default function RegisterScreen({ navigation }) {

    const [response, setResponse] = useState();
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useLayoutEffect (() => {

    }, [navigation]);

    const register = async() => {
        if(email=="" || password=="" || username=="" || fullName==""){
            alert('Please input all data');
        } else {
        const user = {
            "username": username,
            "fullname": fullName,
            "email": email,
            "password": password,
            "roles": ["user", "streamer"]
        }
        console.log(user);
        fetch('https://streamingappapi.herokuapp.com/api/auth/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
        .then(resData => {
            alert(resData.message);
            setFullName('');
            setUsername('');
            setPassword('');
            setEmail('');
        }) }
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container} >
            <StatusBar style="light" />
            <Text h3 style={styles.title}>
                Become a Part of our family
            </Text>
            
            <View style={styles.inputContainer} >
                <Input placeholder='Full Name' autofocus type='text' value={fullName} onChangeText={(fullname) => setFullName(fullname)} />
                <Input placeholder="Username" autofocus type='text' value={username} onChangeText={(username) => setUsername(username)} />
                <Input placeholder="Email" autofocus type='email' value={email} onChangeText={(email) => setEmail(email)} />
                <Input placeholder="Password" autofocus type='password' secureTextEntry={true} value={password} onSubmitEditing={register} onChangeText={(password) => setPassword(password)} />
                <Button style={styles.signBtn} title="Sign Up" onPress={register} />
                <Button style={styles.registerBtn} onPress={() => navigation.navigate('login')} title="Login" type={'outline'} />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: 300,
    },
    title: {
        marginBottom: 20,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#ffffff",
    },
    buttonsView: {
        
    },
    signBtn: {
        width: 200,
        marginTop: 10,
    },
    registerBtn: {
        width: 200,
        marginTop: 10,
    },
});
