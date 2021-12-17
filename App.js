import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screen/Gmail';

import ChatEmail from './screen/ChatEmail';
import Login from './screen/Login';

const Stack = createStackNavigator();

export default function App(){
   return(
     <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name = "Login" component = {Login} options = {{headerShown: false}}/>
       <Stack.Screen name= "HomeScreen" component = {HomeScreen} options = {{headerShown: false}}/>
       <Stack.Screen name= "ChatEmail" component = {ChatEmail} />

       </Stack.Navigator>


     </NavigationContainer>


   );




}