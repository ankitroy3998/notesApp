import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import store from './src/Services/rootReducer';
import Notes from './src/Components/notes';
import editNote from './src/Components/editNote';
import {NavigationContainer} from '@react-navigation/native';

import Main from './src/Components/main';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function myDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Notes" component={Notes} />
    </Drawer.Navigator>
  );
}

function myApp() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{header: () => null}}
            name="Main"
            component={Main}
          />
          <Stack.Screen
            name="Notes"
            component={Notes}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="editNote"
            component={editNote}
            options={{header: () => null}}
          />
          <Stack.Screen
            options={{header: () => null}}
            name="MyDrawer"
            component={myDrawer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default myApp;
