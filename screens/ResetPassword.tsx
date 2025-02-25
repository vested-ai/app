import { Text, StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import { useRef, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";

export default function ResetPassword() {
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const codeRef = useRef<TextInput>(null);
    const newPasswordRef = useRef<TextInput>(null);
    const confirmPasswordRef = useRef<TextInput>(null);

    const handleResetPassword = () => {
        setError(null);

        if (!code || !newPassword || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (code.length !== 4) {
            setError('Code must be 4 digits');
            return;
        }

        if (newPassword.length < 1) {
            setError('Password must be at least 1 character');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            setIsLoading(true);
            router.replace('/(login)/login');
        } catch (err) {
            setError('Failed to reset password');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset your password</Text>

            {error && (<Text style={styles.errorText}>{error}</Text>)}

            <TextInput
                style={styles.input}
                placeholder="Enter 4-digit code"
                value={code}
                onChangeText={setCode}
                autoComplete="one-time-code"
                autoCorrect={false}
                inputMode="numeric"
                maxLength={4}
                keyboardType="number-pad"
                accessibilityLabel="Reset Code"
                accessibilityHint="Enter the 4-digit code sent to your email"
                returnKeyType="next"
                onSubmitEditing={() => {
                    newPasswordRef.current?.focus();
                }}
                ref={codeRef}
            />

            <TextInput
                style={styles.input}
                placeholder="New Password"
                value={newPassword}
                onChangeText={setNewPassword}
                autoComplete="new-password"
                autoCorrect={false}
                secureTextEntry={true}
                accessibilityLabel="New Password"
                accessibilityHint="Enter your new password"
                returnKeyType="next"
                onSubmitEditing={() => {
                    confirmPasswordRef.current?.focus();
                }}
                ref={newPasswordRef}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                autoComplete="new-password"
                autoCorrect={false}
                secureTextEntry={true}
                accessibilityLabel="Confirm Password"
                accessibilityHint="Confirm your new password"
                returnKeyType="done"
                onSubmitEditing={handleResetPassword}
                ref={confirmPasswordRef}
            />

            <TouchableOpacity
                style={[styles.button, styles.resetButton]}
                onPress={handleResetPassword}
            >
                <ThemedText style={styles.buttonText}>
                    {isLoading ? 'Resetting...' : 'Reset Password'}
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
    resetButton: {
        backgroundColor: '#DB4437',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});