import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Appbar } from 'react-native-paper';

export default function MemoriesScreen({navigation}) {

    const [search, setsearch] = useState('');

    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('audienceportal')} />
                <Text style={{color: '#fff'}} >Go Back</Text>
            </Appbar.Header>
            <SearchBar placeholder="Search here" value={search} onChangeText={(search) => setsearch(search)} />
            <View>
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({});
