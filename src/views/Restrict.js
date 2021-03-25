import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Shedule, Edit, Profile } from "../views";

export default function(props){
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Shedule' component={Shedule} />
            <Drawer.Screen name='Edit' component={Edit} />
            <Drawer.Screen name='Profile' component={Profile} />
        </Drawer.Navigator>        
    );
}