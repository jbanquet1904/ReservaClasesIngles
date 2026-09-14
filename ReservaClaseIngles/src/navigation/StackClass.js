import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../screens/StartScreen";
import ClassDetailScreen from "../screens/ClassDetailScreen";


const Stack = createNativeStackNavigator();

export default function StackClass(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={StartScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
            name="ClassDetail"
            component={ClassDetailScreen}
            options={{title:'Detail', headerBackTitle: 'Back'}}
            />
        </Stack.Navigator>
    )
}