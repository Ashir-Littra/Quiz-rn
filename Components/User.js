import {View, Text, TextInput, StyleSheet , TouchableOpacity, ToastAndroid , Alert} from 'react-native';
import React,{useState} from 'react';

const User = () => {
  const [password,setPassword] =useState('')
  const [confPass,setConfPass] = useState('')
  const [username,setUsername] = useState('')
  const registerFunction = () =>{
    if(password === '' || username === ''){
      ToastAndroid.show('please fill all the fields',
      ToastAndroid.SHORT)
      return false;
    }
    if(password === confPass) {
      Alert.alert('Registration Succesful',`${username} is Registered successfully`)
      setConfPass('');
      setPassword('');
      setUsername('');
    }else{
      ToastAndroid.show('please enter same password',
      ToastAndroid.SHORT)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.text}>Username</Text>
          <TextInput value={username} onChangeText={(text) =>setUsername(text)} style={styles.textInput} placeholder='Username'/>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.text}>Password</Text>
          <TextInput value={password} secureTextEntry={true} onChangeText={(text) => setPassword(text)}  style={styles.textInput} placeholder='Password' />
        </View>
        <View style={styles.inputBox}>
          <TextInput value={confPass} secureTextEntry={true} onChangeText={(text)=>setConfPass(text)} style={styles.textInput} placeholder='Confirm Password' />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={registerFunction} style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    backgroundColor: 'gray',
    height: '50%',
    justifyContent: 'center',
    marginTop: 60,
    borderRadius: 20,
    borderTopEndRadius: 0,
  },
  inputBox: {
    alignItems: 'center',
    marginBottom: 15,
  },
  textInput: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 20,
    borderTopEndRadius: 0,
    textAlign: 'center',
    fontSize: 17,
  },
  text: {
    color: 'black',
    fontSize: 20,
    paddingBottom:10,
    textAlign: 'left',
    fontWeight: 'bold',

  },
  buttonContainer: {},
  title: {
    color: 'orange',
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 30,
  },
  button:{
    backgroundColor:'orange',
    width: 330,
    height: 60,
   borderRadius: 25,
   marginTop:100,
   alignItems: 'center',
   justifyContent: 'center',
  },
  buttonText:{
    fontSize: 27,
    fontWeight: 'bold',
  }
});

export default User;
