import { Pressable, StyleSheet, Text, View } from "react-native";

type CardProps = {
	id: number,
	titulo: string,
	descricao: string,
	status: string,
	onPress: (id : number, descricao : string) => void
}

export default function Card({id, titulo, descricao, status, onPress}: CardProps){
    return (
        <Pressable onPress={ () => onPress(id, descricao)} style={styles.card}>
            <Text style={styles.titulo}> { titulo } </Text>
			<Text> { descricao } </Text>
			<Text style={status === 'Concluida' && styles.statusConcluido}> { status } </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({ 
	titulo: { 
		fontSize: 16, 
		marginTop: 20, 
	}, 
	
	card: { 
		padding: 15, 
		marginTop: 10, 
		borderWidth: 1, 
	}, 

	statusConcluido: {
		color: '#00FF00'
	}
});
