import React, { useState,  } from 'react';
import { View, Image } from "react-native";
import { Headline, Checkbox, Paragraph, TextInput, Provider as PaperProvider, Button, HelperText, ActivityIndicator} from "react-native-paper";
import { themeProvider, create } from '../style/Style';
import crypto from "crypto-js/md5";
import AwesomeAlert from "react-native-awesome-alerts";

export default function Create({ navigation }) {
    const [SecureText, setSecureText] = useState(true);
    const [ShowAlert, setShowAlert] = useState(false);
    const [MessageAlert, setMessageAlert] = useState(null);
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

    const [loading, setLoading] = useState(false);

    
    async function createUser(user){
        let req = await fetch('http://192.168.15.4:7000/api/insert',
        {
            cache: 'default',
            headers: {'Content-Type':'application/json'},
            method: 'POST', 
            mode: 'cors',
            body: user,
        })
        let res = await req.json();
        if(res.status=='ok'){
            setShowAlert(true);
            setMessageAlert('User inserted with success.')
            setName('');
            setUsername('');
            setPassword('');
            setConfPassword('');
            setCheckbox(false);
        }else{
            setErrorUsername(res.error);
        }
        setLoading(false)
        
    }
   
    return (
      

        <PaperProvider theme={themeProvider}>
            <View style={create.mainView}>
                <Image source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/barber-shop-2605049-2195576.png' }} style={create.image} />
                <Headline style={create.headline}>Criando sua conta</Headline>
                <Paragraph style={create.help}>Preencha todos os campos</Paragraph>
                <TextInput onChangeText={text => setName(text)} style={create.input} error={!ErrorName ? false : true} placeholder='Complete name' label='Name' left={<TextInput.Icon name='face' size={24} color={themeProvider.colors.accent} />} maxLength={100} />
                <HelperText type='error' style={create.error(!ErrorName?'none':'flex')}>{ErrorName}</HelperText>
                <TextInput onChangeText={text => setUsername(text)} style={create.input} error={!ErrorUsername ? false : true} placeholder='Username' label='Username' left={<TextInput.Icon name='account' size={24} color={themeProvider.colors.accent} />} maxLength={100} />
                <HelperText type='error' style={create.error(!ErrorUsername?'none':'flex')}>{ErrorUsername}</HelperText>
                <TextInput onChangeText={text => setPassword(text)} style={create.input} error={!ErrorPassword ? false : true} placeholder='Your favorite password' label='Passoword' left={<TextInput.Icon name='lock' size={24} color={themeProvider.colors.accent} />} right={<TextInput.Icon name={SecureText ? 'eye' : 'eye-off'} onPress={() => setSecureText(!SecureText)} size={24} color={themeProvider.colors.accent} />} secureTextEntry={SecureText} maxLength={32} />
                <HelperText type='error' style={create.error(!ErrorPassword?'none':'flex')}>{ErrorPassword}</HelperText>
                <TextInput onChangeText={text => setConfPassword(text)} style={create.input} error={!ErrorConfPassword ? false : true} placeholder='Confirm the same password' label='Confirm Password' left={<TextInput.Icon name='lock-open' size={24} color={themeProvider.colors.accent} />} right={<TextInput.Icon name={SecureText ? 'eye' : 'eye-off'} onPress={() => setSecureText(!SecureText)} size={24} color={themeProvider.colors.accent} />} secureTextEntry={SecureText} maxLength={32} />
                <HelperText type='error' style={create.error(!ErrorConfPassword?'none':'flex')}>{ErrorConfPassword}</HelperText>
                <View style={create.containerCheck}>
                    <Checkbox status={checkbox ? 'checked' : 'unchecked'} uncheckedColor='#711' onPress={() => setCheckbox(!checkbox)} color={themeProvider.colors.primary} />
                    <Paragraph style={create.terms} onPress={() => setCheckbox(!checkbox)}>Aceita os termos de uso e de privacidade?</Paragraph>
                </View>
                <HelperText type='error' style={create.error(!ErrorCheckbox?'none':'flex')}>{ErrorCheckbox}</HelperText>
                <Button style={create.created} mode='contained' onPress={() => {
                    setLoading(true);
                    setErrorName('');
                    setMessageAlert(null);
                    setErrorUsername('');
                    setErrorPassword('');
                    setErrorConfPassword('');
                    setErrorCheckbox('');

                    if (Name.length < 0 || Name.length > 100 || Name == '' || Name == null) {
                        setErrorName('Preencha o nome corretamente.');
                        setLoading(false);
                        return;
                    } if (Username.length < 0 || Username.length > 100 || Username == '' || Username == null) {
                        setErrorUsername('Preencha o username corretamente.');
                        setLoading(false);
                        return;
                    }
                    if (Password.length < 0 || Password.length > 32 || Password == '' || Password == null) {
                        setErrorPassword('Preencha a senha corretamente.');
                        setLoading(false);
                        return;
                    }
                    if(Password.length < 8){
                        setErrorPassword('Digite uma senha maior que 8 caracteres.');
                        setLoading(false);
                        return;
                    }
                    if (ConfPassword.length < 0 || ConfPassword.length > 32 || ConfPassword == '' || ConfPassword == null) {
                        setErrorConfPassword('Preencha a confirmação de senha corretamente.');
                        setLoading(false);
                        return;
                    }
                    if (!checkbox){
                        setLoading(false);
                        setErrorCheckbox('Você precisar aceitar os termos')
                        return;
                    }
                    if(Password != ConfPassword){
                        setLoading(false);
                        setErrorConfPassword('Senhas estão diferentes');
                        return;
                    }else{
                        createUser(JSON.stringify({
                            name: Name,
                            email: Username,
                            password: crypto(Password).toString(),
                        }));
                    }
                }}>Create </Button>
                

                {loading==true && (
                    <AwesomeAlert 
                    show={loading}
                    title='Cadastrando...'
                    useNativeDriver
                    customView={(
                            <ActivityIndicator size={'large'} style={{marginTop: 15}} />  
                    )}
                 />
                )}
                <AwesomeAlert 
                    show={ShowAlert}
                    title='Wooow new member'
                    message={MessageAlert}
                    showConfirmButton
                    confirmText='Very good!'
                    useNativeDriver
                    confirmButtonStyle={create.confirmButtonStyle}
                    confirmButtonTextStyle={create.confirmText}
                    onConfirmPressed={()=>{setShowAlert(false);navigation.navigate('Login')}}
                />
                <Paragraph style={create.signin} onPress={() => navigation.navigate('Login')}>Already have an account?</Paragraph>
            </View>
        </PaperProvider>
    );
}