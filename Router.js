import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import store from './src/Services/rootReducer';
import Main from './src/Components/main';
import Notes from './src/Components/notes';
import EditNote from './src/Components/editNote';
import DisplayNotes from './src/Components/displayNotes';
import Logout from './src/Components/logout';
import Splash from './src/Components/splash';
import {NavigationContainer} from '@react-navigation/native';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function myDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Notes" component={Notes} />
      <Drawer.Screen name="Logout" component={Logout} />
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
            name="Splash"
            component={Splash}
          />
          <Stack.Screen
            options={{header: () => null}}
            name="Main"
            component={Main}
          />
          <Stack.Screen
            options={{header: () => null}}
            name="MyDrawer"
            component={myDrawer}
          />
          <Stack.Screen
            name="Notes"
            component={Notes}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="editNote"
            component={EditNote}
            options={{header: () => null}}
          />
          <Stack.Screen name="DisplayNotes" component={DisplayNotes} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default myApp;
