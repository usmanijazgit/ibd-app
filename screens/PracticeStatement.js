import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import ReadMore from 'react-native-read-more-text';
import { render } from 'react-dom';


export default function PracticeStatement({ navigation }) {     

    const screenchange = () => {
        navigation.navigate('SupportingText');
    }

    const backscreen = () => {
        navigation.navigate('HomeOption');
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
                <Text style ={styles.listheading}>Practice Statement</Text>

                <View style ={styles.listtext}>
                <ReadMore numberOfLines={2}>
                <Text style ={styles.practicetext} onPress={screenchange}>Calcium intake should be assessed in CD 
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
        fontSize: 20,
        fontWeight:'bold',
        padding: 8,
        marginBottom: -15,
        marginLeft: 5,
        overflow: 'hidden'
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