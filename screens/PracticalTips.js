import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Button} from 'react-native';
import { withNavigation } from 'react-navigation';

import Menu from './actions/Menu';

import Icon from 'react-native-vector-icons/Ionicons';

import firebase from 'firebase';
import { List, ListItem } from 'native-base';
import * as Analytics from 'expo-firebase-analytics';


const config ={
    apiKey: "AIzaSyBHKV7x97xwDrUVnc7Z6wPCiXV8Yc-_nO8",
          authDomain: "ibdtool-2a1c7.firebaseapp.com",
          databaseURL: "https://ibdtool-2a1c7.firebaseio.com",
          projectId: "ibdtool-2a1c7",
          storageBucket: "ibdtool-2a1c7.appspot.com",
          messagingSenderId: "633888609862",
          appId: "1:633888609862:web:4a4eff1a47f363aa5edc47",
          measurementId: "G-LF7BLTRE1G",
          presistance: true,
    };

    if (!firebase.apps.length) {
          firebase.initializeApp(config);
      }

 class PracticalTips extends Component {   
    
    state = {
        menuOpen: false,
        myIBDs: []
    }

     componentDidMount() {
            
        const ibdRef = firebase.database().ref('ibd');
        const {supportingText} = this.props.navigation.state.params;
        
        ibdRef.orderByChild('ibdSupportingText').equalTo(supportingText).once('value', snapshot => {
            this.setState({ myIBDs:  Object.values(snapshot.val()) });
            });

        Analytics.setCurrentScreen('OtherResources_Screen');    
    }

    onButtonPress = () => {
        const { menuOpen } = this.state;
          this.setState({ menuOpen: !menuOpen });
        } 

    
    render() {
        const { myIBDs } = this.state;
        const { menuOpen } = this.state;
        const {headingtwobtn} = this.props.navigation.state.params;

        const practicaltipsitems = this.state.myIBDs.map(ibd => {
            return(
                <ListItem rowkey="id">
                    <Text style ={styles.listtext}>{ibd.ibdPracticalTips} </Text>
                </ListItem>
            )
            
        });

      
        
    return (
            
            <View style={styles.screen}>
                {menuOpen ? <Menu isActive={false}/>: null}
            <View style={styles.containerone}>
                <View style={styles.backbox}>
                    <TouchableOpacity style= {{flexDirection: 'row'}} onPress={() => { this.props.navigation.navigate('SupportingText') }} >
                        <Icon name="ios-arrow-back" style={{fontSize:25 , color: 'white'}}/>
                        <Text style ={styles.back}>Back</Text>
                    </TouchableOpacity>

                    <Icon onPress={this.onButtonPress.bind(this)} name="ios-menu" style={{fontSize:30, color: 'white', marginRight: '5%'}}/>
                </View>

                <View style={styles.headerbox}>
                    <Text style ={styles.title}>{headingtwobtn}</Text>
                </View>

            </View>

            

            <View style={styles.containertwo}>

                <View style={styles.line}></View>

                <ScrollView>
                <Text style ={styles.listheading}>Practical Tips</Text>
                
                    <List>
                        {practicaltipsitems}
                    </List>
               

            </ScrollView>

            </View>

            </View>
    );
  };

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
        flex: 3,
        backgroundColor: "#fff",
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60
    },

    title: {
        fontSize: 26,
        color: 'white',
        // fontWeight: 'bold',
        letterSpacing: 3.5,
        marginLeft: -25,
        marginTop: 25,
    },

    listtext: {
        fontSize: 15,
        color: 'blue',
        marginLeft: 5,
        
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
    practicetext: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
        width: 100
    },
    listheading: {
        fontSize: 18,
        fontWeight:'bold',
        padding: 8,
        // marginBottom: -15,
        marginLeft: 5,
        overflow: 'hidden'
    },
    line: {
        width: 66,
        height: 4,
        backgroundColor: '#f4f0f0',
        borderRadius: 2,
        marginVertical: 25,
        left: '43%'
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
});


export default withNavigation(PracticalTips);

