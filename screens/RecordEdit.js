import _ from 'lodash';
import React, {Component} from 'react';
import { StyleSheet, View, Button} from 'react-native';
import RecordForm from './RecordForm';
import {recordUpdate} from './actions';
import {connect} from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


class RecordEdit extends Component {

    componentDidMount() {
        _.each(this.props.navigation.getParam('record'), (value, prop) => {
            this.props.recordUpdate({ prop, value });
        });
    }

    onPressSave() {
        const {headingone, 
            headingtwo, subheading, 
            statement, supportingtext, 
            population, intervention, 
            comparator, outcome} = this.props;

        console.log(headingone, 
            headingtwo, subheading, 
            statement, supportingtext, 
            population, intervention, 
            comparator, outcome)
    }


    render() {
        return (
            <KeyboardAwareScrollView>
                 <RecordForm {...this.props}/>
                 <Button title= "Save Changes" onPress={this.onPressSave.bind(this)}></Button>
            </KeyboardAwareScrollView>  
        )
    }
}

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
};   

export default connect(mapStateToProps, {recordUpdate}) (RecordEdit);
