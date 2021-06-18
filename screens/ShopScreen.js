import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import { Appbar } from 'react-native-paper';
import { ListItem, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FlatList, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { UserProvider, UserContext, UserDispatchContext } from "../context-API/context";

const width = Dimensions.get('window').width / 2 - 30;

export default function ShopScreen({navigation}) {

    const [catergoryIndex, setCategoryIndex] = React.useState(0);

    const [products, setProducts] = useState({});

    const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

    useEffect(() => {
        fetch('https://streamingappapi.herokuapp.com/api/shop/products', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': UserProvider.userD
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
        .then(resData => {
            alert(resData.message);
            setFullName('');
            setUsername('');
            setPassword('');
            setEmail('');
        })
    })

    const CategoryList = () => {
      return (
        <View style={styles.categoryContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setCategoryIndex(index)}>
              <Text
                style={[
                  styles.categoryText,
                  catergoryIndex === index && styles.categoryTextSelected,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    };

    return (
        <SafeAreaView>
            <Appbar.Header style={{backgroundColor: '#31326F'}} >
                <Appbar.BackAction onPress={() => navigation.navigate('audienceportal')} />
                <Text style={{fontSize: 25, color: '#fff', fontWeight: 'bold', fontFamily: 'Arial'}} >Go Back</Text>
            </Appbar.Header>
            <SafeAreaView style={{flex: 1, paddingHorizontal: 20}} >
                <View style={styles.Header}>
                    <View>
                        <Text style={{fontSize: 25, fontWeight: 'bold', fontFamily: 'Arial'}} >Welcome to</Text>
                        <Text style={{fontSize: 38, fontWeight: 'bold', fontFamily: 'Arial', color: '#FFC93C'}} >The elementz Shop</Text>
                    </View>
                    <Icon name="shopping-cart" size={28} />
                </View>
                <View style={{marginTop: 30, flexDirection: 'row'}}>
                    <View style={styles.searchContainer}>
                        <Icon name="search" size={25} style={{marginLeft: 20}} />
                        <TextInput placeholder="Search" style={styles.input} />
                    </View>
                    <View style={styles.sortBtn}>
                        <Icon name="sort" size={30} color={'#fff'} />
                    </View>
                </View>
                <CategoryList />
                <FlatList numColumns={2} data={products} />
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    categoryText: {fontSize: 16, color: 'black', fontWeight: 'bold'},
    categoryTextSelected: {
        color: '#FFC93C',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: '#FFC93C',
    },
    card: {
        height: 225,
        backgroundColor: '#fff',
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer: {
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: '#000',
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: '#FFC93C',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
