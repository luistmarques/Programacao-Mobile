import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Status() {
    const [status, setStatus] = useState('');
    
    function alterarStatus(novoStatus: string  ){
        setStatus(novoStatus)
    }

    return(
        <View>
            <Text>Status: {status}</Text>
            {
                status === 'Aguardando' ?
                (
                    <Button 
                        title="Iniciar" 
                        onPress={()=>alterarStatus('Em andamento')}>
                    </Button>
                ):
                (
                    <Button 
                        title="Concluir" 
                        onPress={()=>alterarStatus('Concluida')}>
                    </Button>
                )
            }
        </View>
    );
}