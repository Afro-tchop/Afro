import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

const Contact = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1}}>
                <View style={styles.container}>
                    <View>
                        <Text h2>Recettes</Text>
                    </View>
                </View>
                <Image style={styles.bottom1} source={require("../assets/pieds_page2.png")}/>
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
    bottom1: {
        width: 350,
        height: 40
    },
  });
  
export default Contact;