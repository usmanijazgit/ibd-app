import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Button} from 'react-native';
import Menu from './actions/Menu';

import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import * as Print from 'expo-print';

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

 class PrintScreen extends Component {   
    
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
   

    }

    onButtonPress = () => {
        const { menuOpen } = this.state;
          this.setState({ menuOpen: !menuOpen });
        }

    onPrint() {
      return (
          Print.printToFileAsync({
              html: "<h1>IBD Tool</h1>",
              width : 612,
              height : 792,
              base64 : false
            })
            
      )
    }

  //   onPrint() {
  //     if (Platform.OS === 'ios' || Platform.OS === 'android' ) {
  //         return(
  //           Print.selectPrinterAsync()
  //         )
  //     } 
  //     else {
  //         return (
  //           Print.printToFileAsync({
  //             html: "<h1>PDF TEST</h1>",
  //             width : 612,
  //             height : 792,
  //             base64 : false
  //           })
  //         )
  //     }
  // }

    
    render() {
        const { menuOpen } = this.state;
        const {headingtwobtn} = this.props.navigation.state.params;

        const myheadingoneitems = this.state.myIBDs.map(ibd => {
          return(
              <ListItem rowkey="id" >
                  <Text style ={styles.listtext}>{ibd.ibdHeadingOne} </Text>
              </ListItem>
          )
          
         });

         const myheadingtwoitems = this.state.myIBDs.map(ibd => {
          return(
              <ListItem rowkey="id" >
                  <Text style ={styles.listtext}>{ibd.ibdHeadingTwo} </Text>
              </ListItem>
          )
          
         });

        const mypracticeitems = this.state.myIBDs.map(ibd => {
          return(
              <ListItem rowkey="id" >
                  <Text style ={styles.listtext}>{ibd.ibdStatement} </Text>
              </ListItem>
          )
          
         });

         const mysupportingitems = this.state.myIBDs.map(ibd => {
          return(
              <ListItem rowkey="id" >
                  <Text style ={styles.listtext}>{ibd.ibdSupportingText} </Text>
              </ListItem>
          )
          
         });


        const mypopulationitems = this.state.myIBDs.map(ibd => {
            return(
                <ListItem rowkey="id" >
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
                    <TouchableOpacity style= {{flexDirection: 'row'}} onPress={() => { this.props.navigation.goBack() }} >
                        <Icon name="ios-arrow-back" style={{fontSize:25 , color: 'white'}}/>
                        <Text style ={styles.back}>Back</Text>
                    </TouchableOpacity>

                    <Icon onPress={this.onButtonPress.bind(this)} name="ios-menu" style={{fontSize:30, color: 'white', marginRight: '5%'}}/>
                </View>

                <View style={styles.headerbox}
                  onPress={
                    Analytics.logEvent('Print_Button', {
                        contentType: 'Print_Button' 
                    })
                } 
                >
                    <Text style ={styles.title}>Print Screen</Text>
                </View>

            </View>

            

            <View style={styles.containertwo}>

                <View style={styles.line}></View>

                <TouchableOpacity onPress={this.onPrint.bind(this)}
                  style={{
                    backgroundColor: 'lightblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 150,
                    height: 50,
                    marginLeft: '30%',
                    borderRadius: 5
                  }}
                >
                  <Text>Print</Text>
                </TouchableOpacity>

                <ScrollView>

                <Text style ={styles.listheading}>Heading One</Text>
                  <List>
                          {myheadingoneitems}
                  </List>  

                <Text style ={styles.listheading}>Heading Two</Text>
                  <List>
                          {myheadingtwoitems}
                  </List>
                

                <Text style ={styles.listheading}>Practice Statement</Text>
                
                    <List>
                        {mypracticeitems}
                    </List>


                <Text style ={styles.listheading}>Supporting Statement</Text>
                
                    <List>
                        {mysupportingitems}
                    </List>

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

                {/* <Button title="Print" onPress={() => { this.props.navigation.navigate('PrintScreen') }}></Button> */}

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


export default withNavigation(PrintScreen);

