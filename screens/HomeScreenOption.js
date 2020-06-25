import React from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const HomeScreenOption = props => {
    return (
        <View style={styles.screen}>
            <Text style ={styles.text}>IBD Tool</Text>
            <Text style ={styles.subtext}>Dietary Management</Text>

            <Animatable.View animation="slideInRight" duration={500} style={styles.search}>
                <Icon name="ios-search" style={{fontSize:16}}/>
                <TextInput placeholder="Search" style={{fontSize:16, marginLeft: 10}} />
            </Animatable.View>

            <ScrollView>
                <Text style ={styles.listtext}>Treatment of malnutrition</Text>
                <Text style ={styles.listtext}>Induction of remission</Text>
                <Text style ={styles.listtext}>Short bowel syndrome</Text>
                <Text style ={styles.listtext}>Treatment of malnutrition</Text>
                <Text style ={styles.listtext}>Induction of remission</Text>
                <Text style ={styles.listtext}>Short bowel syndrome</Text>
                <Text style ={styles.listtext}>Treatment of malnutrition</Text>
                <Text style ={styles.listtext}>Induction of remission</Text>
                <Text style ={styles.listtext}>Short bowel syndrome</Text>
                <Text style ={styles.listtext}>Treatment of malnutrition</Text>
                <Text style ={styles.listtext}>Induction of remission</Text>
                <Text style ={styles.listtext}>Short bowel syndrome</Text>
                <Text style ={styles.listtext}>Treatment of malnutrition</Text>
                <Text style ={styles.listtext}>4Induction of remission</Text>
                <Text style ={styles.listtext}>5Short bowel syndrome</Text>
                <Text style ={styles.listtext}>6Treatment of malnutrition</Text>
                <Text style ={styles.listtext}>7Induction of remission</Text>
                <Text style ={styles.listtext}>8Short bowel syndrome</Text>
            </ScrollView>

        </View>

        
    );

};



const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#FFF7D2',
        height: '100%',
    },
    search: {
        height: 50, 
        width: '95%',
        marginLeft: '2%',
        backgroundColor: 'white', 
        flexDirection: 'row', 
        padding: 10, 
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        marginVertical: 20,
        // marginBottom: 60
    },

    text: {
        fontSize: 36,
        textAlign: 'center' 
    },

    subtext: {
        fontSize: 16,
        textAlign: 'center',
        color: 'red',
        textDecorationLine: 'underline',
    },
    listtext: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
        padding: 8,
        marginTop: 8,
        marginLeft: 5
        
    }
    

});

export default HomeScreenOption;