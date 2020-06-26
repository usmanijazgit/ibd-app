import React from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import ReadMore from 'react-native-read-more-text';
import { render } from 'react-dom';

const PracticeStatement = props => {

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
                <Text style ={styles.listheading}>Practice Statement</Text>

                <View style ={styles.listtext}>
                <ReadMore numberOfLines={2}>
                <Text style ={styles.practicetext}>Calcium intake should be assessed in CD 
                nd UC patients and patients may not meet the
                 recommended intake. (GRADE very low quality)</Text>
                </ReadMore>
                </View>

                <View style ={styles.listtext}>
                <ReadMore numberOfLines={2}>
                <Text style ={styles.practicetext}>
                    A comprehensive nutritional assessment in IBD patients
                    includes the following micronutrients: folic acid, 
                    vitamin B12, vitamin D, iron, zinc, magnesium and selenium.
                     Review recent tests and determine the frequency of monitoring 
                     depending on disease activity, dietary intake and micronutrient 
                     supplementation</Text>
                </ReadMore>
                </View>

                <View style ={styles.listtext}>
                <ReadMore numberOfLines={2}>
                <Text style ={styles.practicetext}>Calcium intake should be assessed in CD 
                nd UC patients and patients may not meet the
                 recommended intake. (GRADE very low quality)</Text>
                </ReadMore>
                </View>

                {/* <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, alignItems: 'center'}}>
                    <Text numberOfLines={2} style ={styles.listtext}>Calcium intake should be assessed in CD and UC patients and patients may not meet the recommended intake. (GRADE very low quality)</Text>
                    <Icon name="ios-add-circle" style={{fontSize:30}}/>
                </View> */}

              

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
    listtext: {
        padding: 5,
        marginTop: 5,
        marginLeft: 8,
        marginBottom: '-2%'
    },
    practicetext: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',

    },
    listheading: {
        fontSize: 18,
        fontWeight:'bold',
        padding: 8,
        marginBottom: -15,
        marginLeft: 5,
        overflow: 'hidden'
    }
    

});

export default PracticeStatement;