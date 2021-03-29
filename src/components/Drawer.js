import React from 'react';
import { View, Share, } from "react-native";
import { Title, Paragraph, Headline, Avatar, Provider as PaperProvider, Divider} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { MyDrawer } from "../style/Style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { themeProvider } from "../style/Style";
export default function(props){
    return (
        <PaperProvider theme={themeProvider}>
            <DrawerContentScrollView {...props} contentContainerStyle={MyDrawer.content}>
                <View style={MyDrawer.header}>
                    <Avatar.Icon icon={()=><Icon name='face' size={35} color='#eee' />} style={MyDrawer.icon} />
                    <Headline style={MyDrawer.white}>Corleone Barber</Headline>
                    <Paragraph style={MyDrawer.white}>corleone.barber@gmail.com.br</Paragraph>
                </View>
                <Divider style={MyDrawer.divider} />
                <DrawerItemList {...props} itemStyle={MyDrawer.item} labelStyle={MyDrawer.label} />
                <DrawerItem style={MyDrawer.item} onPress={()=>{
                    Share.share({
                        message: 'Conheça a melhor barbearia da zona leste! Baixe já nosso App',
                        title: 'Corleone APP!'
                    },{dialogTitle:'Corleone APP!'})
                }} icon={()=><Icon name='share-variant' size={25} color='#eee' />} labelStyle={MyDrawer.label} label='Share App' />
            </DrawerContentScrollView>
        </PaperProvider>
    );
}