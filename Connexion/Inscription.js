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


const Inscription = ({navigation}) => {
  const [email, setEmail]= useState(' ') 
  const [password, setPassword]= useState(' ') 
  const [pseudo, setPseudo]= useState(' ') 
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1}}>
        <Image style={styles.top} source={require("../assets/header.png")}/>
            <View style={styles.container}>
                

                <View style={styles.connect }>
                  <View style={{ flex: 1, flexDirection
                  :"column",flexWrap:"wrap", }}>
                    <View style={styles.logo }>
                      <View style={{alignItems:"center"} }>
                          <Image style={styles.logo2 }  source={require("../assets/first0.png")}/>

                      </View>
                      <View style={styles.logoRow }>
                      <TouchableOpacity onPress={() => navigation.navigate('Connexion')} >
                        <LinearGradient style={styles.buttDis }   colors={["rgba(247,234,0,0.10)","rgba(255,0,0,0.30)"]}>
                          <Text style={styles.butt3}  >
                          <FontAwesome5 name={'user-alt'} brand size={28}   />
                            
                          </Text>
                          
                        </LinearGradient>
                        <Text>Se connecter</Text>
                      </TouchableOpacity>  
                      <View>
                        <LinearGradient style={styles.logoLinear} colors={["rgba(247,234,0,0.60)","rgba(255,0,0,0.80)"]}>
                              <Text style={styles.butt4 } >
                              <FontAwesome5 name={'user-alt-slash'} brand size={28}   />
                                  
                              </Text>
                        </LinearGradient>
                        <Text>S'inscrire</Text>
                      </View>
                    </View>

                    </View>
                    <View style={styles.inputMax  }>
                        <View style={styles.email  }>
                          <FontAwesome5 name={'user'} brand style={{lineHeight:26} }  />
                          <TextInput
                          style={styles.input }
                            editable
                            maxLength={40}
                            autoCapitalize="none"
                            placeholder="Inscrit ton pseudonyme"
                            onChangeText={(val)=> setPseudo(val)}
                          />
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

                        
                        <View style={styles.email }>
                        <FontAwesome5 name={'unlock-alt'} brand style={{lineHeight:26} } />
                        <TextInput
                        style={styles.input }
                          editable
                          maxLength={40}
                          secureTextEntry={true}
                          placeholder="Ajoute ton mot de passe"
                          onChangeText={(val)=> setPassword(val)}
                        />
                        </View>
                        <View style={styles.email }>
                        <FontAwesome5 name={'unlock-alt'} brand style={{lineHeight:26} } />
                        <TextInput
                        style={styles.input }
                          editable
                          maxLength={40}
                          secureTextEntry={true}
                          placeholder="Confirmez mot de passe"
                          onChangeText={(val)=> setPassword(val)}
                        />
                        </View>
                      </View>
{/*                       <Text>email: {email}, password: {password}  </Text>
 */}                   
                  </View>   
                      <TouchableOpacity onPress={() => navigation.navigate('Connexion')} style={styles.butt}>
                        <LinearGradient style={styles.logoLinear2} colors={["rgba(247,234,0,0.70)","rgba(255,0,0,0.80)"]}>
                          <Text style={styles.butt2 } >
                          Inscription
                        
                          </Text>
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
      zIndex:2

    },
    bottom: {
      width: 350,
      height: 80,
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
      zIndex: 3,
      borderColor:'rgba(254,163,71,0.3)',
    },
    email:{
      flexDirection:'row',
       flexWrap:'wrap',
       padding:6,
       marginBottom:2,
      
    },
    input:{
      marginLeft: 20,
      width:200,
      backgroundColor:'whitesmoke',
      lineHeight:30,
    },
    inputMax:{
      marginTop:30,
      flex:1

    },
    butt:{
      flex:1,
      flexDirection:'column',
      justifyContent:"center",
      alignItems:"center",
      padding:5,
      textAlign:'center',
      alignContent: "center",
      marginTop:25
    },
    button:{
      width:20
    },
    logo:{
      flex:1,
      justifyContent:"center",
      marginTop:40
    },
    logo2:{
      height: 30, 
      width: 100,
      justifyContent:"center",
    },
    forgot:{
      width:180,
      marginTop:5,
      textAlign:"center",
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      borderColor:'darkkhaki',
      borderWidth: 1,
      backgroundColor: "khaki",
      borderRadius:15,
      zIndex:4
    },
    forgotText:{
      color:'grey',
    },
    butt2:{
      textAlign:"center",
      color:'black',
     
    },
    noConnect:{
      textAlign:"center",
      color:'white',
      fontSize:11
    },
    butt3:{
      
      color:'black',

    },
    butt4:{
      color:'grey',

    },
    logoRow:{
      flexDirection:'row',
      justifyContent:'space-around',
    },
    logoLinear:{
      height:70,
      width:70,
      marginRight:15,
      alignItems:'center',
      display:'flex',
      justifyContent:'center',
      borderRadius:70/2,
      
    },
    logoLinear2:{
      padding:8,
      width:90,
      borderRadius:20,
      marginTop:60,
    },
    buttDis:{
      color:"darkkhaki",
      height:70,
      width:70,
      marginRight:15,
      alignItems:'center',
      display:'flex',
      textAlign:'center',
      lineHeight:30,
      justifyContent:'center',
      borderRadius: 70/2,
        }



});
  
export default Inscription;