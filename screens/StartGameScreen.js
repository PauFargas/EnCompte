import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/ui/PrimaryButton.js';
import Colors from '../const/colors.js';
import Title from '../components/ui/Title.js';
import Card from '../components/ui/Card.js';
import InstructionText from '../components/ui/InstructionText.js';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('')

  const {width, height} = useWindowDimensions()

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

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const deviceHeight = Dimensions.get('window').get

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer:{
    flex: 1,
    alignItems: 'center'
  },
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
});
