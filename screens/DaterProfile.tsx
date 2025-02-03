import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { ThemedText } from "@/components/ThemedText";

interface DaterProfileProps {
  name: string;
  matchRecommendations: Array<MatchRecommendationsProps>;
  reviewingMatches: number;
  friends: Array<FriendsProps>;
}

interface MatchRecommendationsProps {
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
    matchRecommendations: [],
    reviewingMatches: 0,
    friends: [],
  });

  const [showRecommendations, setShowRecommendations] = useState(true);
  const [showFriends, setShowFriends] = useState(true);

  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <ThemedText style={styles.appTitle}>Vested</ThemedText>
      </View>

      {/* Title */}
      <ThemedText style={styles.dashboardTitle}>
        {profile.name}'s Vested Dashboard
      </ThemedText>

      {/* Match Recommendations Section */}
      <View style={styles.card}>
        <TouchableOpacity 
          style={styles.cardHeader}
          onPress={() => setShowRecommendations(!showRecommendations)}
        >
          <ThemedText style={styles.cardTitle}>Match Recommendations</ThemedText>
          <Text style={styles.toggleIcon}>
            {showRecommendations ? '▼' : '▶'}
          </Text>
        </TouchableOpacity>
        
        {showRecommendations && (
          <View style={styles.cardContent}>
            {/* TODO: Add match recommendations content */}
            <ThemedText>Your match recommendations will appear here</ThemedText>
          </View>
        )}
      </View>

      {/* Matches Under Review Section */}
      <View style={styles.card}>
        <ThemedText style={styles.cardTitle}>
          {profile.reviewingMatches} matches being reviewed by friends
        </ThemedText>
      </View>

      {/* Friends Section */}
      <View style={styles.card}>
        <TouchableOpacity 
          style={styles.cardHeader}
          onPress={() => setShowFriends(!showFriends)}
        >
          <ThemedText style={styles.cardTitle}>Your Vested Friends</ThemedText>
          <Text style={styles.toggleIcon}>
            {showFriends ? '▼' : '▶'}
          </Text>
        </TouchableOpacity>
        
        {showFriends && (
          <View style={styles.cardContent}>
            {profile.friends.map((friend, index) => (
              <View key={index} style={styles.friendRow}>
                <ThemedText>{friend.name}</ThemedText>
                <ThemedText>Vested Score: {friend.vestedScore}</ThemedText>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  appBar: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    marginBottom: 16,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  dashboardTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 24,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  toggleIcon: {
    fontSize: 20,
    padding: 4,
  },
  cardContent: {
    paddingTop: 16,
  },
  friendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});