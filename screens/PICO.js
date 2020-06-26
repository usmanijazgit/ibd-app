import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';



const PICO = props => {

    return (
        <View style={styles.screen}>

            <Icon name="ios-help-circle" style={{fontSize:40, textAlign: 'right', marginRight: 15}}/>

            <Text style ={styles.text}>IBD Tool</Text>
            <Text style ={styles.subtext}>Short bowel syndrome</Text>

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
        marginVertical: 20
    },

    text: {
        fontSize: 36,
        textAlign: 'center' 
    },

    subtext: {
        fontSize: 16,
        textAlign: 'center',
        color: 'red',
        textDecorationLine: 'underline',
    },
    listheading: {
        fontSize: 18,
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
        
    }
    
    

});

export default PICO;