// React core
import React, { useState } from 'react';

// React Native components
import { ScrollView } from 'react-native';

// Local components
import { AppBar } from '@/components/AppBar';
import { ThemedText } from '@/components/ThemedText';

// Local styles and constants
import { commonStyles } from '@/styles/common';
import { ThemedImage } from '@/components/ThemedImage';
import { ThemedView } from '@/components/ThemedView';
import { getDaterById, getProfileImage } from '@/data/mockData';
import { Dater } from '@/types/data';

interface MatchProfileProps {
    matchId: string;
}

export default function MatchProfile({ matchId }: MatchProfileProps) {
    if (!matchId) {
        console.error("Invalid matchId provided to MatchProfile");
    }
   
    const [match, setMatch] = useState<Dater | undefined>(getDaterById(matchId));   
    
    if (!match) {
        return (
            <ThemedView style={commonStyles.container}>
                <ThemedText style={commonStyles.errorText}>
                    Error: Profile not found
                </ThemedText>
            </ThemedView>
        );
    }
    
    return (
        <ScrollView style={commonStyles.container} contentContainerStyle={commonStyles.contentContainer}>
            <AppBar />

            {/* User Header */}
            <ThemedView style={commonStyles.userHeader}>
                <ThemedImage 
                    source={getProfileImage(match.image)} 
                    style={commonStyles.userImageLarge}
                />
                <ThemedText style={[commonStyles.title, { textAlign: 'center' }]}>
                    {match.name}
                </ThemedText>
                <ThemedText style={commonStyles.userHeaderText}>
                    {match.bio}
                </ThemedText>
            </ThemedView>
        </ScrollView>
    );
}