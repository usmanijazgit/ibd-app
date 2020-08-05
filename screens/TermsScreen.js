import React , { Component } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

export default function TermsScreen({ navigation })  {

    const screenchange = () => {
        navigation.navigate('PatientInfo');
    }


return (
    <View style={styles.screen}>
        
      <View>

        <Text style ={styles.title}>Terms & Conditions</Text>

        <View style ={styles.conditionsContainer}>
            <Text style ={styles.termsTextOne}>By using this application, you acknowledge 
            that you are a registered healthcare professional 
            and will abide by your countries healthcare 
            professional code of conduct.</Text>
            <Text style ={styles.termsTextTwo}>I am a healthcare professional and I accept the Terms of Use.</Text> 
            <View style={styles.button}><Button title = "I ACCEPT" onPress={screenchange}/></View>

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
        // fontWeight: "bold",
        color: 'black',
        letterSpacing: 3.5,
        marginTop: 80
    },

    conditionsContainer: {
        width: 400,
        maxWidth: '90%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 6, 
        backgroundColor: 'white',
        padding: 35,
        borderRadius: 10,
        alignSelf: 'center',
    },

    termsTextOne: {
        fontSize: 15,
        textAlign: 'center',
        paddingVertical: 20
    },

    termsTextTwo: {
        fontSize: 15,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: 'bold'
    },

    button: {
        width: '100%'
    }
    
});

