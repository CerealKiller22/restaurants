import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TopRestaurants from '../Screens/TopRestaurants'

const Stack = createStackNavigator()

export default function TopRestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen           
                name="toprestaurants"
                component={TopRestaurants}
                options={{title: "Top 5 Restaurantes"}}
            />
        </Stack.Navigator>
    )
}
