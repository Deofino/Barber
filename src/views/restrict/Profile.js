import React,{useState,useEffect} from 'react';
import { View, PermissionsAndroid } from "react-native";
import { Text, Button, ThemeProvider,Image,Input } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome'
import * as MediaLibrary from 'expo-media-library'
import ViewDark from '../../components/ViewDark';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themeEle } from "../../style/Style";
import * as ImagePicker from "expo-image-picker";
export default function(props){
    const [image,setImage] = useState(null);
    const [user,setUser] = useState(null);

    useEffect(()=>{
        (async()=>{
            await getUser();
            
        })()
    })
    useEffect(async() => {
        let imageA = await AsyncStorage.getItem('image');
            if(imageA!=null&&imageA!=''){
                setImage(imageA);
            }
    }, [AsyncStorage.getItem('image')])

    const getUser=async()=>{
        let localUser = JSON.parse(JSON.parse(await AsyncStorage.getItem('user')));
        if(localUser!=null||localUser!=false){
            setUser(localUser);
        }
    }
    const getImage=async()=>{
        let permission = await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE]);
        if(permission!='granted'){
            let res = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images
                ,quality: 0.5,
                allowsEditing: true,
                base64: true,
            });
            if(!res.cancelled){
                let media = await MediaLibrary.createAssetAsync(res.uri);
                let album = await MediaLibrary.createAlbumAsync('Barber',media);
                await MediaLibrary.deleteAssetsAsync(media);
                let newMedia = await MediaLibrary.getAssetsAsync({
                    album: album,
                })
                await AsyncStorage.setItem('image',newMedia.assets[0].uri)
            }
        }else{
            alert('We need of your permission...')
        }
    }
    return (

        <ViewDark>
            <ThemeProvider theme={themeEle}>
                <Text h2>Profile</Text>
                <Button title="pick" onPress={async()=>getImage()}/>
                {image!=null&&<Image source={{uri: image}} style={{width:200,height: 200,}}/>}
                <Input
                />
            </ThemeProvider>
        </ViewDark>
    );
}