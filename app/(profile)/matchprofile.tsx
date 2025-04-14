import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import MatchProfile from "@/screens/MatchProfile";
import { useLocalSearchParams } from "expo-router";

export default function MatchProfileSetupRoute() {
    const { matchId } = useLocalSearchParams();
    
    if(!matchId) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <ThemedText style={{ fontSize: 18, textAlign: 'center' }}>
                    Match Profile Error! 
                </ThemedText>
            </View>
        );
    }
    
    return (
        <MatchProfile matchId={matchId as string} />
    );
}