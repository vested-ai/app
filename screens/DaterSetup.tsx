// React core
import React, { useState } from 'react';

// React Native components
import { Text, TextInput, ScrollView, Pressable, TouchableOpacity } from 'react-native';

// Third-party libraries
import { Checkbox } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import { SelectList } from 'react-native-dropdown-select-list';
import { router } from 'expo-router';

// Local components
import { AppBar } from '@/components/AppBar';
import { Button } from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { ThemedView } from '@/components/ThemedView';

// Local styles and constants
import { commonStyles } from '@/styles/common';
import { Colors } from '@/constants/Colors';

interface DatingApp {
    app: string;
    credentials: string;
}

interface Contact {
    name: string;
    email: string;
    relationship: string;
}

export default function DaterSetup() {
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
        console.log('Generating custom invite link...');
    };

    const goToNotifications = () => {
        router.replace('/(account)/notifications');
    };

    const goToProfile = () => {
        router.replace('/(profile)/daterdashboard');   
    }

    return (
        <ScrollView style={commonStyles.container} contentContainerStyle={commonStyles.contentContainer}>
            <AppBar />

            <ThemedText style={commonStyles.title}>
                Welcome!
            </ThemedText>
            
            {/* Step 1 */}
            <ThemedView style={commonStyles.section}>
                <ThemedText style={commonStyles.sectionTitle}>
                    Step 1: Tell us why you're here
                </ThemedText>

                <ThemedView style={commonStyles.checkboxContainer}>
                    <Pressable 
                        style={[commonStyles.checkboxItem, reasons.newToDating && commonStyles.selectedItem]}
                        onPress={() => setReasons(prev => ({ ...prev, newToDating: !prev.newToDating }))}
                    >
                        <ThemedText style={[commonStyles.checkboxLabel, reasons.newToDating && commonStyles.selectedText]}>
                            I'm new to dating apps and need help
                        </ThemedText>
                    </Pressable>
                    <Pressable 
                        style={[commonStyles.checkboxItem, reasons.currentAppsNotWorking && commonStyles.selectedItem]}
                        onPress={() => setReasons(prev => ({ ...prev, currentAppsNotWorking: !prev.currentAppsNotWorking }))}
                    >
                        <ThemedText style={[commonStyles.checkboxLabel, reasons.currentAppsNotWorking && commonStyles.selectedText]}>
                            The current apps aren't working for me
                        </ThemedText>
                    </Pressable>
                    <Pressable 
                        style={[commonStyles.checkboxItem, reasons.overwhelmed && commonStyles.selectedItem]}
                        onPress={() => setReasons(prev => ({ ...prev, overwhelmed: !prev.overwhelmed }))}
                    >
                        <ThemedText style={[commonStyles.checkboxLabel, reasons.overwhelmed && commonStyles.selectedText]}>
                            I'm overwhelmed by all the choices
                        </ThemedText>
                    </Pressable>
                    <Pressable 
                        style={[commonStyles.checkboxItem, reasons.feelAloneInDatingJourney && commonStyles.selectedItem]}
                        onPress={() => setReasons(prev => ({ ...prev, feelAloneInDatingJourney: !prev.feelAloneInDatingJourney }))}
                    >
                        <ThemedText style={[commonStyles.checkboxLabel, reasons.feelAloneInDatingJourney && commonStyles.selectedText]}>
                            I feel alone in my dating journey
                        </ThemedText>
                    </Pressable>
                    <Pressable 
                        style={[commonStyles.checkboxItem, reasons.secondOpinion && commonStyles.selectedItem]}
                        onPress={() => setReasons(prev => ({ ...prev, secondOpinion: !prev.secondOpinion }))}
                    >
                        <ThemedText style={[commonStyles.checkboxLabel, reasons.secondOpinion && commonStyles.selectedText]}>
                            I want a second opinion
                        </ThemedText>
                    </Pressable>
                    <Pressable 
                        style={[commonStyles.checkboxItem, reasons.screeningHelp && commonStyles.selectedItem]}
                        onPress={() => setReasons(prev => ({ ...prev, screeningHelp: !prev.screeningHelp }))}
                    >
                        <ThemedText style={[commonStyles.checkboxLabel, reasons.screeningHelp && commonStyles.selectedText]}>
                            The people I've met on dating apps are nothing like their profiles. I need help with screening
                        </ThemedText>
                    </Pressable>
                    <Pressable 
                        style={[commonStyles.checkboxItem, reasons.friendsRecommend && commonStyles.selectedItem]}
                        onPress={() => setReasons(prev => ({ ...prev, friendsRecommend: !prev.friendsRecommend }))}
                    >
                        <ThemedText style={[commonStyles.checkboxLabel, reasons.friendsRecommend && commonStyles.selectedText]}>
                            I think my friends might be better at finding a partner than I am
                        </ThemedText>
                    </Pressable>
                    <Pressable 
                        style={[commonStyles.checkboxItem, reasons.otherPeopleKnowMeBetter && commonStyles.selectedItem]}
                        onPress={() => setReasons(prev => ({ ...prev, otherPeopleKnowMeBetter: !prev.otherPeopleKnowMeBetter }))}
                    >
                        <ThemedText style={[commonStyles.checkboxLabel, reasons.otherPeopleKnowMeBetter && commonStyles.selectedText]}>
                            Sometimes other people know me better than I know myself
                        </ThemedText>
                    </Pressable>
                    <Pressable 
                        style={[commonStyles.checkboxItem, reasons.funWithFriends && commonStyles.selectedItem]}
                        onPress={() => setReasons(prev => ({ ...prev, funWithFriends: !prev.funWithFriends }))}
                    >
                        <ThemedText style={[commonStyles.checkboxLabel, reasons.funWithFriends && commonStyles.selectedText]}>
                            I think it would be fun to do this with my friends
                        </ThemedText>
                    </Pressable>
                    <Pressable 
                        style={[commonStyles.checkboxItem, reasons.bringCommunityOnDatingJourney && commonStyles.selectedItem]}
                        onPress={() => setReasons(prev => ({ ...prev, bringCommunityOnDatingJourney: !prev.bringCommunityOnDatingJourney }))}
                    >
                        <ThemedText style={[commonStyles.checkboxLabel, reasons.bringCommunityOnDatingJourney && commonStyles.selectedText]}>
                            I want to bring my community along on my dating journey
                        </ThemedText>
                    </Pressable>
                    <Pressable 
                        style={[commonStyles.checkboxItem, reasons.other && commonStyles.selectedItem]}
                        onPress={() => setReasons(prev => ({ ...prev, other: !prev.other }))}
                    >
                        <ThemedText style={[commonStyles.checkboxLabel, reasons.other && commonStyles.selectedText]}>
                            Other
                        </ThemedText>
                    </Pressable>
                </ThemedView>

                {reasons.other && (
                    <TextInput
                        style={[commonStyles.formInput, commonStyles.shadow]}
                        value={otherReason}
                        onChangeText={setOtherReason}
                        placeholder="Tell us more..."
                    />
                )}
            </ThemedView>

            
            <ThemedView style={commonStyles.sliderContainer}>
                <ThemedText style={commonStyles.sliderText}>
                    Casual
                </ThemedText>
                <Slider
                    style={commonStyles.slider}
                    minimumValue={0}
                    maximumValue={100}
                    value={seriousness}
                    onValueChange={setSeriousness}
                    minimumTrackTintColor={Colors.brandGrayDarker}
                    maximumTrackTintColor={Colors.brandGrayDarker}
                    thumbTintColor={Colors.brandPink}
                />
                <ThemedText style={commonStyles.sliderText}>
                    Super Serious
                </ThemedText>
            </ThemedView>

            {/* Step 2 */}
            <ThemedView style={commonStyles.section}>
                <ThemedText style={commonStyles.sectionTitle}>
                    Step 2: Which dating apps do you want to use?
                </ThemedText>
                <ThemedText style={commonStyles.sectionSubtitle}>
                    We'll help you connect your dating apps to Vested.
                </ThemedText>
                
                {datingApps.map((app, index) => (
                    <ThemedView key={index} style={commonStyles.section}>
                        <SelectList
                            setSelected={(val: string) => {
                                const newApps = [...datingApps];
                                newApps[index].app = val;
                                setDatingApps(newApps);
                            }}
                            data={datingAppOptions}
                            save="key"
                            placeholder="Select dating app"
                            boxStyles={commonStyles.selectListBox}
                            dropdownStyles={commonStyles.selectListDropdown}
                            dropdownTextStyles={commonStyles.selectListDropdownText}
                            inputStyles={commonStyles.selectListInput}
                        />
                        <TextInput
                            style={[commonStyles.formInput, commonStyles.shadow]}
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
                    </ThemedView>
                ))}
                
                <Button onPress={addDatingApp} text="Add Another App" />
            </ThemedView>

            {/* Step 3 */}
            <ThemedView style={commonStyles.section}>
                <ThemedText style={commonStyles.sectionTitle}>
                    Step 3: Add More People
                </ThemedText>
                <ThemedText style={commonStyles.sectionSubtitle}>
                    Add the people you want to help you with your dating journey.
                </ThemedText>
                
                {contacts.map((contact, index) => (
                    <ThemedView key={index} style={commonStyles.section}>
                        <ThemedView style={commonStyles.row}>
                            <ThemedTextInput
                                placeholder="Enter name"
                                value={contact.name}
                                onChangeText={(text) => {
                                    const newContacts = [...contacts];
                                    newContacts[index].name = text;
                                    setContacts(newContacts);
                                }}
                                style={[commonStyles.formInput, { flex: 1 }]}
                            />
                            <ThemedTextInput
                                placeholder="Enter email"
                                value={contact.email}
                                onChangeText={(text) => {
                                    const newContacts = [...contacts];
                                    newContacts[index].email = text;
                                    setContacts(newContacts);
                                }}
                                style={[commonStyles.formInput, { flex: 1 }]}
                                keyboardType="email-address"
                            />
                        </ThemedView>
                        <SelectList
                            setSelected={(val: string) => {
                                const newContacts = [...contacts];
                                newContacts[index].relationship = val;
                                setContacts(newContacts);
                            }}
                            data={relationshipOptions}
                            save="key"
                            placeholder="How did you meet?"
                            boxStyles={commonStyles.selectListBox}
                            dropdownStyles={commonStyles.selectListDropdown}
                            dropdownTextStyles={commonStyles.selectListDropdownText}
                            inputStyles={commonStyles.selectListInput}
                        />
                    </ThemedView>
                ))}
                
                <Pressable style={[commonStyles.button, commonStyles.primaryButton]} onPress={addContact}>
                    <ThemedText style={commonStyles.buttonText}>Add Another Person</ThemedText>
                </Pressable>
            </ThemedView>

            {/* Step 4 */}
            <ThemedView style={commonStyles.section}>
                <ThemedText style={commonStyles.sectionTitle}>
                    Step 4: Invite Your People
                </ThemedText>
                <ThemedText style={commonStyles.sectionSubtitle}>
                    Send this link however you prefer. Your people will be asked to download Vested & create a profile that is connected to yours through this link.
                </ThemedText>
                <Pressable 
                    style={[commonStyles.button, commonStyles.primaryButton]} 
                    onPress={generateCustomInviteLink}
                >
                    <ThemedText style={commonStyles.buttonText}>
                        Generate Custom Invite Link
                    </ThemedText>
                </Pressable>
            </ThemedView>

            {/* Step 5 */}
            <ThemedView style={commonStyles.section}>
                <ThemedText style={commonStyles.sectionTitle}>
                    What happens now?
                </ThemedText>
                <ThemedText style={commonStyles.sectionSubtitle}>
                    You'll be notified once your people are logged in and ready to review matches for you.
                </ThemedText>
                <Pressable 
                    style={[commonStyles.button, commonStyles.primaryButton]} 
                    onPress={goToNotifications}
                >
                    <ThemedText style={commonStyles.buttonText}>
                        Set notification preferences
                    </ThemedText>
                </Pressable>
            </ThemedView>

            <TouchableOpacity 
                style={[commonStyles.button, commonStyles.primaryButton]} 
                onPress={goToProfile}
            >
                <ThemedText style={commonStyles.buttonText}>
                    View Profile
                </ThemedText>
            </TouchableOpacity>
        </ScrollView>
    );
} 