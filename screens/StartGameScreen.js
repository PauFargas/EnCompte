import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../const/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/card.js';
import InstructionText from '../components/ui/InstructionText';

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
    <View style={styles.rootContainer}>
      <Title>Adivina el número</Title>
      <Card>
        <InstructionText>Entra un nombre</InstructionText>
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
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  instructiontext:{
    color: Colors.accent500,
    fontSize: 24
  },
    inputContainer: {
      justifyContent:'center',
      alignItems:'center',
      marginTop: 36,
      marginHorizontal: 24,
      padding: 16,
      backgroundColor: Colors.primary700,
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
        borderBottomColor: Colors.accent500 ,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer:{
      flexDirection: 'row'
    },
    buttonContainer: {
      flex:1,
    },
    rootContainer:{
      flex: 1,
      marginTop: 50,
      alignItems: 'center'
    }
});
