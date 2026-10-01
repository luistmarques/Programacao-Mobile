import { StyleSheet, Text, View } from "react-native";

export default function EdicaoScreen(){

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>EDICAO SCREEN</Text>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },

    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
    }
});