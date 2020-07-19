import React from "react";
import styled from "styled-components";
import { View, StyleSheet, PanResponder, Animated, Text} from "react-native";
import { connect } from "react-redux";
import Project from "./Project";

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import ReadMore from 'react-native-read-more-text';

import firebase from 'firebase';
import { List, ListItem } from 'native-base';


function getNextIndex(index) {
    var nextIndex = index + 1

    if(nextIndex > projects.length - 1){
        return 0;
    }
    return nextIndex;
}


const config ={
    apiKey: "AIzaSyBHKV7x97xwDrUVnc7Z6wPCiXV8Yc-_nO8",
          authDomain: "ibdtool-2a1c7.firebaseapp.com",
          databaseURL: "https://ibdtool-2a1c7.firebaseio.com",
          projectId: "ibdtool-2a1c7",
          storageBucket: "ibdtool-2a1c7.appspot.com",
          messagingSenderId: "633888609862",
          appId: "1:633888609862:web:4a4eff1a47f363aa5edc47",
          measurementId: "G-LF7BLTRE1G",
          presistance: true,
    };

    if (!firebase.apps.length) {
          firebase.initializeApp(config);
      }


class ProjectsScreen extends React.Component {
  
    
state = {
    myIBDs: [],
    pan: new Animated.ValueXY(),
    scale: new Animated.Value(0.9),
    translateY: new Animated.Value(44),
    thirdScale: new Animated.Value(0.8),
    thirdTranslateY: new Animated.Value(-50),
    index: 0
    };

componentDidMount() {
        
    // const ibdRef = firebase.database().ref('ibd');
    // const {headingtwobtn} = this.props.navigation.state.params;
    
    // ibdRef.orderByChild('ibdHeadingTwo').equalTo(headingtwobtn).once('value', snapshot => {
    //     this.setState({ myIBDs:  Object.values(snapshot.val()), inMemory:  Object.values(snapshot.val()) });
    //     });

}

constructor(props) {
    super(props);
    this._panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            Animated.spring(this.state.scale, { toValue: 1 }).start();
            Animated.spring(this.state.translateY, { toValue: 0 }).start();


            Animated.spring(this.state.thirdScale, { toValue: 0.9 }).start();
            Animated.spring(this.state.thirdTranslateY, { toValue: 44 }).start();

            // Animated.timing(this.state.opacity, { toValue: 1 }).start();
        },
        
        onPanResponderMove: Animated.event([
            null, 
            {dx: this.state.pan.x, dy: this.state.pan.y}
        ]),

       onPanResponderRelease: () => {
        const positionY = this.state.pan.y.__getValue();
        // Animated.timing(this.state.opacity, { toValue: 0 }).start();
        // console.log(positionY);

        if (positionY > 200) {
          Animated.timing(this.state.pan, {
            toValue: { x: 0, y: 1000 }
          }).start(() => {
            this.state.pan.setValue({ x: 0, y: 0 });
            this.state.scale.setValue(0.9);
            this.state.translateY.setValue(44);
            this.state.thirdScale.setValue(0.8);
            this.state.thirdTranslateY.setValue(-50);
            this.setState({ index: getNextIndex(this.state.index) });
          });
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 }
          }).start();

          Animated.spring(this.state.scale, { toValue: 0.9 }).start();
          Animated.spring(this.state.translateY, { toValue: 44 }).start();

          Animated.spring(this.state.thirdScale, { toValue: 0.8 }).start();
          Animated.spring(this.state.thirdTranslateY, { toValue: -50 }).start();
        }
      }
    });
}

  render() {
    return (
      <View style={styles.container}>
          <Animated.View style={{transform: [
              {translateX: this.state.pan.x},
              {translateY: this.state.pan.y}
          ]
          }}
            {...this._panResponder.panHandlers}
          >
              <Project title={projects[this.state.index].title} text={projects[this.state.index].text}/>
          </Animated.View>
          
          <Animated.View style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -1,
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              transform: [ 
                { scale: this.state.scale}, 
                {translateY: this.state.translateY} ]
              }}
              >
                <Project title={projects[getNextIndex(this.state.index)].title} text={projects[getNextIndex(this.state.index)].text}/>
          </Animated.View>

          <Animated.View style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -2,
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              transform: [ 
                { scale: this.state.thirdScale}, 
                {translateY: this.state.thirdTranslateY} ]
              }}
              >
            <Project title={projects[getNextIndex(this.state.index + 1)].title} text={projects[getNextIndex(this.state.index + 1)].text}/>
          </Animated.View>
          
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f3f5',
    }
})

const projects = [
    {
        title: "Practice Statement",
        text:
          "In patients with short bowel syndrome where the colon is preserved (jejuno-colic anastomosis), a diet high in complex carbohydrates and low in fat is advised. Consider using medium-chain triglycerides to replace some long-chain triglycerides and ensure the diet is not deficient in essential fatty acids and fat-soluble vitamins."
        },
      {
        title: "Practice Statement",
        text:
          "In patients with short bowel syndrome and a jejunostomy, a diet with normal carbohydrate and fat intakes are advised "
      },
      {
        title: "Practice Statement",
        text:
          "An increase in dietary fibre intake does not improve macronutrient or fluid absorption in short bowel syndrome."
      }
]

export default withNavigation(ProjectsScreen);


