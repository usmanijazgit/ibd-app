import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { withNavigation } from 'react-navigation';

import {Form, Item, Input, Text, Button} from 'native-base';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Spinner from './actions/Spinner';
import Success from './actions/Success';

import firebase from 'firebase';

class AdminLogin extends Component {

    state = {email: '', password: '', error: '', loading: false, isSuccessful: false};

     onButtonPress = () => {
        const {email, password} = this.state; 

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          // setInterval(this.onLoginSuccess.bind(this), 3000);
          this.setState({ isSuccessful: true });
        })    
        .catch(this.onLoginFail.bind(this));
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '',
            isSuccessful: true
        });
    }

    onLoginFail() {
        this.setState({error: 'Authentication Failed', loading: false});
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
          <TouchableOpacity style={styles.mainBtn} onPress={this.onButtonPress.bind(this)}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        );
    }

    render() { 
      const { isSuccessful } = this.state;

      return (
      
        <View style={styles.container}>

           

            <View style={styles.backbox}>
                <TouchableOpacity style= {{flexDirection: 'row'}} onPress={() => { this.props.navigation.navigate('PatientInfo') }} >
                    <Icon name="ios-arrow-back" style={{fontSize:25 , color: 'white'}}/>
                    <Text style ={styles.back}>Back</Text>
                </TouchableOpacity>
            </View>

    
          <Text style={styles.textContainer}>Admin Login</Text>

          <View style={styles.formArea}>
            <Text style={[styles.textContainer, styles.signin]}>Sign in</Text>
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

              <View style={styles.Button}>
                {this.renderButton()}
              </View>

            </View>

            {isSuccessful ? <Success isActive={false}/>: null}

          </View>

         
        
      </View>
      
        
     );
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#EA8332',
      },
   
      textContainer: {
        color: '#FCFDFF',
        fontSize: 36,
        // marginBottom: 30,
        position: 'relative',
        top: '10%',
        alignSelf: 'center',
      },
      formArea: {
        alignSelf: 'center',
        width: '95%',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        top: '15%',
        paddingBottom: 40,
      },
      signin: {
        top: 0,
        color: '#2D3057',
        marginTop: 15,
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
        backgroundColor: '#1DDCAF',
        height: 50,
        borderRadius: 10
      },
      btnText: {
        color: '#2D3057',
        fontSize: 16,
        textAlign: 'center',
        top: '30%'
      },
      back: {
        fontSize: 20,
        color: 'white',
        marginLeft: 10,
    },
    backbox: {
        paddingTop: 25,
        paddingLeft: 10,
    },
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        top: '5%'
    }
  
});

export default withNavigation(AdminLogin);