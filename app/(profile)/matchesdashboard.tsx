import MatchesDashboard from "@/screens/MatchesDashboard";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function MatchesDashboardSetupRoute() {
    const { daterId } = useLocalSearchParams();
    
    if (!daterId) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <ThemedText style={{ fontSize: 18, textAlign: 'center' }}>
                    Matches Dashboard Error! 
                </ThemedText>
            </View>
        );
    }
    
    return (
        <MatchesDashboard daterId={daterId as string} />    
    );
}