import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style ={styles.text}>IBD Tool</Text>

            <Animatable.View animation="slideInRight" duration={500} style={styles.search}>
                <Icon name="ios-search" style={{fontSize:16}}/>
                <TextInput placeholder="Search" style={{fontSize:16, marginLeft: 10}} />
            </Animatable.View>
               
            
            <View style={{flexDirection: 'row', marginBottom: 15}}>
                <TouchableOpacity style={styles.buttonOne}>
                    <Text style={styles.button}>Nutrition Assessment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTwo}>
                    <Text style={styles.button}>Nutrition Screening</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonThree}>
                <Text style={styles.button}>Dietary Management</Text>
            </TouchableOpacity>

        </View>

        
    );

};



const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#FFF7D2',
        height: '100%',
    },
    search: {
        height: 50, 
        width: '95%',
        marginLeft: '2%',
        backgroundColor: 'white', 
        flexDirection: 'row', 
        padding: 10, 
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        marginVertical: 35,
        marginBottom: 60
    },

    text: {
        fontSize: 36,
        textAlign: 'center' 
    },
    button: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        overflow: 'hidden',
        padding: 20,
        margin: 20
        
    },
    buttonOne: {
        width: "45%", 
        backgroundColor: 'green',
        margin: 10,
        borderRadius: 16
    },
    buttonTwo: {
        width: "45%", 
        backgroundColor: '#2189DC',
        margin: 10,
        borderRadius: 16
    },
    buttonThree: {
        width: "95%", 
        backgroundColor: '#f70909',
        margin: 10,
        padding: 14,
        borderRadius: 16
    }

});

export default HomeScreen;