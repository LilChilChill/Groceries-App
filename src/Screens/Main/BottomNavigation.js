import { StyleSheet, Text, View, Animated} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Favories from './Favories'
import Cart from './Cart'
import Home from './Home'
import Search from './Search'
import Profile from './Profile'
import COLORS from '../../const/colors'

const Tap = createBottomTabNavigator();

const BottomNavigator = () =>{
    
    const screenOptions = {
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 60,
            color: "#FFFFFF",
        },
    }
    return(
        <Tap.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Tap.Screen 
            name='Home' 
            component={Home} 
            options={{tabBarIcon:({focused})=> <Ionicons name='home-outline' size={24} color={focused ? COLORS.blue : COLORS.dark} />

        }}/>
            <Tap.Screen 
                name='Favories' 
                component={Favories} 
                options={{tabBarIcon:({focused})=> <Ionicons name='heart-outline' size={24} color={focused ? COLORS.blue : COLORS.dark} />

            }}/>
            <Tap.Screen 
                name='Search' 
                component={Search} 
                options={{tabBarIcon:({focused})=> <Ionicons name='search-outline' size={24} color={focused ? COLORS.blue : COLORS.dark} />

            }}/>
            <Tap.Screen 
                name='Cart' 
                component={Cart } 
                options={{tabBarIcon:({focused})=> <Ionicons name='cart-outline' size={24} color={focused ? COLORS.blue : COLORS.dark} />

            }}/>
            <Tap.Screen 
                name='Profile' 
                component={Profile} 
                options={{tabBarIcon:({focused})=> <Ionicons name='person-outline' size={24} color={focused ? COLORS.blue : COLORS.dark} />

            }}/>
        </Tap.Navigator>
    )
}

export default BottomNavigator
