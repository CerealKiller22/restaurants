import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Account from '../Screens/account/Account'
import Login from '../Screens/account/Login'

const Stack = createStackNavigator()

export default function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen           
                name="account"
                component={Account}
                options={{title: "Cuenta"}}
            />
            <Stack.Screen           
                name="login"
                component={Login}
                options={{title: "iniciar sesión"}}
            />
        </Stack.Navigator>
    )
}
