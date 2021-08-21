import * as React from 'react';
import {StatusBar} from 'expo-status-bar'
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/Home';
import SpaceCraftScreen from './screens/SpaceCrafts';
import DailyPicScreen from './screens/DailyPic';
import StarMapScreen from './screens/StarMap';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}> 
        <Stack.Screen name = "Home" component={HomeScreen} />
        <Stack.Screen name = "SpaceCrafts" component={SpaceCraftScreen} />
        <Stack.Screen name = "DailyPic" component={DailyPicScreen} />
        <Stack.Screen name = "StarMap" component={StarMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
