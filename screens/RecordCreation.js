import React , { Component} from 'react';
import { StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {recordUpdate, recordCreate} from './actions';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RecordForm from './RecordForm';
import { withNavigation } from 'react-navigation';

 class RecordCreation extends Component{

    onPressAdd() {
        const {ibdHeadingOne, ibdHeadingTwo, ibdSubHeading, 
            ibdStatement, ibdSupportingText, 
            ibdPopulation, ibdIntervention, 
            ibdComparator, ibdOutcome, ibdOtherResources, ibdPracticalTips} = this.props;

        this.props.recordCreate({ibdHeadingOne, ibdHeadingTwo, ibdSubHeading, 
            ibdStatement, ibdSupportingText, 
            ibdPopulation, ibdIntervention, 
            ibdComparator, ibdOutcome, ibdOtherResources, ibdPracticalTips});

        //this.props.navigation.navigate('RecordList')   
    }

      render() {
        
        return (
           
        <KeyboardAwareScrollView>
           
            <RecordForm {...this.props} />

            {/* <TouchableHighlight
                style={[styles.button, styles.addbutton]}
                onPress={this.onPressAdd.bind(this)}
                >
                    <Text style={[styles.btnname, styles.addbtnname]}>
                            Add Record
                    </Text>
            </TouchableHighlight> */}

            <Button title= "Add Record" onPress={this.onPressAdd.bind(this)}></Button>
       
        </KeyboardAwareScrollView>  

        );
      };
    };
    
const styles = StyleSheet.create({

   
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



 const mapStateToProps = (state) => {
     const {ibdHeadingOne, ibdHeadingTwo, ibdSubHeading, 
        ibdStatement, ibdSupportingText, 
        ibdPopulation, ibdIntervention, 
        ibdComparator, ibdOutcome, ibdOtherResources, ibdPracticalTips} = state.recordForm;

       return {ibdHeadingOne, ibdHeadingTwo, ibdSubHeading, 
        ibdStatement, ibdSupportingText, 
        ibdPopulation, ibdIntervention, 
        ibdComparator, ibdOutcome, ibdOtherResources, ibdPracticalTips}; 
 }   


export default connect(mapStateToProps, {
    recordUpdate, recordCreate
}) (withNavigation(RecordCreation));
