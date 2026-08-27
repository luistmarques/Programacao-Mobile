import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './components/Cabecalho'
import Card from './components/Card';
import Botao from './components/Botao';

function selecionarTarefas(id : number, descricao : string) {
    console.log('Tarefa '+ id + ' Selecionada | Descrição: '+ descricao)
}

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho />
	  <Card id={1} titulo='Atividade 01' descricao='realização da atividade 01' status='Concluida' onPress= { selecionarTarefas } />
	  <Card id={2} titulo='Atividade 02' descricao='realização da atividade 02' status='Em andamento' onPress= { selecionarTarefas } />
	  <Botao/>
      <StatusBar style="auto" />
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
		fontSize: 28, 
		fontWeight: 'bold', 
	}, 
	
	subtitulo: { 
		fontSize: 20, 
		marginTop: 20, 
	}, 
	
	card: { 
		padding: 15, 
		marginTop: 10, 
		borderWidth: 1, 
	}, 
	
	botao: { 
		padding: 15, 
		marginTop: 20, 
		borderWidth: 1, 
	}, 
});
