import { FlatList, StyleSheet, Text, View } from "react-native";
import Botao from "../components/Botao";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { useState } from "react";
import { Tarefa } from "../models/Tarefa";
import Card from "../components/Card";

type Props = NativeStackScreenProps<RootStackParamList, 'Lista'>

export default function ListaScreen({navigation} : Props){
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
    return(
        <View style={styles.container}>
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