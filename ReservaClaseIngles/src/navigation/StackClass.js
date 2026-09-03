import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../screens/StartScreen";

const Stack = createNativeStackNavigator();

export default function StackClass(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={StartScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}