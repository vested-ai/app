import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { commonStyles } from '@/styles/common';
import { Colors } from "@/constants/Colors";
import Icon from 'react-native-vector-icons/FontAwesome6';


interface FriendProfileProps {
    id: string;
    name: string;
    vestedScore: number;
    invitedBy: Array<DaterProps>;
    daters: Array<DaterProps>;
}

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

export default function FriendProfile() {
    const [profile, setProfile] = useState<FriendProfileProps>({
        id: "1", 
        name: "Bambi Sparkles",
        vestedScore: 87,
        invitedBy: [
            {
                id: "4",
                name: "Ruby Jane",
                matchRecommendations: [
                    { id: "1", name: "Chad Thunderbolt", rankScore: 92 },
                    { id: "2", name: "Brock Steel", rankScore: 88 }
                ],
                matchExpirationHrs: 8,
            },
            {
                id: "5",
                name: "Crystal Ball",
                matchRecommendations: [
                    { id: "1", name: "Duke Danger", rankScore: 91 },
                    { id: "2", name: "Rex Rumble", rankScore: 89 },
                    { id: "3", name: "Titan Thunder", rankScore: 87 }
                ],
                matchExpirationHrs: 6,
            }
        ],
        daters: [
            { 
                id: "1", 
                name: "Lola Loren", 
                matchRecommendations: [
                    { id: "1", name: "Rex Power", rankScore: 95 },
                    { id: "2", name: "Thor Hammer", rankScore: 89 },
                    { id: "3", name: "Max Power", rankScore: 87 },
                    { id: "4", name: "Crash Bandicoot", rankScore: 86 }
                ], 
                matchExpirationHrs: 8 
            },
            { 
                id: "2", 
                name: "Ocean Maeve", 
                matchRecommendations: [
                    { id: "1", name: "Buck Wild", rankScore: 94 },
                    { id: "2", name: "Rock Strong", rankScore: 91 }
                ], 
                matchExpirationHrs: 12 
            },
            { 
                id: "3", 
                name: "Poppy Rose", 
                matchRecommendations: [
                    { id: "1", name: "Blaze Fury", rankScore: 93 },
                    { id: "2", name: "Cannon Ball", rankScore: 90 },
                    { id: "3", name: "Storm Rider", rankScore: 88 },
                    { id: "4", name: "Titan Force", rankScore: 85 },
                    { id: "5", name: "Axel Steel", rankScore: 84 }
                ], 
                matchExpirationHrs: 5 
            },
        ],
    });

    const [isVested, setIsVested] = useState(false);

    const handleAcceptInvitation = (daterId: string) => {
        const daterToAccept = profile.invitedBy.find(dater => dater.id === daterId);
        if (!daterToAccept) return;

        setProfile({
            ...profile,
            daters: [...profile.daters, daterToAccept],
            invitedBy: profile.invitedBy.filter(dater => dater.id !== daterId)
        });
    };

    const handleDeclineInvitation = (daterId: string) => {
        if (profile.invitedBy.length === 0) return;
        const daterToDecline = profile.invitedBy.find(dater => dater.id === daterId);
        if (!daterToDecline) return;

        setProfile({
            ...profile,
            invitedBy: profile.invitedBy.filter(dater => dater.id !== daterId)
        });
    };

    useEffect(() => {
        if (profile.vestedScore > 0) {
            setIsVested(true); 
        }
    }, [profile.vestedScore]);

    return (
        <ScrollView style={commonStyles.container} contentContainerStyle={commonStyles.contentContainer}>
            <View style={commonStyles.appBar}>
                <ThemedText style={commonStyles.appTitle}>
                    <Icon name="heart" solid size={24} color={Colors.brandPink} style={commonStyles.iconLeft} />
                    Vested
                </ThemedText>
            </View>
            <ThemedText style={commonStyles.dashboardTitle} >
                {profile.name}'s Vested Dashboard
            </ThemedText>
            {
                isVested ? (
                    <View style={commonStyles.dashboardSubtitleContainer}>
                        <ThemedText style={commonStyles.dashboardSubtitle}>
                            <Icon name="star-half-stroke" size={18} color={Colors.brandGray} style={commonStyles.iconLeft} />
                            You are {profile.vestedScore}% Vested!
                        </ThemedText>
                        <ThemedText style={commonStyles.dashboardSubtitle}>
                            <Icon name="fire-flame-curved" size={18} color={Colors.brandGray} style={commonStyles.iconLeft} />
                            Hot streak! High match rate this month!
                        </ThemedText>
                    </View>
                ) : (
                    <View style={commonStyles.dashboardSubtitleContainer}>
                        <ThemedText style={commonStyles.dashboardSubtitle}>
                            Welcome to Vested!
                        </ThemedText>
                        <ThemedText style={commonStyles.dashboardSubtitle}>
                            Check back soon for Friend Requests to begin matching!
                        </ThemedText>
                    </View>
                )
            }
                    
            {profile.invitedBy.map((dater) => (
                <View key={dater.id} style={commonStyles.card}>
                    <ThemedText style={commonStyles.cardTitle}>
                        You've been invited!
                    </ThemedText>
                    <ThemedText style={commonStyles.cardContent}>
                        Review and rate matches for {dater.name}.
                    </ThemedText>
                    <View style={commonStyles.linkContainer}>
                        <TouchableOpacity style={commonStyles.linkButton} onPress={() => handleAcceptInvitation(dater.id)}>
                            <ThemedText style={commonStyles.linkText}>Let's do it!</ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity style={commonStyles.linkButton} onPress={() => handleDeclineInvitation(dater.id)}>
                            <ThemedText style={commonStyles.linkText}>Decline</ThemedText>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}

            <View style={commonStyles.card}>
                <ThemedText style={commonStyles.cardTitle}>
                    Matches to Review
                </ThemedText>
                {profile.daters.map((dater) => (
                    <TouchableOpacity 
                        key={dater.id}
                        style={styles.daterCard}
                        onPress={() => {
                            router.push({
                                pathname: "/(profile)/matchesdashboard",
                                params: { daterId: dater.id }
                            });
                        }}
                    >
                        <View style={styles.daterInfo}>
                            <ThemedText style={styles.daterName}>{dater.name}</ThemedText>
                            <ThemedText style={styles.daterExpiration}>
                                Hurry! Expires in {dater.matchExpirationHrs} hours
                            </ThemedText>
                        </View>
                        <View style={styles.matchCount}>
                            <ThemedText style={styles.matchCountText}>
                                {dater.matchRecommendations.length} matches
                            </ThemedText>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    dashboardVestedContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    dashboardWelcomeContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    dashboardVestedHeader: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    dashboardVestedSubheader: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    dashboardWelcomeHeader: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    cardText: {
        fontSize: 12,
        color: Colors.brandGray,
    },
    daterCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.brandGray,
    },
    daterInfo: {
        flex: 1,
    },
    daterName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    daterExpiration: {
        fontSize: 14,
        color: Colors.brandGray,
    },
    matchCount: {
        backgroundColor: Colors.brandPink,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    matchCountText: {
        color: Colors.brandWhite,
        fontSize: 14,
        fontWeight: 'bold',
    },
    backButton: {
        backgroundColor: Colors.brandPink,
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    backButtonText: {
        color: Colors.brandWhite,
        fontSize: 16,
        fontWeight: 'bold',
    },
}); 