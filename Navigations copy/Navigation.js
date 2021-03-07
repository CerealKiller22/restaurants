import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


import Favorites from '../Screens/Favorites'
import TopRestaurants from '../Screens/TopRestaurants'
import Search from '../Screens/Search'
import Account from '../Screens/account/Account'
import RestauransStack from './RestauransStack'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="restaurants"
                    component={RestauransStack}
                    options={{title:"Restaurantes"}}
                />
                <Tab.Screen
                    name="favorites"
                    component={Favorites}
                    options={{title:"Favoritos"}}
                />
                <Tab.Screen
                    name="toprestaurants"
                    component={TopRestaurants}
                    options={{title:"Top 5"}}
                />
                <Tab.Screen
                    name="search"
                    component={Search}
                    options={{title:"Buscar"}}
                />
                <Tab.Screen
                    name="account"
                    component={Account}
                    options={{title:"Cuenta"}}
                />
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}
