import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';


export default function HomeScreen({ navigation }) {

   const screenchangeone = () => {
            navigation.navigate('HomeOption', {headingonebtn: 'Nutrition Assessment'});
    }

    const screenchangetwo = () => {
        navigation.navigate('HomeOption', {headingonebtn: 'Nutrition Screening'});
    }

    const screenchangethree = () => {
        navigation.navigate('HomeOption', {headingonebtn: 'Dietary Management'});
    }


    const backscreen = () => {
        navigation.navigate('PatientInfo');
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerone}>

                <View style={styles.backbox}>
                    <TouchableOpacity style= {{flexDirection: 'row'}} onPress={backscreen}>
                        <Icon name="ios-arrow-back" style={{fontSize:25 , color: 'white'}}/>
                        <Text style ={styles.back}>Back</Text>
                    </TouchableOpacity>
                </View>
            

                <View style={styles.boxtwo}>
                    
                    <Text style ={styles.title}>IBD Tool</Text>
                    <Icon name="ios-settings" style={{fontSize:30, marginTop: 30, color: 'white'}}/>
                </View>

            </View>

            <View style={styles.containertwo}>
                <View style={styles.line}></View>

                <TouchableOpacity onPress={screenchangeone}>
                    <View style={[styles.cards, styles.cardone]}>
                        <Text style={styles.name}>
                            Nutrition Assessment
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={screenchangetwo}>
                    <View style={[styles.cards, styles.cardtwo]}>
                        <Text style={styles.name}>
                          Nutrition Screening
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={screenchangethree}>
                    <View style={[styles.cards, styles.cardthree]}>
                        <Text style={styles.name}>
                            Dietary Management
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>

           
        </View>

        

        
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#136Df3'
    },
    containerone: {
        flex: 1
    },
    containertwo: {
        flex: 3.5,
        backgroundColor: "#fff",
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60
    },
    backbox: {
        paddingLeft: 10,
        paddingTop: 25,
        
    },
    back: {
        fontSize: 20,
        color: 'white',
        marginLeft: 10,
        
    },
    boxtwo: {
        // flex: 1,
        marginHorizontal: 35,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    title: {
        fontSize: 35,
        color: 'white',
        // fontWeight: 'bold',
        letterSpacing: 3.5,
        marginLeft: -25,
        marginTop: 25,
        // fontFamily: 'sans-serif-light'

    },
    line: {
        width: 66,
        height: 4,
        backgroundColor: '#f4f0f0',
        borderRadius: 2,
        marginVertical: 25,
        left: '43%'
    },
    cards: {
        marginTop: 5,
        marginBottom: 12,
        marginHorizontal: 30,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 6, 
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 10,
        height: 130,
        justifyContent: 'center'
    },
    name: {
        fontSize: 20, 
        color: '#2D2D2D', 
        letterSpacing: 1.5,
        fontFamily: 'System',

    },
    cardone: {
        backgroundColor: 'lightblue'
    },
    cardtwo: {
        backgroundColor: 'lightgreen'
    },
    cardthree: {
        backgroundColor: 'lightyellow'
    },
  
});