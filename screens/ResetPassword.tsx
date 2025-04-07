// React core
import { useRef, useState } from "react";

// React Native components
import { TouchableOpacity, TextInput, ScrollView } from "react-native";

// Third-party libraries
import { router } from "expo-router";

// Local components
import { AppBar } from "@/components/AppBar";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

// Local styles
import { commonStyles } from "@/styles/common";

export default function ResetPassword() {
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const codeRef = useRef<TextInput>(null);
    const newPasswordRef = useRef<TextInput>(null);
    const confirmPasswordRef = useRef<TextInput>(null);


    const handleCodeChange = (text: string) => {
        setCode(text);
        setError(null);
    };

    const handleNewPasswordChange = (text: string) => {
        setNewPassword(text);
        setError(null);
    };

    const handleConfirmPasswordChange = (text: string) => {
        setConfirmPassword(text);
        setError(null);
    };

    const handleResetPassword = () => {
        setError(null);

        if (!code || !newPassword || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (code.length !== 6) {
            setError('Code must be 6 digits');
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
            // Simulate API call
            setTimeout(() => {
                setIsLoading(false);
                // Navigate to login page
                router.replace('/(login)/login');
            }, 1000);
        } catch (err) {
            setError('Failed to reset password');
            setIsLoading(false);
        }
    }

    return (
        <ScrollView style={commonStyles.container}>
            <AppBar />

            <ThemedView style={commonStyles.section}>
                <ThemedText style={commonStyles.title}>Reset Password</ThemedText>

                { error && (
                    <ThemedText style={commonStyles.errorText}>
                        {error}
                    </ThemedText>
                )}

                <TextInput  
                    style={[commonStyles.formInput, commonStyles.shadow]}
                    placeholder="Code"
                    keyboardType="number-pad"
                    maxLength={6}
                    autoCorrect={false}
                    inputMode="numeric"
                    returnKeyType="next"
                    value={code}
                    onChangeText={handleCodeChange}
                    onSubmitEditing={() => {
                        newPasswordRef.current?.focus();
                    }}
                    ref={codeRef}
                />
                <TextInput
                    style={[commonStyles.formInput, commonStyles.shadow]}
                    placeholder="New Password"
                    value={newPassword}
                    onChangeText={handleNewPasswordChange}
                    autoComplete="new-password"
                    autoCorrect={false}
                    inputMode="text"
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
                    style={[commonStyles.formInput, commonStyles.shadow]}
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChangeText={handleConfirmPasswordChange}
                    autoComplete="new-password"
                    autoCorrect={false}
                    inputMode="text"
                    secureTextEntry={true}
                    accessibilityLabel="Confirm New Password"
                    accessibilityHint="Confirm your new password"
                    returnKeyType="done"
                    onSubmitEditing={handleResetPassword}
                    ref={confirmPasswordRef}
                />

                <TouchableOpacity
                    style={[commonStyles.button, commonStyles.primaryButton]}
                    onPress={handleResetPassword}
                >
                    <ThemedText style={commonStyles.buttonText}>
                        { isLoading ? 'Resetting...' : 'Reset Password' }
                    </ThemedText>
                </TouchableOpacity>
            </ThemedView>
        </ScrollView>
    );
}