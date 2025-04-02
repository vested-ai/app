import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { commonStyles } from '@/styles/common';
import { Colors } from "@/constants/Colors";


interface DaterProps {
    id: string;
    name: string;
    matchRecommendations: Array<MatchRecommendation>;
    matchExpirationHrs: number;
}

interface MatchRecommendation {
    id: string;
    name: string;
    rankScore: number;
}

interface MatchesDashboardProps {
    daterId: string;
}

export default function MatchesDashboard({ daterId }: MatchesDashboardProps) {
    if (!daterId || daterId.trim() === '') {
        console.error("Invalid daterId provided to MatchesDashboard");
    }
    console.log("daterId: ", daterId);
    
    const [dater, setDater] = useState<DaterProps>({
        id: daterId,   
        name: "Lola Loren",
        matchRecommendations: [
            {
                id: "1",
                name: "Chad Thunderbolt",
                rankScore: 92
            },
            {
                id: "2",
                name: "Brock Steel",
                rankScore: 88
            }
        ],
        matchExpirationHrs: 8,
    });

    return (
        <ScrollView style={commonStyles.container} contentContainerStyle={commonStyles.contentContainer}>
            <View style={commonStyles.appBar}>
                <ThemedText style={commonStyles.appTitle}>Vested</ThemedText>
            </View>

            <ThemedText style={commonStyles.dashboardTitle}>
                {dater.name}'s Match Recommendations
            </ThemedText>

            <ThemedText style={commonStyles.expirationText}>
                Expires in {dater.matchExpirationHrs} hours
            </ThemedText>

            {dater.matchRecommendations.map((match, index) => (
                <View key={index} style={commonStyles.card}>
                    <ThemedText style={styles.matchName}>{match.name}</ThemedText>
                    <ThemedText style={styles.matchScore}>
                        Match Score: {match.rankScore}%
                    </ThemedText>
                    <TouchableOpacity 
                        style={commonStyles.linkButton}
                        onPress={() => router.push({
                            pathname: "/(profile)/matchprofile",
                            params: { matchId: match.id }
                        })}
                    >
                        <ThemedText style={commonStyles.linkText}>View Profile</ThemedText>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    expirationText: {
        fontSize: 16,
        color: Colors.brandGray,
        marginBottom: 24,
    },
    matchName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    matchScore: {
        fontSize: 16,
        color: Colors.brandGray,
        marginBottom: 16,
    },
});