import React from "react";
import { StyleSheet, Image, Text, View, Button, SafeAreaView } from 'react-native';


const Connexion = ({navigation}) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1}}>
            <View style={styles.container}>
                <View>
                  <Text h2>Bienvenue sur la page de connexion</Text>
                  <Button 
                    title="Connexion"
                    onPress={() => navigation.navigate('Drawer')}
                  />
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
      height: 80
    },
});
  
export default Connexion;