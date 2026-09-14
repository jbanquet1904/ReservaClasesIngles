import { Platform } from "react-native";

export const colors = {
    background: '#F4FAF6',
    surface: '#FFFFFF',
    primary: '#1B8A4B',
    softPrimary: '#DCF2E4',
    text: '#12291C',
    softText: '#5A7365',
    border: '#D5E8DC',  
}

//Espaciado: separacion de las letras y los componentes
export const spacing = {
    xs:4,
    sm:8,
    md:12,
    lg:16,
    xl:20
}

export const radius = {
    sm:8,
    md:16,
    lg:24,
    full:999
}

export const typography = {
    title:{fontSize: 16,fontWeight:'800', color: colors.text},
    subtitle: { fontSize: 10, fontWeight: '700', color: colors.text },
    body: { fontSize: 10, fontWeight: '400', color: colors.text }
}

export const shadow = {
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -2 }
}

export default{colors, spacing,radius,typography, shadow}