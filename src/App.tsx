import React from 'react';
import ProfileCard from './components/ProfileCard';
import MainHeader from './components/MainHeader';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProfileDetails from './components/ProfileDetails';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <>
      <NavigationContainer>
        <MainHeader />
        <Stack.Navigator screenOptions={{
            headerShown: false, // Hide the default header for all screens
          }}>
          <Stack.Screen name="Profile" component={ProfileCard} />
          <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <MainHeader />
      <ProfileCard /> */}
    </>
  );
}

export default App;
