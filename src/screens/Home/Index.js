import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {useContext} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import UserContext from '../../contexts/UserContext.js'

import {styles} from '../Login/assets/styles.js'

function Index (props) {

  const {navigation} = props

  const { UserDetails, setUserDetails } = useContext(UserContext)
  const userDetails = useContext(UserContext)

  const name = userDetails.name

  console.log('namee: ', name)
  


  const navigateLogin = async() => {
    try {
      await AsyncStorage.removeItem('user')
      navigation.navigate('Welcome')
      setUserDetails({})
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 30, marginBottom: 20}}>Hola {name}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateLogin()}>
        <Text style={styles.textButton}>Cerrar Sesión</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Index