import React from 'react';
import {Text, View, Modal, StyleSheet, TouchableOpacity} from 'react-native';

const Confirm = ({children, visible, onAccept, onDecline}) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
        >
            <View style={styles.containerStyle}>
                <View style={styles.cardSectionStyle}>
                    <Text style={styles.textStyle}>
                        {children}
                    </Text>
                </View>
                <View style={styles.cardSectionStyle}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={onAccept}><Text style={styles.buttonTextStyle}>Yes</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={onDecline}><Text style={styles.buttonTextStyle}>No</Text></TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    
    cardSectionStyle: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textStyle: {
        flex: 1,
        fontSize: 28,
        textAlign: 'center',
        lineHeight: 40,
        color: 'white'
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    buttonStyle: {
        
        backgroundColor: 'white',
        width: 100,
        height: 50,
        margin: 20,
        borderRadius: 30,
        lineHeight:50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTextStyle: {
        color: '#0095FE',
        fontSize: 20,
    }


});

export default Confirm;