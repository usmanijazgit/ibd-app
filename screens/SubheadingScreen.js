import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import ReadMore from 'react-native-read-more-text';
import Menu from './actions/Menu';

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

 class PracticeStatement extends Component {   
    
    state = {
        menuOpen: false,
        myIBDs: []
        
    }

     componentDidMount() {
            
        const ibdRef = firebase.database().ref('ibd');
        const {headingtwobtn} = this.props.navigation.state.params;
        
        ibdRef.orderByChild('ibdHeadingTwo').equalTo(headingtwobtn).once('value', snapshot => {
            this.setState({ myIBDs:  Object.values(snapshot.val()), inMemory:  Object.values(snapshot.val()) });
            });

            Analytics.setCurrentScreen('PracticeStatementScreen');    

    }

    onButtonPress = () => {
        const { menuOpen } = this.state;
          this.setState({ menuOpen: !menuOpen });
        }

    searchIBD = (value) => {
        const filteredIBD = this.state.inMemory.filter(
            ibd => {
                let ibdLowercase = (ibd.ibdStatement).toLowerCase()

                let searchTermLowercase = value.toLowerCase()

                return ibdLowercase.indexOf(searchTermLowercase) > -1
            }
        )
        this.setState({myIBDs: filteredIBD});
    }  
    
    render() {
        const { myIBDs } = this.state;
        const { menuOpen } = this.state;
        const {headingtwobtn} = this.props.navigation.state.params;

        const subHeadingList = [];
        const iBDList = [];
        for(let i = 0; i < myIBDs.length; i++) {
            if(subHeadingList.includes(myIBDs[i].ibdSubHeading)) continue;
            subHeadingList.push(myIBDs[i].ibdSubHeading);
            iBDList.push(myIBDs[i]);
        }
        const myitems = iBDList.map(ibd => {
            return(
              <ListItem rowkey="id" onPress={() => this.props.navigation.navigate('PracticeStatement', {headingtwobtn: ibd.ibdHeadingTwo})}>
                <Text style ={styles.listtext}>{ibd.ibdSubHeading}</Text>
              </ListItem>
            )
            
        });

        
    return (
            
            <View style={styles.screen}>
                 {menuOpen ? <Menu isActive={false}/>: null}
            <View style={styles.containerone}>
                <View style={styles.backbox}>
                    <TouchableOpacity style= {{flexDirection: 'row'}} onPress={() => { this.props.navigation.navigate('HomeOption') }} >
                        <Icon name="ios-arrow-back" style={{fontSize:25 , color: 'white'}}/>
                        <Text style ={styles.back}>Back</Text>
                    </TouchableOpacity>

                    <Icon onPress={this.onButtonPress.bind(this)} name="ios-menu" style={{fontSize:30, color: 'white', marginRight: '5%'}}/>
                </View>

                <View style={styles.headerbox}>
                    <Text style ={styles.title}>{headingtwobtn}</Text>
                </View>

                
                <Animatable.View animation="slideInRight" duration={500} style={styles.search}>
                        <Icon name="ios-search" style={{fontSize:16}}/>
                        <TextInput 
                        placeholder="Search" 
                        style={{fontSize:16, marginLeft: 10}}

                        onChangeText={(value)=>this.searchIBD(value)}
                        />
                </Animatable.View>
            </View>

            

            <View style={styles.containertwo}>

                <View style={styles.line}></View>

                <ScrollView>
                   
                
                <Text style ={styles.listheading}>Subheading</Text>

               
                <List numberOfLines={2}>
                    {myitems}
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

    listtext: {
        fontSize: 15,
        color: 'blue',
        // textDecorationLine: 'underline',
        // padding: 4,
        // marginTop: 10,
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
    }
});


export default withNavigation(PracticeStatement);
