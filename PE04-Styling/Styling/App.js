import React, { Component } from 'react';
import { Image, StyleSheet,Text, View} from 'react-native';


export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.cardImageContainer}>
                    <Image style={styles.cardImage}        
                           source={require('./assets/user.png')}/>
                </View>
                     <Text style={styles.cardName}>Sri Vuyyuru</Text>
                
                <View style={styles.cardOccupationContainer}>
                      <Text style={styles.cardOccupation}>Front-End Developer</Text>
                </View>
                      
                     <Text style={styles.cardDescription}>Sri is a Front-End developer with good 
                       Handson experience in styling web pages using CSS
                        and Java script and React native.</Text>    
                
            </View>
        </View>
        
    );
}
}


const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400
    },
    
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15 
    },
    cardImage: {
        width: 80,
        height: 80
    },
    cardName: {
          color :'white',
          marginTop: 20,
          fontWeight:'bold'
    },
    cardOccupationContainer: {
        borderColor :'black',
        borderBottomWidth : 3
        
    },
    cardOccupation: {
        marginTop : 10,
        marginBottom : 10,
        fontWeight : 'bold'

    },
    cardDescription: {
        marginTop : 10,
        marginRight : 30,
        marginLeft : 30,
        
        
    }
});