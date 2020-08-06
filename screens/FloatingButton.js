import React from "react";
import { StyleSheet, View, Text, Button, Animated, TouchableWithoutFeedback} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';

import firebase from 'firebase';
import { List, ListItem } from 'native-base';


class FloatingButton extends React.Component {


    animation = new Animated.Value(0)

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, 
            {
                toValue,
                friction: 5
            }).start();

            this.open = !this.open;
    };

    render() {

        const resourcesStyle = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -80]
                    })
                }
            ]
        };

        const supportingStyle = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -140]
                    })
                }
            ]
        };

        const picoStyle = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -200]
                    })
                }
            ]
        };


    const opacity =  this.animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1]
    })

    return (
        

        <View style={[styles.container, ()=> this.props.style]}>

            <TouchableWithoutFeedback>
                <Animated.View style= {[styles.button, styles.secondary, supportingStyle, opacity]}>
                    <Text style= {{fontSize: 14, color: 'white'}}>Practical Tips</Text>
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style= {[styles.button, styles.secondary, resourcesStyle, opacity]}>
                    <Text style= {{fontSize: 14, color: 'white'}}>Other resources</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
           
            <TouchableWithoutFeedback onPress={this.toggleMenu}>
                <Animated.View style= {[styles.button, styles.menu]}>
                <Text style= {{fontSize: 16, color: 'white', fontWeight: '500'}}>More Information</Text>
                </Animated.View>
            </TouchableWithoutFeedback>

        </View>
    );
  };
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    button: {
        position: 'absolute',
        width: 180,
        height: 60,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#F02A4B',
        shadowOpacity: 0.3,
        shadowOffset: {height: 10}
    },
    menu: {
        backgroundColor: '#F02A4B'
    },
    secondary: {
        width: 160,
        height: 48,
        borderRadius: 15,
        backgroundColor: '#C2004B'
    }
});

export default withNavigation(FloatingButton);