import _ from 'lodash';
import React, {Component} from 'react';
import { StyleSheet, View, Button} from 'react-native';
import RecordForm from './RecordForm';
import {recordUpdate, recordSave} from './actions';
import {connect} from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Confirm from './Confirm';

class RecordEdit extends Component {

    state = {showModal: false};

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

        this.props.recordSave({headingone, 
            headingtwo, subheading, 
            statement, supportingtext, 
            population, intervention, 
            comparator, outcome, uid: this.props.navigation.getParam('record').uid})
    }


    render() {
        return (
            <KeyboardAwareScrollView>
                 <RecordForm {...this.props}/>
                 <Button title= "Save Changes" onPress={this.onPressSave.bind(this)}></Button>
                 
                 <Button title= "Delete Record" onPress={() => this.setState({showModal: !this.state.showModal})}></Button>

                 <Confirm 
                    visible={this.state.showModal}
                 >
                     Are you sure you want to DELETE the record?
                 </Confirm>  
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

export default connect(mapStateToProps, {
    recordUpdate, recordSave
}) (RecordEdit);
