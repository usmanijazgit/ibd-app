import React, {Component} from 'react';
import { StyleSheet, View, Text, Button, Picker, Keyboard, TextInput, TouchableOpacity} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import firebase from 'firebase';

import { withNavigation } from 'react-navigation';

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
const patientRef = rootRef.child('patients');

class PatientInfoScreen extends Component{

    constructor (props) {
        super(props);
        
        this.state =({
            patients: [],
            newPatientAge: '',
            newPatientSex: '',
            newPatientDisease: '',
            loading: false
            
        });
          
    }


      componentDidMount() {
          
        patientRef.on('value', (childSnapshot) => {
            const patients = [];
            childSnapshot.forEach((doc) => {
                patients.push({
                    key: doc.key,
                    PatientAge: doc.toJSON().PatientAge,
                    PatientSex: doc.toJSON().PatientSex,
                    PatientDisease: doc.toJSON().PatientDisease,
                });
                this.setState({
                    patients: patients,
                    loading: false,
                    
                });
            });
        });
       
      }

      onPressNext = () => {
        if (this.state.newPatientAge.trim() === '') {
            alert('Enter Patient Age');
            return;
        }


        if (this.state.newPatientAge.trim() <= 0 || this.state.newPatientAge.trim() >= 120 ) {
            alert('Something Wrong With Patient Age');
            return;
        }

        if (this.state.newPatientSex.trim() === '') {
            alert('Select Patient Sex');
            return;
        }

        if (this.state.newPatientDisease.trim() === '') {
            alert('Select Disease Type');
            return;
        }

        patientRef.push({
            PatientAge: this.state.newPatientAge,
            PatientSex: this.state.newPatientSex,
            PatientDisease: this.state.newPatientDisease,
        });

        this.setState({
            newPatientAge: '',
            newPatientSex: '',
            newPatientDisease: '',
            
        });

        this.props.navigation.navigate('Home')
    }

    
    render(){
    return (
        <View style={styles.screen}>
        <View>

            <Text style ={styles.text}>IBD Tool</Text>
           
            <View style= {styles.inputGroup}>
                <View style ={styles.patientContainer}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline', marginLeft: '3%', marginBottom: 30 }}>Patient Details</Text>

                
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.ageStyle}>Age:</Text>

                        <TextInput 
                        style={styles.textInput}
                        keyboardType = 'numeric'
                        placeholder="Enter Patient Age..."

                        onChangeText={
                            (text) => {
                                this.setState({ newPatientAge: text });
                            }
                        }
                        value={this.state.newPatientAge}

                        /> 

                    </View>

                    
                    
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.genderStyle}>Sex:</Text>

                        <RNPickerSelect style={{...pickerSelectStyles}}
                            items={[
                                { label: 'Male', value: 'Male' },
                                { label: 'Female', value: 'Female' }
                            ]}

                            onValueChange={
                                (value) => {
                                    this.setState({ newPatientSex: value });
                                }
                            }
                            value={this.state.newPatientSex}
                        />
                    </View>


                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.fieldTitle}>Disease:</Text>

                        <RNPickerSelect style={{...pickerSelectStyles}}
                            items={[
                                { label: "Crohn’s disease", value: "Crohn’s disease" },
                                { label: "Ulcerative colitis", value: "Ulcerative colitis" },
                                { label: "Indeterminate colitis", value: "Indeterminate colitis" },
                            ]}

                            onValueChange={
                                (value) => {
                                    this.setState({ newPatientDisease: value });
                                }
                            }
                            value={this.state.newPatientDisease}
                        />
                    </View>
                </View>


            </View>    

            {/* <View style={styles.button}><Button style={styles.btnText} title = "Next" onPress={screenchange}/></View>

            <View style={styles.button}><Button style={styles.btnText} title = "Admin Login" onPress={adminloginscreen}/></View> */}
            
            <View style={{flexDirection: 'row',  marginLeft: 'auto'}}>
                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('AdminLogin') }} >
                    <Text style={styles.btnText}>Admin Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={this.onPressNext} >
                    <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
            </View>
        
        </View>
        </View>
    );
  };
    
};

const styles = StyleSheet.create({
   screen: {
    flex: 1,
    backgroundColor: 'white'
   },
    text: {
        fontSize: 42,
        textAlign: 'center',
        marginTop: 90,
        marginBottom: 20,
        color: 'black',
        letterSpacing: 3.5,
    },
    fieldTitle: {
        fontSize: 18,
        marginLeft: 10,
        paddingBottom: 20,  
    },
    genderStyle: {
        fontSize: 18,
        marginLeft: 10,
        marginRight: 35,
        paddingBottom: 20,
    },
    ageStyle: {
        fontSize: 18,
        marginLeft: 10,
        marginRight: 27,
        paddingBottom: 20,
    },

    inputGroup: {
        marginTop: '5%',
    },
    button: {
        width: 160,
        marginTop: 50,
        backgroundColor: 'black',
        height: 100,
        borderRadius: 10,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
       
        // alignSelf: 'flex-end'
    },
    btnText: {
        color: 'white',
        fontSize: 22,
      },
    textInput:{
        fontSize: 16,
        paddingTop: 15,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
        width: 255,
        marginLeft: '5%',
        marginBottom: '5%'
    },
    patientContainer: {
        width: '96%',
        marginLeft: '2%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 15, height: 20},
        shadowRadius: 10,
        shadowOpacity: 0.26,
        elevation: 6, 
        backgroundColor: 'white',
        padding: 35,
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'dotted'
    }

});

const pickerSelectStyles = StyleSheet.create({

    inputIOS: {
        fontSize: 16,
        paddingTop: 15,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
        width: 250,
        marginLeft: '5%',
        marginBottom: '5%'
    },

    inputAndroid: {
        fontSize: 16,
        paddingTop: 15,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
        width: 250,
        marginLeft: '5%',
        marginBottom: '5%'
    }

    });

    export default withNavigation(PatientInfoScreen);