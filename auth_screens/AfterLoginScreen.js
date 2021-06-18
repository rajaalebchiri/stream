import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-elements';


export default function AfterLoginScreen() {

    const userDetails = useContext(UserContext);


    return (
        <View>
            <Card>
                    <Card.Image source={require('../assets/success.png')}>
                    </Card.Image>
                    <Text h4 style={{marginBottom: 10}}>
                        Welcome Back {userDetails.username}
                    </Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({});
