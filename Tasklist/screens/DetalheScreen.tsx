import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { useEffect, useState } from "react";
import { Tarefa } from "../models/Tarefa";
import Botao from "../components/Botao";
import { listarTarefaPorId } from "../services/tarefaService";

type Props = NativeStackScreenProps<
    RootStackParamList, "Detalhe"    
>;
export default function DetalheScreen({route, navigation} : Props){
    const {id} = route.params; 
    
    const [tarefa, setTarefa] = useState<Tarefa | null>(null);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    async function carregarTarefa(){
        try{
            setCarregando(true);
            setErro('');

            const dados = await listarTarefaPorId(id);
            setTarefa(dados);
        } catch(error) {
            if(error instanceof Error && error.message===`Tarefa não encontrada`) {
                setErro("Tarefa nao encontrada");
            } else {
                setErro("Falha ao buscar tarefa");
            } 
        } finally {
            setCarregando(false);
        }
    }

    useEffect(()=> {
        carregarTarefa()
    }, [id]);

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
			<Text style={styles.erro}>{erro}</Text>
			<Botao titulo="Tentar novamente!" onPress={carregarTarefa}></Botao>
		</View>
	}

    if(!tarefa){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>
                    Tarefa não encontrado!
                </Text>
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{tarefa.titulo}</Text>
            <Text >{tarefa.descricao}</Text>
            <Text >{tarefa.status}</Text>
            <Botao titulo="Editar" onPress={()=>navigation.navigate('Edicao', {id : tarefa.id})} />
        </View>
    );
    
}

const styles = StyleSheet.create({
    erro: {
        marginTop: 10,
        fontWeight: 'bold',
      },

    centro: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24
	},

    container: {
        flex: 1,
        padding: 24,
    },

    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
    }
});