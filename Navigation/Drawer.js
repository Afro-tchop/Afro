import React from "react";
import { StyleSheet, Image, Text, View, Button } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import {Entypo, AntDesign} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

//import font icone
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

//import the screens
import Dashboard from "../screens/Dashboard";
import Messages from "../screens/Messages";
import Contact from "../screens/Contact";
import Animated from "react-native-reanimated";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const Screens = ({navigation, style}) => {
  return (
    <Animated.View style={[{flex: 1, overflow:"hidden"}, style]}>
      {/* Création de stacks pour chaque screen */}
      <Stack.Navigator
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
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Contact" component={Contact} />
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
            labelStyle={{ marginRight: -25, fontWeight:"bold", fontSize: 20}}
            onPress={() => props.navigation.navigate("Dashboard")}
            icon={() => <AntDesign size={25} color="green" name="user"/>}
          />
          <DrawerItem
            label="Accueil"
            labelStyle={{ marginRight: -25, fontWeight:"bold", fontSize: 20}}
            onPress={() => props.navigation.navigate("Messages")}
            icon={() => <AntDesign size={25} color="green" name="bank"/>}
          />
          <DrawerItem
            label="Recette"
            labelStyle={{ marginRight: -25, fontWeight:"bold", fontSize: 20}}
            onPress={() => props.navigation.navigate("Contact")}
            icon={() => <AntDesign size={25} color="green" name="isv"/>}
          />
        </View>
      </View>
      <View style={{flex:1, justifyContent:"flex-end"}}>
        <DrawerItem 
          label="Se deconnecter"
          labelStyle={{ marginLeft:-10, marginRight: -45, fontStyle: "italic", fontSize: 20}}
          onPress={() => props.navigation.navigate("Inscription")}
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
