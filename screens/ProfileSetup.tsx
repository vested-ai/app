import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import { SelectList } from 'react-native-dropdown-select-list';
import { Colors } from '../constants/Colors';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { commonStyles } from '@/styles/common';

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
        <ScrollView style={commonStyles.container} contentContainerStyle={commonStyles.contentContainer}>
            <ThemedText style={commonStyles.dashboardTitle}>Welcome to Vested!</ThemedText>

            {/* Step 1 */}
            <View style={commonStyles.formSection}>
                <ThemedText style={commonStyles.formTitle}>Step 1: Tell us why you're here</ThemedText>
                
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
                        style={commonStyles.formInput}
                        value={otherReason}
                        onChangeText={setOtherReason}
                        placeholder="Tell us more..."
                    />
                )}

                <View style={commonStyles.formSliderContainer}>
                    <Text>Casual</Text>
                    <Slider
                        style={commonStyles.formSlider}
                        minimumValue={0}
                        maximumValue={100}
                        value={seriousness}
                        onValueChange={setSeriousness}
                        minimumTrackTintColor={Colors.brandPink}
                        maximumTrackTintColor={Colors.brandGrayDarker}
                    />
                    <Text>Super Serious</Text>
                </View>
            </View>

            {/* Step 2 */}
            <View style={commonStyles.formSection}>
                <ThemedText style={commonStyles.formTitle}>Step 2: Which dating apps do you want to use?</ThemedText>
                
                {datingApps.map((app, index) => (
                    <View key={index} style={commonStyles.formSection}>
                        <SelectList
                            setSelected={(val: string) => {
                                const newApps = [...datingApps];
                                newApps[index].app = val;
                                setDatingApps(newApps);
                            }}
                            data={datingAppOptions}
                            save="key"
                            placeholder="Select dating app"
                            boxStyles={commonStyles.formDropdown}
                        />
                        <TextInput
                            style={commonStyles.formInput}
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
                
                <Pressable style={commonStyles.formButton} onPress={addDatingApp}>
                    <ThemedText style={commonStyles.formButtonText}>Add Another App</ThemedText>
                </Pressable>
            </View>

            {/* Step 3 */}
            <View style={commonStyles.formSection}>
                <ThemedText style={commonStyles.formTitle}>Step 3: Add More People</ThemedText>
                
                {contacts.map((contact, index) => (
                    <View key={index} style={commonStyles.formSection}>
                        <View style={commonStyles.formRow}>
                            <TextInput
                                style={[commonStyles.formInput, { flex: 1 }]}
                                value={contact.name}
                                onChangeText={(text) => {
                                    const newContacts = [...contacts];
                                    newContacts[index].name = text;
                                    setContacts(newContacts);
                                }}
                                placeholder="Name"
                            />
                            <TextInput
                                style={[commonStyles.formInput, { flex: 1 }]}
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
                            boxStyles={commonStyles.formDropdown}
                        />
                    </View>
                ))}
                
                <Pressable style={commonStyles.formButton} onPress={addContact}>
                    <ThemedText style={commonStyles.formButtonText}>Add Another Person</ThemedText>
                </Pressable>
            </View>

            {/* Step 4 */}
            <View style={commonStyles.formSection}>
                <ThemedText style={commonStyles.formTitle}>Step 4: Invite Your People</ThemedText>
                <Text style={commonStyles.formDescription}>
                    Send this link however you prefer. Your people will be asked to download Vested & create a profile that is connected to yours through this link.
                </Text>
                <Pressable style={commonStyles.formButton} onPress={generateCustomInviteLink}>
                    <ThemedText style={commonStyles.formButtonText}>Generate Custom Invite Link</ThemedText>
                </Pressable>
            </View>

            {/* Step 5 */}
            <View style={commonStyles.formSection}>
                <ThemedText style={commonStyles.formTitle}>What happens now?</ThemedText>
                <Text style={commonStyles.formDescription}>
                    You'll be notified once your people are logged in and ready to review matches for you.
                </Text>
                <Pressable style={commonStyles.formButton} onPress={goToNotifications}>
                    <ThemedText style={commonStyles.formButtonText}>Set notification preferences</ThemedText>
                </Pressable>
            </View>

            <TouchableOpacity 
                style={commonStyles.formButton} 
                onPress={goToProfile}
            >
                <ThemedText style={commonStyles.formButtonText}>
                    View Profile
                </ThemedText>
            </TouchableOpacity>
        </ScrollView>
    );
} 