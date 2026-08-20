import { Pressable, StyleSheet, Text } from "react-native";

export default function botao(){
    return (
        <Pressable style={styles.botao} onPress={() => console.log("Botão pressionado.")}>
            <Text>Nova Tarefa</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({ 
	botao: { 
		padding: 15, 
		marginTop: 20, 
		borderWidth: 1, 
	}, 
});