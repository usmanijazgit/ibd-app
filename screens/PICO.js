import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';



export default function PICO({ navigation }) {  

    const backscreen = () => {
        navigation.navigate('PracticeStatement');
    }    

    return (
        <View style={styles.screen}>
              
                <View style={styles.backbox}>
                    <TouchableOpacity style= {{flexDirection: 'row'}} onPress={backscreen}>
                        <Icon name="ios-arrow-back" style={{fontSize:25 , color: 'black'}}/>
                        <Text style ={styles.back}>Back</Text>
                    </TouchableOpacity>
                </View>

            <View style={styles.headerbox}>
                <Text style ={styles.title}>Short Bowel Disease</Text>
                <Icon name="ios-help-circle" style={[styles.settinghelp, styles.help]}/>
                <Icon name="ios-settings" style={[styles.settinghelp, styles.setting]}/>
            </View>

            
            <Animatable.View animation="slideInRight" duration={500} style={styles.search}>
                    <Icon name="ios-search" style={{fontSize:16}}/>
                    <TextInput placeholder="Search" style={{fontSize:16, marginLeft: 10}} />
            </Animatable.View>  


            <ScrollView>
                <Text style ={styles.listheading}>Population</Text>
                <View style ={styles.listtext}>
                 <Text style ={styles.picotext}>
                 Adults ≥16 years with IBD diagnosed using standard
                 procedures including endoscopy, histology.
                 </Text>
                </View>

                <Text style ={styles.listheading}>Intervention</Text>
                <View style ={styles.listtext}>
                 <Text style ={styles.picotext}>
                 Any oral and/or enteral dietary intervention used in 
                 IBD administered for ≥1 week.  Intervention must address
                 the specific research question of interest for 
                 the systematic review
                 </Text>
                </View>

                <Text style ={styles.listheading}>Comparator</Text>
                <View style ={styles.listtext}>
                 <Text style ={styles.picotext}>
                 Dietary intervention will be compared to placebo, 
                 standard care or no intervention, or if no comparator 
                 group end-point data will be compared to baseline. 
                 </Text>
                </View>

                <Text style ={styles.listheading}>Outcome</Text>
                <View style ={styles.listtext}>
                 <Text style ={styles.picotext}>
                 Symptoms of short bowel syndrome – diarrhoea, bloating, 
                 weight loss, abdominal pain, malabsorption
                 </Text>
                </View>

            </ScrollView>

        </View>

        
    );

};



const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
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
        borderRadius: 6,
        borderWidth: 1,
        marginVertical: 10,
    },

    title: {
        fontSize: 36,
        color: 'black',
        // fontWeight: 'bold',
        letterSpacing: 3.5,
        marginLeft: -25,
        marginTop: 25,
        // fontFamily: 'sans-serif-light'
    },

    subtext: {
        fontSize: 16,
        textAlign: 'center',
        color: 'red',
        textDecorationLine: 'underline',
    },
    listheading: {
        fontSize: 20,
        fontWeight:'bold',
        padding: 8,
        marginBottom: -15,
        marginLeft: 5,
        overflow: 'hidden'
    },
    listtext: {
        padding: 5,
        marginTop: 5,
        marginLeft: 8,
        // height: '90%'
    },
    picotext: {
        fontSize: 16
        
    },

    headerbox: {
        // flex: 1,
        marginHorizontal: 35,
        flexDirection: 'row',
        // justifyContent:'space-between'
    },
    backbox: {
        paddingLeft: 10,
        paddingTop: 25,
        
    },
    back: {
        fontSize: 20,
        color: 'black',
        marginLeft: 10,
    },
    settinghelp: {
        fontSize:40, 
        marginTop: 30, 
        color: 'black',
        paddingRight: 15,
        margin: -15
    },
    help: {
        marginRight: -70
    }
    
    

});