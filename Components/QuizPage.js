import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Button,
} from 'react-native';

import Buutton from './Button';
import React, {useEffect, useState} from 'react';

const QuizPage = ({navigation}) => {
  const [quizData, setQuizData] = useState([]);
  const [qno, setQno] = useState(0);
  const [options, setOptions] = useState([]);
  const [finish, setFinish] = useState(false);
  useEffect(() => {
    fetchQuiz();
  }, []);
  

  const fetchQuiz = async () => {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&category=18&type=multiple',
    );
    const result = await response.json();
    setQuizData(result.results);
   
  };
  const nextQ = () => {
    if (qno <= 8) {
      setQno(prev => prev + 1);
    } else {
      setFinish(true);
    }
  };

  const setOptionfunc = () => {
    if (quizData.length !== 0) {
      
    }
  };

  //   function get_random (list) {
  //   return list[Math.floor((Math.random()*list.length))];
  // }

  // get_random([2,3,5])

  if (quizData.length === 0) {
    return <ActivityIndicator  />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>
          Q:{qno + 1} {quizData[qno].question}
          {console.log(options)}
        </Text>
      </View>
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Option</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Option</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Option</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Option</Text>
        </TouchableOpacity>
      </View>

      {finish ? (
        <Buutton
          onPress={() => navigation.navigate('Result')}
          label="Show Results"
          backgroundColor="green"
          height={55}
          width={330}
          fontSize={30}
        />
      ) : (
        <View style={styles.buttonsContainer}>
          <Buutton
            label="Skip"
            backgroundColor="blue"
            height={35}
            width={130}
            fontSize={20}
          />
          <Buutton
            onPress={nextQ}
            label="Next"
            backgroundColor="blue"
            height={35}
            width={130}
            fontSize={20}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  questionContainer: {
    width: '100%',
    paddingVertical: 80,
    paddingHorizontal: 5,
  },
  question: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
  },
  optionContainer: {
    flex: 1,
  },
  option: {
    width: 350,
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingVertical: 25,
  },
});

export default QuizPage;
