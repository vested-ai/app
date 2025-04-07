// React core
import { useRef, useState } from "react";

// React Native components
import { TouchableOpacity, TextInput, ScrollView } from "react-native";

// Third-party libraries
import { router } from "expo-router";

// Local components
import { AppBar } from "@/components/AppBar";
import { ThemedText } from "@/components/ThemedText";

// Local styles
import { commonStyles } from "@/styles/common";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const emailRef = useRef<TextInput>(null);

    const handleForgotPassword = () => {
        setError(null);

        if (!email) {
            setError('Email is required');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        try {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                router.replace('/(login)/resetpassword');
            }, 1000);
        } catch (err) {
            setError('Failed to reset password');
            setIsLoading(false);
        }
    }

    return (
        <ScrollView style={commonStyles.container}>
            <AppBar />

            <ThemedText style={commonStyles.title}>Forgot Password?</ThemedText>
            <ThemedText style={commonStyles.formDescription}>Enter your email to reset your password</ThemedText>

            { error && (<ThemedText style={commonStyles.errorText}>{error}</ThemedText>) }

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
                    emailRef.current?.focus();
                }}
                ref={emailRef}
            />

            <TouchableOpacity
                style={[commonStyles.button, commonStyles.primaryButton]}
                onPress={handleForgotPassword}
            >
                <ThemedText style={commonStyles.buttonText}>
                    { isLoading ? 'Sending...' : 'Continue' }
                </ThemedText>   
            </TouchableOpacity>
        </ScrollView>
    );
}