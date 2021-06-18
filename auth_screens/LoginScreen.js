import React, {useState, useContext} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UserProvider, UserContext, UserDispatchContext } from "../context-API/context";

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userDetails = useContext(UserContext);
    const setUserDetails = useContext(UserDispatchContext);
    const [token, setToken] = useState(userDetails.token);

    
    const signIn = async() => {
        if(email=="" || password=="" ){
            alert('Please input all data');
        } else {
        const user = {
            "username": email,
            "password": password,
        }
        console.log(user);
        fetch('https://streamingappapi.herokuapp.com/api/auth/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
        .then(resData => {
            console.log(resData);
            setToken(resData.accessToken)
            setUserDetails({ token });
            setPassword('');
            setEmail('');
            console.log(resData.accessToken);
            
            navigation.navigate('after_login');
        }) }
    }

    return (
        <View>
            <StatusBar style="light"/>
            <View style={styles.container}>
                <Image source={{
                    uri:"data:image/png;base64,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",
                    }} style={{width: 200, marginBottom: 40, height:200}}  
                />
            </View>
            <View style={styles.inputView}>
                <Input
                    style={styles.TextInput}
                    placeholder="Email"
                    value = {email}
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <Input
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <View style={styles.buttonsView} >
                <Button style={styles.signBtn} title="Sign In" onPress={signIn} />
                <Button style={styles.registerBtn} onPress={() => navigation.navigate('register')} title="Register" type={'outline'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsView: {
    },
    signBtn: {
        marginBottom: 20,
    },
    registerBtn: {
    }
});

