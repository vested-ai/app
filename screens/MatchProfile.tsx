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
    friendId: string;
}

export default function MatchProfile({ matchId, friendId }: MatchProfileProps) {
    if (!matchId || !friendId) {
        console.error("Invalid matchId or friendId provided to MatchProfile");
    }
   
     const [match, setMatch] = useState<Dater | undefined>(getDaterById(matchId));   
     const [friend, setFriend] = useState<Dater | undefined>(getDaterById(friendId));
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

            {/* User Info Container */}
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