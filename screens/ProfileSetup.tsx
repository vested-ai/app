import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import { SelectList } from 'react-native-dropdown-select-list';
import { Colors } from '../constants/Colors';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

interface DatingApp {
    app: string;
    credentials: string;
}

interface Contact {
    name: string;
    email: string;
    relationship: string;
}

export default function ProfileSetup() {
    // Step 1 state
    const [reasons, setReasons] = useState({
        newToDating: false,
        currentAppsNotWorking: false,
        overwhelmed: false,
        feelAloneInDatingJourney: false,
        secondOpinion: false,
        screeningHelp: false,
        friendsRecommend: false,
        otherPeopleKnowMeBetter: false,
        funWithFriends: false,
        bringCommunityOnDatingJourney: false,
        other: false,
    });
    const [otherReason, setOtherReason] = useState('');
    const [seriousness, setSeriousness] = useState(50);

    // Step 2 state
    const [datingApps, setDatingApps] = useState<DatingApp[]>([
        { app: '', credentials: '' }
    ]);

    // Step 3 state
    const [contacts, setContacts] = useState<Contact[]>([
        { name: '', email: '', relationship: '' }
    ]);

    // Dating apps dropdown options
    const datingAppOptions = [
        { key: 'tinder', value: 'Tinder' },
        { key: 'bumble', value: 'Bumble' },
        { key: 'hinge', value: 'Hinge' },
        { key: 'coffee', value: 'Coffee Meets Bagel' },
    ];

    // Relationship dropdown options
    const relationshipOptions = [
        { key: 'friend', value: 'Friend' },
        { key: 'family', value: 'Family Member' },
        { key: 'mentor', value: 'Mentor' },
        { key: 'other', value: 'Other' },
    ];

    const addDatingApp = () => {
        setDatingApps([...datingApps, { app: '', credentials: '' }]);
    };

    const addContact = () => {
        setContacts([...contacts, { name: '', email: '', relationship: '' }]);
    };

    const generateCustomInviteLink = () => {
        // TODO: Implement invite link generation
        console.log('Generating custom invite link...');
    };

    const goToNotifications = () => {
        router.replace('/(account)/notifications');
    };

    const goToProfile = () => {
        router.replace('/(account)/daterprofile');   
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Welcome to Vested!</Text>

            {/* Step 1 */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Step 1: Tell us why you're here</Text>
                
                <Checkbox.Item
                    label="I'm new to dating apps and need help"
                    status={reasons.newToDating ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, newToDating: !prev.newToDating }))}
                    position="leading"
                />
                <Checkbox.Item
                    label="The current apps aren't working for me"
                    status={reasons.currentAppsNotWorking ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, currentAppsNotWorking: !prev.currentAppsNotWorking }))}
                    position="leading"
                />
                <Checkbox.Item
                    label="I'm overwhelmed by all the choices"
                    status={reasons.overwhelmed ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, overwhelmed: !prev.overwhelmed }))}
                    position="leading"
                />
                
                <Checkbox.Item
                    label="I feel alone in my dating journey"
                    status={reasons.feelAloneInDatingJourney ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, feelAloneInDatingJourney: !prev.feelAloneInDatingJourney }))}
                    position="leading"
                />
                
                <Checkbox.Item
                    label="I want a second opinion"
                    status={reasons.secondOpinion ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, secondOpinion: !prev.secondOpinion }))}
                    position="leading"
                />

                <Checkbox.Item
                    label="The people I've met on dating apps are nothing like their profiles. I need help with screening"
                    status={reasons.screeningHelp ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, screeningHelp: !prev.screeningHelp }))}
                    position="leading"
                />
                
                <Checkbox.Item
                    label="I think my friends might be better at finding a partner than I am"
                    status={reasons.friendsRecommend ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, friendsRecommend: !prev.friendsRecommend }))}
                    position="leading"
                />

                <Checkbox.Item
                    label="Sometimes other people know me better than I know myself"
                    status={reasons.otherPeopleKnowMeBetter ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, otherPeopleKnowMeBetter: !prev.otherPeopleKnowMeBetter }))}
                    position="leading"
                />

                <Checkbox.Item
                    label="I think it would be fun to do this with my friends"
                    status={reasons.funWithFriends ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, funWithFriends: !prev.funWithFriends }))}
                    position="leading"
                />

                <Checkbox.Item
                    label="I want to bring my community along on my dating journey"
                    status={reasons.bringCommunityOnDatingJourney ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, bringCommunityOnDatingJourney: !prev.bringCommunityOnDatingJourney }))}
                    position="leading"
                />

                <Checkbox.Item
                    label="Other"
                    status={reasons.other ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, other: !prev.other }))}
                    position="leading"
                />

                {reasons.other && (
                    <TextInput
                        style={styles.input}
                        value={otherReason}
                        onChangeText={setOtherReason}
                        placeholder="Tell us more..."
                    />
                )}

                <View style={styles.sliderContainer}>
                    <Text>Casual</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={100}
                        value={seriousness}
                        onValueChange={setSeriousness}
                        minimumTrackTintColor={Colors.light.tint}
                        maximumTrackTintColor="#000000"
                    />
                    <Text>Super Serious</Text>
                </View>
            </View>

            {/* Step 2 */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Step 2: Which dating apps do you want to use?</Text>
                
                {datingApps.map((app, index) => (
                    <View key={index} style={styles.appInputContainer}>
                        <SelectList
                            setSelected={(val: string) => {
                                const newApps = [...datingApps];
                                newApps[index].app = val;
                                setDatingApps(newApps);
                            }}
                            data={datingAppOptions}
                            save="key"
                            placeholder="Select dating app"
                            boxStyles={styles.dropdown}
                        />
                        <TextInput
                            style={styles.input}
                            value={app.credentials}
                            onChangeText={(text) => {
                                const newApps = [...datingApps];
                                newApps[index].credentials = text;
                                setDatingApps(newApps);
                            }}
                            placeholder="Paste credentials"
                            secureTextEntry={true}
                            autoComplete="off"
                            textContentType="oneTimeCode"
                        />
                    </View>
                ))}
                
                <Pressable style={styles.button} onPress={addDatingApp}>
                    <Text style={styles.buttonText}>Add Another App</Text>
                </Pressable>
            </View>

            {/* Step 3 */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Step 3: Add More People</Text>
                
                {contacts.map((contact, index) => (
                    <View key={index} style={styles.contactInputContainer}>
                        <View style={styles.contactRowContainer}>
                            <TextInput
                                style={styles.input}
                                value={contact.name}
                                onChangeText={(text) => {
                                    const newContacts = [...contacts];
                                    newContacts[index].name = text;
                                    setContacts(newContacts);
                                }}
                                placeholder="Name"
                            />
                            <TextInput
                                style={styles.input}
                                value={contact.email}
                                onChangeText={(text) => {
                                    const newContacts = [...contacts];
                                    newContacts[index].email = text;
                                    setContacts(newContacts);
                                }}
                                placeholder="Email"
                                keyboardType="email-address"
                            />
                        </View>
                        <SelectList
                            setSelected={(val: string) => {
                                const newContacts = [...contacts];
                                newContacts[index].relationship = val;
                                setContacts(newContacts);
                            }}
                            data={relationshipOptions}
                            save="key"
                            placeholder="How did you meet?"
                            boxStyles={styles.dropdown}
                        />
                    </View>
                ))}
                
                <Pressable style={styles.button} onPress={addContact}>
                    <Text style={styles.buttonText}>Add Another Person</Text>
                </Pressable>
            </View>

            {/* Step 4 */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Step 4: Invite Your People</Text>
                <Text style={styles.description}>
                    Send this link however you prefer. Your people will be asked to download Vested & create a profile that is connected to yours through this link.
                </Text>
                <Pressable style={styles.button} onPress={generateCustomInviteLink}>
                    <Text style={styles.buttonText}>Generate Custom Invite Link</Text>
                </Pressable>
            </View>

            {/* Step 5 */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>What happens now?</Text>
                <Text style={styles.description}>
                    You'll be notified once your people are logged in and ready to review matches for you.
                </Text>
                <Pressable style={styles.button} onPress={goToNotifications}>
                    <Text style={styles.buttonText}>Set notification preferences</Text>
                </Pressable>
            </View>

            <TouchableOpacity 
                style={styles.button} 
                onPress={goToProfile}
            >
                <ThemedText style={styles.buttonText}>
                    View Profile
                </ThemedText>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    section: {
        marginBottom: 32,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 16,
        lineHeight: 24,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
    },
    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    slider: {
        flex: 1,
        marginHorizontal: 16,
    },
    appInputContainer: {
        marginBottom: 16,
    },
    contactInputContainer: {
        marginBottom: 16,
    },
    contactRowContainer: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 12,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 12,
    },
    button: {
        backgroundColor: Colors.light.tint,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
}); 