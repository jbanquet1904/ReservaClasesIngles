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

const styles = StyleSheet.create({
    container: {
        alignSelf:'flex-start',
        paddingVertical: 3,
        paddingHorizontal:spacing.m,
        borderWidth:1,
        borderRadius: radius.full,
        backgroundColor: colors.surface,
        borderColor: colors.primary
    
    },
    text: {fontSize: 11,fontWeight: '700', letterSpacing: 0.3, color: colors.text, padding:8}
})