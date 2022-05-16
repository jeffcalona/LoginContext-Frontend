import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Index from './src/screens/Index/Index'
import Welcome from './src/screens/Welcome/Index';
import Register from './src/screens/Register/Index'
import Login from './src/screens/Login/Index.js'
import Home from './src/screens/Home/Index.js'
import UserProvider from './src/contexts/UserProvider.js'

const Stack = createStackNavigator()


function App () {
  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen headerMode={'none'} name={'Index'} component={Index} />
          <Stack.Screen headerMode={'none'} name={'Welcome'} component={Welcome} />
          <Stack.Screen headerMode={'none'} name={'Register'} component={Register} />
          <Stack.Screen headerMode={'none'} name={'Login'} component={Login} />
          <Stack.Screen headerMode={'none'} name={'Home'} component={Home} />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  )
}
console.disableYellowBox = true
export default App