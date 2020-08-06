import _ from 'lodash'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FlatList, View, Text, TouchableOpacity, TextInput, ActivityIndicator, ActivityIndicatorBase} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ListItem from './CreateRecordListItem';
import { recordsFetch } from './actions';
import { withNavigation } from 'react-navigation';
import firebase from 'firebase';

import * as Animatable from 'react-native-animatable';

class RecordList extends Component {

    state = {
        myIBDs: []
    }

    componentDidMount() {
        this.props.recordsFetch();
    }

    renderSeperator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '86%',
                    backgroundColor: '#CED0CE',
                    marginLeft: '14%'
                }}
            >

            </View>
        )  
    }

    searchIBD = (value) => {
        
        const searchTermLowercase = value.toLowerCase();

        const filteredIBD = this.props.records.filter(
            ibd => {
                // console.log(ibd.ibdHeadingTwo)
                // let ibdLowercase = (ibd.ibdStatement).toLowerCase()

                // let searchTermLowercase = value.toLowerCase()

                // return ibdLowercase.indexOf(searchTermLowercase) > -1
            }
        )

        this.setState({myIBDs: filteredIBD});     
    }; 

    renderHeader = () => {
        return (
            <Animatable.View animation="slideInRight" duration={500} style={styles.search}>
                        <Icon name="ios-search" style={{fontSize:16}}/>
                        <TextInput 
                        placeholder="Search" 
                        style={{fontSize:16, marginLeft: 10}}

                        onChangeText={(value)=>this.searchIBD(value)}
                        />
            </Animatable.View>
        )
    }

    // renderFooter = () => {
    //     if(!this.state.loading) return null;

    //     return (
    //         <View
    //         style={{
    //             paddingVertical: 20,
    //             borderTopWidth: 1,
    //             borderColor: '#CED0CE'
    //         }}
    //         >
    //             <ActivityIndicator animating size="large"></ActivityIndicator>
    //         </View>
    //     )
    // }

  

    renderItem = ({ item }) => <ListItem record={item} />;

    render() {
        return (

            <View style={styles.container}>

                
                    <View style={styles.viewStyle}>

                        <View style={styles.backbox}>
                            <TouchableOpacity style= {{flexDirection: 'row'}} onPress={() => { this.props.navigation.navigate('AdminHome') }} >
                                <Icon name="ios-arrow-back" style={{fontSize:25 , color: 'white'}}/>
                                <Text style ={styles.back}>Back</Text>
                            </TouchableOpacity>
                        </View>

                        <Icon name="md-log-out" onPress={() => firebase.auth().signOut() } style={{fontSize:30, marginTop: 15, color: 'white', textAlign: "right", marginRight: 20 }}/>

                    </View>


                    <Text style={styles.textContainer}>Records</Text>

                    {/* <View>
                        {this.renderHeader()}
                    </View> */}
                    
                <View style={styles.containerone}>

                    <TouchableOpacity style={styles.createRecordButton} onPress={() => this.props.navigation.navigate('RecordCreation')}>
                        <Text style={styles.createRecordText}>Create Record</Text>
                    </TouchableOpacity>
        
                    <FlatList 
                        data={this.props.records}
                        keyExtractor={(item) => item.key}
                        renderItem={this.renderItem} 
                        ListEmptyComponent={() => (
                            <View
                                style= {{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 50
                                }}
                            >
                                <Text style={{color: '#bad555'}}>No Records Found</Text> 
                            </View>
                        )}
                    />

                </View>
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
        flex: 2,
        position: 'relative',
        backgroundColor: '#EA8332',
      },
      containerone: {
        flex: 3,
        backgroundColor: "#fff",
        // borderTopRightRadius: 60,
        borderTopLeftRadius: 80
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
        bottom: '2%',
        alignSelf: 'center',
        letterSpacing: 3.5,
        color: 'white'
      },
    back: {
        fontSize: 20,
        color: 'white',
        marginLeft: 10,
    },
    backbox: {
        paddingTop: 25,
        paddingLeft: 10,
        width: 80
    },
    createRecordButton: {
        backgroundColor: "#C2004B",
        width: 130,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 10,
        marginTop: 25,
        borderRadius: 10
    },
    createRecordText: {
        fontSize: 18,
        color: 'white'
    },
    search: {
        height: 50, 
        width: '95%',
        marginLeft: '2%',
        backgroundColor: '#FFF', 
        flexDirection: 'row', 
        padding: 10, 
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1,
        marginVertical: 10,
    }
  }