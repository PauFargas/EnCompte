import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable 
      style={({pressed}) => 
        pressed 
          ? [styles.buttonInnerContainer, styles.pressed]
          : styles.buttonInnerContainer} 
      onPress={onPress} 
      android_ripple={{color: '#640233'}}
      
      >
          <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden' /*Fa que res de l'estilització surti del contenidor */
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'

  },
  pressed: {
    opacity: 0.75,
  }
})