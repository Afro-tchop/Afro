import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import {Evillcons, AntDesign} from "@expo/vector-icons";

const Messages =({navigation}) => {
    const [recherche, setRecherche] = useState(' ');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1}}>
                <View style={styles.container}>
                    <View>
                        {/* Input pour faire une recherche */}
                        <View style={{flexDirection:"row", justifyContent:"center", marginTop:40}}>
                            <AntDesign size={25} color="black" name="search1"/>
                            <TextInput
                                style={styles.input}
                                editable
                                autoCapitalize="none"
                                placeholder="je recherche..."
                                onChangeText={(val)=>setRecherche(val)}
                            />
                            {/* <Text>{recherche}</Text> */}                         
                        </View>

                        <View style={{flex: 1, flexDirection: "row",flexWrap: "wrap", justifyContent: "center"}}>
                            {/* rubrique recettes avec un onPress permettant de se diriger vers la page correspondante */}
                            <TouchableOpacity  onPress={() => navigation.navigate("Recettes")} >
                                <ImageBackground blurRadius={1.5} style={styles.image} source={require("../assets/camerounaise.jpg")}><Text style={styles.text}>Recettes</Text></ImageBackground>
                            </TouchableOpacity>

                            {/* rubrique restaurants avec un onPress permettant de se diriger vers la page correspondante */}
                            <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
                                <ImageBackground blurRadius={1.5} style={styles.image} source={require("../assets/restaurant.jpg")}><Text style={styles.text}>Restaurants</Text></ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Image style={styles.bottom1} source={require("../assets/pieds_page2.png")}/>
            </View>
        </SafeAreaView> 
        //Console.log(value)
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
    image: {
        width: 300,
        height: 200,
        justifyContent: "center",
        borderColor: "black",
        borderRadius: 17,
        margin: 20,
        shadowColor: "black",
        shadowOffset: {width: 21,height:-38 },
        shadowOpacity: 0.8,      
        shadowRadius: 2,
        elevation: 50
    },
    text: {
        textAlign: "center",
        fontSize: 40,
        backgroundColor: "white",
        opacity:0.6
    },
    input: {
        height: 30,
        width: 200,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderRadius: 1,
        borderColor: "gray"
    }
  });
  
export default Messages;