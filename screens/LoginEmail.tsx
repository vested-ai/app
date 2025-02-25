import { Text, StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import { useRef, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { Link, router } from "expo-router";


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

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        try {
            setIsLoading(true);
            // TODO: Implement login API with rate limiting
            // await loginUser({ email, password });
            // TODO: Send user to either a dater profile or a friend profile
            router.replace('/(account)/daterprofile');
        
        } catch (_err) {
            setError('Invalid email or password');  // Don't expose specific errors
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text>Sign In With Email</Text>
        
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
                style={[styles.button, styles.signupButton]}
                onPress={handleEmailLogin}
            >
                <ThemedText style={styles.buttonText}>
                    { isLoading ? 'Working...' : 'Sign In' }
                </ThemedText>
            </TouchableOpacity>


            <Link style={styles.linkText} href="/(account)/create">
                <ThemedText style={styles.linkText}>
                    Need an account?
                </ThemedText>
            </Link>

            <Link style={styles.linkText} href="/(account)/reset-password">
                <ThemedText style={styles.linkText}>
                    Forgot Password?
                </ThemedText>
            </Link>
        </View>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    loginText: {
        fontSize: 14,
        color: '#666666',
    },
})