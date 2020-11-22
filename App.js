import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import MyStackNavigator from "./StackNav/StackNav";


const Stack = createStackNavigator();

function App() {
  return ( 
    <NavigationContainer>
      <MyStackNavigator/>
    </NavigationContainer>   
  );
}
export default App;