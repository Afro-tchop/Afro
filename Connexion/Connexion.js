import React from "react";
import { StyleSheet, Image, Text, View, Button, SafeAreaView } from 'react-native';


const Connexion = ({navigation}) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1}}>
          <Image style={styles.top} source={require("../assets/header.png")}/>      
            <View style={styles.container}>
                <View style={styles.VI}>
                  <Text h2>Bienvenue sur la page de connexion</Text>
                  <Button 
                    title="Connexion"
                    onPress={() => navigation.navigate('Drawer')}
                  />
                </View>
            </View>
            <View>
            <Image style={styles.bottom} source={require("../assets/pieds_page1.png")}/>
            </View>
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
    },
    top: {
      width: 380,
      height: 160,
      marginLeft: -27,
    }
});
  
export default Connexion;