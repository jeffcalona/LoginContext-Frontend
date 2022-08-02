import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useContext, useEffect } from 'react'
import UserContext from '../../contexts/UserContext'

import Home from '../Home/Index'
import Login from '../Login/Index'
import Welcome from '../Welcome/Index'



function Index(props) {

  const { setUserDetails } = useContext(UserContext)
  const userDetails = useContext(UserContext)

  const retriveData = async () => {
    try {
      const value = JSON.parse(await AsyncStorage.getItem('user'))
      if (value !== undefined) {
        setUserDetails(value)
        return value
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    retriveData()
  }, [3000])

  console.log('email', userDetails.email)

  if (userDetails.email) {
    return <Home {...props} />
  } else {
    return <Welcome {...props} />
  }

  return <></>
}

export default Index