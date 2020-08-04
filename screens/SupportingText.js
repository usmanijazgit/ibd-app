import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import FloatingButton from '../screens/FloatingButton';
import Menu from './actions/Menu';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import ReadMore from 'react-native-read-more-text';

import firebase from 'firebase';
import { List, ListItem } from 'native-base';
require('@firebase/database');

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

 class SupportingText extends Component {   
    
    state = {
        menuOpen: false,
        myIBDs: []
    }

     componentDidMount() {
            
        const ibdRef = firebase.database().ref('ibd');
        const {practiceText} = this.props.navigation.state.params;
        
        ibdRef.orderByChild('ibdStatement').equalTo(practiceText).once('value', snapshot => {
            this.setState({ myIBDs:  Object.values(snapshot.val()) });
            });

        Analytics.setCurrentScreen('SupportingTextScreen');        

    }

    onButtonPress = () => {
        const { menuOpen } = this.state;
          this.setState({ menuOpen: !menuOpen });
        }

    
    render() {
        const { menuOpen } = this.state;
        const {headingtwobtn} = this.props.navigation.state.params;

        const myitems = this.state.myIBDs.map(ibd => {
            return(
                <ListItem rowkey="id" onPress={() => this.props.navigation.navigate('PICO', {headingtwobtn: ibd.ibdHeadingTwo, supportingText: ibd.ibdSupportingText})}>
                    <Text style ={styles.listtext}>{ibd.ibdSupportingText}</Text>
                </ListItem>
            )
            
        });

        
    return (
            
            <View style={styles.screen}>
                {menuOpen ? <Menu isActive={false}/>: null}
            <View style={styles.containerone}>
                <View style={styles.backbox}>
                    <TouchableOpacity style= {{flexDirection: 'row'}} onPress={() => { this.props.navigation.navigate('PracticeStatement') }} >
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
                    <Text style ={styles.listheading}>Supporting Statement</Text>
                
                    <List>
                        {myitems}
                    </List>

                </ScrollView>

                {/* <FloatingButton /> */}

                <View style= {{ paddingBottom: 65, paddingTop: 20}}>
                    {/* <View style= {[styles.practicalbutton, styles.menu]}><Text style= {{fontSize: 16, color: 'black', fontWeight: '500'}}>Practical Tips</Text></View> */}
                    <FloatingButton style={{width: 380}} />
                </View>

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
        flex: 4,
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


export default withNavigation(SupportingText);





// import React from 'react';
// import { StyleSheet, View, Text, ScrollView, Button, TouchableOpacity} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons'
// import { TextInput } from 'react-native-gesture-handler';
// import * as Animatable from 'react-native-animatable';

// import FloatingButton from '../screens/FloatingButton';
 
// export default function SupportingText({ navigation }) {     

//     // const screenchange = () => {
//     //     navigation.navigate('PICO');
//     // }

//     const backscreen = () => {
//         navigation.navigate('PracticeStatement');
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
//                 <Text style ={styles.listheading}>Supporting Statement</Text>

//                 <View style ={styles.listtext}>
//                  <Text style ={styles.supportingtext}>
                //  In clinical practice, only patients with micronutrient 
                //  deficiencies are treated with supplementation, however, 
                //  most studies only report serum concentrations of 
                //  micronutrients and not deficiency rates which is a major 
                //  limitation of the current research literature. Only 2 studies
                //  report on micronutrient deficiency rates for patients 
                //  and healthy controls [Valentini et al, 
                //  2008 doi: 10.1016/j.nut.2008.03.018] [Yakut et al,
                //  2010 doi: https://dx.doi.org/10.1016/j.ejim.2010.05.007].
                //  In clinical practice, only patients with micronutrient 
                //  deficiencies are treated with supplementation, however, 
                //  most studies only report serum concentrations of 
                //  micronutrients and not deficiency rates which is a major 
                //  limitation of the current research literature. Only 2 studies
                //  report on micronutrient deficiency rates for patients 
                //  and healthy controls [Valentini et al, 
                //  2008 doi: 10.1016/j.nut.2008.03.018] [Yakut et al,
                //     In clinical practice, only patients with micronutrient 
                //  deficiencies are treated with supplementation, however, 
                //  most studies only report serum concentrations of 
                //  micronutrients and not deficiency rates which is a major 
                //  limitation of the current research literature. Only 2 studies
                //  report on micronutrient deficiency rates for patients 
                //  and healthy controls [Valentini et al, 
                //  2008 doi: 10.1016/j.nut.2008.03.018] [Yakut et al,
//                  </Text>
//                 </View>

                // <View style= {{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 100, paddingBottom: 30, paddingTop: 20}}>
                //     <View style= {[styles.practicalbutton, styles.menu]}><Text style= {{fontSize: 16, color: 'white', fontWeight: '500'}}>Practical Tips</Text></View>
                //     <FloatingButton style={{bottom: 100}} />
                // </View>
              
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
//     supportingtext: {
//         fontSize: 16,
        
//     },
//     practicaltipsbutton: {
//         // backgroundColor: 'red',
//         borderRadius: 10,
//     },
//     practicalbutton: {
//         width: 150,
//         height: 60,
//         borderRadius: 15,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginLeft: 20
//     },
//     menu: {
//         backgroundColor: '#93BAC5'
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



