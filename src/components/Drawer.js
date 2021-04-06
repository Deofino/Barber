import React,{useState,useEffect} from 'react';
import { View, Share, } from "react-native";
import { Paragraph, Title, Avatar, Provider as PaperProvider, Divider} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { MyDrawer,restrict } from "../style/Style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { themeProvider } from "../style/Style";
export default function(props){

    const [name,setName] = useState(null);
    const [username,setUsername] = useState(null);

    useEffect(()=>{
        (async()=>{
            let user = JSON.parse(await AsyncStorage.getItem('user'));
            setName(user.name);
            setUsername(user.email);

        })()
    },[])

    return (
        <PaperProvider theme={themeProvider}>
            <DrawerContentScrollView {...props}  contentContainerStyle={MyDrawer.content}>
                <View style={MyDrawer.header}>
                    <Avatar.Icon icon={()=><Icon name='face' size={35} color='#eee' />} style={MyDrawer.icon} />
                    <Title style={MyDrawer.white}>{name}</Title>
                    <Paragraph style={MyDrawer.white}>{username}</Paragraph>
                </View>
                <Divider style={MyDrawer.divider} />
                <DrawerItemList {...props} itemStyle={MyDrawer.item} labelStyle={MyDrawer.label} />
                <DrawerItem style={MyDrawer.item} onPress={()=>{
                    Share.share({
                        message: 'Conheça a melhor barbearia da zona leste! Baixe já nosso App',
                        title: 'Corleone APP!'
                    },{dialogTitle:'Corleone APP!'})
                }} icon={()=><Icon name='share-variant' size={23} color='#eee' />} labelStyle={MyDrawer.label} label='Share App' />
            </DrawerContentScrollView>
        </PaperProvider>
    );
}