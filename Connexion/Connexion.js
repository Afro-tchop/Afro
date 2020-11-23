import React, { useState } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
            <View style={styles.container}>
            

                <View style={styles.connect }>
                  <View style={styles.logo }><Image style={styles.logo2 }  source={require("../assets/first0.png")}/></View>
                
                      <Text>Entre votre Email</Text>
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

                      <Text>Entre votre Mot de passe</Text>
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
                      <View style={styles.butt }>
                          <Button 
                        title="Connexion"
                        
                        onPress={() => navigation.navigate('Inscription')}
                        />
                            <Button 
                            style={styles.button }
                          title="Continuer sans se Connecter"
                          
                          onPress={() => navigation.navigate('Drawer')}
                        />
                      </View>
                    
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
    connect:{
      width:280,
      height:400,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius:15,
      padding:10
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
      flex:1,
      flexDirection:'column',
      justifyContent:"space-around",
      height:60,
      padding:5
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
      resizeMode: "contain",
      justifyContent:"center",
      alignItems:"center",
    },
    forgot:{
      marginTop:30
    }



});
  
export default Connexion;