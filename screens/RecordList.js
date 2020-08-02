import _ from 'lodash'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FlatList, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ListItem from './CreateRecordListItem';
import { recordsFetch } from './actions';
import firebase from 'firebase';

class RecordList extends Component {

    componentDidMount() {
        this.props.recordsFetch();

    }

    renderItem = ({ item }) => <ListItem record={item} />;

    render() {
        return (

            <View style={styles.container}>

                <View style={styles.viewStyle}>

                    <View style={styles.backbox}>
                        <TouchableOpacity style= {{flexDirection: 'row'}} onPress={() => { this.props.navigation.navigate('AdminHome') }} >
                            <Icon name="ios-arrow-back" style={{fontSize:25 , color: 'black'}}/>
                            <Text style ={styles.back}>Back</Text>
                        </TouchableOpacity>
                    </View>

                    <Icon name="md-log-out" onPress={() => firebase.auth().signOut() } style={{fontSize:30, marginTop: 15, color: 'black', textAlign: "right", marginRight: 20 }}/>

                </View>


                <Text style={styles.textContainer}>Records</Text>

                    
                    <FlatList 
                    data={this.props.records}
                    keyExtractor={(item) => item.key}
                    renderItem={this.renderItem} />

            </View>
        )
    }
}

const mapStateToProps = (state) => {

    const records = Object.keys(state.records)
        .map(recordId => {
            return Object.assign({}, state.records[recordId], { uid: recordId });
        });

    return { records };

};

export default connect(mapStateToProps, {recordsFetch}) (RecordList);

const styles = {
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'white',
      },
      viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
    },
      textContainer: {
        fontSize: 32,
        position: 'relative',
        // top: '4%',
        alignSelf: 'center',
        letterSpacing: 3.5,
      },
    back: {
        fontSize: 20,
        color: 'black',
        marginLeft: 10,
    },
    backbox: {
        paddingTop: 25,
        paddingLeft: 10,
        width: 80
    },
  }