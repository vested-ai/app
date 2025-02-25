import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";

/**
 * Renders a centered placeholder for a friend's profile.
 *
 * This functional component displays a view with a centered themed text
 * that reads "Friend Profile Placeholder", serving as a temporary display
 * for the friend's profile screen.
 */
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