import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Buutton from './Button';
import React from 'react';

const Startpage = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://www.itl.cat/pngfile/big/240-2405890_whatsapp-background-pictures-background-image-for-app.jpg',
      }}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Quiz Master</Text>
      </View>

      <Buutton label="START" backgroundColor="red" height={50} width={230} fontSize={40} />
    </ImageBackground>
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
    paddingVertical: 90,
    marginBottom: 250,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Startpage;
