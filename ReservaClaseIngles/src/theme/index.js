import { Platform } from "react-native";

export const colors = {
    background: '#1edc41',
    surface: '#fff',
    text: '#000000',
    border: '#bbecd6'
}

//Espaciado: separacion de las letras y los componentes
export const spacing = {
    xs:4,
    s:8,
    m:12,
    l:16,
    xl:20
}

export const radius = {
    s:8,
    m:16,
    l:24,
    full:999
}

export const typography = {
    title:{fontSize: 26,fontWeight:'800', color: colors.text}
}

export default{colors, spacing,radius,typography}