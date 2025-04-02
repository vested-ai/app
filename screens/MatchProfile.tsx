import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { commonStyles } from '@/styles/common';
import { Colors } from '@/constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface MatchProfileProps {
    matchId: string;
}

export default function MatchProfile({ matchId }: MatchProfileProps) {
    if (!matchId ) {
        console.error("Invalid matchId provided to MatchProfile");
    }
    console.log("matchId: ", matchId);
    
    return (
        <ScrollView style={commonStyles.container} contentContainerStyle={commonStyles.contentContainer}>
            <View style={commonStyles.appBar}>
                <ThemedText style={commonStyles.appTitle}>
                    <Icon name="heart" solid size={24} color={Colors.brandPink} style={commonStyles.iconLeft} />
                    Vested
                </ThemedText>
            </View>

            <View style={styles.profileContainer}>
                <ThemedText style={styles.matchId}>Match ID: {matchId}</ThemedText>
                <ThemedText style={styles.description}>
                    This is a placeholder for the match profile. In a real implementation,
                    this would display detailed information about the match.
                </ThemedText>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        padding: 20,
        backgroundColor: Colors.brandWhite,
        borderRadius: 10,
        marginTop: 20,
    },
    matchId: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: Colors.brandGray,
        lineHeight: 24,
    },
}); 