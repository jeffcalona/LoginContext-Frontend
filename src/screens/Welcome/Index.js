import React from "react";
import {View, Text, TouchableOpacity, ImageBackground, Image} from 'react-native'

import Button from '../../components/Button'
import Header from '../../components/Header'

import imageBackground from '../assets/img/Background.jpeg'

import {styles} from './assets/styles.js'




function Welcome (props){
  
  const { navigation } = props

  return (
    <View style={styles.container} >
      <ImageBackground source={imageBackground} style={styles.imageBackground} >
      <View style={styles.viewHeader}>
        <Header/>
      </View>
      <View style={styles.viewButtons}>
        <Button buttonTitle={'Iniciar sesión'} onPressNavigation={() => navigation.navigate('Login')} />
        <TouchableOpacity style={styles.buttonWhite} onPress={() => navigation.navigate('Register')} >
          <Text style={styles.textButtonWhite} >Regístrate</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  )
}

export default Welcome