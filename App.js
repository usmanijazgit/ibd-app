import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View>
      
      <View>
        <Text>Terms & Conditions</Text>
        <Text>By using this application, you acknowledge 
          that the content of this website is targeted 
          at health care professionals only...</Text>
        <Text>I am a healthcare professional and I accept the Terms of Use.</Text> 
        <Button title="I ACCEPT" />
      </View>

      <View>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  
});
