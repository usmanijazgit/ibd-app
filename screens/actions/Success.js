import React from "react";
import styled from 'styled-components/native';
import {View, Animated, Dimensions, Platform} from "react-native";

import LottieView from 'lottie-react-native';
// import LottieViewWeb from 'react-native-web-lottie'; 


const screenHeight = Dimensions.get("window").height;

class Success extends React.Component {

    state = {
        top: new Animated.Value(0),
        opacity: new Animated.Value(0)
    };

    componentDidMount() {
        this.animation.play();
    }

    componentDidUpdate() {
        if (this.props.isActive) {
          Animated.timing(this.state.top, { toValue: 0, duration: 0 }).start();
          Animated.timing(this.state.opacity, { toValue: 1 }).start();
      
          this.animation.play();
        } else {
          Animated.timing(this.state.top, { toValue: screenHeight, duration: 0 }).start();
          Animated.timing(this.state.opacity, { toValue: 0 }).start();
      
          this.animation.loop = false;
        }
    }


    lottiePicker() {
        if (Platform.OS === 'ios' || Platform.OS === 'android' ) {
            return(
                <LottieView 
                source={require("../../assets/lottie-checked-done.json")}
                autoPlay={false}
                loop={false}
                ref={animation => {
                    this.animation = animation;
                }}
                />
            )
        } 
        // else {
        //     return (
        //         <LottieViewWeb 
        //         source={require("../../assets/lottie-checked-done.json")}
        //         autoPlay={false}
        //         loop={false}
        //         ref={animation => {
        //             this.animation = animation;
        //         }}
        //         />
        //     )
        // }
    }


    //   style={{ top: this.state.top, opacity: this.state.opacity }}

    render() {
        // const { isActive } = this.props;

        return (
            <>
                <AnimatedContainer
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }}
                >
                    
                    {this.lottiePicker()}

                </AnimatedContainer>
             </>
        )
    }
}


export default Success;

const AnimatedContainer = Animated.createAnimatedComponent(View)
