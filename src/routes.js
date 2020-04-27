import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Splash from './pages/Splash';
import Login from './pages/Login';
import Today from './pages/Today';
import Week from './pages/Week';
import Settings from './pages/Settings';
import Details from './pages/Details';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
      }}>
      <Tab.Screen
        name="Today"
        component={Today}
        options={{
          tabBarLabel: 'Hoje',
          tabBarIcon: ({ color, size }) => (
            <Icon name="today" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Week"
        component={Week}
        options={{
          tabBarLabel: 'Semana',
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-week" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Configurações',
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerBackTitle: '',
            headerTintColor: '#fff',
            title: 'Criar tarefa',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
