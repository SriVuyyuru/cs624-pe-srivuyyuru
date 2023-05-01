import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const SubmitButton = ({submitTodo}) => (
    <View style={styles.inputContainer} >
        <Pressable style={styles.button} onPress={submitTodo}>
        <Text style={styles.text}>Submit</Text>
        </Pressable>
    </View>
)

const styles = StyleSheet.create({

    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: "#000000",
        shadowOffset: {width: 2, height: 2},
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        borderColor: '#ededed',
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})

export default SubmitButton