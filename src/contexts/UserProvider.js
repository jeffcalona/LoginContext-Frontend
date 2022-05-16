import React, {useState} from 'react'
import UserContext from './UserContext.js'

const UserProvider = ({children}) => {
  
  const [userDetails, setUserDetails] = useState({
    name: null,
    email: null,
    password: null
  })

  const retrieveData = async () => {
    try {
      const value = JSON.parse(await AsyncStorage.getItem('user'))
      if (value !== undefined) {
        setUserDetails(value)
        return value
      }
    } catch (error) {
      //Error retrieving data
    }
  }

  setInterval(() => {
    retrieveData()
  }, 2000)

  const object = {...userDetails, setUserDetails}
  console.log('object', object)

  return (
    <UserContext.Provider value={object}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider