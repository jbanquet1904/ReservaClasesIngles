import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackClass from './ReservaClaseIngles/src/navigation/StackClass'
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text> MENU </Text>
      </SafeAreaView>
      <NavigationContainer>
        <StatusBar style="light"/>
          <StackClass/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
