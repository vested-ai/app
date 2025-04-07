// Components
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { AppBar } from "@/components/AppBar";

// Styles
import { commonStyles } from "@/styles/common";

export default function NotificationsRoute() {
    return (
        <ThemedView style={commonStyles.container}>
            <AppBar />
            <ThemedText style={commonStyles.title}>Notifications</ThemedText>
        </ThemedView>
    );
}
