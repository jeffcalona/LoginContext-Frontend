import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useContext} from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import UserContext from "../../contexts/UserContext";

import styles from './assets/styles.js'

//import styles from './assets/styles';

function Welcome (props){
  
  const { navigation } = props

  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: '20%'}}>BIENVENIDO</Text>
      <TouchableOpacity style={{paddingHorizontal: 120, justifyContent: 'center'}} onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'white', textAlign: 'center', backgroundColor: '#60BEB0', padding: 20, marginVertical: 20}}>Inicia Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{paddingHorizontal: 120, justifyContent: 'center'}} onPress={() => navigation.navigate('Register')} >
        <Text style={{color: 'white', textAlign: 'center', backgroundColor: '#60BEB0', padding: 20}}>Regístrate</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome