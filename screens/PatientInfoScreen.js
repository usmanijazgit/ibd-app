import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, Picker} from 'react-native';
import { render } from 'react-dom';


const HomeScreen = props => {

    const [selectedValueSex, setSelectedValueSex] = useState("Please Select Sex");
    const [selectedValueAge, setSelectedValueAge] = useState("Please Select Age");
    const [selectedValueDisease, setSelectedValueDisease] = useState("Please Select Disease");
 
    return (

        <View>

            <Text style ={styles.text}>Patient Details</Text>
           
            <View style= {styles.inputGroup}>
                <View>
                    <Picker mode='dropdown' 
                        selectedValue={selectedValueSex} 
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueSex(itemValue)}>
                        <Picker.Item label="Please Select Sex" value="0" color="red"></Picker.Item>
                        <Picker.Item label="Male" value="Male"></Picker.Item>
                        <Picker.Item label="Female" value="Female"></Picker.Item>
                    </Picker>
                </View>
                    <Picker mode='dropdown' 
                        selectedValue={selectedValueAge} 
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueAge(itemValue)}>
                        <Picker.Item label="Please Select Age" value="0" color="red"></Picker.Item>
                        <Picker.Item label="1" value="1"></Picker.Item>
                        <Picker.Item label="2" value="2"></Picker.Item>
                    </Picker>
                <View>
                
                </View>

                <View>
                    <Picker mode='dropdown'
                        selectedValue={selectedValueDisease}
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueDisease(itemValue)}>
                        <Picker.Item label="Please Select Disease Type" color="red"></Picker.Item>
                        <Picker.Item label="Crohn’s disease" value="Crohn’s disease"></Picker.Item>
                        <Picker.Item label="Ulcerative colitis" value="Ulcerative colitis"></Picker.Item>
                        <Picker.Item label="Indeterminate colitis" value="Indeterminate colitis"></Picker.Item>
                    </Picker>
                </View>
            </View>    

            <View style={styles.button}><Button title = "Next"/></View>

        </View>
    );
    
};

const styles = StyleSheet.create({
   
    text: {
        fontSize: 36,
        textAlign: 'center',
        marginTop: 90
    },
    input: {
        height: 40,
        width: '80%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginLeft: 50,
        marginTop: 30,
        borderRadius: 10
        
    },
    inputGroup: {
        marginTop: '5%',
    },
    button: {
        width: 380,
        marginTop: 50,
        paddingLeft: '60%'
    }

});

export default HomeScreen;