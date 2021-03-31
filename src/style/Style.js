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
    },
    label:{
        fontSize: 16,
        color: '#eee',
    },
    content:{
        flex: 1,
        backgroundColor: '#313131'
    },
    header:{
        backgroundColor: themeProvider.colors.gray,
        marginHorizontal: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    divider: {
        height: 1,
        marginVertical: 3,
        marginHorizontal: 10,
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


   
});
export {MyDrawer, themeProvider, Login, create }