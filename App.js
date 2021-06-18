import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './auth_screens/LoginScreen';
import WelcomeScreen from './start_screens/WelcomeScreen';
import RegisterScreen from './auth_screens/RegisterScreen';
import { UserProvider } from "./context-API/context";
import AfterLoginScreen from './auth_screens/AfterLoginScreen';
import MainPortal from './start_screens/MainPortal';
import AudiencePortal from './start_screens/AudiencePortal';
import ShowScreen from './screens/ShowScreen';
import MemoriesScreen from './screens/MemoriesScreen';
import ShopScreen from './screens/ShopScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import MainTabScreen from './start_screens/MainTabScreen';
import { DrawerContent } from './start_screens/DrawerContent';
import  OnboardingScreen  from './onboarding/OnboardingScreen';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <UserProvider>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} >
          <Drawer.Screen name="HomeDrawer" component={ MainTabScreen } />
          <Drawer.Screen name='login' component={ LoginScreen } />
          <Drawer.Screen name="register" component={ RegisterScreen } />
          <Drawer.Screen name="after_login" component={ AfterLoginScreen } />
          <Drawer.Screen name="mainportal" component={ MainPortal } />
          <Drawer.Screen name="audienceportal" component={ AudiencePortal } />
          <Drawer.Screen name="showScreen" component={ ShowScreen } />
          <Drawer.Screen name="memories" component={ MemoriesScreen } />
          <Drawer.Screen name="shop" component={ ShopScreen } />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

