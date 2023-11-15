import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import SplashScreen from './src/Screens/SplashScreen';
import Main from './src/Screens/Main';
import Signin from './src/Screens/Signin';
import PhoneNumberInput from './src/Screens/PhoneNumberInput';
import Verification from './src/Screens/Verification';
import LocationScreen from "./src/Screens/LocationScreen"
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import BottomNavigator from './src/Screens/Main/BottomNavigation';
import Product from './src/Screens/Main/Product';


const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Gilroy: require('./assets/gilroy/Gilroy-Regular.ttf'),
    medGilroy: require('./assets/gilroy/Gilroy-Medium.ttf'),
    boldGilroy: require('./assets/gilroy/Gilroy-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async() =>{
    
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    } 
  },[fontsLoaded] );

  if(!fontsLoaded){
    return null  
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Sign in" component={Signin} />
        <Stack.Screen name="PhoneNumberInput" component={PhoneNumberInput } />
        <Stack.Screen name="Verification" component={Verification } />
        <Stack.Screen name="SelectLocation" component={LocationScreen } />
        <Stack.Screen name="Login" component={Login } />
        <Stack.Screen name="Sign Up" component={SignUp } />
        <Stack.Screen name="HomeScreen" style={{backgroundColor: "#EAEDF4"}} component={BottomNavigator}/>
        <Stack.Screen name="Product" component={Product } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};