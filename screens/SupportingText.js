import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

import FloatingButton from '../screens/FloatingButton';
 
export default function SupportingText({ navigation }) {     

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
                <Text style ={styles.listheading}>Supporting Statement</Text>

                <View style ={styles.listtext}>
                 <Text style ={styles.supportingtext}>
                 In clinical practice, only patients with micronutrient 
                 deficiencies are treated with supplementation, however, 
                 most studies only report serum concentrations of 
                 micronutrients and not deficiency rates which is a major 
                 limitation of the current research literature. Only 2 studies
                 report on micronutrient deficiency rates for patients 
                 and healthy controls [Valentini et al, 
                 2008 doi: 10.1016/j.nut.2008.03.018] [Yakut et al,
                 2010 doi: https://dx.doi.org/10.1016/j.ejim.2010.05.007].
                 In clinical practice, only patients with micronutrient 
                 deficiencies are treated with supplementation, however, 
                 most studies only report serum concentrations of 
                 micronutrients and not deficiency rates which is a major 
                 limitation of the current research literature. Only 2 studies
                 report on micronutrient deficiency rates for patients 
                 and healthy controls [Valentini et al, 
                 2008 doi: 10.1016/j.nut.2008.03.018] [Yakut et al,
                    In clinical practice, only patients with micronutrient 
                 deficiencies are treated with supplementation, however, 
                 most studies only report serum concentrations of 
                 micronutrients and not deficiency rates which is a major 
                 limitation of the current research literature. Only 2 studies
                 report on micronutrient deficiency rates for patients 
                 and healthy controls [Valentini et al, 
                 2008 doi: 10.1016/j.nut.2008.03.018] [Yakut et al,
                 </Text>
                </View>

                <View style= {{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 100, paddingBottom: 30, paddingTop: 20}}>
                    <View style= {[styles.practicalbutton, styles.menu]}><Text style= {{fontSize: 16, color: 'white', fontWeight: '500'}}>Practical Tips</Text></View>
                    <FloatingButton style={{bottom: 100}} />
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
    supportingtext: {
        fontSize: 16,
        
    },
    practicaltipsbutton: {
        // backgroundColor: 'red',
        borderRadius: 10,
    },
    practicalbutton: {
        width: 150,
        height: 60,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    menu: {
        backgroundColor: '#93BAC5'
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