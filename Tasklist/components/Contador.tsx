import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Contador(){
    const [valor, setValor] = useState(0);

    function incrementar() {
        setValor(valor+1);
    }

    function decrementar() {
        valor > 0 && setValor(valor-1);
    }

    function resetar() {
        setValor(0);
    }
    
    return(
        <View>
            <Text>Contador: {valor}</Text>
            <Button title="+" onPress={incrementar}></Button>
            <Button title="-" onPress={decrementar}></Button>
            <Button title="@" onPress={resetar}></Button>
        </View>
    );
}