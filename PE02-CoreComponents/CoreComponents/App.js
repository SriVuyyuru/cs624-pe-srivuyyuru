import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      
      <Image source={require('./assets/icon.png')} 
        style={{width : 200, height : 200, marginTop : 60}}
      />

      <Text style = {styles.text}>Which course did you like?</Text>
         
      <TextInput
        style={{
          height: 30,
          flex : 1,
          borderColor : 'gray',
          borderWidth : 2,
        }}
        defaultValue="CS624"
      />
      <View>

      <Text style = {styles.title}> Core Requirements(24 credits) </Text>

        <Text> CS 504 Software Engineering </Text>
        <Text> CS 506 Programming for Computing </Text>
        <Text> CS 519 Cloud Computing Overview </Text>
        <Text> CS 533 Computer Architecture </Text>
        <Text> CS 547 Secure systems & Programs </Text>
        <Text> CS 622 Discrete Math and Algorithms for Computing </Text>
        <Text> DS 510 Artificial Intelligence for Data Science </Text>
        <Text> DS 620 Machine Learning & Deep Learning </Text>

      <Text style = {styles.title}> Depth of study(6 credits) </Text>  

        <Text> CS 624- Full Stack Development I - Mobile App </Text>
        <Text> CS 628 - Full Stack Development II - Web App </Text>

      <Text style = {styles.title}>Capstone(3 credits) </Text>    
        <Text> CS 687	Computer Science Capstone  </Text>


      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  title: {
    marginTop:50,
    backgroundColor : '#FFFF00',
    fontSize :30,
    fontWeight : 'bold'

  },

  text: {
    marginTop:50   
  },
  
});

export default App;