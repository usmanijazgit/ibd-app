import React , { Component} from 'react';
import { StyleSheet, View, Button, Alert, TextInput, FlatList, Text, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {recordUpdate, recordCreate} from './actions';

import RNPickerSelect from 'react-native-picker-select';

import firebase from 'firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


 class RecordCreation extends Component{

    onPressAdd() {
        const {headingone, 
            headingtwo, subheading, 
            statement, supportingtext, 
            population, intervention, 
            comparator, outcome} = this.props;

        this.props.recordCreate({headingone: headingone || 'Nutrition Assessment', 
            headingtwo, subheading, 
            statement, supportingtext, 
            population, intervention, 
            comparator, outcome});
    }

      render() {
        
        return (
           
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

               <Text style={styles.textContainer}>Record</Text>
               <View style={styles.dataInputScreen}> 
            
                <Text style={styles.textInputHeading}>Heading One:</Text>
               
                <RNPickerSelect placeholder={{
                label: 'Enter Heading One'
                }} placeholderTextColor= 'black' style={{...pickerSelectStyles}}
                items={[
                    { label: 'Nutrition Assessment', value: 'Nutrition Assessment' },
                    { label: 'Nutrition Screening', value: 'Nutrition Screening' },
                    { label: 'Dietary Management', value: 'Dietary Management' }
                    
                ]}
                selectedValue = {this.props.headingone}
                onValueChange={text => this.props.recordUpdate({prop: 'headingone', value: text})}
                />

                <Text style={styles.textInputHeading}>Heading Two:</Text>
                <TextInput style={styles.textInput}
                    keyboardType='default'
                    placeholderTextColor='lightgrey'
                    placeholder='Enter Heading Two'
                    autoCapitalize='none'
                    value = {this.props.headingtwo}
                    onChangeText={text => this.props.recordUpdate({prop: 'headingtwo', value: text})}
                />

                <Text style={styles.textInputHeading}>Sub-Heading (Optional):</Text>

                <TextInput style={styles.textInput}
                    keyboardType='default'
                    placeholderTextColor='lightgrey'
                    placeholder='Enter Sub-Heading'
                    autoCapitalize='none'
                    value = {this.props.subheading}
                    onChangeText={text => this.props.recordUpdate({prop: 'subheading', value: text})}
                    
                />

                <Text style={styles.textInputHeading}>Practice Statement:</Text>

                <TextInput style={styles.textInput}
                    keyboardType='default'
                    placeholderTextColor='lightgrey'
                    placeholder='Enter Practice Statement'
                    autoCapitalize='none'
                    value = {this.props.statement}
                    onChangeText={text => this.props.recordUpdate({prop: 'statement', value: text})}
                   
                />

                <Text style={styles.textInputHeading}>Supporting Text:</Text>

                <TextInput style={styles.textInput}
                    keyboardType='default'
                    placeholderTextColor='lightgrey'
                    placeholder='Enter Supporting Text'
                    autoCapitalize='none'
                    value = {this.props.supportingtext}
                    onChangeText={text => this.props.recordUpdate({prop: 'supportingtext', value: text})}
                />

                <Text style={styles.textInputHeading}>Population:</Text>

                <TextInput style={styles.textInput}
                    keyboardType='default'
                    placeholderTextColor='lightgrey'
                    placeholder='Enter Population'
                    autoCapitalize='none'
                    value = {this.props.population}
                    onChangeText={text => this.props.recordUpdate({prop: 'population', value: text})}
                   
                />

                <Text style={styles.textInputHeading}>Intervention:</Text>

                <TextInput style={styles.textInput}
                    keyboardType='default'
                    placeholderTextColor='lightgrey'
                    placeholder='Enter Intervention'
                    autoCapitalize='none'
                    value = {this.props.intervention}
                    onChangeText={text => this.props.recordUpdate({prop: 'intervention', value: text})}
                   
                />

                <Text style={styles.textInputHeading}>Comparator:</Text>

                <TextInput style={styles.textInput}
                    keyboardType='default'
                    placeholderTextColor='lightgrey'
                    placeholder='Enter Comparator'
                    autoCapitalize='none'
                    value = {this.props.comparator}
                    onChangeText={text => this.props.recordUpdate({prop: 'comparator', value: text})}
                   
                />

                <Text style={styles.textInputHeading}>Outcome:</Text>

                <TextInput style={styles.textInput}
                    keyboardType='default'
                    placeholderTextColor='lightgrey'
                    placeholder='Enter Outcome'
                    autoCapitalize='none'
                    value = {this.props.outcome}
                    onChangeText={text => this.props.recordUpdate({prop: 'outcome', value: text})}
                />

            </View> 
            
          </View>


            {/* <TouchableHighlight
                style={[styles.button, styles.addbutton]}
                onPress={this.onPressAdd.bind(this)}
                >
                    <Text style={[styles.btnname, styles.addbtnname]}>
                            Add Record
                    </Text>
            </TouchableHighlight> */}

            <Button title= "Add Record" onPress={this.onPressAdd.bind(this)}>
                        
            </Button>
       
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

 const mapStateToProps = (state) => {
     const {headingone, 
        headingtwo, subheading, 
        statement, supportingtext, 
        population, intervention, 
        comparator, outcome} = state.recordForm;

       return {headingone, 
        headingtwo, subheading, 
        statement, supportingtext, 
        population, intervention, 
        comparator, outcome}; 
 }   


export default connect(mapStateToProps, {
    recordUpdate, recordCreate
}) (RecordCreation);
