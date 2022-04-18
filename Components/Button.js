import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import React from 'react';

function Buutton(props) {
  console.log();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.backgroundColor,
        height: props.height,
        width: props.width,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: 'white',
    fontSize: props.fontSize,
    fontWeight: 'bold',}}>{props.label}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
   
  },
});

export default Buutton;
