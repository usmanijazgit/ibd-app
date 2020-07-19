import React , { Component} from 'react';
import { StyleSheet, View, Button, Alert, KeyboardAvoidingView, TextInput, FlatList, Text, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import firebase from 'firebase';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import { SafeAreaView } from 'react-navigation';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

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


const rootRef = firebase.database().ref();
const ibdRef = rootRef.child('ibd');



export default class CreateRecord extends Component{
    
    constructor (props) {
        super(props);
        
        this.state =({
            ibd: [],
            newIBDHeadingOne: '',
            newIBDHeadingTwo: '',
            newIBDSubHeading: '',
            newIBDStatement: '',
            newIBDSupportingText: '',
            newIBDPopulation: '',
            newIBDIntervention: '',
            newIBDComparator: '',
            newIBDOutcome: '',
            loading: false,
            // enableShift: false,
            // setenableShift: true
            
        });
          
    }


      componentDidMount() {
          
        ibdRef.on('value', (childSnapshot) => {
            const ibd = [];
            childSnapshot.forEach((doc) => {
                ibd.push({
                    key: doc.key,
                    ibdHeadingOne: doc.toJSON().ibdHeadingOne,
                    ibdHeadingTwo: doc.toJSON().ibdHeadingTwo,
                    ibdSubHeading: doc.toJSON().ibdSubHeading,
                    ibdStatement: doc.toJSON().ibdStatement,
                    ibdSupportingText: doc.toJSON().ibdSupportingText,
                    ibdPopulation: doc.toJSON().ibdPopulation,
                    ibdIntervention: doc.toJSON().ibdIntervention,
                    ibdComparator: doc.toJSON().ibdComparator,
                    ibdOutcome: doc.toJSON().ibdOutcome,
                });
                this.setState({
                    ibd: ibd,
                    loading: false,
                    
                });
            });
        });
       
      }

      onPressAdd = () => {
        if (this.state.newIBDHeadingOne.trim() === '') {
            alert('Heading One Field is Blank');
            return;
        }

        if (this.state.newIBDHeadingTwo.trim() === '') {
            alert('Heading Two Field is Blank');
            return;
        }

        if (this.state.newIBDStatement.trim() === '') {
            alert('Statement Field is Blank');
            return;
        }

        if (this.state.newIBDSupportingText.trim() === '') {
            alert('Supporting Text Field is Blank');
            return;
        }

        if (this.state.newIBDPopulation.trim() === '') {
            alert('Population Field is Blank');
            return;
        }

        if (this.state.newIBDIntervention.trim() === '') {
            alert('Intervention Field is Blank');
            return;
        }

        if (this.state.newIBDComparator.trim() === '') {
            alert('Comparator Field is Blank');
            return;
        }

        if (this.state.newIBDOutcome.trim() === '') {
            alert('Outcome Field is Blank');
            return;
        }
        

        ibdRef.push({
            ibdHeadingOne: this.state.newIBDHeadingOne,
            ibdHeadingTwo: this.state.newIBDHeadingTwo,
            ibdSubHeading: this.state.newIBDSubHeading,
            ibdStatement: this.state.newIBDStatement,
            ibdSupportingText: this.state.newIBDSupportingText,
            ibdPopulation: this.state.newIBDPopulation,
            ibdIntervention: this.state.newIBDIntervention,
            ibdComparator: this.state.newIBDComparator,
            ibdOutcome: this.state.newIBDOutcome,

        });
    }
      
      render() {
        
      
        return (
           
          <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={styles.screen}
          >
            
          <View style={styles.inner}>
            
              <View style={styles.viewStyle}>

                    <Button title="Log out" onPress={() => firebase.auth().signOut()}> 
                         Log Out 
                    </Button>
              </View>
                
                    {/* <TouchableOpacity style= {{flexDirection: 'row'}} onPress={() => { this.props.navigation.goBack() }} >
                                <Icon name="ios-arrow-back" style={{fontSize:25 , color: 'white'}}/>
                                <Text style ={styles.back}>Back</Text>
                    </TouchableOpacity> */}
               

               <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='black'
                        placeholder='Enter heading One'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDHeadingOne: text });
                            }
                        }
                        value={this.state.newIBDHeadingOne}
                    />


                <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='black'
                        placeholder='Enter heading Two'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDHeadingTwo: text });
                            }
                        }
                        value={this.state.newIBDHeadingTwo}
                    />

                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='black'
                        placeholder='Enter Subheading'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDSubHeading: text });
                            }
                        }
                        value={this.state.newIBDSubHeading}
                    />

                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='black'
                        placeholder='Enter Statement'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDStatement: text });
                            }
                        }
                        value={this.state.newIBDStatement}
                    />

                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='black'
                        placeholder='Enter Supporting Text'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDSupportingText: text });
                            }
                        }
                        value={this.state.newIBDSupportingText}
                    />


                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='black'
                        placeholder='Enter Population'
                        // onFocus={()=> this.state.setenableShift}
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDPopulation: text });
                            }
                        }
                        value={this.state.newIBDPopulation}
                    />

                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='black'
                        placeholder='Enter Intervention'
                        // onFocus={()=> this.state.setenableShift}
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDIntervention: text });
                            }
                        }
                        value={this.state.newIBDIntervention}
                    />

                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='black'
                        placeholder='Enter Comparator'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDComparator: text });
                            }
                        }
                        value={this.state.newIBDComparator}
                    />

                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='black'
                        placeholder='Enter Outcome'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDOutcome: text });
                            }
                        }
                        value={this.state.newIBDOutcome}
                    />

                <TouchableHighlight
                    style={{ marginLeft: 100}}
                    onPress={this.onPressAdd}
                >
                        <Icon name="ios-add-circle" style={{fontSize:35}}/>
                        
                </TouchableHighlight>

                
              {/* <FlatList
                data={this.state.ibd}
                renderItem={({item, index}) => {
                    return (
                        <Text style={{
                            fontSize: 20,
                            margin: 10
                        }}>{item.ibdHeadingOne}</Text>);
                }}
              >

              </FlatList> */}
            
          </View>
          
          </KeyboardAvoidingView>     
 
          
    
        );
      };
    };
    
const styles = StyleSheet.create({
    screen: {
    flex: 1
    },

    viewStyle: {
        backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 50
    },

    textInput: {
        height: 40,
        width: 200,
        margin: 10,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        color: 'black'
    },
    inner: {
        justifyContent: "flex-end",
    }
});
    