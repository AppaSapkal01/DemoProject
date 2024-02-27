// StackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileCard from '../Components/ProfileCard';
import Transaction from '../Components/Transaction';
import ProfileDetails from '../Components/ProfileDetails';
import NameSection from '../Components/NameSection';
import EditProfile from '../Components/EditProfile';

const Stack = createNativeStackNavigator();

const StackNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Profile" component={ProfileDetails} />
    <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Edit Profile' }}/>
    
  </Stack.Navigator>
);

export default StackNavigator;
