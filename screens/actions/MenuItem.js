import React from "react";
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';


const MenuItem = props => (
  <MenuItemContainer>
    <MenuItemIconView>
      <Icon name={props.icon} size={34} color="#546bfb"/>
    </MenuItemIconView>

    <MenuItemContent>
      <MenuItemTitle>{props.title}</MenuItemTitle>
    </MenuItemContent>

  </MenuItemContainer>
)

export default MenuItem;

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
