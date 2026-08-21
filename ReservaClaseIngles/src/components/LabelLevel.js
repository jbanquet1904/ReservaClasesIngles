import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import {colors,radius,spacing,typography} from '../theme/index'

export default function LabelLevel({ level }){
    return(
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            <Text style={styles.text}> { level } </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignSelf:'auto',
        paddingVertical: 3,
        paddingHorizontal:spacing.m,
        borderWidth:1
    },
    text: {fontSize: 11,fontWeight: '700', letterSpacing: 0.3}
})