import React from 'react';
import styled from "styled-components";
import { View, StyleSheet, Image, Text} from "react-native";
import { Title } from 'react-native-paper';


class Project extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cover}>
                    {/* <Image style={styles.supportingImage} source={this.props.image} /> */}
                    <Title style={styles.supportingTitle}>{this.props.title}</Title>
                    
                </View>
                <Text style={styles.supportingText}>{this.props.text}</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 315,
        height: 400,
        borderRadius: 14,
        backgroundColor: 'lightblue',
        shadowColor: 'lightgrey',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },

    cover: {
        height: 100,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        overflow: 'hidden',
        backgroundColor: 'lightyellow',
    },

    supportingTitle: {
        position: 'absolute',
        top: 20,
        left: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        width: 300
    },

    supportingText: {
        fontSize: 17,
        margin: 20,
        lineHeight: 24,
        color: '#3C4560'
    },

})



export default Project;
