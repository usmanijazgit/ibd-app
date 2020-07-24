import React , { Component} from 'react';
import { StyleSheet, View, Button, Alert, TextInput, FlatList, Text, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import {connect} from 'react-redux';
// import {recordUpdate} from './actions';

import RNPickerSelect from 'react-native-picker-select';

import firebase from 'firebase';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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



 class CreateRecord extends Component{
    
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
            loading: false
            
        });
          
    }

    onClear() {
        this.setState({
            newIBDHeadingOne: '',
            newIBDHeadingTwo: '',
            newIBDSubHeading: '',
            newIBDStatement: '',
            newIBDSupportingText: '',
            newIBDPopulation: '',
            newIBDIntervention: '',
            newIBDComparator: '',
            newIBDOutcome: '',
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

        this.setState({
            // newIBDHeadingOne: '',
            // newIBDHeadingTwo: '',
            newIBDSubHeading: '',
            newIBDStatement: '',
            newIBDSupportingText: '',
            newIBDPopulation: '',
            newIBDIntervention: '',
            newIBDComparator: '',
            newIBDOutcome: '',
        });

        alert('Record Added');
    }
      
      render() {
        
      
        return (
           
        //   <KeyboardAwareScrollview
        //         // behavior={Platform.OS === "ios" ? "padding" : null}
        //         style={styles.screen}
        //   >
        <KeyboardAwareScrollView>
          <View style={styles.inner}>
            
                <View style={styles.viewStyle}>

                    <View style={styles.backbox}>
                        <TouchableOpacity style= {{flexDirection: 'row'}} onPress={() => { this.props.navigation.navigate('AdminHome') }} >
                            <Icon name="ios-arrow-back" style={{fontSize:25 , color: 'black'}}/>
                            <Text style ={styles.back}>Back</Text>
                        </TouchableOpacity>
                    </View>

                    <Icon name="md-log-out" onPress={() => firebase.auth().signOut() } style={{fontSize:30, marginTop: 15, color: 'black', textAlign: "right", marginRight: 20 }}/>
             
                </View>

                <Text style={styles.textContainer}>Create A New Record</Text>

               <View style={styles.dataInputScreen}> 

               <Text style={styles.textInputHeading}>Heading One:</Text>

               
                <RNPickerSelect placeholder={{
                    label: 'Enter Heading One',
                    value: null,
                }} placeholderTextColor= 'black' style={{...pickerSelectStyles}}
                    items={[
                        { label: 'Nutrition Assessment', value: 'Nutrition Assessment' },
                        { label: 'Nutrition Screening', value: 'Nutrition Screening' },
                        { label: 'Dietary Management', value: 'Dietary Management' }
                        
                    ]}

                    onValueChange={
                        (value) => {
                            this.setState({ newIBDHeadingOne: value });
                        }
                    }
                    value={this.state.newIBDHeadingOne}
                />

                <Text style={styles.textInputHeading}>Heading Two:</Text>
                <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='lightgrey'
                        placeholder='Enter Heading Two'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDHeadingTwo: text });
                            }
                        }
                        value={this.state.newIBDHeadingTwo}
                    />

                    <Text style={styles.textInputHeading}>Sub-Heading (Optional):</Text>

                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='lightgrey'
                        placeholder='Enter Sub-Heading'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDSubHeading: text });
                            }
                        }
                        value={this.state.newIBDSubHeading}
                    />

                    <Text style={styles.textInputHeading}>Practice Statement:</Text>

                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='lightgrey'
                        placeholder='Enter Practice Statement'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDStatement: text });
                            }
                        }
                        value={this.state.newIBDStatement}
                    />

                    <Text style={styles.textInputHeading}>Supporting Text:</Text>

                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='lightgrey'
                        placeholder='Enter Supporting Text'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDSupportingText: text });
                            }
                        }
                        value={this.state.newIBDSupportingText}
                    />

                    <Text style={styles.textInputHeading}>Population:</Text>

                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='lightgrey'
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

                    <Text style={styles.textInputHeading}>Intervention:</Text>

                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='lightgrey'
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

                    <Text style={styles.textInputHeading}>Comparator:</Text>

                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='lightgrey'
                        placeholder='Enter Comparator'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDComparator: text });
                            }
                        }
                        value={this.state.newIBDComparator}
                    />

                    <Text style={styles.textInputHeading}>Outcome:</Text>

                    <TextInput style={styles.textInput}
                        keyboardType='default'
                        placeholderTextColor='lightgrey'
                        placeholder='Enter Outcome'
                        autoCapitalize='none'
                        onChangeText={
                            (text) => {
                                this.setState({ newIBDOutcome: text });
                            }
                        }
                        value={this.state.newIBDOutcome}
                    />

                
                </View>        
                
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

        <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor: '#EA8332'}}> 

            <TouchableHighlight
                style={[styles.button, styles.clearbutton]}
                onPress={this.onClear.bind(this)}
                >
                    <Text style={[styles.btnname, styles.clearbtnname]}>
                            Clear
                    </Text>
                    
            </TouchableHighlight>

            <TouchableHighlight
                style={[styles.button, styles.addbutton]}
                onPress={this.onPressAdd}
                >
                    {/* <Icon name="ios-add-circle" style={{fontSize:35}}/> */}
                    <Text style={[styles.btnname, styles.addbtnname]}>
                            Add Record
                    </Text>
            </TouchableHighlight>

            

        </View> 
          
        </KeyboardAwareScrollView>  

        
 
          
    
        );
      };
    };
    
const styles = StyleSheet.create({

    viewStyle: {
        // backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
    },

    textContainer: {
        // backgroundColor: 'white',
        fontSize: 32,
        marginBottom: 15,
        // width: '100%',
        alignSelf: 'center',
        letterSpacing: 3.5,
    },
    textInputHeading: {
        fontSize: 18,
        marginLeft: 25,
        marginTop: 8,
        fontWeight: 'bold',
        letterSpacing: 2.5,
        color: 'white'
    },
    textInput: {
        height: 45,
        width: '90%',
        margin: 10,
        marginLeft: 20,
        padding: 10,
        borderBottomColor: '#2D3057',
        borderBottomWidth: 1,
        color: 'white',
        borderRadius: 2,
        backgroundColor: '#EA8332',
        fontSize: 16
    },
    dataInputScreen: {
        backgroundColor: '#EA8332',
        paddingTop: 30,
        borderTopRightRadius: 80,
        paddingBottom: 40
        
    },
    back: {
        fontSize: 20,
        color: 'black',
        marginLeft: 10,
    },
    backbox: {
        paddingTop: 15,
        paddingLeft: 10,
        width: 80
    },
    button: {
        margin: 20,
        padding: 12,
        width: 150,
        justifyContent: 'center',
  
    },
    btnname: {
        fontSize: 24, 
        letterSpacing: 1.5,
        textAlign: 'center',

    },

   clearbtnname: {
       color: '#C2004B',
       backgroundColor: 'white',
   },

   addbtnname: {
    color: 'white',
    backgroundColor: '#C2004B',
   },

   clearbutton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#C2004B'
   },

   addbutton: {
    backgroundColor: '#C2004B',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#C2004B'
   }

});

const pickerSelectStyles = StyleSheet.create({

    inputIOS: {
        height: 45,
        width: '90%',
        margin: 10,
        marginLeft: 20,
        padding: 10,
        borderBottomColor: '#2D3057',
        borderBottomWidth: 1,
        color: 'white',
        borderRadius: 2,
        backgroundColor: '#EA8332',
        fontSize: 16
    },

    inputAndroid: {
        height: 45,
        width: '90%',
        margin: 10,
        marginLeft: 20,
        padding: 10,
        borderBottomColor: '#2D3057',
        borderBottomWidth: 1,
        color: 'white',
        borderRadius: 2,
        backgroundColor: '#EA8332',
        fontSize: 16
    }

    });

// const mapStateToProps = (state) => {
//     const {
//         newIBDHeadingOne,
//         newIBDHeadingTwo,
//         newIBDSubHeading,
//         newIBDStatement,
//         newIBDSupportingText,
//         newIBDPopulation,
//         newIBDIntervention,
//         newIBDComparator,
//         newIBDOutcome
//     }
// }

export default CreateRecord;

// export default connect(null, {recordUpdate}) (CreateRecord);