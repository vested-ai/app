import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function PersonaSetup() {
    return (
        <View style={styles.container}>
            <ThemedText style={styles.text}>Persona Setup Placeholder</ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    }
});