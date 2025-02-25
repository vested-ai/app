import { Text, StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import { useRef, useState } from "react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";

export default function CreateAccount() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const firstNameRef = useRef<TextInput>(null);
    const lastNameRef = useRef<TextInput>(null);
    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const handleAccountCreation = () => {
        setError(null);

        if (!firstName || !lastName || !email || !password) {
            setError('Please fill in all fields');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        // Password validation
        if (password.length < 1) {
            setError('Password must be at least 1 characters long');
            return;
        }

        try {
            setIsLoading(true);
            // TODO: call account creatiion API
            // await createAccount({ firstname, lastName, email, password });
            router.replace('/(account)/setup');
        
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to create account');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text>Create an Account</Text>
        
            { error && (<Text style={styles.errorText}>{error}</Text>) }

            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
                autoComplete="given-name"
                autoCorrect={false}
                autoFocus={true}
                inputMode="text"
                accessibilityLabel="First Name"
                accessibilityHint="Enter your first name"
                returnKeyType="next"
                onSubmitEditing={() => {
                    // Focus the next input (Last Name)
                    lastNameRef.current?.focus();
                }}
                ref={firstNameRef}
            />

            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
                autoComplete="family-name"
                autoCorrect={false}
                inputMode="text"
                accessibilityLabel="Last Name"
                accessibilityHint="Enter your last name"
                returnKeyType="next"
                onSubmitEditing={() => {
                    // Focus the next input (Last Name)
                    emailRef.current?.focus();
                }}
                ref={lastNameRef}



            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoComplete="email"
                autoCorrect={false}
                inputMode="email"
                keyboardType="email-address"
                accessibilityLabel="Email"
                accessibilityHint="Enter your email"
                returnKeyType="next"
                onSubmitEditing={() => {
                    // Focus the next input (Last Name)
                    passwordRef.current?.focus();
                }}
                ref={emailRef}

            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                autoComplete="new-password"
                autoCorrect={false}    
                inputMode="text"
                secureTextEntry={true}
                accessibilityLabel="Password"
                accessibilityHint="Enter your password"
                returnKeyType="done"
                onSubmitEditing={() => handleAccountCreation()}
                ref={passwordRef}
            />

            <TouchableOpacity 
                style={[styles.button, styles.signupButton]}
                onPress={handleAccountCreation}
            >
                <ThemedText style={styles.buttonText}>
                    { isLoading ? 'Creating Account...' : 'Sign Up' }
                </ThemedText>
            </TouchableOpacity>

            <LegalDisclaimer />

        </View>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 15,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 20,
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signupButton: {
        backgroundColor: '#DB4437',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    },
})