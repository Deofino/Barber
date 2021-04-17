import * as React from 'react';
import { TouchableHighlight } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Shedule, Edit, Profile } from "../Views";
import MyDrawer from "../components/Drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BackHandler,Alert } from 'react-native';
import { restrict } from '../style/Style';
import { DrawerActions } from '@react-navigation/routers';
export default function(props){

    React.useEffect(()=>{
        (async()=>{
            let token = await AsyncStorage.getItem('token');
            if(token==null|| !token){
                logout();
            }
        })()
        const back = BackHandler.addEventListener('back',()=>ShowAlert());
        return ()=>back.remove();
    },[]);
   
    const logout=async()=>{
        let token = await AsyncStorage.getItem('token');
        if(token && token != null){
            await AsyncStorage.removeItem('token');
            props.navigation.navigate('Login');
        }
    }
    const ShowAlert=()=>{
        
        Alert.alert('Informação','Deseja sair ou realizar o logout?',
        [
            {
                text: 'Logout',
                onPress: ()=>logout()
            },
            {
                text: 'Sair',
                onPress:()=>{BackHandler.exitApp()}
            }
        ],{cancelable:true});
        
        return true;
    }


    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator 
        screenOptions={{
                headerShown:true,
                headerStyle:restrict.header,
                headerTitleStyle: restrict.title,
                headerLeft:()=>(
                    <TouchableHighlight underlayColor='#ffffff33' activeOpacity={0.75} style={restrict.left} onPress={()=> props.navigation.dispatch(DrawerActions.openDrawer())  }>
                        <Icon name='menu'  size={30} color='white' />
                    </TouchableHighlight>
                )
            }}
        drawerContent={(props)=><MyDrawer {...props}/>}>
            <Drawer.Screen name='Home' options={{title:'Início' ,drawerIcon:()=><Icon name='home' size={23} color='#eee' />}} component={Home} />
            <Drawer.Screen name='Shedule' options={{title:'Agendar',drawerIcon:()=><Icon name='calendar-clock' size={23} color='#eee' />}} component={Shedule} />
            <Drawer.Screen name='Edit' options={{title:'Editar',drawerIcon:()=><Icon name='pencil' size={23} color='#eee' />}} component={Edit} />
            <Drawer.Screen name='Profile' options={{title:'Perfil',drawerIcon:()=><Icon name='account' size={23} color='#eee' />}} component={Profile} />
        </Drawer.Navigator>        
        
    );
}