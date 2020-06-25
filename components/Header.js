import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const Header = props => {

    return (
    <View style = {styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        paddingTop: 10,
        backgroundColor: '#3FA4C6',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerTitle: {
        color: 'black',
        fontSize: 26
    }

});

export default Header;