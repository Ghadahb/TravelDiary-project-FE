import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "../home/Home";
import Signin from '../authentication/Signin';
import { createStackNavigator } from "@react-navigation/stack";
import Signup from '../authentication/Signup';


const RootNavigator = () => {
const { Navigator, Screen } = createStackNavigator();

    return (
       <Navigator
       initialRouteName="Signup">
           <Screen name="Home" component={Home}
           oprtions={{ headerShown: false }}
           />
           <Screen name ="Signin" component={Signin} />
               <Screen name="Signup" component={Signup} />
       </Navigator>
    );
};

export default RootNavigator ;

const styles = StyleSheet.create({})
