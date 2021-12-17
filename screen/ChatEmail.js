import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import {FontAwesome5, Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';


export default function ChatEmail({route}){

    const {id} = route.params;
    const [chat, setChat] = useState([]);

    useEffect (() => {

        async function getData(){
            const response = await fetch(`https://mobile.ect.ufrn.br:3002/emails/${id.id}`);
            const chat = await response.json();
            setChat(chat);
            console.log(chat);
        }
        getData();
      

    }, [] );

    return (
  <View style = {styles.container}>
      <StatusBar/>
      <View >
     <View style = {styles.titulo}>
        <Text style = {styles.texto}>{chat.tittle}</Text>
        <Ionicons style = {styles.estrela}  name={chat.star ? 'star' : 'star-outline'} size = {20} color = 'yellow'  />  
        
        
    </View>

    <View style = {styles.remetente}>
        
        <View style = {styles.foto}>
        <Image style = {styles.imgFoto} source = {{uri: chat.picture}}/>
        </View>
        
        <View style = {styles.dadosRemetente}>
            <Text style = {styles.from}>{chat.from}</Text>
            <View style = {styles.para}>
            <Text style = {styles.to}>para {chat.to} </Text>
            <FontAwesome5 name = "sort-down" color = 'white'/>
            
            </View>
            
            
            
            
        </View>
        <View style = {styles.horario}>
      <Text style = {styles.time}>{chat.time}</Text>
          
    </View>
   
    </View>
    
    </View>
    <WebView
      
      
      source={{ html: `<div style="font-size: 50px; margin: 30;">${chat.body}</div>`} }
      style = {{margin: 10, borderRadius: 20,}}
      
      />
      
  </View>

    )
    
    
     
    
    
    }
    
    
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#222',
        },
        titulo:{
      height: 100,
      
      
      backgroundColor: '#222',
      flexDirection: 'row',
      justifyContent: 'space-between'
     
      
    
        },
        estrela:{
        margin: 30

        },
        texto:{
            color: '#fff',
            fontSize: 30,
            fontWeight: "600",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            alignItems: 'center'
    
        },
        remetente:{
        height: 70,
        backgroundColor: '#222',
        flexDirection: 'row',
        
        
        
        },
        para:{
        flexDirection: 'row',
        },
        to:{
        color: '#fff'
        },
        foto:{
            height: 70,
            width: 90,
            backgroundColor: '#222',
            justifyContent: 'center',
            alignItems: 'center',
            
        },
        imgFoto: {
            height: 50,
            width: 50,
            borderRadius: 30,
           
            
           
        },
        dadosRemetente:{
          width: 230,
          backgroundColor: '#222',
          justifyContent: 'center',
    
    
        },
        from:{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff'
        },
        horario:{
            flexDirection: 'column',
          
            alignItems: 'center',
            
            
            marginLeft: 20,
            marginVertical: 20,
            color: '#fff'
          },
         time: {
           color: '#fff'
         }
       
      
      });
      