import React, { useState } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {LinearGradient} from "expo-linear-gradient";

import { StyleSheet, Image, Text, View, Button, SafeAreaView,TextInput ,TouchableOpacity } from 'react-native';

/* validate = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    console.log("Email is Not Correct");
    this.setState({ email: text })
    return false;
  }
  else {
    this.setState({ email: text })
    console.log("Email is Correct");
  }
} */


const Connexion = ({navigation}) => {
  const [email, setEmail]= useState(' ') 
  const [password, setPassword]= useState(' ') 
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1}}>
        <Image style={styles.top} source={require("../assets/header.png")}/>
            <View style={styles.container}>
                

                <View style={styles.connect }>
                  
                    <View style={styles.logo }>
                      <Image style={styles.logo2 }  source={require("../assets/first0.png")}/>
                      <TouchableOpacity style={styles.logoRow } >
                        
                            <Text style={styles.buttDis }  >
                            Connexion
                          
                            </Text>
                          <LinearGradient style={styles.logoLinear} colors={["rgba(247,234,0,0.70)","rgba(255,0,0,0.80)"]}>
                            <Text style={styles.butt3 } onPress={() => navigation.navigate('Inscription')}>
                            Inscription
                          
                            </Text>
                          </LinearGradient>
                      </TouchableOpacity>
                    </View>
                
                      
                      <View style={styles.email  }>
                        <FontAwesome5 name={'at'} brand style={{bottom:0} } />
                        <TextInput
                        style={styles.input }
                          editable
                          maxLength={40}
                          autoCapitalize="none"
                          placeholder="Met l'email"
                          onChangeText={(val)=> setEmail(val)}
                        />
                      </View>

                      
                      <View style={styles.email }>
                      <FontAwesome5 name={'unlock-alt'} brand style={{bottom:0} } />
                      <TextInput
                      style={styles.input }
                        editable
                        maxLength={40}
                        secureTextEntry={true}
                        placeholder="Met Mot de passe"
                        onChangeText={(val)=> setPassword(val)}
                      />
                      </View>
                      <Text>email: {email}, password: {password}  </Text>
                      
                      <TouchableOpacity style={styles.butt}>
                        <LinearGradient style={styles.logoLinear2} colors={["rgba(247,234,0,0.70)","rgba(255,0,0,0.80)"]}>
                          <Text style={styles.butt2 } onPress={() => navigation.navigate('Inscription')}>
                          Connexion
                        
                          </Text>
                        </LinearGradient>
                        <LinearGradient style={styles.logoLinear2} colors={["rgba(247,234,0,0.70)","rgba(255,0,0,0.80)"]}>
                            <Text style={styles.butt2 }
                            onPress={() => navigation.navigate('Drawer')}>
                                  Continuer sans se Connecter
                          
                            </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    
                </View>
                <TouchableOpacity style={styles.forgot}>
                  <Text onPress={() => navigation.navigate('ForgetPassword')}> Mot de passe oublié</Text>
                </TouchableOpacity>
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
      height: 80
    },
    top:{
      width: 350,
      height: 130,
      zIndex: 1

    },
    connect:{
      backgroundColor:'white',
      width:280,
      height:400,
      borderWidth: 2,
      borderColor: "#20232a",
      borderRadius:15,
      padding:10,
      zIndex: 2,
      borderColor:'darkkhaki',
    },
    email:{
      flexDirection:'row',
       flexWrap:'wrap',
       padding:6,
      
    },
    input:{
      marginLeft: 20,
    },
    butt:{
      flex:2,
      flexDirection:'column',
      justifyContent:"center",
      alignItems:"center",
      height:60,
      padding:5,
      textAlign:'center',
      alignContent: "center",
    },
    button:{
      width:20
    },
    logo:{
      flex:1,
      width:250,
      justifyContent:"center",
      alignContent: "center",
      padding:10
    },
    logo2:{
      flex:1,
      height: 60, 
      width: 200,
      marginBottom:10,
      resizeMode: "contain",
      justifyContent:"center",
      alignItems:"center",
    },
    forgot:{
      marginTop:20,
      color:"darkkhaki",
    },
    butt2:{
      textAlign:"center",
      color:'black',
     
    },
    butt3:{
      color:'black',

    },
    logoRow:{
      marginTop:5,
      display:"flex",
      flexDirection:'row',
      alignItems:"center",
      justifyContent:"center",
      

    },
    logoLinear:{
      height:30,
      width:80,
      marginRight:15,
      alignItems:'center',
      display:'flex',
      justifyContent:'center',
      borderRadius:20,
    },
    logoLinear2:{
      padding:8,

      width:90,
      borderRadius:20,
      margin:10
    },
    buttDis:{
      color:"darkkhaki",
      height:30,
      width:100,
      marginRight:15,
      alignItems:'center',
      display:'flex',
      textAlign:'center',
      lineHeight:30,
      justifyContent:'center',
      borderRadius:20,
      borderColor:'darkkhaki',
      borderWidth: 2,
    }



});
  
export default Connexion;