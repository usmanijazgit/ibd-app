import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

export default function HomeScreenOption({ navigation }) {    
   
    const screenchange = () => {
        navigation.navigate('PracticeStatement');
    }

    const backscreen = () => {
        navigation.navigate('Home');
    }
   
    return (
        <View style={styles.screen}>
            <View style={styles.containerone}>
                <View style={styles.backbox}>
                    <TouchableOpacity style= {{flexDirection: 'row'}} onPress={backscreen}>
                        <Icon name="ios-arrow-back" style={{fontSize:25 , color: 'white'}}/>
                        <Text style ={styles.back}>Back</Text>
                    </TouchableOpacity>

                    <Icon name="ios-settings" style={{fontSize:30, color: 'white', marginRight: '5%'}}/>
                </View>

                <View style={styles.headerbox}>
                    <Text style ={styles.title}>Nutrition Assessment</Text>
                </View>

                
                <Animatable.View animation="slideInRight" duration={500} style={styles.search}>
                        <Icon name="ios-search" style={{fontSize:16}}/>
                        <TextInput placeholder="Search" style={{fontSize:16, marginLeft: 10}} />
                </Animatable.View>
            </View>

            <View style={styles.containertwo}>

                <View style={styles.line}></View>

                <ScrollView>
                    <Text style ={styles.listtext} onPress={screenchange}>Treatment of malnutrition</Text>
                    <Text style ={styles.listtext} onPress={screenchange}>Induction of remission</Text>
                    <Text style ={styles.listtext} onPress={screenchange}>Short bowel syndrome</Text>
                    <Text style ={styles.listtext}>Anthropometry</Text>
                    <Text style ={styles.listtext}>Dietary</Text>
                    <Text style ={styles.listtext}>Micronutrients</Text>
                    <Text style ={styles.listtext}>Treatment of malnutrition</Text>
                    <Text style ={styles.listtext}>Induction of remission</Text>
                    <Text style ={styles.listtext}>Stoma</Text>
                    <Text style ={styles.listtext}>Special situations</Text>
                    <Text style ={styles.listtext}>Induction of remission</Text>
                    <Text style ={styles.listtext}>Short bowel syndrome</Text>
                    <Text style ={styles.listtext}>Treatment of malnutrition</Text>
                    <Text style ={styles.listtext}>4Induction of remission</Text>
                    <Text style ={styles.listtext}>5Short bowel syndrome</Text>
                    <Text style ={styles.listtext}>6Treatment of malnutrition</Text>
                    <Text style ={styles.listtext}>7Induction of remission</Text>
                    <Text style ={styles.listtext}>8Short bowel syndrome</Text>
                </ScrollView>

            </View>

        </View>

        
    );

};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#136Df3'
    },
    containerone: {
        flex: 1
    },
    containertwo: {
        flex: 2.5,
        backgroundColor: "#fff",
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60
    },
    search: {
        height: 50, 
        width: '95%',
        marginLeft: '2%',
        backgroundColor: '#FFF', 
        flexDirection: 'row', 
        padding: 10, 
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1,
        marginVertical: 10,
    },

    title: {
        fontSize: 26,
        color: 'white',
        // fontWeight: 'bold',
        letterSpacing: 3.5,
        marginLeft: -25,
        marginTop: 25,
    },

    // subtext: {
    //     fontSize: 22,
    //     textAlign: 'center',
    //     color: 'red',
    //     textDecorationLine: 'underline',
    //     marginLeft: 15,
    // },
    listtext: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
        padding: 4,
        marginTop: 15,
        marginLeft: 15,
        
    },
    headerbox: {
        // flex: 1,
        marginHorizontal: 35
    },
    backbox: {
        paddingLeft: 10,
        paddingTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    back: {
        fontSize: 20,
        color: 'white',
        marginLeft: 10,
    },
    line: {
        width: 66,
        height: 4,
        backgroundColor: '#f4f0f0',
        borderRadius: 2,
        marginVertical: 25,
        left: '43%'
    }
    

});