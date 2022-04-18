import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Buutton from './Button';
import React from 'react';

const QuizPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>
          What is meant by closure in Javascript
        </Text>
      </View>
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.option}><Text style={styles.optionText}>
          Option
        </Text></TouchableOpacity>
        <TouchableOpacity style={styles.option}><Text style={styles.optionText}>
          Option
        </Text></TouchableOpacity>
        <TouchableOpacity style={styles.option}><Text style={styles.optionText}>
          Option
        </Text></TouchableOpacity>
        <TouchableOpacity style={styles.option}><Text style={styles.optionText}>
          Option
        </Text></TouchableOpacity>
  
      </View>

      <View style={styles.buttonsContainer}>
        <Buutton label="Skip" backgroundColor="blue" height={35} width={130} fontSize={20} />
        <Buutton label="Next" backgroundColor="blue" height={35} width={130} fontSize={20}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  questionContainer:{
    width: '100%',
    paddingVertical:80,
    paddingHorizontal:5
  },
  question:{
    fontSize:33,
    color: 'black',
    fontWeight: 'bold',
  },
  optionContainer:{
    flex:1,

  },
  option:{
    width: 350,
    height: 60,
    borderWidth:1,
    borderColor: 'black',
    marginVertical:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionText:{
    fontSize:40,
    fontWeight: 'bold',
  },
  buttonsContainer:{
    flexDirection:'row',
    paddingVertical:25,
  }
  

});

export default QuizPage;
