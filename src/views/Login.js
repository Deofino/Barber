import React from 'react';
import { View, Text } from "react-native";

export default function(props){
    return (
        <View>
            <Text onPress={()=>{
                props.navigation.navigate('Restrict');
            }}>Login</Text>
        </View>
    );
}