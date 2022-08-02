import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "20%",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#CECECE',
    width: '80%',
  },
  inputContainer: {
    alignItems: 'center',
    marginVertical: 20
  },
  button: {
    paddingHorizontal: 120,
    justifyContent: 'center'
  },
  textButton: {
    color: 'white',
    textAlign:'center',
    backgroundColor: '#60BEB0',
    padding: 20
  }
})

export {styles}