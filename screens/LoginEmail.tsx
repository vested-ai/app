// React core
import { useRef, useState } from "react";

// React Native components
import { TouchableOpacity, TextInput, ScrollView } from "react-native";

// Third-party libraries
import { Link, router } from "expo-router";

// Local components
import { AppBar } from "@/components/AppBar";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

// Local styles
import { commonStyles } from "@/styles/common";

export default function LoginEmail() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const handleEmailLogin = () => {
        setError(null);

        if (!email || !password) {
            setError('Email and password are required');
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
            router.replace('/(profile)/daterdashboard');
        
        } catch (_err) {
            setError('Invalid email or password');  // Don't expose specific errors
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <ScrollView style={commonStyles.container}>
            <AppBar />

            <ThemedView style={commonStyles.section}>

                <ThemedText style={commonStyles.title}>
                    Login With Email
                </ThemedText>
            
                { error && (
                    <ThemedText style={commonStyles.errorText}>
                        {error}
                    </ThemedText>
                )}

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
                    autoComplete="current-password"
                    autoCorrect={false}    
                    inputMode="text"
                    secureTextEntry={true}
                    accessibilityLabel="Password"
                    accessibilityHint="Enter your password"
                    returnKeyType="done"
                    onSubmitEditing={handleEmailLogin}
                    ref={passwordRef}
                />

                <TouchableOpacity 
                    style={[commonStyles.button, commonStyles.primaryButton]}
                    onPress={handleEmailLogin}
                >
                    <ThemedText style={commonStyles.buttonText}>
                        { isLoading ? 'Working...' : 'Login' }
                    </ThemedText>
                </TouchableOpacity>

                <Link style={commonStyles.linkContainer} href="/(account)/create"> 
                    <ThemedText style={commonStyles.linkText}>
                        Need an account?
                    </ThemedText>
                </Link>
            </ThemedView>
        </ScrollView>
    );
}