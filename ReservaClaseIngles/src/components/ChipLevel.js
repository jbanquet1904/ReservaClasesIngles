import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import {colors, spacing, radius} from '../theme'

export default function ChipLevel ({label, active,onPress}){
    return(
        <Pressable
            onPress={onPress}
            style={({pressed})=> [
                active && style.activeChip,
                pressed && {opacity: 0.7}
            ]}
            >
            <Text style={[style.text, active && style.activeText]}> {label} </Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
  chip: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.full,
    backgroundColor: colors.superficie,
    borderWidth: 1,
    borderColor: colors.borde,
    marginRight: spacing.sm,
  },
  activeChip: {
    backgroundColor: colors.primario,
    borderColor: colors.primario,
  },
  text: { fontSize: 13, fontWeight: '600', color: colors.softText },
  activeText: { color: '#FFFFFF' },
});