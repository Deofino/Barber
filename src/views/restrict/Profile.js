import React,{useState,useEffect} from 'react';
import { View, PermissionsAndroid } from "react-native";
import { Text, Button, ThemeProvider,Image } from "react-native-elements";
import ViewDark from '../../components/ViewDark';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themeEle } from "../../style/Style";
import * as ImagePicker from "expo-image-picker";
export default function(props){
    const [image,setImage] = useState(null);
   
    return (

        <ViewDark>
            <ThemeProvider theme={themeEle}>
                <Text h2>Profile</Text>
                <Button title="pick" onPress={async()=>{
                    let permission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
                    console.log(permission);
                    let res = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images
                        ,quality: 0.5,
                        allowsEditing: true
                    });
                    await AsyncStorage.setItem('image',res.uri);
                    if(!res.cancelled){
                        setImage(res.uri);
                    }
                }} />
                <Image source={{uri: image}} style={{width:200,height: 200,}}/>
            </ThemeProvider>
        </ViewDark>
    );
}