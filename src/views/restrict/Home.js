import React,{useEffect,useState} from 'react';
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ViewDark from "../../components/ViewDark";
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

    const theme = {
        Text:{
            h3Style:{fontSize: 25},
            style:{color: '#f5f5f5',letterSpacing: 1.3,}
        }
    }

    return (
      <ViewDark typeView='view'>
          <ThemeProvider theme={theme}>
                <Text h3 > Todas suas consultas </Text>
          </ThemeProvider>
      </ViewDark>
    );
}