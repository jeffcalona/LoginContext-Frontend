import React, {useState, useContext} from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import axios from 'axios'

import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from '../../contexts/UserContext';

import { styles } from './assets/styles';




function Register (props) {

  const {navigation} = props

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const {userDetails, setUserDetails} = useContext(UserContext)

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('user', jsonValue)
      setUserDetails({...value})
      navigation.navigate("Home")
    } catch (e) {
      // saving error
    }
  }

  function onChangeText (text, key) {
    setUser({...user, [key]: text})
  }

  const register = async () => {
    const data = {...user}

    if(data.name == '' || data.email == '' || data.password == '' ) {
      alert('Debe completar todos los campos')
    }

    try {
      await axios.post(`${DATABASE}${'user'}`, data)
      navigation.navigate('Login')
    } catch (error) {
      console.log(error)
      alert('Error al enviar el formulario')
    }

  }


  return (
    <View>
     <Text style={styles.title}>Regístrate</Text>
      <View style={styles.inputContainer}>
        <Text>Ingrese Nombre</Text>
        <TextInput style={styles.input} placeholder='Nombre' onChangeText={(text) => onChangeText(text, 'name')}/>
      </View>
      <View style={styles.inputContainer}>
        <Text>Ingrese Email</Text>
        <TextInput style={styles.input} placeholder='Email' onChangeText={(text) => onChangeText(text, 'email')}/>
      </View>
      <View style={styles.inputContainer}>
        <Text>Ingrese Contraseña</Text>
        <TextInput style={styles.input} placeholder='Contraseña' secureTextEntry onChangeText={text => onChangeText(text, 'password')}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => register()}>
        <Text style={styles.textButton}>Regístrar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register