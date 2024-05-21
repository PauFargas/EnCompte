import { Text, StyleSheet } from "react-native"
import Colors from "../../const/colors"


function InstructionText ({children}){
    return <Text style={styles.instructiontext}>{content}</Text>
}
export default InstructionText

const styles = StyleSheet.create({
    instructionText:{
        color: Colors.accent500,
        fontSize: 24,
    }
})