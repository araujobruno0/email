import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';


export default function Gmail({navigation}) {
  const [email, setEmail] = useState([]);

  useEffect(function(){
    async function getData() {
      const response = await fetch('https://mobile.ect.ufrn.br:3002/emails');
      const emailServidor = await response.json();
      setEmail(emailServidor)
    }
  getData();

  }, [])
  

   function renderItem ({item}){
    return <TouchableOpacity style = {styles.emails}   onPress ={() => navigation.navigate('ChatEmail', {id: item})} >
    <View style = {styles.foto}>
      <Image style = {styles.imgFoto} source = {{uri: item.picture}}/>
      

    </View>
    <View style = {styles.textos}>
    <Text style = {styles.nome}   >{item.to}</Text>
    <Text style = {styles.titulo}   >{item.tittle}</Text>
    <Text style = {styles.resumo}   >{item.summary}</Text>

    </View>
    <View style = {styles.horario}>
      <Text>{item.time}</Text>
      <Boolean>{item.star}</Boolean>
    </View>
   </TouchableOpacity>
   }


  return (

<View style={styles.container}>
      
      <StatusBar style="auto" />

    <View style = {styles.header}>
   <Image style = {styles.imglogo} source = {require('../assets/gmail.png')}/>
    </View>
    <View style = {styles.emails}>
    <FlatList
        data = {email}
        renderItem = {renderItem}
        keyExtractor = {item => item.id}/>
    </View>


    </View>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  header:{
    flexDirection: 'row',
    height: 80,
    padding: 25,
    backgroundColor: '#111',
   alignItems: 'center',
   justifyContent: 'space-between',
   borderBottomEndRadius: 15,
   borderBottomStartRadius: 15,

  },
  imglogo:{
    height: 35,
    width: 155
  },
  emails:{
  flex: 1,
   backgroundColor: '#fff',
   flexDirection: 'row',
   borderWidth: 1,
   borderColor: '#DCDCDC'
   
  },

  foto:{
height: 100,
width:100,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center'

  },
  textos:{
    flexDirection: 'column',
    justifyContent: 'center',
    width: 240,
    backgroundColor: '#fff'
  },
  imgFoto:{
    height: 70,
    width: 70,
    borderRadius: 35,
    margin: 5,
    
    
  },
  nome:{
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    
    
  },
  titulo:{
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
    color: '#888',
  },
  resumo:{
    fontSize: 15,
    marginLeft: 10,
    color: '#888',
  },
  horario:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 6,
    marginTop: 20,
  }

  

});
