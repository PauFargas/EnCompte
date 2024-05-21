import { Text, StyleSheet } from "react-native";
import Colors from "../../const/colors";


function Title({children}){
    return <Text style={StyleSheet.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
        borderRadius: 16,
    }
})
  