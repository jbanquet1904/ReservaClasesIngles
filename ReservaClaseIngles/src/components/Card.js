import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import LabelLevel from "./LabelLevel";
import { colors, spacing,typography } from '../theme/index'
import {formatPrice, CLASES} from '../data/clases'

export default function Card({CLASES, onPress}) {
    return(
        <Pressable onPress={onPress}>
            <Image source={{uri: CLASES.image}}/>
            <View>
                <LabelLevel level={CLASES.level}/>
                <Text style= {styles.title}> {CLASES.title}</Text>
                <Text> {CLASES.level} </Text>
                <Text> {CLASES.professor.name} </Text>
                <Text> formatPrice{CLASES.price} </Text>
            </View>
        </Pressable>
    )
}
