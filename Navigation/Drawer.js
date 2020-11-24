import React from "react";
import { StyleSheet, Image, Text, View, Button } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import {Entypo, AntDesign, MaterialIcons, FontAwesome5} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

//import font icone
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

//import the screens
import Compte from "../screens/Compte";
import Accueil from "../screens/Accueil";
import Recettes from "../screens/Recettes";
import Restaurants from "../screens/Restaurants";
import Mentions from "../screens/Mentions";
import ListeRecettes from "../screens/ListeRecettes";
import RecettesDetails from "../screens/RecettesDetails";
import Animated from "react-native-reanimated";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const Screens = ({navigation, style}) => {
  return (
    <Animated.View style={[{flex: 1, overflow:"hidden"}, style]}>
      {/* Création de stacks pour chaque screen */}
      <Stack.Navigator
      initialRouteName= "Accueil"
      //style du header des screens
      screenOptions={{
        headerStyle: { height:100},
        headerTitle: null,
        // Ajout de deux buttons header button pour ouvrir la navigation
        headerLeft: () => (
        <AntDesign size={30} style={styles.icon} name="bars" onPress={() => navigation.openDrawer()}/>
        ),
        headerRight: () => (
          <AntDesign size={30} style={styles.icon} name="setting" onPress={() => navigation.openDrawer()}/>
        ),
        headerRightContainerStyle: {margin:15},
        //Ajout du logo au centre du header
        headerTitle: <LogoTitle/>,
        headerTitleAlign: "center",
        headerTitleStyle: {height:40},
        headerTitleContainerStyle: {height:20}
      }}>
        <Stack.Screen name="Compte" component={Compte}/>
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="Recettes" component={Recettes} />
        <Stack.Screen name="Restaurants" component={Restaurants} />
        <Stack.Screen name="Mentions" component={Mentions} />
        <Stack.Screen name="ListeRecettes" component={ListeRecettes}/>
        <Stack.Screen name="RecettesDetails" component={RecettesDetails}/>
      </Stack.Navigator>
    </Animated.View>
  )
}

class LogoTitle extends React.Component {
  render() {
    return (
      <Image 
        style={styles.img1}  
        source={require("../assets/first0.png")}
      />
    );
  }
}

//[x] build custom Drawer menu
//[] style the Drawer menu

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex:1}}>
      <View style={{flex:1}}>
        <View  margin={20}>
          <Image style={styles.img}  source={require("../assets/first0.png")}/>
        </View>
        {/* add icons to items */}
        <View>
          <DrawerItem
            label="Mon compte"
            labelStyle={{ marginLeft: -15, marginRight: -10, fontWeight:"bold", fontSize: 15}}
            onPress={() => props.navigation.navigate("Compte")}
            icon={() => <AntDesign size={20} color="green" name="user"/>}
          />
          <DrawerItem
            label="Accueil"
            labelStyle={{ marginLeft: -15, marginRight: -10, fontWeight:"bold", fontSize: 15}}
            onPress={() => props.navigation.navigate("Accueil")}
            icon={() => <AntDesign size={20} color="green" name="home"/>}
          />
          <DrawerItem
            label="Recettes"
            labelStyle={{ marginLeft: -15, marginRight: -10, fontWeight:"bold", fontSize: 15}}
            onPress={() => props.navigation.navigate("Recettes")}
            icon={() => <FontAwesome5 size={20} color="green" name="receipt"/>}
          />
          <DrawerItem
            label="Restaurants"
            labelStyle={{ marginLeft: -15, marginRight: -10, fontWeight:"bold", fontSize: 15}}
            onPress={() => props.navigation.navigate("Restaurants")}
            icon={() => <MaterialIcons size={20} color="green" name="restaurant"/>}
          />
          <DrawerItem
            label="Mentions légales"
            labelStyle={{ marginLeft: -15, marginRight: -10, fontWeight:"bold", fontSize: 15}}
            onPress={() => props.navigation.navigate("Mentions")}
            icon={() => <AntDesign size={20} color="green" name="book"/>}
          />
          <DrawerItem
            label="Mentions légales"
            labelStyle={{ marginLeft: -15, marginRight: -10, fontWeight:"bold", fontSize: 15, display:"none"}}
            onPress={() => props.navigation.navigate("ListeRecettes")}
          />
          <DrawerItem
            label="Mentions légales"
            labelStyle={{ marginLeft: -15, marginRight: -10, fontWeight:"bold", fontSize: 15, display:"none"}}
            onPress={() => props.navigation.navigate("RecettesDetails")}
          />
        </View>
      </View>
      <View style={{flex:1, justifyContent:"flex-end"}}>
        {/* <DrawerItem 
          label="Se deconnecter"
          labelStyle={{ marginLeft:-10, marginRight: -45, fontStyle: "italic", fontSize: 20}}
          onPress={() => props.navigation.navigate("Connexion")}
          icon={() => <AntDesign size={25} color="orange" name="logout"/>}
        /> */}
        <DrawerItem 
          label="Se deconnecter"
          labelStyle={{ marginLeft:-10, marginRight: -45, fontStyle: "italic", fontSize: 20}}
          onPress={() => props.navigation.navigate("Connexion")}
          icon={() => <AntDesign size={25} color="orange" name="logout"/>}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  img : {
    height: 40, 
    width: 150,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 30
  },
  img1 : {
    height: 30, 
    width: 110,
  },
  icon: {
    color:"orange",
    marginTop: 25,
    marginLeft: 15
  },
  anim: {
    flex: 1
  }
})

export default () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0));
    //create animation for screen scale
    const scale = Animated.interpolate(progress, {
      inputRange: [0,1],
      outputRange: [1, 0.8]
    });

    //animate the borderRadius of the scene screens
    const borderRadius = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [0, 10]
    })

    const screenStyles = {borderRadius, transform: [{scale}]};

    return (
      <LinearGradient style={{flex:1}} colors={["rgba(247,234,0,0.70)","rgba(255,0,0,0.80)"]}>
        <Drawer.Navigator 
            //the drawer -> screen animated should be slide
            drawerType="slide"
            overlayColor="transparent"
            initialRouteName="Dashboard" 
            drawerStyle={{width: "60%", backgroundColor:"transparent"}}
            contentContainerStyle={{flex: 1}}
            drawerContentOptions={{
              activeBackgroundColor: "transparent",
              activeTintColor: "green",
              inactiveTintColor: "green"
            }}
            sceneContainerStyle={{backgroundColor: "transparent"}}
            
            drawerContent={props => {
              setTimeout(() => {
                setProgress(props.progress);
              }, 100);
              return <DrawerContent {...props} />;
            }}
        >
          <Drawer.Screen name="Screens">
            {props => <Screens {...props} style={screenStyles}/>}
          </Drawer.Screen> 
        </Drawer.Navigator>
      </LinearGradient>
    );
};
