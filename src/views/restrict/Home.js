import React,{useEffect,useState} from 'react';
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ViewDark from "../../components/ViewDark";
import { themeEle } from "../../style/Style";
import {Text, ThemeProvider,} from 'react-native-elements';

export default function(props){
    const [token,setToken] = useState(null);

    useEffect(()=>{
        (async()=>{
            let token = await AsyncStorage.getItem('token');
            if(token!=null){
                setToken(token);
            }else{
                props.navigation.navigate('Login',{message:'User nao cadastrado'})
            }
        })();
        
    },[])

    return (
      <ViewDark typeView='view'>
          <ThemeProvider theme={themeEle}>
                <Text h3 > Todas suas consultas </Text>
          </ThemeProvider>
      </ViewDark>
    );
}