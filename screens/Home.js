import React from "react";
import { StyleSheet, Image, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

const Home = ({navigation}) => {
    return (
        //le linearGradient permet de faire un dégradé de couleur (rouge/jaune)
        <LinearGradient style={{flex:1}} colors={["rgba(255,0,0,0.80)","rgba(247,234,0,0.68)"]}>
        <TouchableOpacity  onPress={() => navigation.navigate("Connexion")} 
            style={{ flex: 1,   alignItems: 'center' }}>
            <View>
                <Image style={styles.img}  source={require("../assets/first0.png")}/>
            </View>
            <Text style={{fontStyle:"italic", fontSize: 30, textAlign:"center", marginTop: 25}}>Recettes et restaurants africains</Text>
            <View style={styles.container}>
                <View style={styles.bottom}>
                    <Image opacity={0.7} source={require("../assets/pieds_page_accueil.png")}/>
                </View>
            </View>
        </TouchableOpacity >
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    img : {
      height: 60, 
      width: 200,
      marginTop: 200,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottom: {
      flex: 0.3,
    },
});
  
  
export default Home;