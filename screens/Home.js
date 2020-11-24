import React from "react";
import { StyleSheet, Image, Text, View, Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

const Home = ({navigation}) => {
    return (
        //le linearGradient permet de faire un dégradé de couleur (rouge/jaune)
        <ImageBackground blurRadius={0.6} style={styles.image} source={require("../assets/recette.jpg")}>
            <TouchableOpacity  onPress={() => navigation.navigate("Connexion")} 
                style={{ flex: 1,   alignItems: 'center',justifyContent: 'space-evenly' }}>
                    <View style={styles.bord}>
                        <Image style={styles.img}  source={require("../assets/first0.png")}/>
                        <Text style={styles.text}>Recettes et restaurants africains</Text>
                    </View>
            </TouchableOpacity >
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bord: {
        justifyContent: "center",
        flexDirection: "column",
        height: 300,
        width: 300,
        borderColor:"white",
        borderRadius: 12,
        backgroundColor: "rgba(255,200,100,0.85)",
    },
    img : {
      height: 60, 
      width: 200,
      alignSelf:"center"
    },
    image: {
        flex: 1
    },
    text: {
        fontStyle:"italic", 
        fontSize: 30, 
        textAlign:"center", 
        marginHorizontal: 0,
        marginVertical:30, 
        color:"black"
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