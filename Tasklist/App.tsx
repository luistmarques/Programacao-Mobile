import { useState } from 'react';
import { Tarefa } from './models/Tarefa';
import {
	FlatList,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaScreen from './screens/ListaScreen';
import DetalheScreen from './screens/DetalheScreen';
import EdicaoScreen from './screens/EdicaoScreen';
import CadastroScreen from './screens/CadastroScreen';
import { RootStackParamList } from './navigation/types';

export default function App() {
	/*
	const[tarefas, setTarefas] = useState<Tarefa[]>([
		{
			id: 1,
			titulo: 'Estudar Desenvolvimento Mobile',
			descricao: 'Revisar Estados e Propriedades',
			status: 'Pendente'
		},
		{
			id: 2,
			titulo: 'Me preparar para o ENADE',
			descricao: 'Revisar Todo o Conteúdo',
			status: 'Pendente'
		},
	]);

	const[titulo, setTitulo] = useState('');
	const[descricao, setDescricao] = useState('');
	const[erro, setErro] = useState('');

	function cadastrar() {
		if (titulo.trim() === '' ||
			descricao.trim() === ''
		) {
			setErro('Título e Descrição são obrigatórios!');
			return;
		}

		const novaTarefa: Tarefa = {
			id: Date.now(),
			titulo: titulo,
			descricao: descricao,
			status: 'Pendente'
		}

		setTarefas([
			...tarefas,
			novaTarefa
		]);

		setTitulo('');
		setDescricao('');
		setErro('');
	}

	function excluir(id: number) {
		const novaLista = tarefas.filter(
			(tarefa) => tarefa.id !== id
		);
		setTarefas(novaLista);
	}

  return (
	<KeyboardAvoidingView 
	style={styles.container}
	behavior={Platform.OS === 'ios' ? 'padding': undefined }
	>
		<FlatList
			data={tarefas}
			keyExtractor={(item) => item.id.toString()}
			keyboardShouldPersistTaps='handled'
			contentContainerStyle={styles.conteudo}

			ListHeaderComponent={
				<View style={styles.cabecalho}>
					<Text style={styles.tituloApp}>TASKAPP</Text>
					<Text style={styles.subtituloApp}>Gerenciador de Tarefas</Text>

					
					<Text style={styles.tituloFormulario}>Nova Tarefa</Text>

					<Text style={styles.label}>Título</Text>
					<TextInput 
						style={styles.input}
						placeholder='Digite o título'
						value={titulo}
						onChangeText={setTitulo}
					/>

					<Text style={styles.label}>Descrição</Text>
					<TextInput 
						style={styles.input}
						placeholder='Digite a descrição'
						value={descricao}
						onChangeText={setDescricao}
					/>					

					{
						erro !== '' && (
							<Text style={styles.erro}>{ erro }</Text>
					)}

					<Botao 
						titulo='Adicionar'
						onPress={cadastrar}
					/>		
		

					<View style={styles.cabecalhoLista}>
					<Text style={styles.tituloLista}>LISTA</Text>
					<Text style={styles.tituloLista}>
						{
							tarefas.length > 0 ?
							`${ tarefas.length } tarefas` : 
							`Nenhuma tarefa`
						}
					</Text>
					</View>
				</View>					
			}	

			renderItem={({item}) => (
				<Card 
					id={item.id}
					titulo={item.titulo}
					descricao={item.descricao}
					status={item.status}
					onDelete={excluir}
				/>
  			)}

			ListEmptyComponent={
				<View style={styles.listaVazia}>
					<Text style={styles.textoListaVazia}>
						Nenhuma tarefa cadastrada
					</Text>
					<Text>
						Utilize o formulário para adicionar tarefa.
					</Text>
				</View>
			}
		/>		

	</KeyboardAvoidingView>
  );
 */
  			const Stack = createNativeStackNavigator<RootStackParamList>();

			return (
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
						name="Lista"
						component={ListaScreen}
						/>
						<Stack.Screen
						name="Detalhe"
						component={DetalheScreen}
						/>
						<Stack.Screen
						name="Edicao"
						component={EdicaoScreen}
						/>
						<Stack.Screen
						name="Cadastro"
						component={CadastroScreen}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			)
}

const styles = StyleSheet.create({ 
	container: {
	  flex: 1,
	},
  
	conteudo: {
	  padding: 24,
	  paddingTop: 50,
	},
  
	tituloApp: {
	  fontSize: 30,
	  fontWeight: 'bold',
	  textAlign: 'center',
	},
  
	subtituloApp: {
	  fontSize: 16,
	  textAlign: 'center',
	  marginBottom: 30,
	},
  
	tituloFormulario: {
	  fontSize: 22,
	  fontWeight: 'bold',
	  marginBottom: 15,
	},
  
	label: {
	  fontSize: 15,
	  fontWeight: 'bold',
	  marginTop: 10,
	  marginBottom: 5,
	},
  
	input: {
	  width: '100%',
	  borderWidth: 1,
	  borderRadius: 8,
	  padding: 12,
	  fontSize: 16,
	},
  
	inputDescricao: {
	  minHeight: 80,
	  textAlignVertical: 'top',
	},
  
	erro: {
	  marginTop: 10,
	  fontWeight: 'bold',
	},
  
	tituloLista: {
	  fontSize: 22,
	  fontWeight: 'bold',
	  marginTop: 35,
	  marginBottom: 15,
	},
  
	listaVazia: {
	  borderWidth: 1,
	  borderRadius: 8,
	  padding: 20,
	  alignItems: 'center',
	},
  
	textoListaVazia: {
	  fontSize: 17,
	  fontWeight: 'bold',
	  marginBottom: 5,
	},

	cabecalho: {
		alignItems: 'center',
		marginBottom: 30
	},

	formulario: {
		width: '100%'
	},

	cabecalhoLista: {
		alignSelf: 'stretch',
		justifyContent: 'space-between',
		flexDirection: 'row'
	}
	  
  });