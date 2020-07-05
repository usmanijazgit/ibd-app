import React , { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput} from 'react-native';

export default function Login({ navigation })  {

    const screenchange = () => {
        navigation.navigate('PatientInfo');
    }

    //  state = {email: '', password: ''};


return (
    <View style={styles.screen}>
        
      <View>

        <Text style ={styles.title}>ADMIN LOGIN</Text>

        <View style ={styles.conditionsContainer}>

            <View style={styles.inputbox}>   
                <Text style={styles.inputlabel}>Email Address</Text>
                <TextInput style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }} />
            </View> 

            <View style={styles.inputbox}>   
                <Text style={styles.inputlabel}>Password</Text>
                <TextInput style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }} />
            </View> 
{/* 
            <TextInput
                placeholder="Email Address"
                label="Email"
                value= {this.state.email}
                onChangeText={email => this.state({email})}
            />

            <TextInput
                placeholder="Password"
                label="Password"
                value= {this.state.password}
                onChangeText={email => this.state({password})}
            /> */}

            <View style={styles.button}><Button title = "Login" onPress={screenchange}/></View>

        </View>

      </View>

    </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginVertical: 50,
        color: 'black',
        letterSpacing: 3.5,
        marginTop: 80
    },

    conditionsContainer: {
        width: 400,
        maxWidth: '95%',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 6, 
        backgroundColor: 'lightblue',
        padding: 35,
        borderRadius: 10,
    },

    button: {
        width: '100%'
    },
    inputlabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    // inputbox: {
    //     flexDirection: 'row',
    //     width: '100%'
    // }
    
});
