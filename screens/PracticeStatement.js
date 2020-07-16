import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import ReadMore from 'react-native-read-more-text';

import firebase from 'firebase';
import { List, ListItem } from 'native-base';



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
        myIBDs: []
        
    }

     componentDidMount() {
            
        const ibdRef = firebase.database().ref('ibd');
        const {headingtwobtn} = this.props.navigation.state.params;
        
        ibdRef.orderByChild('ibdHeadingTwo').equalTo(headingtwobtn).once('value', snapshot => {
            this.setState({ myIBDs:  Object.values(snapshot.val()) });
            });

    }
    
    render() {
        const {headingtwobtn} = this.props.navigation.state.params;

        const myitems = this.state.myIBDs.map(ibd => {
            return(
                <ListItem rowkey="id" onPress={() => this.props.navigation.navigate('SupportingText', {headingtwobtn: ibd.ibdHeadingTwo, practiceText: ibd.ibdStatement})}>
                    <Text style ={styles.listtext}>{ibd.ibdStatement}</Text>
                </ListItem>
            )
            
        });

        
    return (
            
            <View style={styles.screen}>
            <View style={styles.containerone}>
                <View style={styles.backbox}>
                    <TouchableOpacity style= {{flexDirection: 'row'}} onPress={() => { this.props.navigation.navigate('HomeOption') }} >
                        <Icon name="ios-arrow-back" style={{fontSize:25 , color: 'white'}}/>
                        <Text style ={styles.back}>Back</Text>
                    </TouchableOpacity>

                    <Icon name="ios-settings" style={{fontSize:30, color: 'white', marginRight: '5%'}}/>
                </View>

                <View style={styles.headerbox}>
                    <Text style ={styles.title}>{headingtwobtn}</Text>
                </View>

                
                <Animatable.View animation="slideInRight" duration={500} style={styles.search}>
                        <Icon name="ios-search" style={{fontSize:16}}/>
                        <TextInput placeholder="Search" style={{fontSize:16, marginLeft: 10}} />
                </Animatable.View>
            </View>

            

            <View style={styles.containertwo}>

                <View style={styles.line}></View>

                <ScrollView>
                   
                
                <Text style ={styles.listheading}>Practice Statement</Text>

               
                <List numberOfLines={2}>
                    {myitems}
                </List>

            {/* <ListItem children={<Text numberOfLines={3} ellipsizeMode={'tail'}>{myitems}</Text>} /> */}
            
                {/* <ReadMore numberOfLines={2}>
                <Text style ={styles.practicetext}>
                     aaa
                 </Text>
                </ReadMore> */}

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










// import React from 'react';
// import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons'
// import { TextInput } from 'react-native-gesture-handler';
// import * as Animatable from 'react-native-animatable';
// import ReadMore from 'react-native-read-more-text';
// import { render } from 'react-dom';


// export default function PracticeStatement({ navigation }) {     

//     const screenchange = () => {
//         navigation.navigate('SupportingText');
//     }

//     const backscreen = () => {
//         navigation.navigate('HomeOption');
//     }
   

//     return (
//         <View style={styles.screen}>

            
//             <View style={styles.backbox}>
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
//                 <Text style ={styles.listheading}>Practice Statement</Text>

//                 <View style ={styles.listtext}>
//                 <ReadMore numberOfLines={2}>
//                 <Text style ={styles.practicetext} onPress={screenchange}>Calcium intake should be assessed in CD 
//                 nd UC patients and patients may not meet the
//                  recommended intake. (GRADE very low quality)</Text>
//                 </ReadMore>
//                 </View>

//                 <View style ={styles.listtext}>
                // <ReadMore numberOfLines={2}>
                // <Text style ={styles.practicetext}>
                //     A comprehensive nutritional assessment in IBD patients
                //     includes the following micronutrients: folic acid, 
                //     vitamin B12, vitamin D, iron, zinc, magnesium and selenium.
                //      Review recent tests and determine the frequency of monitoring 
                //      depending on disease activity, dietary intake and micronutrient 
                //      supplementation</Text>
                // </ReadMore>
//                 </View>

//                 <View style ={styles.listtext}>
//                 <ReadMore numberOfLines={2}>
//                 <Text style ={styles.practicetext}>Calcium intake should be assessed in CD 
//                 nd UC patients and patients may not meet the
//                  recommended intake. (GRADE very low quality)</Text>
//                 </ReadMore>
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
//     listtext: {
//         padding: 5,
//         marginTop: 5,
//         marginLeft: 8,
//         marginBottom: '-2%'
//     },
    // practicetext: {
    //     fontSize: 16,
    //     color: 'blue',
    //     textDecorationLine: 'underline',

//     },
    // listheading: {
    //     fontSize: 20,
    //     fontWeight:'bold',
    //     padding: 8,
    //     marginBottom: -15,
    //     marginLeft: 5,
    //     overflow: 'hidden'
    // },
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