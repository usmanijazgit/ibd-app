import React from "react";
import { StyleSheet, View, Text, Button, Animated, TouchableWithoutFeedback} from 'react-native';

import { StackNavigator } from 'react-navigation';
export default class FloatingButton extends React.Component {

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

    //     const rotation = {
    //         transform: [
    //             {
    //                 rotate: this.animation.interpolate({
    //                     inputRange: [0, 1],
    //                     outputRange: ["0deg", "45deg"]
    //                 })
    //             }
           
    //     ]
    // };

    const opacity =  this.animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1]
    })


    const { navigate } = this.props;

    return (
        

        <View style={[styles.container, ()=> this.props.style]}>

            {/* <FloatingButton navigate={navigate}/> */}

            <TouchableWithoutFeedback>
                <Animated.View style= {[styles.button, styles.secondary, picoStyle, opacity]}>
                    <Text>PICO</Text>
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style= {[styles.button, styles.secondary, supportingStyle, opacity]}>
                    <Text>Supporting text</Text>
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style= {[styles.button, styles.secondary, resourcesStyle, opacity]}>
                    <Text>Other resources</Text>
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
        backgroundColor: '#FFF'
    }
});