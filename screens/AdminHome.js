import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import firebase from 'firebase';


export default function AdminHome({ navigation }) {

   const screenchangeone = () => {
            navigation.navigate('CreateAdmin');
    }

    const screenchangetwo = () => {
        navigation.navigate('RecordList');
    }

   
    return (
        <View style={styles.container}>

            <View style={styles.containerone}>

                <Icon name="md-log-out" onPress={() => firebase.auth().signOut() } style={{fontSize:30, marginTop: 30, color: 'white', textAlign: "right", marginRight: 20 }}/>

                <View style={styles.boxtwo}>
                    
                    <Text style ={styles.title}>Admin Dashboard</Text>
                   
                </View>

            </View>

            <View style={styles.containertwo}>
                <View style={styles.line}></View>

                <TouchableOpacity onPress={screenchangeone}>
                    <View style={[styles.cards, styles.cardone]}>
                        <Text style={styles.name}>
                            Create Admin
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={screenchangetwo}>
                    <View style={[styles.cards, styles.cardtwo]}>
                        <Text style={styles.name}>
                          Records
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
        backgroundColor: '#EA8332',
    },
    containerone: {
        flex: 1,
        backgroundColor: '#EA8332',

    },
    containertwo: {
        flex: 3.5,
        backgroundColor: "#fff",
        // borderTopRightRadius: 60,
        borderTopLeftRadius: 80
    },

    boxtwo: {
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
        color: 'white',
        letterSpacing: 3.5,
        marginTop: 15,
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
        marginTop: 25,
        marginBottom: 12,
        marginHorizontal: 30,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 15, height: 10},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 6, 
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 10,
        height: 150,
        justifyContent: 'center'
    },
    name: {
        fontSize: 24, 
        color: 'white', 
        letterSpacing: 1.5,
        fontFamily: 'System',

    },
    cardone: {
        backgroundColor: '#1D1B1A'
    },
    cardtwo: {
        backgroundColor: '#C2004B',
    },

  
});