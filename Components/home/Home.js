import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View>
            {/* <Text> Hi </Text> */}
            <Button 
            title="NOMAD"
            color= "#0000ff"
             onPress={() => alert("WELCOME")}/>

             <Button 
             title="signin"
             onPress={() => navigation.navigate("Signin")}
             />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
