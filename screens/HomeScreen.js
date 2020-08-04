import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import Menu from './actions/Menu';
import { withNavigation } from 'react-navigation';

import * as Analytics from 'expo-firebase-analytics';


class HomeScreen extends Component {

   state = {menuOpen: false}

   onButtonPress = () => {
    const { menuOpen } = this.state;
      this.setState({ menuOpen: !menuOpen });
    }

    screenchangeone = () => {
        this.props.navigation.navigate('HomeOption', {headingonebtn: 'Nutrition Assessment'});
    }

     screenchangetwo = () => {
        this.props.navigation.navigate('HomeOption', {headingonebtn: 'Nutrition Screening'});
    }

     screenchangethree = () => {
        this.props.navigation.navigate('HomeOption', {headingonebtn: 'Dietary Management'});
    }


     backscreen = () => {
        this.props.navigation.navigate('PatientInfo');
    }

    

    render() {

     const { menuOpen } = this.state;

    return (
        <View style={styles.container}>

            {menuOpen ? <Menu isActive={false}/>: null}

            <View style={styles.containerone}>

                <View style={styles.backbox}>
                    <TouchableOpacity style= {{flexDirection: 'row'}} onPress={this.backscreen.bind(this)}>
                        <Icon name="ios-arrow-back" style={{fontSize:25 , color: 'white'}}/>
                        <Text style ={styles.back}>Back</Text>
                    </TouchableOpacity>
                </View>
            

                <View style={styles.boxtwo}>
                    
                    <Text style ={styles.title}>IBD Tool</Text>
                    <Icon onPress={this.onButtonPress.bind(this)} name="ios-menu" style={{fontSize:30, marginTop: 30, color: 'white'}}/>
                </View>

            </View>

            <View style={styles.containertwo}>
                <View style={styles.line}></View>

                <TouchableOpacity onPress={this.screenchangeone.bind(this)}>
                    <View style={[styles.cards, styles.cardone]}
                        onPress={
                            Analytics.logEvent('Nutrition_Assessment_Button', {
                                contentType: 'Button' 
                            })
                        } 
                    >
                        <Text style={styles.name}>
                            Nutrition Assessment
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.screenchangetwo.bind(this)}>
                    <View style={[styles.cards, styles.cardtwo]}
                         onPress={
                            Analytics.logEvent('Nutrition_Screening_Button', {
                                contentType: 'Button' 
                            })
                        } 
                    >
                        <Text style={styles.name}>
                          Nutrition Screening
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.screenchangethree.bind(this)}>
                    <View style={[styles.cards, styles.cardthree]} 
                        onPress={
                            Analytics.logEvent('Dietary_Management_Button', {
                                contentType: 'Button' 
                            })
                        } 
                    >
                        <Text style={styles.name}>
                            Dietary Management
                        </Text>
                    </View>
                </TouchableOpacity>

                

            </View>

           
        </View>

        

        
    );

};

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

export default withNavigation(HomeScreen);