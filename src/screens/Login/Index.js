import React, {useState, useContext} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import axios from 'axios'

import AsyncStorage from '@react-native-async-storage/async-storage';

import UserContext from '../../contexts/UserContext.js';

import {DATABASELOGIN} from '../../../Env'

import {styles} from './assets/styles.js'

function Index (props) {

  const {navigation} = props

  /*const dummy = {
    name: '',
    email : "prueba",
    password : "123456"
  }*/

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

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('user', jsonValue)
      setUserDetails({...value})
      navigation.navigate('Home')
    } catch (e) {
      // saving error
    }
  }

  const login = async () => {

   // const data = {...}

    const user = await axios.post(DATABASELOGIN, data)
    if (user) {
      storeData(value)
    } else alert('Datos incorrectos')
  }

 

  return (
    <View style={styles.contatiner}>
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
        <Text style={styles.textButton}>Iniciar Sesiòn</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Index