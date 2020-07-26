import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

class IBDForm extends Component {
    render() {
        return(
            
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
        )
    }
}


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

export default IBDForm;