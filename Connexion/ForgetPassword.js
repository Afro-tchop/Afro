import React, { useState } from "react";
import { StyleSheet, Image, Text, View, Button, SafeAreaView, TextInput,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LinearGradient} from "expo-linear-gradient";



const ForgetPassword = ({navigation}) => {
    
  const [email, setEmail]= useState(' ') 
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1}}>
        <Image style={styles.top} source={require("../assets/header.png")}/>
            <View style={styles.container}>
                

                <View style={styles.connect }>
                  
                    <View style={styles.logo }>
                    <Image style={styles.logo2 }  source={require("../assets/first0.png")}/>

                    </View>
                
                      
                      <View style={styles.email  }>
                        <FontAwesome5 name={'at'} brand style={{lineHeight:26} }  />
                        <TextInput
                        style={styles.input }
                          editable
                          maxLength={40}
                          autoCapitalize="none"
                          placeholder="Ajoute ton e-mail"
                          onChangeText={(val)=> setEmail(val)}
                        />
                      </View>
                      <TouchableOpacity style={styles.forgot} onPress={() => navigation.navigate('Connexion')}>
                        <LinearGradient style={styles.logoLinear2} colors={["rgba(247,234,0,0.70)","rgba(255,0,0,0.80)"]}>

                            <Text style={styles.forgotText} > Récupérer Mot de passe </Text>
                            <FontAwesome5 name={'brain'} brand style={{bottom:0, lineHeight:28} } />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </View>
            <Image style={styles.bottom} source={require("../assets/pieds_page1.png")}/>
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottom: {
      width: 350,
      height: 80,
      zIndex:1
    },
    top:{
      width: 380,
      height: 160,
      zIndex: 1,
      marginLeft:-27

    },
    connect:{
      backgroundColor:'rgb(255,250,250)',
      width:280,
      height:200,
      borderWidth: 2,
      borderRadius:15,
      padding:10,
      zIndex: 2,
      borderColor:'rgba(254,163,71,0.3)',
    },
    email:{
      flexDirection:'row',
       flexWrap:'wrap',
       padding:6,
       margin:5
      
    },
    input:{
      marginLeft: 20,
      backgroundColor:'whitesmoke',
      lineHeight:30,
      width:200
    },

    logo:{
      flex:1,
      width:250,
      justifyContent:"center",
      alignItems: "center",
      padding:10
    },
    logo2:{
      flex:1,
      width:100,
      height:90,
      marginBottom:10,
      justifyContent:"center",
      alignItems:"center",
    },
    logoLinear2:{
        padding:4,
        display:'flex',
        flexDirection:'row',
        borderRadius:20,
        margin:10,
        justifyContent:"center",
        alignItems:"center",
      },
    forgot:{
        marginTop:20,
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
        borderRadius:15,
        justifyContent:"center",
        alignItems:'center'
      },


});
  
export default ForgetPassword;