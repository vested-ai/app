// React core
import { useEffect, useState } from "react";

// React Native components
import { TouchableOpacity, ScrollView } from "react-native";

// Third-party libraries
import { router, useLocalSearchParams } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome6';

// Local components
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedImage } from "@/components/ThemedImage";
import { Badge } from "@/components/Badge";
import { AppBar } from "@/components/AppBar";

// Local styles and constants
import { commonStyles } from "@/styles/common";
import { Colors } from "@/constants/Colors";

// Local data and utilities
import { getDaterById, getProfileImage } from "@/data/mockData";
import { Dater } from "@/types/data";

export default function DaterDashboard() {
    // Get daterId from route params or use default "1"
    const { daterId } = useLocalSearchParams<{ daterId: string }>();
    const currentDaterId = daterId || "1";
    
    // Get the dater from mock data
    const [dater, setDater] = useState<Dater | undefined>(getDaterById(currentDaterId));

    // If dater is not found, show error
    if (!dater) {
        return (
            <ThemedView style={commonStyles.container}>
                <ThemedText style={commonStyles.errorText}>
                    Error: Profile not found
                </ThemedText>
            </ThemedView>
        );
    }

    const [isVested, setIsVested] = useState(false);
    const [hasRecommendations, setHasRecommendations] = useState(false);
    const [showRecommendations, setShowRecommendations] = useState(false);
    const [showFriends, setShowFriends] = useState(false);

    useEffect(() => {
        if (dater.friends.length > 0) {
            setIsVested(true);
            setShowFriends(true);
        }

        if (dater.matchRecommendations.length > 0) {
            setHasRecommendations(true);
            setShowRecommendations(true);
        }
    }, [dater.friends, dater.matchRecommendations]);

    return (
        <ScrollView style={commonStyles.container} contentContainerStyle={commonStyles.contentContainer}>
            
            <AppBar />

            {/* User Header */}
            <ThemedView style={commonStyles.userHeader}>
                <ThemedImage 
                    source={getProfileImage(dater.image)} 
                    style={commonStyles.userImageLarge}
                />
                <ThemedText style={[commonStyles.title, { textAlign: 'center' }]}>{dater.name}'s Dashboard</ThemedText>
                <ThemedText style={commonStyles.userModeText}>Dater Mode</ThemedText>
                
                {isVested && (
                    <ThemedView>
                        <ThemedText style={commonStyles.userVestedScore}>
                            <Icon 
                                name="star-half-stroke" 
                                size={18} color={Colors.brandPink} 
                                style={commonStyles.leadingIcon} 
                            />
                            You are {dater.vestedScore}% Vested!
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

            {/* Match Recommendations Section */}
            {hasRecommendations && (
                <ThemedView style={commonStyles.section}>
                    <TouchableOpacity onPress={() => setShowRecommendations(!showRecommendations)}>
                        <ThemedText style={commonStyles.sectionTitle}>
                            <Icon 
                                name={showRecommendations ? "chevron-down" : "chevron-right"} 
                                size={18} 
                                color={Colors.brandGrayDarker} 
                                style={commonStyles.leadingIcon}
                            />
                            Match Recommendations
                        </ThemedText>
                    </TouchableOpacity>

                    {showRecommendations && (
                        <ThemedView>
                            {dater.matchRecommendations
                                .sort((a, b) => b.rankScore - a.rankScore)
                                .map((match) => (
                                    <TouchableOpacity 
                                        key={match.id}
                                        style={commonStyles.card}
                                        onPress={() => router.push({
                                            pathname: "/(profile)/matchprofile",
                                            params: { matchId: match.id }
                                        })}
                                    >
                                        <ThemedView style={commonStyles.daterCard}>
                                            <ThemedImage 
                                                source={getProfileImage(match.image)} 
                                                style={commonStyles.userImageSmall}
                                            />
                                            <ThemedView style={{ flex: 1, marginRight: 16 }}>
                                                <ThemedText style={commonStyles.cardTitle} numberOfLines={1}>
                                                    {match.name}
                                                </ThemedText>
                                            </ThemedView>
                                            <Badge 
                                                count={match.rankScore} 
                                                type="percentage" 
                                                description='Match'
                                            />
                                        </ThemedView>
                                        <ThemedText 
                                            style={commonStyles.cardContent}
                                            numberOfLines={4}
                                        >
                                            {match.bio}
                                        </ThemedText>
                                    </TouchableOpacity>
                                ))
                            }
                        </ThemedView>
                    )}
                </ThemedView>
            )}

            {/* Matches Being Reviewed Section */}
            <ThemedView style={commonStyles.section}>
                <ThemedText style={commonStyles.sectionTitle}>
                    <Icon 
                        name="fire-flame-curved" 
                        size={18} 
                        color={Colors.brandPink} 
                        style={commonStyles.leadingIcon}
                    />
                    {dater.reviewingMatches} matches being reviewed by friends
                </ThemedText>
            </ThemedView>

            {/* Vested Friends Section */}    
            <ThemedView style={commonStyles.section}>
                <TouchableOpacity onPress={() => setShowFriends(!showFriends)}>
                    <ThemedText style={commonStyles.sectionTitle}>
                        <Icon 
                            name={showFriends ? "chevron-down" : "chevron-right"} 
                            size={18} 
                            color={Colors.brandGrayDarker} 
                            style={commonStyles.leadingIcon}
                        />
                        Vested Friends
                    </ThemedText>
                </TouchableOpacity>

                {showFriends && (
                    <ThemedView style={commonStyles.section}>
                        {dater.friends.map((friend) => (
                            <ThemedView key={friend.id} style={commonStyles.card}>
                                <ThemedView style={commonStyles.daterCard}>
                                    <ThemedImage 
                                        source={getProfileImage(friend.image)} 
                                        style={commonStyles.userImageMedium}
                                    />
                                    <ThemedView style={{ flex: 1 }}>
                                        <ThemedText style={commonStyles.cardTitle}>
                                            {friend.name}
                                        </ThemedText>
                                    </ThemedView>
                                    <Badge 
                                      count={friend.vestedScore} 
                                      type="percentage" 
                                      description='Vested Score'
                                    />
                                </ThemedView>
                            </ThemedView>
                        ))} 
                    </ThemedView>
                )}
            </ThemedView>
        </ScrollView>
    );
}