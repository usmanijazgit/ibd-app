import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class Card extends React.Component {
    render(){
        return (
           

            <Animatable.View animation={() =>this.props.animation} duration={1500} style={styles.cardone}>
               {/* <TouchableOpacity style={styles.box1}>
                    <View style={{borderRadius: 21, backgroundColor: 'rgba(255, 19, 134, 0.2)', height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    {()=>this.props.image}
                    </View>
               </TouchableOpacity>

                <View>
                    <Text style={{fontSize: 20, color: '#2D2D2D', letterSpacing: -0.5,}}>
                        {()=>this.props.name}
                    </Text>
                </View> */}
                

            </Animatable.View>
        );
    };
};

const styles = StyleSheet.create({
    cardone: {
        flex: 1,
        marginBottom: 15,
        flexDirection: 'row'
    },
    box1: {
        flex: 1
    }


})
