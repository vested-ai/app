import { StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { commonStyles } from "@/styles/common";

interface DaterProfileProps {
  name: string;
  matchRecommendations: Array<MatchRecommendation>;
  reviewingMatches: number;
  friends: Array<FriendsProps>;
}

interface MatchRecommendation {
  name: string;
  link: string;
  rankScore: number;
}

interface FriendsProps {
  name: string;
  vestedScore: number;
}

export default function DaterProfile() {
  const [profile, setProfile] = useState<DaterProfileProps>({
    name: "John Doe",
    matchRecommendations: [
      {
        name: "Sarah Parker",
        link: "/profiles/sarah-parker",
        rankScore: 92
      },
      {
        name: "Emily Johnson",
        link: "/profiles/emily-johnson",
        rankScore: 88
      },
      {
        name: "Michael Chen",
        link: "/profiles/michael-chen",
        rankScore: 85
      }
    ],
    reviewingMatches: 2,
    friends: [
      {
        name: "Alex Rivera",
        vestedScore: 95
      },
      {
        name: "Jessica Kim",
        vestedScore: 88
      },
      {
        name: "David Thompson",
        vestedScore: 82
      }
    ],
  });

  const [showRecommendations, setShowRecommendations] = useState(false);
  const [showFriends, setShowFriends] = useState(false);

  useEffect(() => {
    if (profile.matchRecommendations.length > 0) {
      setShowRecommendations(true);
    }

    if (profile.friends.length > 0) {
      setShowFriends(true);
    }
  }, [profile.matchRecommendations, profile.friends]);

  return (
        <ScrollView style={commonStyles.container} contentContainerStyle={commonStyles.contentContainer}>
            <View style={commonStyles.appBar}>
                <ThemedText style={commonStyles.appTitle}>Vested</ThemedText>
      </View>

            <ThemedText style={commonStyles.dashboardTitle} accessibilityRole="header">
        {profile.name}'s Vested Dashboard
      </ThemedText>

            <View style={commonStyles.card}>
        <TouchableOpacity 
          style={styles.cardHeader}
          accessibilityRole="button"
          accessibilityLabel="Toggle match recommendations"
          accessibilityHint="Double tap to show or hide match recommendations"
          onPress={() => setShowRecommendations(!showRecommendations)}
        >
                    <ThemedText style={commonStyles.cardTitle}>Match Recommendations</ThemedText>
                    <ThemedText style={styles.toggleIcon}>
            {showRecommendations ? '▼' : '▶'}
                    </ThemedText>
        </TouchableOpacity>

        {showRecommendations && (
                    <View style={commonStyles.cardContentContainer}>
            {profile.matchRecommendations.length > 0 ? (
              profile.matchRecommendations
                .sort((a, b) => b.rankScore - a.rankScore)
                .map((match, index) => (
                  <View key={index} style={styles.matchRow}>
                    <ThemedText style={styles.matchName}>{match.name}</ThemedText>
                    <ThemedText style={styles.matchScore}>
                      Match Score: {match.rankScore}%
                    </ThemedText>
                  </View>
                ))
            ) : (
              <ThemedText>No match recommendations available</ThemedText>
            )}
          </View>
        )}
      </View>

            <View style={commonStyles.card}>
                <ThemedText style={commonStyles.cardTitle}>
          {profile.reviewingMatches} matches being reviewed by friends
        </ThemedText>
      </View>

            <View style={commonStyles.card}>
        <TouchableOpacity 
          style={styles.cardHeader}
          onPress={() => setShowFriends(!showFriends)}
        >
                    <ThemedText style={commonStyles.cardTitle}>Your Vested Friends</ThemedText>
                    <ThemedText style={styles.toggleIcon}>
            {showFriends ? '▼' : '▶'}
                    </ThemedText>
        </TouchableOpacity>
        
        {showFriends && (
                    <View style={commonStyles.cardContentContainer}>
            {profile.friends.length > 0 ? (
              profile.friends
                .sort((a, b) => b.vestedScore - a.vestedScore)
                .map((friend, index) => (
                  <View key={index} style={styles.friendRow}>
                    <ThemedText style={styles.friendName}>{friend.name}</ThemedText>
                    <ThemedText style={styles.friendScore}>
                      Vested Score: {friend.vestedScore}%
                    </ThemedText>
                  </View>
                ))
            ) : (
              <ThemedText>No friends added yet</ThemedText>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    toggleIcon: {
        fontSize: 20,
        padding: 4,
    },
    matchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: Colors.brandGrayLighter,
    },
    matchName: {
        fontSize: 16,
        fontWeight: '500',
    },
    matchScore: {
        fontSize: 14,
        color: Colors.brandGray,
    },
    friendRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: Colors.brandGrayLighter,
    },
    friendName: {
        fontSize: 16,
        fontWeight: '500',
    },
    friendScore: {
        fontSize: 14,
        color: Colors.brandGray,
    }
});