// BottomTabNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import CalendarComp from '../Components/CalenderComp';
import ProfileCard from '../Components/ProfileCard';
import Icons from '../Components/Icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#F46413',
          tabBarIconStyle: {
            // marginBottom: 5,
            // borderTopColor: '#F46413',
            // borderTopWidth: 2,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={StackNavigator}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Icons
                name="home"
                color={color}
                size={size}
                isFocused={focused}
              />
            ),
            tabBarActiveTintColor: '#F46413',
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarComp}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Icons
                name="calendar"
                color={color}
                size={25}
                isFocused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileCard}
          options={{
            tabBarLabel: 'profilePage',
            tabBarIcon: ({focused, color, size}) => (
              <Icons name="user" color={color} size={25} isFocused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
