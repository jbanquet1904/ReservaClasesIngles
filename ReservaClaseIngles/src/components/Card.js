import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import LabelLevel from "./LabelLevel";
import { colors, radius, spacing,typography } from '../theme/index'
import {formatPrice} from '../data/clases'

export default Card({class, onPress}){
    return(
        <Pressable
        onPress={onPress}
        >
        <Image source={{uri: class.imagen}}/>
        <View>
            <LabelLevel level={class.level}/>
    
        </View>
        </Pressable>
    )
}

