import React, {useState}  from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Contact = ({navigation}) => {
    const [recherche, setRecherche] = useState(' ');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1}}>
                <View style={styles.container}>
                    <View>
                        <Text h2 style={{textAlign: "center", marginTop: 30}}>RECETTES PAR PAYS</Text>
                        {/* Input pour faire une recherche */}
                        <TextInput
                            style={styles.input}
                            editable
                            autoCapitalize="none"
                            placeholder="je recherche..."
                            onChangeText={(val)=>setRecherche(val)}
                        />
                        {/* <Text>{recherche}</Text> */}
                        <View style={{flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                                {/* rubrique pays avec un onPress permettant de se diriger vers la page correspondante */}
                                <TouchableOpacity  onPress={() => navigation.navigate("ListeRecettes")} >
                            <ImageBackground blurRadius={1.5} style={styles.image} source={require("../assets/cameroun.jpg")}><Text style={styles.text}>CAMEROUN</Text></ImageBackground>
                        </TouchableOpacity>

                        {/* rubrique pays avec un onPress permettant de se diriger vers la page correspondante */}
                        <TouchableOpacity  onPress={() => navigation.navigate("Compte")} >
                            <ImageBackground blurRadius={1.5} style={styles.image} source={require("../assets/cote-ivoire.jpg")}><Text style={styles.text}>COTE D'IVOIRE</Text></ImageBackground>
                        </TouchableOpacity>

                        {/* rubrique pays avec un onPress permettant de se diriger vers la page correspondante */}
                        <TouchableOpacity  onPress={() => navigation.navigate("Compte")} >
                            <ImageBackground blurRadius={1.5} style={styles.image} source={require("../assets/senegal.jpg")}><Text style={styles.text}>SENEGAL</Text></ImageBackground>
                        </TouchableOpacity>

                        {/* rubrique pays avec un onPress permettant de se diriger vers la page correspondante */}
                        <TouchableOpacity  onPress={() => navigation.navigate("Compte")} >
                            <ImageBackground blurRadius={1.5} style={styles.image} source={require("../assets/ghana.jpg")}><Text style={styles.text}>GHANA</Text></ImageBackground>
                        </TouchableOpacity>

                        {/* rubrique pays avec un onPress permettant de se diriger vers la page correspondante */}
                        <TouchableOpacity  onPress={() => navigation.navigate("Compte")} >
                            <ImageBackground blurRadius={1.5} style={styles.image} source={require("../assets/congo.jpg")}><Text style={styles.text}>CONGO</Text></ImageBackground>
                        </TouchableOpacity>
                        </View>
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
    input: {
        height: 30,
        width: 300,
        margin: 30,
        borderWidth: 1,
        borderRadius: 1,
        borderColor: "gray",
        textAlign: "center",
    },
    image: {
        width: 150,
        height: 100,
        margin: 10,
        justifyContent: "center"
    },
    text: {
        textAlign: "center", 
        fontSize: 20,
        backgroundColor: "white",
        opacity:0.6
    },
  });
  
export default Contact;