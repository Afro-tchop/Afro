import React, { useState } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {LinearGradient} from "expo-linear-gradient";

import { StyleSheet, Image, Text, View, Button, SafeAreaView,TextInput ,TouchableOpacity, ViewComponent } from 'react-native';

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
                <View style={styles.connect }>{/* Conteneur des inputs, logo et bouton de validation */}
                  <View style={styles.logo }>{/* Conteneur  logo et bouton de switch */}
                    <Image style={styles.logo2 }  source={require("../assets/first0.png")}/>
                    <View style={styles.logoRow }>
                      <View>
                        <LinearGradient style={styles.buttDis }   colors={["rgba(247,234,0,0.60)","rgba(255,0,0,0.80)"]}>
                            <Text style={styles.butt4}  >
                              <FontAwesome5 name={'user-alt'} brand size={33}   />
                            </Text>
                        </LinearGradient>
                        <Text>Se connecter</Text>
                      </View>
                      <TouchableOpacity  onPress={() => navigation.navigate('Inscription')}>
                        <LinearGradient  style={styles.logoLinear} colors={["rgba(247,234,0,0.10)","rgba(255,0,0,0.30)"]}>
                            <Text style={styles.butt3 } >
                                <FontAwesome5 name={'user-alt-slash'} brand size={20}   />
                            </Text>
                          </LinearGradient>
                          <Text>S'inscrire</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.email  }>{/* Les inputs se trouvent sur les view styles.email*/}
                    <FontAwesome5 name={'at'} brand style={{lineHeight:26} }  />
                    <TextInput
                    style={styles.input }
                      editable
                      maxLength={40}
                      autoCapitalize="none"
                      placeholder="Entrez votre l'email"
                      onChangeText={(val)=> setEmail(val)}
                    />
                  </View>
                  <View style={styles.email }>
                    <FontAwesome5 name={'unlock-alt'} brand style={{lineHeight:26} } />
                    <TextInput
                    style={styles.input }
                      editable
                      maxLength={40}
                      secureTextEntry={true}
                      placeholder="Entrez votre Mot de passe"
                      onChangeText={(val)=> setPassword(val)}
                    />
                  </View>
          
                  <TouchableOpacity style={styles.butt}>{/* Ici se trouvent les différentes manières de connexion que ce soit en se connectant ou sans et il y a aussi la possibilité de récupérer son email */}
                    <LinearGradient style={styles.logoLinear2} colors={["rgba(247,234,0,0.70)","rgba(255,0,0,0.80)"]}>
                      <Text style={styles.butt2 } onPress={() => navigation.navigate('Inscription')}>
                      Connexion
                    
                      </Text>
                    </LinearGradient>
     
                        <Text style={styles.noConnect }
                        onPress={() => navigation.navigate('Drawer')}>
                              Continuer sans se Connecter
                      
                        </Text>
                  </TouchableOpacity>
                  <View style={styles.forgot} >
                    <Text style={styles.forgotText} onPress={() => navigation.navigate('ForgetPassword')}> Mot de passe oublié <FontAwesome5 name={'brain'} brand style={{bottom:0} } /></Text>
                    
                  </View>

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
      zIndex:1,
      
      marginTop:80
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
      height:470,
      borderWidth: 2,
      borderRadius:15,
      paddingTop:40,
      paddingLeft:10,
      paddingBottom:30,
      zIndex: 2,
      borderColor:'rgba(254,163,71,0.3)',
    },
    email:{
      flexDirection:'row',
       flexWrap:'wrap',
       padding:6,
      
    },
    input:{
      marginLeft: 20,
      width:200,
      backgroundColor:'whitesmoke',
      lineHeight:30,
    },
    butt:{
      flex:1,
      flexDirection:'column',
      justifyContent:"center",
      alignItems:"center",
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
      alignSelf:'center',
      padding:10
    },
    logo2:{
      flex:1,
      height: 30, 
      width: 100,
      alignSelf:"center"
    },
    forgot:{
      marginTop:20,
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      zIndex:4
    },
    forgotText:{
      color:'grey',
      borderColor:'darkkhaki',
      borderWidth: 1,
      backgroundColor: "khaki",
      borderRadius:8,
      padding:4
    },
    butt2:{
      textAlign:"center",
      color:'black',
     
    },
    noConnect:{
      textAlign:"center",
      color:'grey',
      fontSize:15,
      marginTop:30
    },
    butt3:{
      color:'grey',

    },
    butt4:{
      color:'black',

    },
    logoRow:{
      marginTop:5,
      display:"flex",
      flexDirection:'row',
      alignItems:"center",
      justifyContent:"space-around",
      

    },
    logoLinear:{
      height:40,
      width:40,
      marginRight:15,
      alignItems:'center',
      display:'flex',
      justifyContent:'center',
      borderRadius:40/2,
    },
    logoLinear2:{
      padding:8,

      width:90,
      borderRadius:8,
      margin:10
    },
    buttDis:{
      height:70,
      width:70,
      marginRight:15,
      alignItems:'center',
      display:'flex',
      textAlign:'center',
      lineHeight:30,
      justifyContent:'center',
      borderRadius:70,
    }



});
  
export default Connexion;