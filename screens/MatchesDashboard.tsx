// React core
import { useEffect, useState } from "react";

// React Native components
import { ScrollView, TouchableOpacity, Image } from "react-native";

// Third-party libraries
import { router } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome6";
import Slider from '@react-native-community/slider';

// Local components
import { AppBar } from "@/components/AppBar";
import { Badge } from "@/components/Badge";
import { ThemedImage } from "@/components/ThemedImage";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

// Local styles and constants
import { commonStyles } from "@/styles/common";
import { Colors } from "@/constants/Colors";

// Local data and utilities
import { getDaterById, getProfileImage } from "@/data/mockData";
import { MatchRecommendation } from "@/types/data";

interface MatchesDashboardProps {
    daterId: string;
}

export default function MatchesDashboard({ daterId }: MatchesDashboardProps) {
    const dater = getDaterById(daterId);
    
    if (!dater) {
        return (
            <ThemedView style={commonStyles.container}>
                <ThemedText style={commonStyles.errorText}>
                    Dater not found
                </ThemedText>
            </ThemedView>
        );
    }

    const [seriousness, setSeriousness] = useState(dater.seriousness || 50);
    const [hasMatches, setHasMatches] = useState(false);
    const [showMatches, setShowMatches] = useState(false);

    useEffect(() => {
        if (dater.matchRecommendations.length > 0 && dater.matchExpirationHrs > 0) {
            setHasMatches(true);
            setShowMatches(true);
        }
    }, [dater.matchRecommendations, dater.matchExpirationHrs]);

    return (
        <ScrollView style={[commonStyles.container, commonStyles.contentContainer]}>
            <AppBar />

            {/* User Header */}
            <ThemedView style={commonStyles.userHeader}>
                <Image 
                    source={getProfileImage(dater.image)} 
                    style={commonStyles.userImageLarge}
                />
                <ThemedView >
                    <ThemedText style={[commonStyles.title, { color: Colors.brandPink }]}>{dater.name}</ThemedText>
                </ThemedView>
                
                {hasMatches && (
                    <ThemedText style={commonStyles.userModeText}>
                        {dater.matchRecommendations.length} Matches to Review
                    </ThemedText>
                )}

                <ThemedView style={commonStyles.sliderContainer}>
                    <ThemedText style={commonStyles.sliderTextSmall}>
                        Casual
                    </ThemedText>
                    <Slider
                        style={commonStyles.slider}
                        minimumValue={0}
                        maximumValue={100}
                        value={seriousness}
                        minimumTrackTintColor={Colors.brandGrayDarker}
                        maximumTrackTintColor={Colors.brandGrayDarker}
                        thumbTintColor={Colors.brandPink}
                    />
                    <ThemedText style={commonStyles.sliderTextSmall}>
                        Super Serious
                    </ThemedText>
                </ThemedView>      
            </ThemedView>

            {/* Match Recommendations Section */}
            {!hasMatches ? ( 
                <ThemedView style={[commonStyles.section, {alignItems: 'center'}]}>
                    <ThemedText style={commonStyles.sectionTitle}>
                        No matches
                    </ThemedText>
                    <ThemedText style={commonStyles.sectionSubtitle}>
                        Check back soon!
                    </ThemedText>
                </ThemedView>
            ) : (
                <ThemedView style={commonStyles.section}>
                    <TouchableOpacity onPress={() => setShowMatches(!showMatches)}>
                        <ThemedText style={commonStyles.sectionTitle}>
                        <Icon 
                            name={showMatches ? "chevron-down" : "chevron-right"} 
                            size={18} 
                            color={Colors.brandGrayDarker} 
                            style={commonStyles.leadingIcon}
                        />
                            Match Recommendations
                        </ThemedText>
                        <ThemedText style={commonStyles.expirationText}>
                            Hurry! Matches expire in {dater.matchExpirationHrs}h.
                        </ThemedText>
                    </TouchableOpacity>
                    {showMatches && (
                        <ThemedView style={commonStyles.section}>
                            {dater.matchRecommendations.map((matchRecommendation: MatchRecommendation) => {
                                const match = getDaterById(matchRecommendation.daterId);
                                if (!match){
                                    return (
                                        <ThemedText style={commonStyles.errorText}>
                                            Match not found
                                        </ThemedText>
                                    );
                                }
    
                                return (
                                    <TouchableOpacity 
                                        key={matchRecommendation.daterId}
                                        style={commonStyles.card}
                                        onPress={() => router.push({
                                            pathname: "/(profile)/matchprofile",
                                            params: { matchId: matchRecommendation.daterId }
                                        })}
                                    >
                                        <ThemedView style={commonStyles.daterCard}>
                                            <ThemedImage 
                                                source={getProfileImage(match.image)} 
                                                style={commonStyles.userImageSmall}
                                            />

                                            <ThemedText style={commonStyles.cardTitle}>
                                                {match.name}
                                            </ThemedText>

                                            <Badge 
                                                count={matchRecommendation.rankScore} 
                                                type="percentage" 
                                                description='Match'
                                            />
                                        </ThemedView>

                                        <ThemedView style={{ width: '100%', flex: 1 }}>
                                            <ThemedText 
                                                style={[commonStyles.cardContent, commonStyles.cardBio]}
                                                numberOfLines={4}
                                                ellipsizeMode="tail"
                                            >
                                               {match.bio}
                                            </ThemedText>
                                            <ThemedText style={commonStyles.cardInfoText}>
                                                Review to add commentary
                                            </ThemedText>
                                        </ThemedView>
                                    </TouchableOpacity>
                                );
                            })}
                        </ThemedView>
                    )}
                </ThemedView>
            )}
        </ScrollView>
    );
}