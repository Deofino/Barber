import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Shedule, Edit, Profile } from "../Views";
import MyDrawer from "../components/Drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function(props){
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator screenOptions={{headerShown:true}} drawerContent={(props)=><MyDrawer {...props} />}>
            <Drawer.Screen name='Home' options={{drawerIcon:()=><Icon name='home' size={24} color='#eee' />}} component={Home} />
            <Drawer.Screen name='Shedule' options={{drawerIcon:()=><Icon name='calendar-clock' size={24} color='#eee' />}} component={Shedule} />
            <Drawer.Screen name='Edit' options={{drawerIcon:()=><Icon name='pencil' size={24} color='#eee' />}} component={Edit} />
            <Drawer.Screen name='Profile' options={{drawerIcon:()=><Icon name='account' size={24} color='#eee' />}} component={Profile} />
        </Drawer.Navigator>        
    );
}