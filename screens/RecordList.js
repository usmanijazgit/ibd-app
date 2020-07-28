import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import { recordsFetch } from './actions';

class RecordList extends Component {
    componentWillMount() {
        this.props.recordsFetch();
    }

    render() {
        return (
            <View>
                <Text>ABC</Text>
            </View>
        )
    }
}

export default connect(null, {recordsFetch}) (RecordList);