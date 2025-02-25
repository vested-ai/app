import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function FriendProfile() {
    return (
        <View style={styles.container}>
            <ThemedText style={styles.text}>Friend Profile Placeholder</ThemedText>
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