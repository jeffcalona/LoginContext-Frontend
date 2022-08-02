import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
const Button = ({ buttonTitle, onPressNavigation }) => {
  return (
    <TouchableOpacity style={styles.buttonOrange} onPress={onPressNavigation} >
      <Text style={styles.textButtonOrange}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonOrange: {
    marginVertical: 12,
    backgroundColor: '#FF5F2E',
    borderRadius: 30,
  },
  textButtonOrange: {
    color: 'white',
    textAlign:'center',
    paddingHorizontal: 60,
    paddingVertical: 20,
    fontSize: 20,
    fontFamily: 'sans-serif-thin',
  },
})

export default Button