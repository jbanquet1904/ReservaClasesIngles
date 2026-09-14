import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import {colors, spacing, radius} from '../theme'
import { CurrentRenderContext } from "@react-navigation/native";

export default function ChipLevel ({label, active,onPress}){
    return(
        <Pressable
            onPress={onPress}
            style={({pressed})=> [
              style.chip,
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
    paddingVertical: 16,
    textAlign: 16,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.full,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: spacing.xs,
  },
  activeChip: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  text: { fontSize: 13, fontWeight: '600', color: colors.text },
  activeText: { color: '#FFFFFF' },
});