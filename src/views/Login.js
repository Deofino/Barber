import React,{useState, useEffect} from 'react';
import { View, StatusBar, Image } from "react-native";
import { Headline, Paragraph, TextInput, Provider as PaperProvider, Button, HelperText } from "react-native-paper";
import {themeProvider, Login} from '../style/Style';
import crypto from "crypto-js/md5";
export default function(props){
    const [SecureText, setSecureText] = useState(true);
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [ErrorUsername, setErrorUsername] = useState('');
    const [ErrorPassword, setErrorPassword] = useState('');

    return (
        <PaperProvider theme={themeProvider}>
            <View style={Login.container}>
                <Image source={{uri: 'https://image.flaticon.com/icons/png/512/2259/2259548.png'}} style={Login.image} />
                <Headline style={Login.headline}>Corleone Barbearia</Headline>
                <Paragraph style={Login.paragraph}>Entre com suas credenciais</Paragraph>
                <TextInput  numberOfLines={1} style={Login.input} onChangeText={text=>setUsername(text)} error={ErrorUsername==''?false:true} left={<TextInput.Icon name='account' size={24} color={themeProvider.colors.darkGray} />} placeholder='Username' label='Username' maxLength={100} />
                <HelperText type='error' style={Login.Display(ErrorUsername==''?'none':'flex')}>{ErrorUsername}</HelperText>
                <TextInput numberOfLines={1} style={Login.input} onChangeText={text=>setPassword(text)} error={ErrorPassword==''?false:true} left={<TextInput.Icon name='lock' size={24} color={themeProvider.colors.darkGray} />} right={<TextInput.Icon onPress={()=>setSecureText(!SecureText)} name={SecureText?'eye':'eye-off'} size={24} color={themeProvider.colors.darkGray} />} maxLength={32}  placeholder='Your favorite password!' secureTextEntry={SecureText} label='Password' />
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


                }}>Log in</Button>
                <Paragraph style={Login.create} onPress={()=>props.navigation.navigate('Create')}>Crie sua conta agora!</Paragraph>
            </View>
            <StatusBar />
        </PaperProvider>
    );
}