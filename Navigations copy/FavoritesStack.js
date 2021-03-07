import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Restaurants from '../Screens/Restaurants'
import Account from '../Screens/account/Account'
import Favorites from '../Screens/Favorites'

const Stack = createStackNavigator()

export default function RestauransStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen           
                name="favorites"
                component={Favorites}
                options={{title: "Favoritos"}}
            />
        </Stack.Navigator>
    )
}
