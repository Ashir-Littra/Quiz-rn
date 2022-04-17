import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Buutton from './Button';
import React from 'react';

const Startpage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Quiz Master</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} />
      </View>
      <Buutton label="START" backgroundColor="red" height={30} width={130} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  header: {
    padding: 25,
  },
  headerText: {
    fontSize: 25,
  },
});

export default Startpage;
