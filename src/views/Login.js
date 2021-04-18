import React,{useState, useEffect} from 'react';
import { View, StatusBar, Image } from "react-native";
import { Headline, Paragraph, TextInput, Provider as PaperProvider, Button, HelperText, ActivityIndicator } from "react-native-paper";
import {themeProvider, Login} from '../style/Style';
import Alert from "react-native-awesome-alerts";
import crypto from "crypto-js/md5";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function(props){
    const [SecureText, setSecureText] = useState(true);
    const [Username, setUsername] = useState('');
    const [ShowAlert, setShowAlert] = useState(false);
    const [ShowAlert2, setShowAlert2] = useState(false);
    const [MessageAlert, setMessageAlert] = useState(null);
    const [Password, setPassword] = useState('');
    const [ErrorUsername, setErrorUsername] = useState('');
    const [ErrorPassword, setErrorPassword] = useState('');



    async function loginRequest(data){
        setUsername('');
        setPassword('');
        setMessageAlert(null);
        setShowAlert(false);
        let req = await fetch('https://deofino-barber.herokuapp.com/api/login',{
            cache: 'default',
            headers: {'Content-Type':'application/json'},
            method: 'post', 
            mode: 'cors',
            body: data,
        });
        let res = await req.json();
        if(res.status == 'error'){
            setShowAlert(true);
            setMessageAlert(res.message);
        }else{
            await AsyncStorage.setItem('token',res.token);
            await AsyncStorage.setItem('user',JSON.stringify(res.user));
            props.navigation.navigate('Restrict');
        }
    };
    
    useEffect(()=>{
        if(props.route.params==undefined){
            setShowAlert2(false);
        }else{
            setShowAlert2(true);
        }             
    },[props.route]);
    useEffect(()=>{
        (async()=>{
            let token = await AsyncStorage.getItem('token');
            if(token&&token!=null){
                props.navigation.navigate('Restrict');
            }else{
                return (<View style={Login.container}><ActivityIndicator size='large' color={themeProvider.colors.primary} /></View>)
            }
        })()
    },[])

        return (
            <PaperProvider theme={themeProvider}>
                <View style={Login.container}> 
                        <Alert 
                            title='Some error '
                            show={ShowAlert2}
                            message={props.route.params!=undefined?props.route.params.message:''}
                            cancelText='Ops ...'
                            showCancelButton
                            cancelButtonStyle={Login.cancelButtonStyle}
                            cancelButtonTextStyle={Login.cancelText}
                            onCancelPressed={()=>setShowAlert2(false)}
                        />
                    <Image source={{uri: 'https://image.flaticon.com/icons/png/512/2259/2259548.png'}} style={Login.image} />
                    <Headline style={Login.headline}>Corleone Barbearia</Headline>
                    <Paragraph style={Login.paragraph}>Entre com suas credenciais</Paragraph>
                    <TextInput  numberOfLines={1} value={Username} style={Login.input} onChangeText={text=>setUsername(text)} error={ErrorUsername==''?false:true} left={<TextInput.Icon name='account' size={24} color={themeProvider.colors.darkGray} />} placeholder='Username' label='Username' maxLength={100} />
                    <HelperText type='error' style={Login.Display(ErrorUsername==''?'none':'flex')}>{ErrorUsername}</HelperText>
                    <TextInput numberOfLines={1} value={Password} style={Login.input} onChangeText={text=>setPassword(text)} error={ErrorPassword==''?false:true} left={<TextInput.Icon name='lock' size={24} color={themeProvider.colors.darkGray} />} right={<TextInput.Icon onPress={()=>setSecureText(!SecureText)} name={SecureText?'eye':'eye-off'} size={24} color={themeProvider.colors.darkGray} />} maxLength={32}  placeholder='Your favorite password!' secureTextEntry={SecureText} label='Password' />
                    <HelperText type='error' style={Login.Display(ErrorPassword==''?'none':'flex')}>{ErrorPassword}</HelperText>
                    <Button  style={Login.button} mode="contained" onPress={()=>{
                        setErrorUsername('');
                        setErrorPassword('');
                         if(Username.length<0 || Username.length>100 || Username=='' || Username==null){
                             setErrorUsername('Preencha o username corretamente.');
                             return;
                         }
                         if(Password.length<0 || Password.length>100 || Password=='' || Password==null){
                             setErrorPassword('Preencha a senha corretamente.');
                             return;
                         }
                        
                        loginRequest(JSON.stringify({
                            email: Username,
                            password: crypto(Password).toString(),
                        }))
    
                    }}>Log in</Button>
                    <Paragraph style={Login.create} onPress={()=>props.navigation.navigate('Create')}>Crie sua conta agora!</Paragraph>
                </View>
                <Alert 
                    title='Some error '
                    show={ShowAlert}
                    message={MessageAlert}
                    cancelText='Ops ...'
                    showCancelButton
                    cancelButtonStyle={Login.cancelButtonStyle}
                    cancelButtonTextStyle={Login.cancelText}
                    onCancelPressed={()=>setShowAlert(false)}
                />
                <StatusBar />
            </PaperProvider>
        );
}