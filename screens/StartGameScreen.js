import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler(enteredText){
    setEnteredNumber(enteredText);
  }

  function resetInputHandler(){
    setEnteredNumber('');
  }

  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Nombre invàlid!',
        "El número ha de ser entre 1 i 99.",
        [{text: "D'acord", style: 'destructive', onPress:resetInputHandler}]
      );      
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
      style={styles.numberInput} 
      maxLength={2} 
      keyboardType='number-pad' 
      autoCapitalize='none' 
      autoCorrect={false}
      onChangeText={numberInputHandler}
      value={enteredNumber}
      />
      
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirmar</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
      justifyContent:'center',
      alignItems:'center',
      marginTop: 100,
      marginHorizontal: 24,
      padding: 16,
      backgroundColor: '#490c2b',
      borderRadius: 8,
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 6,
      shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer:{
      flexDirection: 'row'
    },
    buttonContainer: {
      flex:1,
    }
});
