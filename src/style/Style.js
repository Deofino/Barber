import React from 'react';
import { StyleSheet } from "react-native";
import { DefaultTheme, ThemeProvider as PaperProvider } from "react-native-paper";

const themeProvider = {
    ...DefaultTheme,
    roundness: 3,
    colors:{
        ...DefaultTheme.colors,
        primary: '#3282b8',
        accent: '#414141',
        gray: '#525252',
        darkGray: '#313131',
    }
}
const MyDrawer = StyleSheet.create({
    item:{
        backgroundColor: '#525252',
        marginLeft: 2,
        borderRadius: 2,
        marginTop: 1,
        marginRight: 2,
    },
    label:{
        fontSize: 15,
        color: '#eee',
    },
    content:{
        flex: 1,
        backgroundColor: '#313131',
    },
    header:{
        backgroundColor: themeProvider.colors.gray,
        borderRadius: 2,
        marginTop: 0,
        paddingHorizontal: 5,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    },
    divider: {
        height: 1,
        margin: 2,
        backgroundColor:  themeProvider.colors.gray,
    },
    white:{
        color: 'white',
    }
});

const Login = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#313131',
        paddingHorizontal:20,
        justifyContent: 'center',
    },
    headline:{
        color: '#eee',
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    paragraph:{
        color: '#eee',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 20,
    },
    input:{
        marginBottom: 10,
        fontSize: 14,
    },
    image:{
        width: 180,
        alignSelf: 'center',
        height: 140,
    },
    button:{
        paddingVertical: 5,
    },
    Display:(display)=>({
        display: display,
        fontSize: 14,
        color: 'rgba(240,20,20,1)',
        borderRadius: 4,
        backgroundColor: '#ffffff11',
        marginTop: -8,
        marginBottom: 7,
    }),
    create:{
        color: 'white',
        marginTop: 10,
        fontSize: 16,
        textAlign: 'right',
    },
    cancelButtonStyle:{
        backgroundColor: '#B44141',borderWidth: 1
    }
    ,cancelText:{
        fontSize:16,
         paddingVertical: 5,
         paddingHorizontal: 30,
         letterSpacing: 1
         ,fontWeight: 'bold'
    }

});

const create = StyleSheet.create({
    mainView:{
        backgroundColor: themeProvider.colors.darkGray,
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    containerCheck:{
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'center',
    },
    headline:{
        color: '#eee',
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 5,
    },
    help:{
        color: '#eee',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10,
    },
    input:{
        marginBottom: 10,
        fontSize: 14,
    },
    error:(display='none')=>({
        fontSize: 14,
        color: 'rgba(240,20,20,1)',
        borderRadius: 4,
        backgroundColor: '#ffffff11',
        marginBottom: 5,
        marginTop:-7,
        display: display,
    }),
    terms:{
        color: '#eee',
        fontSize: 15,
    },
    created:{
        paddingVertical: 5,
    },
    signin:{
        color: '#eee'
        ,textAlign: 'right',
        fontSize: 16,
        marginTop: 10,
    }
    ,image:{
        width: 150,
        height: 120,
        marginBottom: 5,
        alignSelf: 'center',
    }
    ,confirmButtonStyle:{
        backgroundColor: '#4B9F30',borderWidth: 1,elevation: 10,
    }
    ,confirmText:{
        fontSize:16,
         paddingVertical: 5,
         paddingHorizontal: 30,
         letterSpacing: 1
         ,fontWeight: 'bold'
    }

   
});

const restrict = StyleSheet.create({
    header:{
        backgroundColor: themeProvider.colors.darkGray,
        color: "#fff",
    },
    title: {
        color: "#fff",
        letterSpacing: 1.5,
    },
    left:{
        marginLeft: 10,
        padding: 5,
        borderRadius: 50
    }
});
const viewBlack = StyleSheet.create({
    Container: {
        backgroundColor: themeProvider.colors.gray,
        width: '100%',
        paddingHorizontal: 5,
        height: '100%',
    }
})
const themeEle={
    Text:{
        h3Style:{fontSize: 25},
        style:{color: '#f5f5f5',letterSpacing: 1.3,}
    }
}
export {MyDrawer, themeProvider, Login, create, restrict,viewBlack,themeEle }