import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Linking, Alert, Image} from 'react-native';
import axios from 'axios';

export default class DailyPicScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
          apod: {},
        };
      }

      componentDidMount(){
        this.getAPOD();
      }

    getAPOD = () => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=BlX24XkQxKMItJHBaV7YLjLXP0U88VLaYQqjNU7I").then(response => {
            this.setState({ apod: response.data })
        })
        .catch(error => {
            Alert.alert(errorMessage)
        })
    }

    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView style = {styles.androidSafeArea} />
                <ImageBackground source={require('../assets/stars.gif')} style = {styles.backgroundImage}>
                    <Text style = {styles.routeText}> Astronomy Picture of the Day </Text>
                    <Text style = {styles.titleText}> {this.state.apod.title} </Text>
                    <TouchableOpacity style={styles.listContainer} onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}>

                        <View style={styles.iconContainer}>
                            <Image source={require("../assets/play-video.png")} style={{ width: 50, height: 50}} />
                        </View>
                    </TouchableOpacity>

                        <Text style = {styles.explanationText}> {this.state.apod.explanation} </Text>

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
    routeText: {
        color: "white"
    },
    titleText: {
      fontSize: 40,
      fontWeight: "bold",
      color: "white"
    },
    listContainer: {

    },
    iconContainer: {
        
    },
    explanationText: {
        color: 'white'
    },
  });