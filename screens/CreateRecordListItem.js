import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
 
class ListItem extends Component {

  render() {
   const { headingone } = this.props.record;
   const { statement } = this.props.record;
 
    return (

      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('RecordEdit', {record: this.props.record})}>
        <View style={styles.containerStyle}>
          <Text style={styles.titleStyle}>
            <Text style={{fontWeight: "bold"}}>{headingone}</Text>
            {"\n"}
            <Text>{statement}</Text>
            
          </Text>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}
 
const styles = {
  containerStyle: {
    marginTop: 20
  }, 
  titleStyle: {
    fontSize: 18,
    paddingLeft: 8,
    flex: 1, 
    width: '95%',
    textAlign: 'justify'
  }
}
 
export default withNavigation(ListItem);