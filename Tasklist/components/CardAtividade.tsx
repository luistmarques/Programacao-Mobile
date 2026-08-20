import { StyleSheet, Text, View } from "react-native";


export default function CardAtividade(){
    return (
        <View style={styles.card}>
            <Text style={styles.subtitulo}>Atividade 01</Text>
            <Text style={styles.subtitulo}>Status: Finalizado</Text>
        </View>
    );
}

const styles = StyleSheet.create({ 
	subtitulo: { 
		fontSize: 16, 
		marginTop: 20, 
	}, 
	
	card: { 
		padding: 15, 
		marginTop: 10, 
		borderWidth: 1, 
	}, 
});
