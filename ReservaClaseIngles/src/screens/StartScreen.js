import React, {useState,useMemo} from "react";
import { View, Text, Image, Pressable, StyleSheet, TextInput, ScrollView, FlatList} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import LabelLevel from '../components/LabelLevel';
import ChipLevel from '../components/ChipLevel';
import card from '../components/Card';

import { colors,radius, spacing,typography } from '../theme/index'
import {formatPrice, CLASES, NIVELES} from '../data/clases'
import Card from "../components/Card";



export default function StartScreen ({navigation}){

    const insets = useSafeAreaInsets();

    const [level, setLevel] = useState('All');
    const [search,setSearch] = useState('');
    const Resultados = useMemo(()=>{
        const textSearch = search.trim().toLowerCase();
        return CLASES.filter((clase)=>{
            const coincideLevel = level === 'All' || clase.level === level;
            const TextCoincide = textSearch || clase.professor.name.toLowerCase().includes(textSearch) || clase.title.toLowerCase().includes(textSearch)
            return coincideLevel && TextCoincide
        });

    }, [level, search]);

    return(
        <View style ={[style.pantalla, {paddingTop: insets.top + spacing.md}]}>
            <View style={{flex:1, backgroundColor: '#fff', paddingHorizontal: 16, paddingTop:16}}>
                <Text style={typography.title}>English Class Booking Application</Text>
                
                <Ionicons name="search" size={24} color={colors.surface}/>
                    <TextInput
                    value={search}
                    onChangeText={setSearch}
                    placeholder="Enter your name to start the search"
                    autoCorrect= {false}
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
                <FlatList
                data={Resultados}
                keyExtractor={(item)=> item.id}
                renderItem={(item)=>(
                    <Card
                    clase={item}
                    onPress={()=> navigation.navigate('ClassDetail', {clase:item})}
                    />
                )}
                />
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


