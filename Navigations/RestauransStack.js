import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Restaurants from '../Screens/Restaurants'

const Stack = createStackNavigator()

export default function RestauransStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen           
                name="restaurants"
                component={Restaurants}
                options={{title: "Restaurantes"}}
            />
        </Stack.Navigator>
    )
}
