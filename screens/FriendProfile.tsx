import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";

interface FriendProfileProps {
  name: string;
  vestedScore: number;
  invitations: Array<InvitationProps>;
  friendMatches: Array<FriendMatchProps>;
}

interface InvitationProps {
  id: string;
  accepted: boolean | null;
  name: string;
}

interface FriendMatchProps {
  id: string;
  matches: Array<MatchProps>;
}

interface MatchProps {
  id: string;
}

export default function FriendProfile() {
  const [profile, setProfile] = useState<FriendProfileProps>({
    name: "Scott Nelson",
    vestedScore: 95,
    invitations: [
      {
        id: "1",
        accepted: true,
        name: "Sarah Parker"
      },
      {
        id: "2",
        accepted: null,
        name: "Emily Johnson"
      },
      {
        id: "3",
        accepted: true,
        name: "Jamal Johnson"
      },
      {
        id: "4",
        accepted: true,
        name: "Kimberly Johnson"
      },
    ],
    friendMatches: [
      {
        id: "1",
        matches: [
          {
            id: "1",
          },
          {
            id: "2",
          },
        ],
      },
      {
        id: "2",
        matches: [
          {
            id: "3",
          },
          {
            id: "4",
          },
        ],
      },
      {
        id: "3",
        matches: [
          {
            id: "5",
          },
        ],
      },
      {
        id: "4",
        matches: [
          {
            id: "5",
          },
          {
            id: "2",
          },
        ],
      },
    ],
  });

  const [showInvitations, setShowInvitations] = useState(false);

  useEffect(() => {
    if (profile.invitations.length > 0) {
      setShowInvitations(true);
    }
  }, [profile.invitations]);

  const handleInviteResponse = (inviteId: string, accepted: boolean) => {
    setProfile(prev => ({
      ...prev,
      invitations: prev.invitations.map(invite => 
        invite.id === inviteId ? { ...invite, accepted } : invite
      )
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <View 
        style={styles.appBar}      >
        <ThemedText style={styles.appTitle}>Vested</ThemedText>
      </View>

      <ThemedText 
        style={styles.dashboardTitle}
        accessibilityRole="header"
      >
        {profile.name}'s Vested Dashboard
      </ThemedText>

      <View style={styles.card}>
        <ThemedText style={styles.cardTitle}>
          You are {profile.vestedScore}% Vested!
        </ThemedText>
      </View>

      <View style={styles.card}>
        <TouchableOpacity 
          style={styles.cardHeader}
          accessibilityRole="button"
          accessibilityLabel="Toggle pending invitations"
          accessibilityHint="Double tap to show or hide pending invitations"
          onPress={() => setShowInvitations(!showInvitations)}
        >
          <ThemedText style={styles.cardTitle}>Pending Invitations</ThemedText>
          <Text style={styles.toggleIcon}>
            {showInvitations ? '▼' : '▶'}
          </Text>
        </TouchableOpacity>

        {showInvitations && (
          <View style={styles.cardContent}>
            {profile.invitations.filter(invite => invite.accepted === null).length > 0 ? (
              profile.invitations
                .filter(invite => invite.accepted === null)
                .map((invite) => (
                  <View key={invite.id} style={styles.inviteRow}>
                    <ThemedText style={styles.inviteName}>
                      {invite.name}
                    </ThemedText>
                    <View style={styles.inviteButtons}>
                      <TouchableOpacity 
                        style={[styles.inviteButton, styles.acceptButton]}
                        onPress={() => handleInviteResponse(invite.id, true)}
                      >
                        <ThemedText style={styles.buttonText}>Accept</ThemedText>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        style={[styles.inviteButton, styles.denyButton]}
                        onPress={() => handleInviteResponse(invite.id, false)}
                      >
                        <ThemedText style={styles.buttonText}>Deny</ThemedText>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))
            ) : (
              <ThemedText>No pending invitations</ThemedText>
            )}
          </View>
        )}
      </View>
    </ScrollView>
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
    matchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    matchName: {
        fontSize: 16,
        fontWeight: '500',
    },
    matchScore: {
        fontSize: 14,
        color: '#666',
    },
    friendName: {
        fontSize: 16,
        fontWeight: '500',
    },
    friendScore: {
        fontSize: 14,
        color: '#666',
    },
    inviteRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    inviteName: {
        fontSize: 16,
        fontWeight: '500',
    },
    inviteButtons: {
        flexDirection: 'row',
        gap: 8,
    },
    inviteButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
        minWidth: 80,
        alignItems: 'center',
    },
    acceptButton: {
        backgroundColor: '#4CAF50',
    },
    denyButton: {
        backgroundColor: '#f44336',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
    },
});