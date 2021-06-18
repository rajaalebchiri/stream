import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

export default function Page({ backgroundColor, iconName, title }) {
    return (
        <View style={{flex: 1, justifyContent: 'center', 'alignItems': 'center', backgroundColor}}>
            <Icon name={iconName} size={172} color="white" />
            <View style={{ marginTop: 16 }} >
                <Text style={{fontSize: 24, fontFWeight: 'bold', color: 'white'}} >
                    {title}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({});
