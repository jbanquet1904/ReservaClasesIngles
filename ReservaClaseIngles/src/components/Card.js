import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import LabelLevel from "./LabelLevel";
import { colors, spacing,radius, typography, shadow} from '../theme/index'
import {formatPrice} from '../data/classes'

export default function Card({classItem, onPress}) {
    return(
        <Pressable onPress={onPress} style={styles.card}>
            <Image source={{uri: classItem.image}} style={styles.image}/>
            <View>
                <LabelLevel level={classItem.level} />
                <Text style= {styles.title}> {classItem.title}</Text>
                <Text> {classItem.professor.name} </Text>
                <Text style = {styles.price}> {formatPrice(classItem.price)} </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        borderWidth: 1,
        borderColor: colors.border,
        overflow: 'hidden',
        marginBottom: 16,
        padding: 16
    },
    image: { width: '100%', height: 140, backgroundColor: colors.surface, borderRadius:16, paddingBottom: 8},
    info: { padding:16, gap:16},
    title: { fontSize: 16, fontWeight: '700', color: colors.text, paddingBottom:8, paddingTop:8},
    professor: { fontSize: 13, color: colors.softText, padding:16 },
    price: { fontSize: 15, fontWeight: '800', color: colors.primary, paddingTop:8},
    
})
