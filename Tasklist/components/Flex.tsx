import { StyleSheet, Text, View } from "react-native";

export default function Flex(){
    return(
        <View style={styles.container}>
            <Text style={styles.item02}>Item 01</Text>
            <Text style={styles.item01}>Item 02</Text>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    isolado: {
        alignSelf: 'flex-start',
    },

    item01: {
        flex: 2,
        backgroundColor: 'purple'
    },

    item02: {
        flex: 1,
        backgroundColor: 'red'
    }
})