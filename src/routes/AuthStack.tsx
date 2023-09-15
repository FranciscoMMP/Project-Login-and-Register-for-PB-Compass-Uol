import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {SignUp} from '../screens/SignUp';
import {Login} from '../screens/Login';
import { ForgotPassword } from '../screens/ForgotPassword';


const Stack = createNativeStackNavigator();

export function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name='SignUp' component={SignUp} />
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        </Stack.Navigator>
    )
}