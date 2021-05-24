import React, { useState, useEffect } from 'react';
import { Animated, Text, View, Image } from 'react-native';

export default () => {

  console.disableYellowBox = true;

    const [altura] = useState(new Animated.Value(100)); 
    const [largura] = useState(new Animated.Value(100)); 
    const [visible] = useState(new Animated.Value(1)); 

    const [status, setStatus] = useState(true);

    React.useEffect(() => {

      function animateWidth() {
        Animated.timing(altura, {
          toValue: 300,
          duration: 1000,
          
        }).start();
        Animated.timing(largura, {
          toValue: 300,
          duration: 1000,
          
        }).start(() => resize()); 
        Animated.timing(visible, {
          toValue: 0,
          duration: 1000,
          
        }).start();
      }  
      
      function resize(){
        Animated.timing(visible, {
          toValue: 1,
          duration: 1,
        }).start();
        Animated.timing(altura, {
          toValue: 100,
          duration: 1,
          
        }).start();
        Animated.timing(largura, {
          toValue: 100,
          duration: 1,
          
        }).start(() => animateWidth()); 
      }

      animateWidth()
    }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <Animated.View
      style={{
        width: altura,
        height: largura, 
        borderColor: '#ff5964',
        borderWidth: 4,
        borderRadius: 150,
        opacity: visible      
      }}>
      
    </Animated.View>

    <Image style={{ width: 100, height: 100, borderRadius: 50,
      position: 'absolute', zIndex: 10,
      justifyContent:'center', alignItems: 'center'}}
        source={{ uri: 'https://github.com/andersonrafaelferreira.png'}}
      />

    </View>
  );
};