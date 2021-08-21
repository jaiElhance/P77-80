import React, {Component} from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return(
          <View style = {styles.container}>
    
            <SafeAreaView style = {styles.androidSafeArea} />
            <ImageBackground style = {styles.backgroundImage} source = {require('../assets/stars.gif')}>
    
            <View style = {styles.titleContainer}>
              <Text style = {styles.titleText}> Stellar App </Text>
            </View>
    
            <TouchableOpacity style = {styles.routeCard} onPress = {() => this.props.navigation.navigate("SpaceCrafts")
            }>
              <Text style = {styles.routeText}> SpaceCrafts </Text>
               <Text style = {styles.knowMore}> {"Know More --->"} </Text>
              <Image source = {require("../assets/space_crafts.png")} style = {styles.iconImage} />
            </TouchableOpacity>
            
            <TouchableOpacity style = {styles.routeCard} onPress = {() => this.props.navigation.navigate("StarMap")
            }>
              <Text style = {styles.routeText}> StarMap </Text>
              <Text style = {styles.knowMore}> {"Know More --->"} </Text>
              <Image source = {require("../assets/star_map.png")} style = {[styles.iconImage,{height: 100}]} /> 
            </TouchableOpacity>

            <TouchableOpacity style = {styles.routeCard} onPress = {() => this.props.navigation.navigate("DailyPic")
            }>
              <Text style = {styles.routeText}> DailyPic </Text>
               <Text style = {styles.knowMore}> {"Know More --->"} </Text>
              <Image source = {require("../assets/daily_pictures.png")} style = {[styles.iconImage,{height: 100}, {top: 80 }]} />
            </TouchableOpacity>
    
            </ImageBackground>
          </View>
        )
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      androidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      },
      routeCard: {
        flex: 0.35,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white',
      },
      titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
      },
      routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 60,
        paddingLeft: 10
      },
      knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
      },
      iconImage: {
        position: "absolute",
        height: 150,
        width: 200,
        resizeMode: "contain",
        right: -55,
        top: 30,
      },
      titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
      },
    });