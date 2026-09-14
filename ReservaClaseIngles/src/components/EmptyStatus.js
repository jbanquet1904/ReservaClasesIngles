import React from "react";
import {View, Text, StyleSheet} from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing } from "../theme";

export default function EmptyStatus ({icon='calendar-outline',title, message, onAction}){
    return(
    <View style={styles.container}>
        <View style={styles.circle}>
            <Ionicons name={icon} size={34} color={colors.text}/>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message} </Text>
    </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xxl,
  },
  circle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  title: { fontSize: 17, fontWeight: '700', color: colors.text, textAlign: 'center' },
  message: {
    fontSize: 14,
    color: colors.surface,
    textAlign: 'center',
    marginTop: spacing.sm,
    lineHeight: 20,
  },
});