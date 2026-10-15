import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import Botao from "../components/Botao";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { useEffect, useState } from "react";
import { Tarefa } from "../models/Tarefa";
import Card from "../components/Card";
import { listarTarefas } from "../services/tarefaService";

type Props = NativeStackScreenProps<RootStackParamList, 'Lista'>

export default function ListaScreen({navigation} : Props){
    const[tarefas, setTarefas] = useState<Tarefa[]>([]);
	const[carregando, setCarregando] = useState(false);
	const[erro, setErro] = useState<string>('');

	async function carregarTarefas(){
		try {
			setCarregando(true);
			setErro('');

			const dados = await listarTarefas();
			setTarefas(dados);
		} catch(error) {
			setErro('Erro ao carregar as Tarefas! =(')
		} finally {
			setCarregando(false);
		}
	}

	useEffect(() => {
		carregarTarefas();
	}, [])

	if (carregando){
		return(
			<View style={styles.centro}>
				<ActivityIndicator size="large" />  
				<Text>Aguarde...</Text>
			</View>
		)
	}

	if(erro !== ''){
		<View>
			<Text>{erro}</Text>
			<Botao titulo="Tentar novamente!" onPress={carregarTarefas}></Botao>
		</View>
	}

    return(
        <View style={styles.container}>

			<View style={styles.cabecalho}>
				<Text style={styles.tituloApp}>Minhas Tarefas</Text>
				<Text>{tarefas.length === 0 ? 'Nenhuma Tarefa' : `${tarefas.length} tarefa(s)`}</Text>
				<Botao titulo="[+] Nova Tarefa" onPress={() => navigation.navigate('Cadastro')}></Botao>
			</View>

            <FlatList
                data={tarefas}
                keyExtractor={(item => item.id.toString())}
                keyboardShouldPersistTaps = 'handled'
                contentContainerStyle={styles.conteudo}
                renderItem={({item}) =>
                <Card
                    id={item.id}
                    titulo={item.titulo}
                    descricao={item.descricao}
                    status={item.status}
                    onPress={()=> navigation.navigate('Detalhe', {id: item.id})}
                />
            }
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
        </View>
    );
    
}

const styles = StyleSheet.create({ 
	container: {
	  flex: 1,
	},
	
	centro: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24
	},

	mensagem: {
		marginTop: 12
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