import React from "react";
import styled from 'styled-components/native';
import {View, Animated, TouchableOpacity, Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { withNavigation } from 'react-navigation';

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {

    state = {
        top: new Animated.Value(screenHeight),
        
    }

    // onPrint() {
    //     if (Platform.OS !== 'ios' || Platform.OS === 'android' ) {
    //         return(
    //             Print.selectPrinterAsync()
    //         )
    //     } else {
    //         return (
    //             Print.printToFileAsync({
    //                 html: "<h1>PDF TEST</h1>",
    //                 width : 612,
    //                 height : 792,
    //                 base64 : false
    //               })
              
    //         )
    //     }
       
    // }

    onPrint() {
        return (
            Print.printToFileAsync({
                html: "<h1>IBD Tool Print</h1>",
                width : 612,
                height : 792,
                base64 : false
              })
              
        )
    }

    componentDidMount() {
        Animated.spring(this.state.top, {
            toValue: 0
        }).start();
        
    }

    toggleMenu = () => {
        Animated.spring(this.state.top, {
            toValue: screenHeight
        }).start();
    }

    adminLogin = () => {
        this.props.navigation.navigate('AdminLogin');
    }

    homePage = () => {
        this.props.navigation.navigate('Home');
    }

    termsPage = () => {
        this.props.navigation.navigate('Terms');
    }

    render() {
        return (
            <AnimatedContainer
            style={{
              position: "absolute",
              backgroundColor: "#fff",
              width: "100%",
              height: "100%",
              zIndex: "100",
              top: this.state.top,
            }}
            >
                <Cover>
                    <Image source={require('../../assets/background2.jpg')} />
                    <Title>MENU</Title>
                </Cover>
                <TouchableOpacity onPress={this.toggleMenu} style={{position: "absolute", top: 120, left: "50%", marginLeft: -22, zIndex: 1}}>
                    <CloseView>
                        <Icon name="ios-close" size={44} color="#546bfb" />
                    </CloseView>
                </TouchableOpacity>

                <Content>

                <TouchableOpacity onPress={this.homePage.bind(this)} > 
                    <MenuItemContainer>
                        <MenuItemIconView>
                            <Icon name="ios-home" size={34} color="#546bfb"/>
                        </MenuItemIconView>

                        <MenuItemContent>
                            <MenuItemTitle>Home</MenuItemTitle>
                        </MenuItemContent>

                    </MenuItemContainer>
                </TouchableOpacity> 

                <TouchableOpacity onPress={this.adminLogin.bind(this)} >   
                    <MenuItemContainer >
                        <MenuItemIconView>
                            <Icon name="ios-person" size={34} color="#546bfb"/>
                        </MenuItemIconView>

                        <MenuItemContent >
                            <MenuItemTitle >Admin Login</MenuItemTitle>
                        </MenuItemContent>
                    </MenuItemContainer>
                </TouchableOpacity> 

                <TouchableOpacity onPress={this.termsPage.bind(this)} >   
                    <MenuItemContainer >
                        <MenuItemIconView>
                            <Icon name="ios-exit" size={34} color="#546bfb"/>
                        </MenuItemIconView>

                        <MenuItemContent >
                            <MenuItemTitle >Exit</MenuItemTitle>
                        </MenuItemContent>
                    </MenuItemContainer>
                </TouchableOpacity>

                

                </Content>
            </AnimatedContainer>
        )
    }
}



export default withNavigation(Menu);


const AnimatedContainer = Animated.createAnimatedComponent(View)

const Image = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
`;


const Title = styled.Text`
    color: white;
    font-size: 35px;
    letter-spacing: 3.5px;
`;

const Cover = styled.View`
    height: 142px;
    background: black;
    justify-content: center;
    align-items: center;
`;

const CloseView = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
`;

const Content = styled.View`
    height: ${screenHeight};
    background: #f0f3f5;
    padding: 50px;
`;

const MenuItemContainer = styled.View`
  flex-direction: row;
  margin 15px 0;
`;

const MenuItemIconView = styled.View`
  width: 45px;
  height: 76px;
  justify-content: center;
  align-items: center;
`;

const MenuItemContent = styled.View`
  padding-left: 20px;
  padding-top: 4px;
  margin: 20px;
 
`;

const MenuItemTitle = styled.Text`
  color: #3c4560;
  font-size: 24px;
  font-weight: 600;
`;




