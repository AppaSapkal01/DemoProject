import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import Registration from './Components/Registration';
// import { Calendar } from 'react-native-calendars';
import Calendar from './Components/CalenderComp'
import Login from './Components/Login';

function App() {
  return (
    <>
      <NavigationContainer>
        <DrawerNavigator />
        
      </NavigationContainer>
    </>
  );
}

export default App;
