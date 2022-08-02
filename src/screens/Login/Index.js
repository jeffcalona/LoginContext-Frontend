import React, {useState, useContext} from 'react'
import {View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import axios from 'axios'

import AsyncStorage from '@react-native-async-storage/async-storage';

import UserContext from '../../contexts/UserContext.js';

import imageBackground from '../assets/img/Background.jpeg'

import {styles} from './assets/styles.js'

function Index (props) {

  const {navigation} = props

  const [formInfo , setFormInfo] = useState({
    name: '',
    email: '',
    password: ''
  })

  const {userDetails, setUserDetails} = useContext(UserContext)

  function onChangeText(text, key){
    setFormInfo({
        ...formInfo,
        [key] : text
    })
  }

  const value = formInfo

  const login = async () => {

   const data = {...value}

    const user = await axios.post(`${process.env.DATABASE}${'login'}`, data)
    if (user) {
      const userData = user.data
      
      const jsonValue = JSON.stringify(userData)
      await AsyncStorage.setItem('user', jsonValue)
      setUserDetails({...userData})

      navigation.navigate('Home')
    } else alert('Datos incorrectos')
  }

 

  return (
    <View style={styles.container}>
      <ImageBackground source={imageBackground} style={styles.imageBackground}>
        <Text style={styles.title}>Login Screen</Text>
        <View style={styles.inputContainer}>
          <Text>Ingrese Email</Text>
          <TextInput style={styles.input} placeholder='Email' onChangeText={text => onChangeText(text, 'email')}/>
        </View>
        <View style={styles.inputContainer}>
          <Text>Ingrese Contraseña</Text>
          <TextInput style={styles.input} placeholder='Contraseña' secureTextEntry onChangeText={text => onChangeText(text, 'password')}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => login()}>
          <Text style={styles.textButton}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Index