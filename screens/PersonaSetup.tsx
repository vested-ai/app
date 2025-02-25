import { router } from "expo-router";
import { useState, useEffect } from "react";
import { View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Checkbox } from "react-native-paper";

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
        router.replace(persona === 'dater' ? '/(account)/daterprofile' : '/(account)/friendprofile');
    };

    return (
        <View style={styles.container} accessibilityRole="main">
            <Text style={styles.header} accessibilityRole="header">I am joining Vested as a:</Text>

            <View style={styles.buttonContainer} accessibilityRole="radiogroup">
                <Pressable 
                    style={persona === 'dater' ? [styles.button, styles.buttonSelected] : [styles.button]} 
                    onPress={() => setPersona('dater')}
                    accessibilityRole="radio"
                    accessibilityState={{ selected: persona === 'dater' }}
                    accessibilityLabel="Join as a Dater"
                    accessibilityHint="Select to join Vested as someone looking for dates"
                >
                    <Text style={styles.buttonText}>Dater</Text>
                </Pressable>

                <Pressable 
                    style={persona === 'friend' ? [styles.button, styles.buttonSelected] : [styles.button]} 
                    onPress={() => setPersona('friend')}
                    accessibilityRole="radio"
                    accessibilityState={{ selected: persona === 'friend' }}
                    accessibilityLabel="Join as a Friend"
                    accessibilityHint="Select to join Vested as someone helping friends find dates"
                >
                    <Text style={styles.buttonText}>Friend</Text>    
                </Pressable>    
            </View>

            <Text style={styles.text} accessibilityRole="text">
                Choose your primary persona to begin. You can add or change your persona in your Profile settings at any time.
            </Text>

            <View style={styles.checkboxContainer}>
                <Checkbox.Item 
                    label="I accept the Vested Terms & Conditions"
                    status={termsAccepted ? 'checked' : 'unchecked'}
                    onPress={() => setTermsAccepted(!termsAccepted)}
                    position="leading"
                    accessibilityLabel="Accept Terms and Conditions"
                    accessibilityHint="Required. Check to accept the Terms and Conditions"
                    accessibilityRole="checkbox"
                />
                <Checkbox.Item 
                    label="I accept the Vested Privacy Policy"
                    status={privacyPolicyAccepted ? 'checked' : 'unchecked'}
                    onPress={() => setPrivacyPolicyAccepted(!privacyPolicyAccepted)}
                    position="leading"
                    accessibilityLabel="Accept Privacy Policy"
                    accessibilityHint="Required. Check to accept the Privacy Policy"
                    accessibilityRole="checkbox"
                />
            </View>

            <TouchableOpacity 
                style={requiredFieldsComplete ? [styles.button, styles.buttonEnabled] : [styles.button, styles.buttonDisabled]}
                onPress={handlePersonaSetup}
                disabled={!requiredFieldsComplete}
                accessibilityRole="button"
                accessibilityLabel="Continue to profile setup"
                accessibilityHint="Continues to profile setup once terms and privacy policy are accepted"
                accessibilityState={{ disabled: !requiredFieldsComplete }}
            >
                <Text style={requiredFieldsComplete ? styles.buttonText : [styles.buttonText, styles.buttonDisabledText]}>
                    I'm ready to be Vested
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        margin: 20,
    },
    button: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: 'black',
    },
    buttonSelected: {
        backgroundColor: 'cornflowerblue',
    },
    buttonDisabled: {
        borderColor: 'gray',
    },
    buttonEnabled: {
        backgroundColor: 'cornflowerblue',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonDisabledText: {
        color: 'gray',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    section: {
        marginTop: 20,
    },
    checkboxContainer: {
        marginTop: 20,
        marginBottom: 20,
    }, 
});
