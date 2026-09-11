import React,{useState, useMemo} from "react";
import { View, Text, Image, ScrollView, StyleSheet, Alert } from "react-native/types_generated/index";
import { Ionicons } from "@expo/vector-icons";
import useResponsive from "../hooks/useResponsive";
import { colors, spacing, radius, typography, sombra } from "../theme";
import LabelLevel from "../components/LabelLevel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { formatPrice } from "../data/clases";

export default function ClassDetailScreen ({route, navigation}){
    
    const insets = useSafeAreaInsets();
    const {clase} = route.params;
    
    return(
        <View style={styles.pantalla}>
            <ScrollView
                showVerticalScrollIndicator = {false}
                contentContainerStyle ={{paddingBottom: 120}}
            >
                <Image source={{uri:clase.image}} resizeMode="Cover" style= {styles.portada}/>

            //Foto del profesor, al lado su nombre con apellido
            //precio
            //Duracion de la clase
            //Cupos
            //Horarios
            //Boton que se llame reservar clase
            
            </ScrollView>
        </View>
        
    )
}

---------Estilos DetalleClaseScreen.js------
const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: colors.fondo },
  portada: { width: '100%', backgroundColor: colors.primarioSuave },
  datos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
  },
  dato: { alignItems: 'center', gap: 2 },
  datoValor: { fontSize: 16, fontWeight: '800', color: colors.texto },
  profesor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.borde },
  profesorNombre: { fontSize: 15, fontWeight: '700', color: colors.texto },
  descripcion: { ...typography.cuerpo, color: colors.textoSuave, lineHeight: 22, marginTop: spacing.sm },
  barra: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.superficie,
    borderTopWidth: 1,
    borderTopColor: colors.borde,
    paddingVertical: spacing.lg,
    paddingTop: spacing.lg
  },
  precio: { fontSize: 18, fontWeight: '800', color: colors.primario },
});
 