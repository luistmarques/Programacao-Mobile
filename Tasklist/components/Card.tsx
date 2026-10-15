import React from "react";
import { useState } from "react";
import { Button, Image, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native";
import { StatusTarefa } from "../models/Tarefa";

type CardProps = {
    id: number,
    titulo: string,
    descricao: string,
    status: StatusTarefa,
    onPress: () => void
}

export default function Card({ 
    id,
    titulo, 
    descricao, 
    status,
    onPress
    }: CardProps) 
{

  function formatarStatus(status: StatusTarefa) {
    if(status === 'EmAndamento') {
      return 'Em Andamento';
    }
    if(status === 'Concluida') {
      return 'Concluída';
    }
    return 'Pendente';
  }
 
    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>{ titulo }</Text>
            <Text style={styles.descricao}>{ descricao }</Text>
            <Text style={styles.status}>{ formatarStatus(status) }</Text>

            <Pressable 
                style={styles.botaoExcluir}
                onPress={() => onPress}
            >
                <Text style={styles.textoExcluir}>Detalhes</Text>
            </Pressable>

        </View>

    );
}

const styles = StyleSheet.create({
    card: {
      borderWidth: 1,
      borderRadius: 8,
      padding: 16,
      marginBottom: 12,
    },
  
    titulo: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 6,
    },
  
    descricao: {
      fontSize: 15,
      marginBottom: 8,
    },
  
    status: {
      fontSize: 14,
      fontWeight: 'bold',
    },
  
    botaoExcluir: {
      borderWidth: 1,
      borderRadius: 6,
      padding: 8,
      marginTop: 12,
      alignItems: 'center',
    },
  
    textoExcluir: {
      fontWeight: 'bold',
    },
  });