import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';


export default function HomeScreen({ navigation }) {

   const screenchange = () => {
            navigation.navigate('HomeOption');
    }


    return (
        <View style={styles.container}>
            <View style={styles.containerone}>

                <View style={styles.boxone}>

                </View>

                <View style={styles.boxtwo}>
                    <Text style ={styles.title}>IBD Tool</Text>
                    <Icon name="ios-settings" style={{fontSize:30, marginTop: 30, color: 'white'}}/>
                </View>

                <Animatable.View animation="slideInRight" duration={500} style={styles.search}>
                    <Icon name="ios-search" style={{fontSize:16}}/>
                    <TextInput placeholder="Search" style={{fontSize:16, marginLeft: 10}} />
                 </Animatable.View>

            </View>

            <View style={styles.containertwo}>
                <View style={styles.line}></View>

                <TouchableOpacity onPress={screenchange}>
                    <View style={[styles.cards, styles.cardone]}>
                        <Text style={styles.name}>
                            Nutrition Assessment
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={[styles.cards, styles.cardtwo]}>
                        <Text style={styles.name}>
                          Nutrition Screening
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
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
        flex: 2,
        backgroundColor: "#fff",
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60
    },
    boxone: {
        flex: 0.2
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
    search: {
        height: 50, 
        width: '95%',
        marginLeft: '2%',
        backgroundColor: 'white', 
        flexDirection: 'row', 
        padding: 10, 
        alignItems: 'center',
        borderRadius: 6,
        // borderWidth: 1,
        marginVertical: 15,
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
        marginTop: 10,
        marginBottom: 15,
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
        height: 100
    },
    name: {
        fontSize: 16, 
        color: '#2D2D2D', 
        letterSpacing: 1.5,
        // fontFamily: 'sans-serif-light',
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