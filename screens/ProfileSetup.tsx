import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import { SelectList } from 'react-native-dropdown-select-list';
import Colors from '../constants/Colors';

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
        findPartner: false,
        makeConnections: false,
        justCurious: false,
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

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Profile Setup</Text>

            {/* Step 1 */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Step 1: Tell us why you're here</Text>
                
                <Checkbox.Item
                    label="Find a long-term partner"
                    status={reasons.findPartner ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, findPartner: !prev.findPartner }))}
                />
                <Checkbox.Item
                    label="Make meaningful connections"
                    status={reasons.makeConnections ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, makeConnections: !prev.makeConnections }))}
                />
                <Checkbox.Item
                    label="Just curious"
                    status={reasons.justCurious ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, justCurious: !prev.justCurious }))}
                />
                <Checkbox.Item
                    label="Other"
                    status={reasons.other ? 'checked' : 'unchecked'}
                    onPress={() => setReasons(prev => ({ ...prev, other: !prev.other }))}
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