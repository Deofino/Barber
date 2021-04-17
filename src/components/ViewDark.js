import React,{useState,useEffect} from "react";
import { View,ScrollView } from "react-native";
import { viewBlack } from "../style/Style";

const ViewDark = (props)=>{
        {return props.typeView=='scroll'
         ? (
            <ScrollView style={[viewBlack.Container]}>{props.children}</ScrollView>
        )
         :
        (
            <View style={[viewBlack.Container]}>{props.children}</View>
        ) }
}
export default ViewDark;