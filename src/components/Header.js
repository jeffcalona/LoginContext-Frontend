import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import logo from '../screens/assets/img/Logo.png'

const Header = () => {
  return (
    <>
      <Image source={logo} />
      <Text style={styles.title} >Haemos tus sueños realidad</Text>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontFamily: 'sans-serif-thin',
    fontSize: 32,
    marginTop: 15
  },
})

export default Header