import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const emailRef = useRef<TextInput>(null);

    const handleForgotPassword = () => {
        setError(null);

        if (!email) {
            setError("Email is required");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        try {
            setIsLoading(true);
            router.replace('/(login)/resetpassword');
        } catch (err) {
            setError("Failed to reset password");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Email to Reset Password</Text>

            { error && (<Text style={styles.errorText}>{error}</Text>) }

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
                    emailRef.current?.focus();
                }}
                ref={emailRef}
            />

            <TouchableOpacity
                style={[styles.button, styles.signupButton]}
                onPress={handleForgotPassword}
            >
                <ThemedText style={styles.buttonText}>
                    Continue
                </ThemedText>   
            </TouchableOpacity>
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
        fontSize: 16,
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 8,
        marginTop: 15,
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
    linkText: {
        marginTop: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});