import { Text, View, StyleSheet, } from "react-native"
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

function GameScreen({userNumber}){
    const initialGuess = generateRandomBetween(1, 100, userNumber );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>        
        <View>
            <Text>Amunt o avall?</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            
        </View>
        <View></View>
    </View>
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});