import { StyleSheet, Text, View } from 'react-native'

import Buutton from './Button'
import React from 'react'

const Result = () => {
  return (
    <View style={styles.container}>
      <View style={styles.resultBox}>
          <Text style={styles.result}>Your score is : 4</Text>
      </View>
      <View style={styles.button}>
        <Buutton  label='Home' height={50} width={200} fontSize={30} backgroundColor='green' />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    resultBox:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    result:{
        fontSize: 35,
        color:'black',
    },
    button: {
       justifyContent:'center',
       alignItems: 'center',
       marginBottom: 30,
    }
})

export default Result