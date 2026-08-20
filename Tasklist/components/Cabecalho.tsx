import { StyleSheet, Text, View } from "react-native";

export default function cabecalho() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>TaskList</Text>
            <Text style={styles.subtitulo}>Gerenciamento de Tarefas</Text>
        </View>
    );
}

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		padding: 30, 
		justifyContent: 'center', 
		alignItems: 'center'
	}, 

	titulo: { 
		fontSize: 48, 
		fontWeight: 'bold', 
	}, 
	
	subtitulo: { 
		fontSize: 20, 
		marginTop: 20, 
	}, 
	
});