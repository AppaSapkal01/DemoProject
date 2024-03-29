// DrawerNavigator.tsx
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Transaction from '../Components/Transaction';
import NameSection from '../Components/NameSection';
import History from '../Components/History';
import Login from '../Components/Login';

const Drawer = createDrawerNavigator();



const DrawerNavigator: React.FC = () => (
  <Drawer.Navigator
    // drawerContent={(props) => <CustomDrawer {...props} />}
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#F46413',
      },
      headerTintColor: '#FFFFFF',
      headerTitleAlign: 'center', // Align title to center
      headerTitleStyle: {
        fontSize: 18,
        fontFamily: 'Kanit',
        lineHeight: 26.91,
        fontWeight: '500'
      },
      drawerStyle: {
        backgroundColor: '#c6cbef',
        width: 240,
      },
    }}>
    <Drawer.Screen name="ProfileHome" component={BottomTabNavigator} options={{ drawerLabel: 'Home', headerTitle: 'Home'}}/>
    <Drawer.Screen name="Transaction" component={Transaction} />
    <Drawer.Screen name="History" component={History} />
    <Drawer.Screen name="Login" component={Login} />
    {/* Add other screens like 'History', 'Help', 'Apply for Leave' here */}
  </Drawer.Navigator>
);

export default DrawerNavigator;
