// StackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileCard from '../Components/ProfileCard';
import Transaction from '../Components/Transaction';
import ProfileDetails from '../Components/ProfileDetails';
import NameSection from '../Components/NameSection';

const Stack = createNativeStackNavigator();

const StackNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="ProfileStack" component={ProfileDetails} />
    
  </Stack.Navigator>
);

export default StackNavigator;
