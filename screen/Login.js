import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Login({navigation}){
    
    const [user , setUser] = useState('');
    const [password , setPassword] = useState('');


    async function logar(){
        const json = {
            user,
            password,
        };

        const headerOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(json),
        };
        const response = await fetch('https://mobile.ect.ufrn.br:3000/login', headerOptions);
        if(response.status === 200){
            const token = await response.text();
            await AsyncStorage.setItem('token', token);
            navigation.navigate('HomeScreen');
        }else{
            Alert.alert(
                'Erro',
                'Usuário ou senha invalida'
            );
        }



    }



    return (

        <View style={styles.container}>
              
              <StatusBar style="auto" />
              <Image style = {styles.imglogo} source = {require('../assets/gmail.png')}/>
              <View style ={styles.loginContainer}>
               <TextInput style = {styles.input} 
               placeholder = "Usuario:" 
               value = {user}
               onChangeText = {setUser}/>
               <TextInput style = {styles.input}
               placeholder = "Senha:" 
               secureTextEntry ={true}
               value = {password}
               onChangeText = {setPassword}/>
               <TouchableOpacity style = {styles.enviar}
               onPress = {() => logar()}>
                   
                  <Text style = {styles.botaoEnviar}>Entrar</Text>
               </TouchableOpacity>
              </View>
            

       </View>


    )}



    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          
        }, 
        imglogo:{
            height: 69,
            width: 300,
            marginVertical: 30
          },
        
        loginContainer:{
            height: 280,
            width: 350,
            backgroundColor: '#999',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center'
            
        },
        input:{
            height: 50,
            width:300,
            backgroundColor: '#fff',
            margin: 5,
            borderRadius: 15,
            paddingLeft: 5,
            
        },
        enviar:{
            height:50,
            width:100,
            backgroundColor: '#fff',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
        },
        botaoEnviar:{
            color: '#999',
            fontSize: 19,
            
            fontWeight: '600'
        }
        
    
    
    
    
    })
