import React,{useState, useEffect} from 'react';
import { View, StatusBar, Image } from "react-native";
import { Headline, Checkbox, Paragraph, TextInput, Provider as PaperProvider, Button, HelperText, Title } from "react-native-paper";
import {themeProvider, create} from '../style/Style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import crypto from "crypto-js/md5";

export default function Create({navigation}){
    const [SecureText, setSecureText] = useState(true);
    const [Name, setName] = useState('');
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfPassword, setConfPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [ErrorName, setErrorName] = useState(false);
    const [ErrorCheckbox, setErrorCheckbox] = useState(false);
    const [ErrorConfPassword, setErrorConfPassword] = useState(false);
    const [ErrorUsername, setErrorUsername] = useState(false);
    const [ErrorPassword, setErrorPassword] = useState(false);

    return (
        <PaperProvider theme={themeProvider}>
            <View style={create.mainView}>
            <Image source={{uri: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/barber-shop-2605049-2195576.png'}} style={create.image} />
                <Headline style={create.headline}>Criando sua conta</Headline>
                <Paragraph style={create.help}>Preencha todos os campos</Paragraph>
                <TextInput onChangeText={text=>setName(text)} style={create.input} error={!ErrorName?false:true} placeholder='Complete name' label='Name' left={<TextInput.Icon name='face' size={24} color={themeProvider.colors.accent} />}  maxLength={100} />
                <HelperText type='error' style={create.error}>{ErrorName}</HelperText>
                <TextInput onChangeText={text=>setUsername(text)} style={create.input} error={!ErrorUsername?false:true} placeholder='Username' label='Username' left={<TextInput.Icon name='account' size={24} color={themeProvider.colors.accent} />} maxLength={100} />
                <HelperText type='error' style={create.error}>{ErrorUsername}</HelperText>
                <TextInput onChangeText={text=>setPassword(text)} style={create.input} error={!ErrorPassword?false:true} placeholder='Your favorite password' label='Passoword' left={<TextInput.Icon name='lock' size={24} color={themeProvider.colors.accent} />} right={<TextInput.Icon name={SecureText?'eye':'eye-off'} onPress={()=>setSecureText(!SecureText)} size={24} color={themeProvider.colors.accent} />} secureTextEntry={SecureText} maxLength={32} />
                <HelperText type='error' style={create.error}>{ErrorPassword}</HelperText>
                <TextInput onChangeText={text=>setConfPassword(text)} style={create.input} error={!ErrorConfPassword?false:true} placeholder='Confirm the same password' label='Confirm Password' left={<TextInput.Icon name='lock-open' size={24} color={themeProvider.colors.accent} />} right={<TextInput.Icon name={SecureText?'eye':'eye-off'} onPress={()=>setSecureText(!SecureText)} size={24} color={themeProvider.colors.accent} />} secureTextEntry={SecureText} maxLength={32} />
                <HelperText type='error' style={create.error}>{ErrorConfPassword}</HelperText>
                <View style={create.containerCheck}>
                    <Checkbox status={checkbox?'checked':'unchecked'} uncheckedColor='#711' onPress={()=>setCheckbox(!checkbox)} color={themeProvider.colors.primary} />
                    <Paragraph style={create.terms} onPress={()=>setCheckbox(!checkbox)}>Aceita os termos de uso e de privacidade?</Paragraph>
                </View>
                <HelperText type='error' style={create.error}>{ErrorCheckbox}</HelperText>
                <Button style={create.created} mode='contained'>Create</Button>
                <Paragraph style={create.signin} onPress={()=>navigation.navigate('Login')}>Already have an account?</Paragraph>
            </View>
        </PaperProvider>
    );
}