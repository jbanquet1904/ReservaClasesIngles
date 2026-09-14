import React, {useState,useMemo} from "react";
import { View, Text, Image, Pressable, StyleSheet, TextInput, ScrollView, FlatList} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import LabelLevel from '../components/LabelLevel';
import ChipLevel from '../components/ChipLevel';
import Card from "../components/Card";
import useResponsive from "../hooks/useResponsive";
import EmptyStatus from "../components/EmptyStatus";

import { colors, radius, spacing, typography, shadow} from '../theme/index'
import {formatPrice, CLASSES, LEVELS} from '../data/classes'



export default function StartScreen ({navigation}){

    const insets = useSafeAreaInsets();
    const {columns: columns, paddingHorizontal} = useResponsive();

    const [level, setLevel] = useState('All');
    const [search,setSearch] = useState('');
    const results = useMemo(()=>{
        const searchText = search.trim().toLowerCase();
        return CLASSES.filter((classItem)=>{
            const matchesLevel = level === 'All' || classItem.level === level;
            const matchesText = searchText || classItem.professor.name.toLowerCase().includes(searchText) || classItem.title.toLowerCase().includes(searchText)
            return matchesLevel && matchesText
        });

    }, [level, search]);

    return(
        <View style ={[styles.screen, {paddingTop: insets.top + spacing.md}]}>
                
                    <Text style={[typography.title, {paddingHorizontal: 64}]}>English Class Booking Application</Text>
                <View style={styles.searcher}>
                    <Ionicons name="search" size={24} color={colors.text}/>
                        <TextInput style={styles.input}
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
                                color={colors.text}
                                onPress={()=> setSearch('')}
                            />
                        )
                    }
            </View>
                
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    style={{flexGrow: 0}}
                    contentContainerStyle={{
                        paddingVertical: spacing.lg,
                        paddingHorizontal: 32,
                    }}

                >
                    {
                        LEVELS.map((item) => (
                            <ChipLevel
                                key={item}
                                label={item}
                                active={level===item}
                                onPress={()=> setLevel(item)}
                            />
                        ))
                    }
                </ScrollView>
                <Text style={styles.counter}>
                    {results.length} {' '}
                    {results.length === 1 ?  'class':'classes'} Available

                </Text>
                <View style={{flex:1}}>
                    <FlatList
                
                
                data={results}
                keyExtractor={(item)=> item.id}
                renderItem={({item})=>(
                    <Card
                    classItem={item}
                    onPress={()=> navigation.navigate('ClassDetail', {classItem:item})}
                    />
                )}
                contentContainerStyle={{
                    paddingHorizontal: 32,
                    flexGrow: 1
                }}
                numColumns={columns}
                ListEmptyComponent={
                    <EmptyStatus
                        icon="search-outline"
                        title="No results found"
                        message="Try anothercombination"
                        onAction={()=>{
                            setLevel('All');
                            setSearch('');
                        }}
                    />
                }
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  searcher: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    height: 46,
    marginTop: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  input: { flex: 1, fontSize: 14, color: colors.text, paddingVertical: 0 },
  counter: {
    fontSize: 13,
    color: colors.text,
    paddingHorizontal: 32,
    paddingBottom: 16,
},
});


