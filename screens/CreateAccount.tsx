// React core
import { useRef, useState } from "react";

// React Native components
import { TouchableOpacity, TextInput, ScrollView } from "react-native";

// Third-party libraries
import { router } from "expo-router";

// Local components
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import { ThemedText } from "@/components/ThemedText";
import { AppBar } from "@/components/AppBar";
import { ThemedView } from "@/components/ThemedView";

// Local styles
import { commonStyles } from "@/styles/common";

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
        <ScrollView style={[commonStyles.container, commonStyles.contentContainer]}>
            <AppBar />

            <ThemedView style={commonStyles.section}>
                <ThemedText style={commonStyles.title}>
                    Create an Account
                </ThemedText>
            
                { error && (<ThemedText style={commonStyles.errorText}>{error}</ThemedText>) }

                <TextInput
                    style={[commonStyles.formInput, commonStyles.shadow]}
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
                        lastNameRef.current?.focus();
                    }}
                    ref={firstNameRef}
                />

                <TextInput
                    style={[commonStyles.formInput, commonStyles.shadow]}
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
                        emailRef.current?.focus();
                    }}
                    ref={lastNameRef}
                />

                <TextInput
                    style={[commonStyles.formInput, commonStyles.shadow]}
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
                        passwordRef.current?.focus();
                    }}
                    ref={emailRef}
                />

                <TextInput
                    style={[commonStyles.formInput, commonStyles.shadow]}
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
                    style={[commonStyles.button, commonStyles.primaryButton]}
                    onPress={handleAccountCreation}
                >
                    <ThemedText style={commonStyles.buttonText}>
                        { isLoading ? 'Creating Account...' : 'Sign Up' }
                    </ThemedText>
                </TouchableOpacity>
            </ThemedView>

            <LegalDisclaimer />
        </ScrollView>    
    );
}