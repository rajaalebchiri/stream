import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from '../auth_screens/LoginScreen';
import RegisterScreen from '../auth_screens/RegisterScreen';
import AudiencePortal from './AudiencePortal';
import MemoriesScreen from '../screens/MemoriesScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const MemoriesStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#233e8b',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Memories"
        component={MemoriesStackScreen}
        options={{
          tabBarLabel: 'Memories',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="images-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={AudiencePortal}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#233e8b',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={WelcomeScreen} options={{
        title:'Welcome Screen',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#233e8b" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const MemoriesStackScreen = ({navigation}) => (
    <MemoriesStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <MemoriesStack.Screen name="memories" component={MemoriesScreen} options={{
            title:'Memories',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#233e8b" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </MemoriesStack.Navigator>
    );

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);