import React, {useState,useEffect} from "react";
import { View, Text, Image, Pressable, StyleSheet, TextInput, ScrollView} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LabelLevel from "../components/LabelLevel";
import { colors,radius, spacing,typography } from '../theme/index'
import {formatPrice, CLASES, NIVELES} from '../data/clases'
import ChipLevel from "../components/ChipLevel";


export default function StartScreen ({navigation}){

    const insets = useSafeAreaInsets();

    const[level, setLevel] = useState('All');
    const[search,setSearch] = useState('');

    return(
        <View style ={[style.pantalla, {paddingTop: insets.top + spacing.md}]}>
            <View style={{flex:1, backgroundColor: '#fff', paddingHorizontal: 16, paddingTop:16}}>
                <Text>English class booking application</Text>
                <View>
                <Ionicons name="search" size={24} color={colors.surface}/>
                    <TextInput
                    fontSize={20}
                    value={search}
                    onChangeText={setSearch}
                    placeholder="Enter your name to start the search"
                    autoCorrect= {false}
                    autoComplete= {false}
                    />
                {
                    search.length > 0 && (
                        <Ionicons 
                            name="close-circle" 
                            size={24} 
                            color={colors.surface}
                            onPress={()=> setSearch('')}
                        />
                    )
                }
                </View>
                <ScrollView
                horizontal
                showsHorizontalScrollIndicator = {false}
                style={{flexGrow: 0}}
                >
                    {
                        NIVELES.map((item) => (
                            <ChipLevel
                            key={item}
                            label={item}
                            active={item}
                            onPress={()=> setLevel(item)}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: colors.background },
  buscador: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.superficie,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    height: 46,
    marginTop: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  input: { flex: 1, fontSize: 14, color: colors.text, paddingVertical: 0 },
});


