// React core
import { useEffect, useState } from "react";

// React Native components
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";

// Third-party libraries
import { router, useLocalSearchParams } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome6';

// Local components
import { AppBar } from "@/components/AppBar";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { ThemedCard } from "@/components/ThemedCard";
import { ThemedImage } from "@/components/ThemedImage";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

// Local styles and constants
import { commonStyles } from '@/styles/common';
import { Colors } from "@/constants/Colors";

// Local data and utilities
import { getFriendById, getProfileImage } from "@/data/mockData";
import { Friend } from "@/types/data";

interface FriendDashboardProps {
    friendId: string;
}

export default function FriendDashboard({ friendId }: FriendDashboardProps) {
    if (!friendId) {
        console.error("Invalid friendId provided to FriendDashboard");
    }
    
    const [friend, setFriend] = useState<Friend | undefined>(getFriendById(friendId || "1"));

    if (!friend) {
        return (
            <ThemedView style={commonStyles.container}>
                <ThemedText style={commonStyles.errorText}>
                    Error: Profile not found
                </ThemedText>
            </ThemedView>
        );
    } 

    const [isVested, setIsVested] = useState(false);
    const [hasInvitations, setHasInvitations] = useState(false);
    const [hasFriendsToMatch, setHasFriendsToMatch] = useState(false);
    const [showInvitations, setShowInvitations] = useState(false);
    const [showReviewMatches, setShowReviewMatches] = useState(false);

    const handleAcceptInvitation = (daterId: string) => {
        const daterToAccept = friend.invitedBy.find(dater => dater.id === daterId);
        if (!daterToAccept) return;

        setFriend({
            ...friend,
            daters: [...friend.daters, daterToAccept],
            invitedBy: friend.invitedBy.filter(dater => dater.id !== daterId)
        });
    };

    const handleDeclineInvitation = (daterId: string) => {
        setFriend({
            ...friend,
            invitedBy: friend.invitedBy.filter(dater => dater.id !== daterId)
        });
    };

    useEffect(() => {
        if (friend.invitedBy.length > 0) {
            setHasInvitations(true);
            setShowInvitations(true);
        } else {
            setHasInvitations(false);
        }

        if (friend.vestedScore > 0) {
            setIsVested(true); 
        }

        if(friend.daters.length > 0) {  
            setHasFriendsToMatch(true);
            setShowReviewMatches(true);
        }
    }, [friend.invitedBy, friend.daters, friend.vestedScore]);

    return (
        <ScrollView style={commonStyles.container} contentContainerStyle={commonStyles.contentContainer}>
            
            <AppBar />

            {/* User Info Container */}
            <ThemedView style={commonStyles.userHeader}>
                <ThemedImage 
                    source={require('@/assets/images/profiles/1.png')} 
                    style={commonStyles.userImageLarge}
                />
                <ThemedText style={commonStyles.title}>{friend.name}'s Dashboard</ThemedText>
                <ThemedText style={commonStyles.userModeText}>Friend Mode</ThemedText>
                
                {isVested && (
                    <ThemedView>
                        <ThemedText style={commonStyles.userVestedScore}>
                            <Icon 
                                name="star-half-stroke" 
                                size={18} color={Colors.brandPink} 
                                style={commonStyles.leadingIcon} 
                            />
                            You are {friend.vestedScore}% Vested!
                        </ThemedText>

                        <ThemedText style={commonStyles.userHeaderText}>
                            <Icon 
                                name="fire-flame-curved" 
                                size={18} color={Colors.brandBlack} 
                                style={commonStyles.leadingIcon} 
                            />
                            Hot streak! High match rate this month!
                        </ThemedText>
                    </ThemedView>
                )}
            </ThemedView>

            {/* Invitations Section */}
            <ThemedView style={commonStyles.section}>
                <TouchableOpacity onPress={() => setShowInvitations(!showInvitations)}>
                    <ThemedText style={commonStyles.sectionTitle}>
                        <Icon 
                        name={showInvitations ? "chevron-down" : "chevron-right"} 
                        size={18} 
                        color={Colors.brandGrayDarker} 
                        style={commonStyles.leadingIcon}
                        />
                        Invitations
                    </ThemedText>
                    {hasInvitations ? (
                        <ThemedText style={commonStyles.cardContent}>
                            Your friends want your help matching them with potential partners.
                        </ThemedText>
                    ) : (
                        <ThemedText style={commonStyles.cardContent}>
                            Check back soon for invitations from your friends.
                        </ThemedText>
                    )}
                </TouchableOpacity>

                {showInvitations && (
                <ThemedView style={[commonStyles.section, commonStyles.row]}>
                    {friend.invitedBy.map((dater) => (
                        <ThemedCard key={dater.id} style={commonStyles.card}>
                            <ThemedView style={commonStyles.daterCard}>
                                <ThemedImage 
                                    source={getProfileImage(dater.image)} 
                                    style={commonStyles.userImageMedium}
                                />
                                <ThemedView style={commonStyles.cardContentContainer}>
                                    <ThemedText style={commonStyles.cardTitle}>
                                        {dater.name}
                                    </ThemedText>
                                </ThemedView>
                            </ThemedView>
                            <ThemedView style={styles.inviteActions}>
                                <Button
                                    text="Accept"
                                    style={[commonStyles.actionButton, commonStyles.primaryButton]}
                                    onPress={() => handleAcceptInvitation(dater.id)}
                                />
                                <Button
                                    text="Decline"
                                    style={[commonStyles.actionButton, commonStyles.secondaryButton]}
                                    onPress={() => handleDeclineInvitation(dater.id)}
                                />
                            </ThemedView>
                            </ThemedCard>
                        ))}
                    </ThemedView>
                )}
            </ThemedView>

            {/* Review Friends Matches Section */}
            {hasFriendsToMatch && (
                <ThemedView style={commonStyles.section}>
                    <TouchableOpacity onPress={() => setShowReviewMatches(!showReviewMatches)}>
                        <ThemedText style={commonStyles.sectionTitle}>
                            <Icon 
                                name={showReviewMatches ? "chevron-down" : "chevron-right"} 
                                size={18} 
                                color={Colors.brandGrayDarker} 
                                style={commonStyles.leadingIcon}
                            />
                            Review Friends Matches
                        </ThemedText>
                        <ThemedText style={commonStyles.cardContent}>
                            Your friends need your help reviewing their profiles to help them find love!
                        </ThemedText>
                    </TouchableOpacity>

                    {showReviewMatches && (
                        <ThemedView style={commonStyles.section}>
                            {friend.daters.map((dater) => (
                                <TouchableOpacity 
                                    key={dater.id}
                                    style={commonStyles.card}
                                    onPress={() => {
                                        router.push({
                                            pathname: "/(profile)/matchesdashboard",
                                            params: { daterId: dater.id }
                                        });
                                    }}
                                >
                                    <ThemedView style={commonStyles.daterCard}>
                                        <ThemedImage 
                                            source={getProfileImage(dater.image)} 
                                            style={commonStyles.userImageMedium}
                                        />
                                        <ThemedText style={commonStyles.cardTitle}>
                                            {dater.name}
                                        </ThemedText>
                                        <Badge 
                                            count={dater.matchRecommendations.length} 
                                            type='numeric'
                                            description='Matches'
                                        />
                                    </ThemedView>

                                    <ThemedView>
                                        <ThemedText 
                                            style={commonStyles.cardContent}
                                            numberOfLines={4}
                                        >
                                            {dater.bio}
                                        </ThemedText>
                                            {dater.matchRecommendations.length > 0 && dater.matchExpirationHrs > 0 && (
                                                <ThemedView style={[styles.inviteActions, { paddingHorizontal: 0 }]}>
                                                    <ThemedText style={commonStyles.expirationText}>
                                                        Hurry! Expires in {dater.matchExpirationHrs}h.
                                                    </ThemedText>
                                                </ThemedView>
                                        )}
                                    </ThemedView>
                                </TouchableOpacity>
                            ))}
                        </ThemedView>
                    )}
                </ThemedView>   
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    inviteActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        paddingHorizontal: 16,
        paddingBottom: 16,
        gap: 16,
    },
}); 