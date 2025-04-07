// React core
import React, { useState, useEffect } from 'react';

// React Native components
import { StyleSheet, Pressable, TouchableOpacity, ScrollView, View } from "react-native";

// Third-party libraries
import { router } from "expo-router";
import { Checkbox } from "react-native-paper";

// Local components
import { AppBar } from '@/components/AppBar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Local styles and constants
import { Colors } from "@/constants/Colors";
import { commonStyles } from "@/styles/common";

export default function PersonaSetup() {

    const [persona, setPersona] = useState<'dater' | 'friend'>('dater');    
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
    const [requiredFieldsComplete, setRequiredFieldsComplete] = useState(false);

    const checkRequiredFieldsComplete = () => {
        if (!termsAccepted || !privacyPolicyAccepted) {
            setRequiredFieldsComplete(false);
        } else {
            setRequiredFieldsComplete(true);
        }
    }

    useEffect(() => {
        checkRequiredFieldsComplete();
    }, [termsAccepted, privacyPolicyAccepted]);
    
    const handlePersonaSetup = () => {
        if (!requiredFieldsComplete) {
            return;
        }
        router.replace(persona === 'dater' ? '/(profile)/daterdashboard' : '/(profile)/frienddashboard');
    };

    return (
        <ScrollView style={[commonStyles.container, commonStyles.contentContainer]}>
            <AppBar />

            <ThemedText style={commonStyles.title} accessibilityRole="header">
                Choose Your Persona
            </ThemedText>
            <ThemedView style={commonStyles.section}>
                <ThemedText style={commonStyles.sectionSubtitle} accessibilityRole="text">
                    Choose your primary persona to begin. You can change your persona in your Profile settings at any time.
                </ThemedText>
                <ThemedText style={commonStyles.sectionTitle} accessibilityRole="text">
                    I am joining Vested as a:
                </ThemedText>

                <ThemedView style={styles.buttonContainer} accessibilityRole="radiogroup">
                    <Pressable 
                        style={persona === 'dater' ? [styles.personaButton, styles.personaButtonSelected] : styles.personaButton} 
                        onPress={() => setPersona('dater')}
                        accessibilityRole="radio"
                        accessibilityState={{ selected: persona === 'dater' }}
                        accessibilityLabel="Join as a Dater"
                        accessibilityHint="Select to join Vested as someone looking for dates"
                    >
                        <ThemedText style={persona === 'dater' ? [styles.personaButtonText, styles.personaButtonTextSelected] : styles.personaButtonText}>
                            Dater
                        </ThemedText>
                        <ThemedText style={persona === 'dater' ? styles.personaSelectedText : styles.personaText}>
                            Looking for meaningful connections
                        </ThemedText>
                    </Pressable>

                    <Pressable 
                        style={persona === 'friend' ? [styles.personaButton, styles.personaButtonSelected] : styles.personaButton} 
                        onPress={() => setPersona('friend')}
                        accessibilityRole="radio"
                        accessibilityState={{ selected: persona === 'friend' }}
                        accessibilityLabel="Join as a Friend"
                        accessibilityHint="Select to join Vested as someone helping friends find dates"
                    >
                        <ThemedText style={persona === 'friend' ? [styles.personaButtonText, styles.personaButtonTextSelected] : styles.personaButtonText}>
                            Friend
                        </ThemedText>
                        <ThemedText style={persona === 'friend' ? styles.personaSelectedText : styles.personaText}>
                            Helping friends find love
                        </ThemedText>
                    </Pressable>    
                </ThemedView>

            </ThemedView>
        
            <ThemedView style={commonStyles.checkboxContainer}>
                <Checkbox.Item 
                    label="I accept the Vested Terms & Conditions"
                    status={termsAccepted ? 'checked' : 'unchecked'}
                    onPress={() => setTermsAccepted(!termsAccepted)}
                    position="leading"
                    accessibilityLabel="Accept Vested Terms & Conditions"
                    color={Colors.brandPink}
                    uncheckedColor={Colors.brandGrayDarker}
                    style={commonStyles.checkboxItem}
                />
                <Checkbox.Item 
                    label="I accept the Vested Privacy Policy"
                    status={privacyPolicyAccepted ? 'checked' : 'unchecked'}
                    onPress={() => setPrivacyPolicyAccepted(!privacyPolicyAccepted)}
                    position="leading"
                    accessibilityLabel="Accept Vested Privacy Policy"
                    color={Colors.brandPink}
                    uncheckedColor={Colors.brandGrayDarker}
                    style={commonStyles.checkboxItem}
                />
            </ThemedView>

            <TouchableOpacity 
                style={requiredFieldsComplete ? [commonStyles.button, commonStyles.primaryButton] : [commonStyles.button, styles.buttonDisabled]}
                onPress={handlePersonaSetup}
                disabled={!requiredFieldsComplete}
                accessibilityRole="button"
                accessibilityLabel="Continue to profile setup"
                accessibilityHint="Continues to profile setup once terms and privacy policy are accepted"
                accessibilityState={{ disabled: !requiredFieldsComplete }}
            >
                <ThemedText style={requiredFieldsComplete ? commonStyles.buttonText : styles.buttonTextDisabled}>
                    I'm ready to be Vested
                </ThemedText>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        gap: 16,
        marginVertical: 24,
    },
    personaButton: {
        padding: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.brandGray,
        backgroundColor: Colors.brandWhite,
    },
    personaButtonSelected: {
        borderColor: Colors.brandPink,
        backgroundColor: Colors.brandGrayLightest,
    },
    personaButtonText: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.brandGrayDark,
        marginBottom: 8,
    },
    personaButtonTextSelected: {
        color: Colors.brandPink,
    },
    personaSelectedText: {
        color: Colors.brandGrayDarker,
    },
    personaText: {
        color: Colors.brandGrayDark,
    },
    buttonDisabled: {
        backgroundColor: Colors.brandGrayLight,
    },
    buttonTextDisabled: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.brandGray,
    },
});
