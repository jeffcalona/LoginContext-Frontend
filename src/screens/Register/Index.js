import React, {useState, useContext} from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import axios from 'axios'

//import AsyncStorage from '@react-native-async-storage/async-storage';
//import UserContext from '../../contexts/UserContext';

import { styles } from './assets/styles';




function Register (props) {

  const {navigation} = props

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  /*const {userDetails, setUserDetails} = useContext(UserContext)

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('user', jsonValue)
      setUserDetails({...value})
      
    } catch (e) {
      // saving error
    }
  }*/

  function onChangeText (text, key) {
    setUser({...user, [key]: text})
  }

  const register = async () => {
    const data = {...user}

    console.log(data)

    if(data.name == '' || data.email == '' || data.password == '' || data.password_confirmation == '' ) {
      alert('Debe completar todos los campos')
    }
    try {
      await axios.post(`${process.env.DATABASE}${'register'}`, data)
      navigation.navigate("Login")
      //storeData()
    } catch (error) {
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
      <View style={styles.inputContainer}>
        <Text>Repita Contraseña</Text>
        <TextInput style={styles.input} placeholder='Contraseña' secureTextEntry onChangeText={text => onChangeText(text, 'password_confirmation')}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => register()}>
        <Text style={styles.textButton}>Regístrar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register