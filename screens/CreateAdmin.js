import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

import {Form, Item, Input, Text, Button} from 'native-base';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Spinner from './actions/Spinner';

import firebase from 'firebase';

class CreateAdmin extends Component {

    state = {email: '', password: '', error: '', success: '', loading: false};

     onButtonPress = () => {
        const {email, password} = this.state; 

        this.setState({error: '', loading: true});

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))    
        .catch(this.onLoginFail.bind(this));
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '',
            success: 'Account Created'
        });
    }

    onLoginFail() {
        this.setState({error: 'Something went wrong', loading: false});
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
          <TouchableOpacity style={styles.mainBtn} onPress={this.onButtonPress.bind(this)}>
            <Text style={styles.btnText}>Create Admin</Text>
          </TouchableOpacity>
        );
    }

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

    
          <Text style={styles.textContainer}>Create A New Admin</Text>

          <View style={styles.formArea}>
          
            <View style={styles.mainForm}>
              <Item style={styles.formItems}>
                <Input placeholder="Email" value={this.state.email} onChangeText={email => this.setState({ email})} style={styles.Input} />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="Password" value={this.state.password} onChangeText={password => this.setState({ password})} secureTextEntry={true} style={styles.Input} />
              </Item>

                <Text style={styles.errorText}>
                    {this.state.error}
                </Text>

                <Text style={styles.successText}>
                    {this.state.success}
                </Text>

              <View style={styles.Button}>
                {this.renderButton()}
              </View>
            </View>
          </View>
        
      </View>
        
     );
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'white',
      },
      viewStyle: {
        // backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
    },
      textContainer: {
        // color: '#FCFDFF',
        fontSize: 32,
        // marginBottom: 50,
        position: 'relative',
        top: '4%',
        alignSelf: 'center',
        letterSpacing: 3.5,
      },
      formArea: {
        alignSelf: 'center',
        width: '95%',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        top: '10%',
        paddingBottom: 40,
      },

      formItems: {
        marginTop: 15,
        borderBottomColor: '#2D3057',
        width: '90%',
        marginLeft: 10
      },
      Input: {
        fontSize: 16,
      },
      
      Button: {
        padding: 35,
      },
      mainBtn: {
        backgroundColor: '#1D1B1A',
        height: 80,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
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
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        top: '5%'
    },
    successText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'green',
        top: '5%'
    }
  
});

export default withNavigation(CreateAdmin);