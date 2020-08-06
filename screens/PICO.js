import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Button} from 'react-native';
import { withNavigation } from 'react-navigation';
import FloatingButton from '../screens/FloatingButton';
import Menu from './actions/Menu';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import ReadMore from 'react-native-read-more-text';


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

 class PICO extends Component {   
    
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

        Analytics.setCurrentScreen('PICO_Screen');    
    }

    onButtonPress = () => {
        const { menuOpen } = this.state;
          this.setState({ menuOpen: !menuOpen });
        }

    //  printFun() {

    //    this.props.navigation.navigate('PrintScreen')

    //  }   

    
    render() {
        const { myIBDs } = this.state;
        const { menuOpen } = this.state;
        const {headingtwobtn} = this.props.navigation.state.params;

        const mypopulationitems = this.state.myIBDs.map(ibd => {
            return(
                <ListItem rowkey="id">
                    <Text style ={styles.listtext}>{ibd.ibdPopulation} </Text>
                </ListItem>
            )
            
        });

        const myinterventionitems = this.state.myIBDs.map(ibd => {
            return(
                <ListItem rowkey="id" >
                    <Text style ={styles.listtext}>{ibd.ibdIntervention}</Text>
                </ListItem>
            )
            
        });

        const mycomparatoritems = this.state.myIBDs.map(ibd => {
            return(
                <ListItem rowkey="id" >
                    <Text style ={styles.listtext}>{ibd.ibdComparator}</Text>
                </ListItem>
            )
            
        });

        const myoutcomeitems = this.state.myIBDs.map(ibd => {
            return(
                <ListItem rowkey="id" >
                    <Text style ={styles.listtext}>{ibd.ibdOutcome}</Text>
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
                <Text style ={styles.listheading}>Population</Text>
                
                    <List>
                        {mypopulationitems}
                    </List>
               

                
                <Text style ={styles.listheading}>Intervention</Text>
                
                    <List>
                        {myinterventionitems}
                    </List>
             

                <Text style ={styles.listheading}>Comparator</Text>
                    <List>
                        {mycomparatoritems}
                    </List>
                

                <Text style ={styles.listheading}>Outcome</Text>
                     <List>
                        {myoutcomeitems}
                    </List>
                

            </ScrollView>



                <Button title="Print" onPress={() => this.props.navigation.navigate('PrintScreen', {headingtwobtn: myIBDs[0].ibdHeadingTwo, supportingText: myIBDs[0].ibdSupportingText})}></Button>

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


export default withNavigation(PICO);



// import React from 'react';
// import { StyleSheet, View, Text, ScrollView, Button, TouchableOpacity} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons'
// import { TextInput } from 'react-native-gesture-handler';
// import * as Animatable from 'react-native-animatable';



// export default function PICO({ navigation }) {  

//     const backscreen = () => {
//         navigation.navigate('SupportingText');
//     }    

//     return (
//         <View style={styles.screen}>
              
//                 <View style={styles.backbox}>
//                     <TouchableOpacity style= {{flexDirection: 'row'}} onPress={backscreen}>
//                         <Icon name="ios-arrow-back" style={{fontSize:25 , color: 'black'}}/>
//                         <Text style ={styles.back}>Back</Text>
//                     </TouchableOpacity>
//                 </View>

//             <View style={styles.headerbox}>
//                 <Text style ={styles.title}>Short Bowel Disease</Text>
//                 <Icon name="ios-help-circle" style={[styles.settinghelp, styles.help]}/>
//                 <Icon name="ios-settings" style={[styles.settinghelp, styles.setting]}/>
//             </View>

            
//             <Animatable.View animation="slideInRight" duration={500} style={styles.search}>
//                     <Icon name="ios-search" style={{fontSize:16}}/>
//                     <TextInput placeholder="Search" style={{fontSize:16, marginLeft: 10}} />
//             </Animatable.View>  


//             <ScrollView>
//                 <Text style ={styles.listheading}>Population</Text>
//                 <View style ={styles.listtext}>
//                  <Text style ={styles.picotext}>
//                  Adults ≥16 years with IBD diagnosed using standard
//                  procedures including endoscopy, histology.
//                  </Text>
//                 </View>

//                 <Text style ={styles.listheading}>Intervention</Text>
//                 <View style ={styles.listtext}>
//                  <Text style ={styles.picotext}>
//                  Any oral and/or enteral dietary intervention used in 
//                  IBD administered for ≥1 week.  Intervention must address
//                  the specific research question of interest for 
//                  the systematic review
//                  </Text>
//                 </View>

//                 <Text style ={styles.listheading}>Comparator</Text>
//                 <View style ={styles.listtext}>
//                  <Text style ={styles.picotext}>
//                  Dietary intervention will be compared to placebo, 
//                  standard care or no intervention, or if no comparator 
//                  group end-point data will be compared to baseline. 
//                  </Text>
//                 </View>

//                 <Text style ={styles.listheading}>Outcome</Text>
//                 <View style ={styles.listtext}>
//                  <Text style ={styles.picotext}>
//                  Symptoms of short bowel syndrome – diarrhoea, bloating, 
//                  weight loss, abdominal pain, malabsorption
//                  </Text>
//                 </View>

//             </ScrollView>

//         </View>

        
//     );

// };



// const styles = StyleSheet.create({
//     screen: {
//         backgroundColor: 'white',
//         height: '100%',
//     },
//     search: {
//         height: 50, 
//         width: '95%',
//         marginLeft: '2%',
//         backgroundColor: 'white', 
//         flexDirection: 'row', 
//         padding: 10, 
//         alignItems: 'center',
//         borderRadius: 6,
//         borderWidth: 1,
//         marginVertical: 10,
//     },

//     title: {
//         fontSize: 36,
//         color: 'black',
//         // fontWeight: 'bold',
//         letterSpacing: 3.5,
//         marginLeft: -25,
//         marginTop: 25,
//         // fontFamily: 'sans-serif-light'
//     },

//     subtext: {
//         fontSize: 16,
//         textAlign: 'center',
//         color: 'red',
//         textDecorationLine: 'underline',
//     },
//     listheading: {
//         fontSize: 20,
//         fontWeight:'bold',
//         padding: 8,
//         marginBottom: -15,
//         marginLeft: 5,
//         overflow: 'hidden'
//     },
//     listtext: {
//         padding: 5,
//         marginTop: 5,
//         marginLeft: 8,
//         // height: '90%'
//     },
//     picotext: {
//         fontSize: 16
        
//     },

//     headerbox: {
//         // flex: 1,
//         marginHorizontal: 35,
//         flexDirection: 'row',
//         // justifyContent:'space-between'
//     },
//     backbox: {
//         paddingLeft: 10,
//         paddingTop: 25,
        
//     },
//     back: {
//         fontSize: 20,
//         color: 'black',
//         marginLeft: 10,
//     },
//     settinghelp: {
//         fontSize:40, 
//         marginTop: 30, 
//         color: 'black',
//         paddingRight: 15,
//         margin: -15
//     },
//     help: {
//         marginRight: -70
//     }
    
    

// });