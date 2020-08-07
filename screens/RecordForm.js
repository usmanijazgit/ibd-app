import React, {Component} from 'react';
import { StyleSheet, View, Button, Alert, TextInput, FlatList, Text, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {recordUpdate} from './actions';

import RNPickerSelect from 'react-native-picker-select';
import firebase from 'firebase';  

class RecordForm extends Component {
    render() {

        return(
            <View style={styles.inner}>
            
            <View style={styles.viewStyle}>

                <View style={styles.backbox}>
                    <TouchableOpacity style= {{flexDirection: 'row'}} onPress={() => { this.props.navigation.navigate('RecordList') }} >
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
            value = {this.props.ibdHeadingOne}
            selectedValue = {this.props.ibdHeadingOne}
            onValueChange={text => this.props.recordUpdate({prop: 'ibdHeadingOne', value: text})}
            />

            <Text style={styles.textInputHeading}>Heading Two:</Text>
            <TextInput style={styles.textInput}
                keyboardType='default'
                placeholderTextColor='lightgrey'
                placeholder='Enter Heading Two'
                autoCapitalize='none'
                value = {this.props.ibdHeadingTwo}
                onChangeText={text => this.props.recordUpdate({prop: 'ibdHeadingTwo', value: text})}
            />

            <Text style={styles.textInputHeading}>Sub-Heading:</Text>

            <TextInput style={styles.textInput}
                keyboardType='default'
                placeholderTextColor='lightgrey'
                placeholder='Enter Sub-Heading'
                autoCapitalize='none'
                value = {this.props.ibdSubHeading}
                onChangeText={text => this.props.recordUpdate({prop: 'ibdSubHeading', value: text})}
                
            />

            <Text style={styles.textInputHeading}>Practice Statement:</Text>

            <TextInput style={styles.textInput}
                keyboardType='default'
                placeholderTextColor='lightgrey'
                placeholder='Enter Practice Statement'
                autoCapitalize='none'
                value = {this.props.ibdStatement}
                onChangeText={text => this.props.recordUpdate({prop: 'ibdStatement', value: text})}
               
            />

            <Text style={styles.textInputHeading}>Supporting Text:</Text>

            <TextInput style={styles.textInput}
                keyboardType='default'
                placeholderTextColor='lightgrey'
                placeholder='Enter Supporting Text'
                autoCapitalize='none'
                value = {this.props.ibdSupportingText}
                onChangeText={text => this.props.recordUpdate({prop: 'ibdSupportingText', value: text})}
            />

            <Text style={styles.textInputHeading}>Population:</Text>

            <TextInput style={styles.textInput}
                keyboardType='default'
                placeholderTextColor='lightgrey'
                placeholder='Enter Population'
                autoCapitalize='none'
                value = {this.props.ibdPopulation}
                onChangeText={text => this.props.recordUpdate({prop: 'ibdPopulation', value: text})}
               
            />

            <Text style={styles.textInputHeading}>Intervention:</Text>

            <TextInput style={styles.textInput}
                keyboardType='default'
                placeholderTextColor='lightgrey'
                placeholder='Enter Intervention'
                autoCapitalize='none'
                value = {this.props.ibdIntervention}
                onChangeText={text => this.props.recordUpdate({prop: 'ibdIntervention', value: text})}
               
            />

            <Text style={styles.textInputHeading}>Comparator:</Text>

            <TextInput style={styles.textInput}
                keyboardType='default'
                placeholderTextColor='lightgrey'
                placeholder='Enter Comparator'
                autoCapitalize='none'
                value = {this.props.ibdComparator}
                onChangeText={text => this.props.recordUpdate({prop: 'ibdComparator', value: text})}
               
            />

            <Text style={styles.textInputHeading}>Outcome:</Text>

            <TextInput style={styles.textInput}
                keyboardType='default'
                placeholderTextColor='lightgrey'
                placeholder='Enter Outcome'
                autoCapitalize='none'
                value = {this.props.ibdOutcome}
                onChangeText={text => this.props.recordUpdate({prop: 'ibdOutcome', value: text})}
            />

            <Text style={styles.textInputHeading}>Other Resources:</Text>

            <TextInput style={styles.textInput}
                keyboardType='default'
                placeholderTextColor='lightgrey'
                placeholder='Enter Other Resources'
                autoCapitalize='none'
                value = {this.props.ibdOtherResources}
                onChangeText={text => this.props.recordUpdate({prop: 'ibdOtherResources', value: text})}
                
            />

            <Text style={styles.textInputHeading}>Practical Tips:</Text>

            <TextInput style={styles.textInput}
                keyboardType='default'
                placeholderTextColor='lightgrey'
                placeholder='Enter Practical Tip'
                autoCapitalize='none'
                value = {this.props.ibdPracticalTips}
                onChangeText={text => this.props.recordUpdate({prop: 'ibdPracticalTips', value: text})}
                
            />

        </View> 
        
      </View>
        )

    }
}

const styles = StyleSheet.create({

    viewStyle: {

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
    const {ibdHeadingOne, ibdHeadingTwo, ibdSubHeading, 
        ibdStatement, ibdSupportingText, 
        ibdPopulation, ibdIntervention, 
        ibdComparator, ibdOutcome, ibdOtherResources, ibdPracticalTips} = state.recordForm;

      return {ibdHeadingOne, ibdHeadingTwo, ibdSubHeading, 
        ibdStatement, ibdSupportingText, 
        ibdPopulation, ibdIntervention, 
        ibdComparator, ibdOutcome, ibdOtherResources, ibdPracticalTips}; 
};

export default connect(mapStateToProps, {recordUpdate}) (RecordForm);